import './style.css';
import { QUESTIONS, PHASE_LABELS } from './questions';
import type { Phase, ReviewState } from './types';
import { mockDecisionStore } from './firebase';

const app = document.querySelector<HTMLDivElement>('#app')!;
if (!app) throw new Error('Missing app root');

const state: ReviewState = {
  phase: 'phase0',
  currentIndex: 0,
  answers: new Map(),
  started: false,
};

const PHASE_ORDER: Phase[] = ['phase0', 'phase1', 'phase2', 'phase3', 'report'];

function getPhaseQuestions(phase: Phase) {
  return QUESTIONS.filter((q) => q.phase === phase);
}

function getTotalAnswered(): number {
  let count = 0;
  for (const q of QUESTIONS) {
    if (state.answers.get(q.id)?.trim()) count++;
  }
  return count;
}

function renderIntro(): void {
  app.innerHTML = `
    <section class="shell">
      <p class="eyebrow">CODEX MANAGEMENT BOOK · DRAFT TOOL</p>
      <h1>管理決策的 System 1／System 2 偏誤檢核</h1>
      <p class="lede">先把重大決策縮小成可觀察的試點，再檢查直覺、證據、替代方案與風險。</p>
      <div class="intro-info">
        <div class="info-card">
          <h3>流程</h3>
          <ol>
            <li><strong>Phase 0</strong> — 決策問題界定（4 題）</li>
            <li><strong>Phase 1</strong> — Divergent：直覺與假設展開（9 題）</li>
            <li><strong>Phase 2</strong> — Convergent：證據與偏誤檢核（22 題）</li>
            <li><strong>Phase 3</strong> — Pilot Design：試點設計（8 題）</li>
            <li><strong>Phase 4</strong> — 產出結構化決策審查報告</li>
          </ol>
        </div>
        <div class="info-card">
          <h3>規則</h3>
          <ul>
            <li>一次只回答一個問題</li>
            <li>Divergent 階段允許自由聯想</li>
            <li>Convergent 階段逐一檢查偏誤</li>
            <li>資料不足標記 <code>insufficient evidence</code></li>
            <li>最後產出結構化報告</li>
          </ul>
        </div>
      </div>
      <label for="decision">你正在考慮的決策（可先簡述，後續會逐步釐清）</label>
      <textarea id="decision" placeholder="例如：是否先在一個小區域試行新的管理流程？"></textarea>
      <div class="actions">
        <button id="start">開始逐步審查</button>
        <span id="status">狀態：draft · 共 ${QUESTIONS.length} 題</span>
      </div>
      <p class="notice">目前使用 mock data；尚未連接 Firebase。所有 claim 引用 status 為 draft。</p>
    </section>`;

  document.querySelector<HTMLButtonElement>('#start')?.addEventListener('click', () => {
    const input = document.querySelector<HTMLTextAreaElement>('#decision');
    const value = input?.value.trim() ?? '';
    if (!value) {
      const out = document.querySelector<HTMLDivElement>('#status');
      if (out) out.textContent = '請先描述決策問題';
      return;
    }
    state.answers.set('intro', value);
    state.started = true;
    state.phase = 'phase0';
    state.currentIndex = 0;
    renderQuestion();
  });
}

function renderQuestion(): void {
  const phaseQuestions = getPhaseQuestions(state.phase);
  if (state.currentIndex >= phaseQuestions.length) {
    advancePhase();
    return;
  }

  const q = phaseQuestions[state.currentIndex];
  const totalInPhase = phaseQuestions.length;
  const progressTotal = getTotalAnswered();
  const progressPct = Math.round((progressTotal / QUESTIONS.length) * 100);

  const inputHtml = renderInput(q.id, q.inputType, q.options, q.placeholder);
  const claimsHtml = q.claims
    ? `<div class="claims">證據基礎：${q.claims.map((c) => `<span class="claim-tag">${c}</span>`).join('')}</div>`
    : '';
  const prevBtn = state.currentIndex > 0 || PHASE_ORDER.indexOf(state.phase) > 0
    ? '<button class="btn-secondary" id="prev">上一題</button>'
    : '';

  app.innerHTML = `
    <section class="shell">
      <div class="progress-bar">
        <div class="progress-fill" style="width:${progressPct}%"></div>
      </div>
      <p class="eyebrow">${PHASE_LABELS[state.phase]} · 第 ${state.currentIndex + 1}/${totalInPhase} 題</p>
      <div class="question-card">
        <p class="question-section">${q.section}</p>
        <h2 class="question-text">${q.text}</h2>
        <p class="question-purpose">目的：${q.purpose}</p>
        ${inputHtml}
        ${claimsHtml}
      </div>
      <div class="actions">
        ${prevBtn}
        <button id="next">${state.currentIndex === totalInPhase - 1 && state.phase === 'phase3' ? '產出報告' : '下一題'}</button>
        <button class="btn-tertiary" id="skip">標記 insufficient evidence 並跳過</button>
      </div>
      <p class="status-line">進度：${progressTotal}/${QUESTIONS.length} 題已回答（${progressPct}%）</p>
      <p class="notice">目前使用 mock data；尚未連接 Firebase。</p>
    </section>`;

  document.querySelector<HTMLButtonElement>('#next')?.addEventListener('click', () => {
    const value = getInputValue(q.id, q.inputType);
    if (!value?.trim()) {
      const status = document.querySelector<HTMLParagraphElement>('.status-line');
      if (status) status.textContent = '請回答此題，或點擊「跳過」標記 insufficient evidence';
      return;
    }
    state.answers.set(q.id, value);
    nextQuestion();
  });

  document.querySelector<HTMLButtonElement>('#skip')?.addEventListener('click', () => {
    state.answers.set(q.id, 'insufficient evidence');
    nextQuestion();
  });

  document.querySelector<HTMLButtonElement>('#prev')?.addEventListener('click', () => {
    prevQuestion();
  });
}

function renderInput(
  id: string,
  type: string,
  options?: string[],
  placeholder?: string,
): string {
  const existing = state.answers.get(id) ?? '';
  switch (type) {
    case 'text':
      return `<input type="text" id="input-${id}" class="text-input" value="${escapeHtml(existing)}" placeholder="${escapeHtml(placeholder ?? '')}" />`;
    case 'textarea':
      return `<textarea id="input-${id}" class="textarea-input" placeholder="${escapeHtml(placeholder ?? '')}">${escapeHtml(existing)}</textarea>`;
    case 'select':
      if (!options) return '';
      const opts = options
        .map((o) => `<option value="${escapeHtml(o)}" ${existing === o ? 'selected' : ''}>${escapeHtml(o)}</option>`)
        .join('');
      return `<select id="input-${id}" class="select-input"><option value="">請選擇…</option>${opts}</select>`;
    case 'score':
      return renderScoreInput(id, existing);
    default:
      return '';
  }
}

function renderScoreInput(id: string, existing: string): string {
  let buttons = '';
  for (let i = 1; i <= 10; i++) {
    const selected = existing === String(i) ? 'selected' : '';
    buttons += `<button class="score-btn ${selected}" data-score="${i}">${i}</button>`;
  }
  return `<div class="score-group" id="input-${id}">${buttons}</div>`;
}

function getInputValue(id: string, type: string): string | undefined {
  const el = document.querySelector<HTMLElement>(`#input-${id}`);
  if (!el) return undefined;
  if (type === 'score') {
    return el.dataset.selectedScore;
  }
  if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement) {
    return el.value;
  }
  return undefined;
}

function nextQuestion(): void {
  const phaseQuestions = getPhaseQuestions(state.phase);
  if (state.currentIndex < phaseQuestions.length - 1) {
    state.currentIndex++;
  } else {
    advancePhase();
    return;
  }
  renderQuestion();
}

function prevQuestion(): void {
  if (state.currentIndex > 0) {
    state.currentIndex--;
  } else {
    const phaseIdx = PHASE_ORDER.indexOf(state.phase);
    if (phaseIdx > 0) {
      state.phase = PHASE_ORDER[phaseIdx - 1];
      state.currentIndex = getPhaseQuestions(state.phase).length - 1;
    }
  }
  renderQuestion();
}

function advancePhase(): void {
  const phaseIdx = PHASE_ORDER.indexOf(state.phase);
  if (phaseIdx < PHASE_ORDER.length - 1) {
    state.phase = PHASE_ORDER[phaseIdx + 1];
    state.currentIndex = 0;
    if (state.phase === 'report') {
      renderReport();
    } else {
      renderQuestion();
    }
  }
}

function renderReport(): void {
  const report = generateReport();
  const reportHtml = escapeHtml(report);
  app.innerHTML = `
    <section class="shell">
      <p class="eyebrow">${PHASE_LABELS.report}</p>
      <h1>結構化決策審查報告</h1>
      <div class="report-card">
        <pre class="report-content">${reportHtml}</pre>
      </div>
      <div class="actions">
        <button id="copy">複製報告</button>
        <button id="save">儲存到 mock store</button>
        <button class="btn-secondary" id="restart">重新開始</button>
      </div>
      <p class="status-line" id="save-status"></p>
      <p class="notice">目前使用 mock data；尚未連接 Firebase。報告 status 為 draft，需人工確認。</p>
    </section>`;

  document.querySelector<HTMLButtonElement>('#copy')?.addEventListener('click', () => {
    navigator.clipboard.writeText(report).then(() => {
      const s = document.querySelector<HTMLParagraphElement>('#save-status');
      if (s) s.textContent = '報告已複製到剪貼簿';
    });
  });

  document.querySelector<HTMLButtonElement>('#save')?.addEventListener('click', async () => {
    const decision = state.answers.get('0.1') ?? state.answers.get('intro') ?? 'unknown';
    await mockDecisionStore.save({ decision, status: 'draft' });
    const s = document.querySelector<HTMLParagraphElement>('#save-status');
    if (s) s.textContent = '已儲存到 mock store（console.info）';
  });

  document.querySelector<HTMLButtonElement>('#restart')?.addEventListener('click', () => {
    state.phase = 'phase0';
    state.currentIndex = 0;
    state.answers.clear();
    state.started = false;
    renderIntro();
  });
}

function generateReport(): string {
  const get = (id: string) => state.answers.get(id) ?? 'insufficient evidence';
  const now = new Date().toISOString().slice(0, 10);

  return `# 結構化決策審查報告

- status: draft
- date: ${now}
- reviewer: (待填)
- decision_owner: (待填)

## 1. 決策問題

- decision: ${get('0.1')}
- deadline: ${get('0.2')}
- scope: ${get('0.3')}
- reversibility: ${get('0.4')}

## 2. 證據與假設

- facts: ${get('2.1')}
- unknowns: ${get('2.2')}
- source_diversity: ${get('2.3')}
- evidence_strength: ${get('2.4')}
- assumptions: ${get('1.5')}

## 3. System 1

- intuitive_judgment: ${get('1.1')}
- story_behind_intuition: ${get('1.2')}
- confidence_score: ${get('1.3')}/10
- emotional_signal: ${get('1.4')}

## 4. System 2

- base_rate: ${get('2.5')}
- why_different: ${get('2.6')}
- planning_quality: ${get('2.7')}
- evidence_vs_base_rate: ${get('2.8')}
- alternatives: ${get('2.18')}
- do_nothing_cost: ${get('2.19')}
- phased_approach: ${get('2.20')}
- premortem_failures: ${get('2.21')}
- premortem_preventable: ${get('2.22')}

## 5. Bias review

- anchoring: ${get('2.9')}
- availability: ${get('2.10')}
- framing: ${get('2.11')}
- overconfidence: ${get('2.12')}
- confirmation_bias: ${get('2.13')}
- hindsight_bias: ${get('2.14')}
- loss_aversion: ${get('2.15')}
- sunk_cost: ${get('2.16')}
- halo_effect: ${get('2.17')}

## 6. Pilot design

- min_testable_version: ${get('3.1')}
- outcome_metrics: ${get('3.2')}
- process_metrics: ${get('3.3')}
- guardrail_metrics: ${get('3.4')}
- go_threshold: ${get('3.5')}
- revise_threshold: ${get('3.6')}
- stop_threshold: ${get('3.7')}
- review_date: ${get('3.8')}

## 7. Decision

- recommendation: (待人工判斷)
- confidence: ${get('1.3')}/10 (原始信心，需結合偏誤檢查結果校準)
- unresolved_questions: (待整理)
- human_approval: pending

---
本報告由 decision-review-system-1-system-2 skill v0.2.0 產出。
所有 claim 引用 status 為 draft，未經人工確認。
本報告不取代臨床判斷、倫理審查、統計分析或正式治理程序。`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Score button handler (delegated)
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target.classList.contains('score-btn')) {
    const parent = target.parentElement;
    if (parent) {
      parent.querySelectorAll('.score-btn').forEach((b) => b.classList.remove('selected'));
      target.classList.add('selected');
      parent.dataset.selectedScore = target.dataset.score ?? '';
    }
  }
});

renderIntro();
