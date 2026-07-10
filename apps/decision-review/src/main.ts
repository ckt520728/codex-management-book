import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('Missing app root');

app.innerHTML = `
  <section class="shell">
    <p class="eyebrow">CODEX MANAGEMENT BOOK · DRAFT TOOL</p>
    <h1>管理決策的 System 1／System 2 偏誤檢核</h1>
    <p class="lede">先把重大決策縮小成可觀察的試點，再檢查直覺、證據、替代方案與風險。</p>
    <label for="decision">你正在考慮的決策</label>
    <textarea id="decision" placeholder="例如：是否先在一個小區域試行新的管理流程？"></textarea>
    <div class="actions"><button id="start">開始逐步審查</button><span id="status">狀態：draft</span></div>
    <div id="output" class="output" aria-live="polite"></div>
    <p class="notice">目前使用 mock data；尚未連接 Firebase。</p>
  </section>`;

document.querySelector<HTMLButtonElement>('#start')?.addEventListener('click', () => {
  const input = document.querySelector<HTMLTextAreaElement>('#decision');
  const output = document.querySelector<HTMLDivElement>('#output');
  if (!output) return;
  output.innerHTML = input?.value.trim()
    ? '<strong>第一個問題：</strong>這個決策的主要目標，以及最晚何時需要做出決定？'
    : '<strong>請先描述決策問題。</strong>';
});

