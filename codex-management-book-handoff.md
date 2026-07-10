# Codex Management Book Handoff

## 下一階段目標

建立 GitHub repository `ckt520728/codex-management-book`，設定本機 `origin`，push 現有 `main` branch，並確認公開 repository 可存取。之後再處理 Firebase、NotebookLM 與 Google Drive。

## 專案狀態

- workspace: `D:\2026 Codex management book`
- current commit: `67385bc 初始化管理學 Skill 專案`
- branch: `main`
- planned GitHub URL: `https://github.com/ckt520728/codex-management-book.git`
- local repository initialized; no remote configured before this handoff

## 已完成成果

請直接參考 repository 內既有 artifacts：

- `CLAUDE.md`、`README.md`
- `integrations/`：四個外部系統的連線說明
- `books/catalog.md` 與 `books/sources/thinking-fast-and-slow/`
- `notes/kahneman-initial-concepts.md`
- `skills/book-to-management-skill/SKILL.md`
- `skills/decision-review-system-1-system-2/SKILL.md` 與 `case-library/`
- `templates/`、`validation/`
- `apps/decision-review/`：TypeScript + Vite app、Firebase placeholder、mock adapter

## 已驗證

- `npm.cmd install`：成功
- `npm.cmd run typecheck`：成功
- `npm.cmd run build`：成功
- Git working tree：已建立初始 commit

## 外部連線狀態

- GitHub：repository 尚未建立
- NotebookLM：人工匯出，不假設 API
- Firebase：`unconfigured`，目前 mock／local data
- Google Drive：目標為 `G:\我的雲端硬碟\Second Brain\知識庫\2026 Codex`；本機曾回報 `Access denied`

## 已確認的產品決策

- GitHub=唯一程式碼／skill 來源；NotebookLM=輸入；Firebase=互動式產品執行層；Google Drive=知識與成果保存層
- 所有階段保留人工確認閘門
- 第一個 skill：管理決策的 System 1／System 2 偏誤檢核
- 第一個驗證情境：小規模改革／管理專案試點
- 驗證指標：Outcome、Process、Guardrail；決策門：`go`、`revise`、`stop`
- 互動模式：一次一題；Divergent phase → Convergent phase → 結構化決策審查報告
- 三國案例：獨立 `case-library`，區分小說、史料、現代研究與 `inference`

## 建議下一步

1. 執行 `gh auth status`。
2. 若已登入，執行 `gh repo create ckt520728/codex-management-book --public --source . --remote origin --push`。
3. 驗證 `git remote -v`、`git status --short` 與 `gh repo view ckt520728/codex-management-book`。
4. 取得 Firebase project ID 後配置 Hosting／Firestore。
5. 人工從 NotebookLM 匯出下一批素材。
6. 恢復 Google Drive 存取後，再進行人工審閱與同步。

## Suggested skills

- `github:github`：確認 repository 與 GitHub 狀態
- `github:yeet`：正式 commit／push／發布流程
- `knowledge-base`：同步人工確認後的知識筆記到 Second Brain
- `playwright`：驗證互動式 web app

## 注意事項

- 不提交 API key、token、Firebase secrets 或 service account 檔案。
- 不把未人工確認的內容標記為 `reviewed`、`validated` 或 `published`。
- 不宣稱 Google Drive 已同步，除非實際寫入並重新讀取驗證。

