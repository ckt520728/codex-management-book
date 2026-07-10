# NotebookLM

- status: `manual-export`
- role: 書籍與研究素材的輸入來源
- workflow: NotebookLM → 人工確認 → 匯出 Markdown／PDF → `books/`
- current source: `books/sources/thinking-fast-and-slow/`
- dedicated_notebook: `Codex Management Book — 決策審查 Skill 素材庫`
  - notebook_id: `5ca313d4-bd2f-41a2-86d0-385decad05f7`
  - url: https://notebooklm.google.com/notebook/5ca313d4-bd2f-41a2-86d0-385decad05f7
  - tags: codex, decision-review, kahneman, management
- existing_source_notebook: `Psychology_Daniel Kahneman_展望理論：決策、價值與框架`
  - notebook_id: `ce98cbed-303b-4168-9dc1-5fc0d461ce10`
  - source_count: 19
- limitation: 本專案不假設存在可用 API 或自動匯入
- verification: 每個來源包須有來源登錄、匯出日期與人工確認紀錄

## 已完成的來源

| source_id | title | status | in_catalog |
|---|---|---|---|
| B4 | Thinking, Fast and Slow (Kahneman, 2013) — 原文 | ingested + claims extracted | ✅ |
| B4.1 | Thinking fast and slow in 30 minutes (Garamond Press, 2013) — 摘要 | ingested + claims extracted | ✅ |
| B4.2 | 思考，快与慢 (中譯本) | ingested + claims extracted | ✅ |

## 下一批待匯出來源（按優先順序）

### 第一優先：B5 — Noise: A Flaw in Human Judgment

- author: Daniel Kahneman, Olivier Sibony, Cass R. Sunstein
- year: 2021
- existing_in_notebook: ✅ (source_id: `59884271-...` 英文版, `6cb8d612-...` 中譯版)
- relevance: 組織決策品質、雜訊審計、決策保健、中介評估法 (MAP)
- why: 擴充 skill 從個人偏誤檢核到組織層級的判斷品質改善
- target_directory: `books/sources/noise/`
- catalog_id: B5

### 第二優先：B6 — Choices, Values, and Frames

- author: Daniel Kahneman, Amos Tversky
- year: 2017 (reprint)
- existing_in_notebook: ✅ (source_id: `baeb504e-...`)
- relevance: 前景理論實證基礎、框架效應、參考點依賴
- why: 深化前景理論與框架效應的 claim 引用
- target_directory: `books/sources/choices-values-frames/`
- catalog_id: B6

### 第三優先：B7 — Daniel Kahneman Nobel Prize Lecture

- title: "Maps of Bounded Rationality"
- existing_in_notebook: ✅ (source_id: `b1ac20af-...`)
- relevance: 有限理性框架、前景理論的學術脈絡
- why: 提供 Kahneman 學術框架的權威摘要
- target_directory: `books/sources/kahneman-nobel-lecture/`
- catalog_id: B7

### 可選：其他管理學書籍

以下 NotebookLM 中已有但尚未匯入的相關素材：

- Ray Dalio "Principles" (notebook: `d062d3e1-...`)
- "決策之思：總統領導風格與顧問機制" (notebook: `a2485c11-...`)
- "Atomic Habits" (notebook: `36d53ff7-...`)

## 人工匯出步驟

### Step 1: 從 NotebookLM 匯出素材

1. 開啟 NotebookLM 中的 dedicated notebook: [Codex Management Book](https://notebooklm.google.com/notebook/5ca313d4-bd2f-41a2-86d0-385decad05f7)
2. 或開啟現有 Kahneman notebook: [展望理論](https://notebooklm.google.com/notebook/ce98cbed-303b-4168-9dc1-5fc0d461ce10)
3. 選擇要匯出的來源（如 B1_Noise）
4. 使用 NotebookLM 的「摘要」或「問答」功能生成針對管理決策的內容摘要
5. 或直接從來源中提取文本（如果來源是 PDF/EPUB 上傳）
6. 將匯出的內容存為 `.md` 檔案

### Step 2: 放入專案目錄

```
books/sources/noise/
├── B5_Noise_A_Flaw_in_Human_Judgment.pdf.md     (英文版文本)
├── B5.1_雜訊_中譯本.pdf.md                       (中譯本文本，如有)
└── B5_claims.md                                   (claim 提取結果)
```

### Step 3: 更新 catalog

在 `books/catalog.md` 新增：

```markdown
## B5 — Noise: A Flaw in Human Judgment

- author: Daniel Kahneman, Olivier Sibony, Cass R. Sunstein
- source_package: (NotebookLM 手動匯出)
- local_snapshot: `books/sources/noise/`
- source_format: Markdown extracted from source
- status: `ingested`
- intended_use: 擴充決策審查 skill 至組織層級（雜訊審計、決策保健、MAP）
- evidence_boundary: (待人工確認)
- human_review: `pending`
```

### Step 4: 執行 claim 提取

使用 opencode 或手動方式，從新來源中提取管理決策相關 claim，更新 `templates/source-claim-ledger.md`。

### Step 5: 人工確認

- 逐條核對 claim 的 `exact_quote` 與來源位置
- 確認 `claim_type` 分類正確
- 將 `status` 從 `draft` 提升至 `reviewed`
- 記錄 reviewer、日期、依據

## 注意事項

- 不假設 NotebookLM API 可用於自動匯入
- 匯出內容須經人工確認才可納入 skill
- 不在 catalog 中標記 `reviewed` 或 `validated`，除非實際完成人工審閱
- NotebookLM notebook ID 和 source ID 僅供定位，不是永久穩定的識別碼
