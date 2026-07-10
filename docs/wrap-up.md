# Codex Management Book — 專案收工文件

> **從 NotebookLM 素材到可互動的決策審查 Skill**
>
> Date: 2026-07-11 | Repo: https://github.com/ckt520728/codex-management-book

---

## 一、專案目標

將管理學暢銷書（Daniel Kahneman「Thinking, Fast and Slow」）的 NotebookLM 匯出素材，轉化為可重複使用、可驗證的 Codex skill；再以 TypeScript + Vite 建立互動式決策工具，經人工審閱後歸檔至 Google Drive Second Brain。

## 二、完成成果

### 產出清單

| 產出 | 檔案位置 | 狀態 |
|---|---|---|
| Claim Ledger（86 條） | `templates/source-claim-ledger.md` | draft |
| 來源 claim 提取（3 份） | `books/sources/thinking-fast-and-slow/B4*_claims.md` | draft |
| 管理概念筆記（5 條推論回填） | `notes/kahneman-initial-concepts.md` | draft |
| Skill v0.2.0（43 題） | `skills/decision-review-system-1-system-2/SKILL.md` | draft |
| 三國案例（2 案） | `skills/decision-review-system-1-system-2/case-library/00*.md` | draft |
| 互動式網頁 App | `apps/decision-review/` | typecheck + build 通過 |
| Firebase 配置 | `my-teaching-tools-ckt520728` | Firestore rules 部署完成 |
| NotebookLM 專用 notebook | `5ca313d4-bd2f-41a2-86d0-385decad05f7` | 建立完成 |
| Google Drive Second Brain | `G:\我的雲端硬碟\Second Brain\知識庫\2026 Codex` | 12 檔案同步 |
| 使用手冊 | `docs/user-manual.md` | draft |

### Git 歷史

```
26d44db 步驟 7: Google Drive Second Brain 同步完成
6b003e0 步驟 6: NotebookLM 整合文件更新
9279308 步驟 4-5: 三國案例庫 2 案、Firebase 配置
56eb789 步驟 1-3: claim ledger 86 條、skill v0.2.0、app 互動流程
b2367af 加入 handoff 文件
67385bc 初始化管理學 Skill 專案
```

### 數字一覽

- 來源 claim 總計：155 條（B4: 50, B4.1: 35, B4.2: 70）
- 合併去重後 claim ledger：86 條（C-001 ~ C-086），分 19 個概念
- Skill 題目總計：43 題，分 4 Phase + 報告
- 偏誤檢查項目：9 種
- App 檔案：3 個 TS + 1 個 CSS（main.ts, types.ts, questions.ts, style.css）
- Firebase SDK：動態載入，無 config 時 fallback mock
- Google Drive 同步：7 資料夾、12 檔案

---

## 三、遇到的困難與解決方案

### 1. 來源 OCR 品質問題

**問題**：B4 原文 PDF 轉 Markdown 有零星 OCR 錯誤（斷字、混入 tab 字元、例如 `tracryd>e`）。

**影響**：逐字引用可能不完全準確。

**解決方案**：
- 輕度清理 OCR 錯誤（僅在不遮蔽意義時）
- 在 claim ledger 下方明確標註「引用前應對照紙本書驗證精確措辭」
- B4.2（中譯本）的 OCR 品質較好，作為主要引用來源之一
- 同一概念跨 3 份來源交叉比對，降低單一來源 OCR 錯誤的影響

**教訓**：PDF → Markdown 的 OCR 轉換品質無法保證。對於引用精確度要求高的場景，需要在 claim ledger 中明確標註 OCR 限制，並提供多來源交叉比對。

### 2. TypeScript 嚴格模式下的 null 檢查

**問題**：`document.querySelector` 回傳 `HTMLElement | null`，TypeScript strict mode 下直接賦值給非 null 變數會報錯。

```typescript
// 報錯版本
const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('Missing app root');
app.innerHTML = ...;  // error TS18047: 'app' is possibly null.

// 修正版本
const app = document.querySelector<HTMLDivElement>('#app')!;
if (!app) throw new Error('Missing app root');
```

**解決方案**：使用 non-null assertion operator `!`。

**教訓**：Vite + TypeScript strict mode 下，DOM 操作要麼用 `!`，要麼用 optional chaining，否則 typecheck 會擋。`!` 是最快但不最安全的解法；更嚴謹的做法是用 if-guard 或 early return。

### 3. Vite 環境變數缺少型別宣告

**問題**：`import.meta.env.VITE_FIREBASE_PROJECT_ID` 在 TypeScript 中報錯 `Property 'env' does not exist on type 'ImportMeta'`。

**解決方案**：在 `src/vite-env.d.ts` 中新增型別宣告：

```typescript
/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_FIREBASE_PROJECT_ID: string;
  // ...
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

**教訓**：Vite 的環境變數型別不會自動生成。每個 `VITE_*` 變數都需要在 `vite-env.d.ts` 中宣告，否則 `tsc --noEmit` 會失敗。

### 4. Firebase SDK 體積過大

**問題**：安裝 `firebase` 套件後，build 產出一個 674KB 的 chunk（gzip 174KB），觸發 Vite 的 chunk size warning。

**解決方案**：使用動態 `import()` 讓 Firebase SDK 只在實際需要儲存時才載入：

```typescript
export async function getDecisionStore(): Promise<DecisionStore> {
  // 偵測是否有 env，若無直接 fallback mock
  if (!projectId || !apiKey) return mockDecisionStore;

  // 動態載入 Firebase SDK
  const { initializeApp } = await import('firebase/app');
  const { getFirestore, ... } = await import('firebase/firestore');
  // ...
}
```

**教訓**：Firebase SDK 體積大。用動態 import 可以讓首屏不受影響，但 Firebase 模組的分 chunk 仍會被 Vite 標記為 over 500KB。未來可考慮用 `manualChunks` 或改用 Firebase Modular SDK 的 tree-shaking。

### 5. npm install 網路不穩

**問題**：`npm install firebase` 第一次失敗（`ECONNRESET`），重試才成功。

**解決方案**：直接重試。如果有持續網路問題可嘗試 `npm cache clean --force` 或設定 proxy。

**教訓**：Windows + npm 在某些網路環境下容易出現 `ECONNRESET`。不是程式碼問題，是網路問題。

### 6. Google Drive 路徑存取

**問題**：先前的 handoff 記錄顯示 Google Drive `G:\` 路徑曾回報 `Access denied`。

**解決方案**：本次直接嘗試 `Test-Path`，結果路徑已可存取。成功建立資料夾結構並複製 12 個檔案，讀回驗證正確。

**教訓**：Google Drive for Desktop 的掛載狀態可能隨時間變化。不要假設之前的錯誤仍然存在 — 直接測試是最快的方法。

### 7. claim 去重與概念分類

**問題**：3 份來源共提取 155 條 claim，但大量重複（同一概念在原文、摘要、中譯本中各出現一次）。

**解決方案**：
- 按「概念」而非「來源」組織 claim ledger
- 每個概念合併對應的 B4/B4.1/B4.2 claim ID
- 保留所有來源的逐字引用（不同語言的引用都有價值）
- 用同一個 C-XXX 編號統一管理

**教訓**：多來源知識整合時，按概念分類比按來源分類更實用。下游 skill 引用時是按概念（如「錨定效應」）引用的，不是按「B4 第 11 章」引用的。

### 8. B4 原文未完整覆蓋

**問題**：B4 原文的 claim 提取只覆蓋到 Part III Ch.19（50 條）。Part III Ch.22-24（事前驗屍、外部視角、規劃謬誤）、Part IV（前景理論、稟賦效應、四重模式、框架）、Part V（兩個自我）未完整提取。

**影響**：這些章節的引用目前主要來自 B4.2 中譯本，而非 B4 原文。

**解決方案**：
- 在 claim ledger 底部明確標註此限制
- B4.2 中譯本的引用品質良好，作為替代來源
- 建議未來第二輪補提取 B4 原文這些章節
- 不影響 skill 使用，但影響人工審閱時的證據品質確認

**教訓**：大檔案（1.2MB）的完整讀取和 claim 提取需要分批進行。要在初始提取時就標明覆蓋範圍，避免下游誤以為已完整覆蓋。

### 9. Firestore Rules deny all vs 可用性

**問題**：Firestore rules 設為 `allow read, write: if false`（安全預設），但這意味著 app 無法實際寫入 Firestore，只能用 mock store。

**解決方案**：
- app 設計為自動偵測：無 env 或 init 失敗時 fallback mock
- 在使用手冊中明確說明啟用 Firestore 寫入需要配置 Auth + 更新 rules
- 不在未配置 Auth 前宣稱「Firebase 已連線」

**教訓**：「已配置」和「已可用」是不同的狀態。Firestore rules 部署完成≠使用者可以寫入。整合文件要區分這兩個狀態。

### 10. PowerShell 路徑編碼問題

**問題**：Google Drive 的中文路徑 `G:\我的雲端硬碟\Second Brain\知識庫\2026 Codex` 在 PowerShell 中顯示為亂碼（`G:\??的???...\Second Brain\???w\...`），雖然 `Test-Path` 和 `Copy-Item` 在使用 `-LiteralPath` 時仍可正常運作，但輸出顯示不友善。

**解決方案**：使用 `-LiteralPath` 參數確保正確處理特殊字元路徑。雖然顯示亂碼但不影響功能。

**教訓**：Windows PowerShell 5.1 對中文路徑的顯示有 bug，但功能不受影響。用 `-LiteralPath` 是最安全的方式。

---

## 四、人工確認閘門狀態

| 閘門 | 狀態 | 下一步 |
|---|---|---|
| NotebookLM 匯出 → books/ | ✅ 已通過（3 份來源 ingested） | — |
| books/ → notes/ | ✅ 已通過（claim ledger 86 條 + notes 回填） | — |
| notes/ → skill draft | ✅ 已通過（v0.2.0，43 題） | — |
| skill draft → 人工審閱 (reviewed) | ❌ 未通過 | 人工逐條確認 claim |
| reviewed → pilot validation (validated) | ❌ 未通過 | 執行小規模試點 |
| validated → published | ❌ 未通過 | 使用者明確確認 |
| Firebase deploy (Hosting) | ❌ 未部署 | `firebase deploy --only hosting` |
| Firebase Auth | ❌ 未配置 | 配置 anonymous auth |
| Google Drive → published 成品 | ❌ 只有 draft 同步 | 人工審閱 + 試點後複製 |

---

## 五、下一階段建議

### 短期（1-2 週）

1. **人工審閱 claim ledger** — 逐條核對 C-001 ~ C-086 的 `exact_quote` 與來源位置
2. **B4 原文第二輪提取** — 補完 Part III Ch.22-24、Part IV、Part V 的逐字引用
3. **配置 Firebase Auth** — 至少 anonymous auth，更新 Firestore rules
4. **部署 Firebase Hosting** — `npm run build && firebase deploy --only hosting`

### 中期（1-2 個月）

5. **Pilot validation** — 選一個小規模管理專案，實際使用 skill 進行決策審查
6. **NotebookLM 下一批素材匯出** — B5 Noise（組織決策品質）、B6 Choices Values and Frames
7. **三國案例庫擴充** — 增加更多案例（如隆中對、夷陵之戰）
8. **加 localStorage 到 app** — 避免關閉瀏覽器答案消失

### 長期（3-6 個月）

9. **第二個 skill** — 基於 Noise 的「組織決策品質審查」（雜訊審計、決策保健、MAP）
10. **Skill lifecycle 推進** — draft → reviewed → validated → published
11. **Google Drive published 成品** — 將 validated skill 複製到 `06_Published Outputs/`

---

## 六、專案架構摘要

```
2026 Codex management book/
├── CLAUDE.md                    # 專案規範
├── README.md
├── codex-management-book-handoff.md
├── apps/
│   └── decision-review/         # TypeScript + Vite 互動式網頁
│       ├── src/
│       │   ├── main.ts           # App 入口與狀態機
│       │   ├── types.ts          # 型別定義
│       │   ├── questions.ts      # 43 題題目庫
│       │   ├── firebase.ts       # Firebase SDK 動態載入
│       │   ├── vite-env.d.ts     # 環境變數型別
│       │   └── style.css
│       ├── firebase.json
│       ├── firestore.rules
│       └── .env (gitignored)
├── books/
│   ├── catalog.md               # 來源登錄
│   └── sources/
│       └── thinking-fast-and-slow/
│           ├── B4_*.pdf.md      # 原文
│           ├── B4.1_*.pdf.md    # 30分鐘摘要
│           ├── B4.2_*.pdf.md    # 中譯本
│           ├── B4_claims.md     # 50 條 claim
│           ├── B4.1_claims.md   # 35 條 claim
│           └── B4.2_claims.md   # 70 條 claim
├── docs/
│   └── user-manual.md           # 使用手冊
├── integrations/
│   ├── firebase.md
│   ├── github.md
│   ├── google-drive-second-brain.md
│   └── notebooklm.md
├── notes/
│   └── kahneman-initial-concepts.md  # 5 條推論回填
├── skills/
│   ├── book-to-management-skill/
│   │   └── SKILL.md
│   └── decision-review-system-1-system-2/
│       ├── SKILL.md             # v0.2.0, 43 題
│       └── case-library/
│           ├── README.md
│           ├── 001-chibi.md
│           └── 002-guandu.md
├── templates/
│   ├── decision-review.md       # 報告模板
│   └── source-claim-ledger.md   # 86 條 claim ledger
└── validation/
    └── pilot-validation.md
```

---

## 七、四個系統的責任邊界（最終狀態）

| 系統 | 角色 | 狀態 |
|---|---|---|
| NotebookLM | 輸入來源 | manual-export ✅，專用 notebook 已建立 |
| GitHub | 程式碼/skill/版本唯一來源 | configured ✅，repo public 可存取 |
| Firebase | 互動式網頁執行層 | configured（Firestore rules 已部署，Auth 待配置） |
| Google Drive | 知識與成果長期保存 | synced ✅（12 檔案 draft 同步） |

---

*本收工文件由 opencode (glm-5.2) 產出，2026-07-11。所有產出 status 為 draft，未經人工確認。*