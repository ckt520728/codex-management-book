# Google Drive Second Brain

- status: `synced` (draft artifacts — pending human review)
- role: 人工確認後的知識筆記與成品長期保存層
- target: `G:\我的雲端硬碟\Second Brain\知識庫\2026 Codex`
- last_sync: 2026-07-11
- sync_method: 人工複製（PowerShell `Copy-Item`）

## 資料夾結構

| Folder | Content | Synced Files |
|---|---|---|
| 00_Index | 書籍目錄、專案 README | catalog.md, README.md |
| 01_Book Sources | 來源 claim 提取結果 | B4_claims.md, B4.1_claims.md, B4.2_claims.md |
| 02_Management Notes | 管理筆記與 claim ledger | kahneman-initial-concepts.md, source-claim-ledger.md |
| 03_Skill Specifications | Skill 規格文件 | decision-review-system-1-system-2_SKILL.md, book-to-management-skill_SKILL.md |
| 04_Decision Review Cases | 決策審查案例 | 001-chibi.md, 002-guandu.md |
| 05_Validation | 試點驗證模板 | pilot-validation.md |
| 06_Published Outputs | 已發布成品 | (empty — 尚無 published 成品) |

## 同步狀態

- ✅ 資料夾結構已建立
- ✅ 12 個 draft 檔案已複製到 Second Brain
- ⚠️ 所有檔案 status 為 `draft`，尚未經人工確認
- ❌ 尚無 `published` 成品（需完成人工審閱 + pilot validation）

## 下一步

1. 人工審閱 `source-claim-ledger.md` 中的 86 條 claim（C-001 ~ C-086）
2. 人工確認後將 `status` 從 `draft` 提升至 `reviewed`
3. 執行 pilot validation 後將 `status` 提升至 `validated`
4. 使用者明確確認後將 `status` 提升至 `published`
5. `published` 成品複製到 `06_Published Outputs/`

## 安全提醒

- 不提交 API key、token、Firebase secrets 或 service-account 檔案
- Google Drive 同步僅複製知識筆記與成品，不複製程式碼（程式碼在 GitHub）
- 不宣稱同步成功，除非實際寫入並重新讀取驗證 — ✅ 已驗證
