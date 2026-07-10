# Codex Management Book

## 專案目的

本專案將管理學暢銷書與 NotebookLM 匯出的素材，轉化為可重複使用、可驗證的 Codex skills；再以 TypeScript + Vite 建立互動式決策工具，最後經人工審閱後歸檔至 Google Drive Second Brain。

## 四個系統的責任邊界

- **NotebookLM**：書籍與研究素材的輸入來源；第一版採人工匯出。
- **GitHub**：程式碼、skill、模板、驗證紀錄與版本的唯一來源。
- **Firebase**：互動式網頁的執行層；第一版先使用 mock data，之後再接 Firestore／Hosting。
- **Google Drive Second Brain**：人工確認後的知識筆記與成品長期保存層。

預定 Google Drive 目標：`G:\我的雲端硬碟\Second Brain\知識庫\2026 Codex`

## 標準流程

`NotebookLM → 人工確認 → books/ → notes/ → skill draft → 人工審閱 → pilot validation → Firebase 成品 → 人工確認 → Second Brain`

任何階段都不得自動跳過人工確認閘門。資料不足時標記 `insufficient evidence`，不可自行補完。

## 證據規則

- `fact`：來源可直接支持的敘述。
- `hypothesis`：待驗證的假設。
- `idea`：brainstorming 產生的想法，不是事實。
- `inference`：根據來源或案例做出的推論，必須說明依據。

三國案例必須區分 `Romance of the Three Kingdoms`（文學敘事）、`Records of the Three Kingdoms`（史料）、現代心理／管理研究與 `inference`。三國故事是類比與教學素材，不是現代決策的因果證據。

## 第一個 skill

`skills/decision-review-system-1-system-2/` 的主題是「管理決策的 System 1／System 2 偏誤檢核」，先聚焦管理者在重大決策前的個人審查。互動採逐步訪談，一次問一題；先 Divergent phase，再 Convergent phase，最後產出結構化決策審查報告。

第一個驗證情境是小規模改革／管理專案試點。必須設定 `Outcome metrics`、`Process metrics`、`Guardrail metrics`，以及 `go`、`revise`、`stop` 門檻。

## Skill 生命週期

`draft → reviewed → validated → published → retired`

- `reviewed`：來源、概念與流程完成人工審閱。
- `validated`：至少一個小規模試點通過驗證。
- `published`：使用者明確確認可日常使用。
- 狀態變更須留下日期、審核者、依據與未解決問題。

## 安全與範圍

- 絕不提交 API key、token、Firebase secrets 或 service-account 檔案。
- 不設定不存在的 GitHub remote，不假設 NotebookLM、Firebase 或 Google Drive 已連線。
- 醫療／研究管理情境中，本專案只協助決策品質檢核，不取代臨床判斷、倫理審查、統計分析或正式治理程序。
- 保持外科手術式變更；不要順手重構無關檔案。

## 驗證指令

在 `apps/decision-review` 執行：

```powershell
npm install
npm run typecheck
npm run build
```

目前 Firebase 與 Google Drive 仍是 `unconfigured`／`blocked` 時，不得宣稱已 deploy 或同步成功。

