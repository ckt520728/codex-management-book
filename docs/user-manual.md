# 決策審查工具 — 使用手冊

> **System 1 / System 2 偏誤檢核** — 管理者在重大決策前的個人決策審查工具
>
> Version: 0.2.0 | Status: `draft` | Date: 2026-07-11

---

## 目錄

1. [這是什麼工具](#1-這是什麼工具)
2. [適用情境](#2-適用情境)
3. [不適用情境](#3-不適用情境)
4. [開始之前](#4-開始之前)
5. [操作方式 A：互動式網頁](#5-操作方式-a互動式網頁)
6. [操作方式 B：手動訪談](#6-操作方式-b手動訪談)
7. [四個階段詳解](#7-四個階段詳解)
8. [產出報告說明](#8-產出報告說明)
9. [試點設計指南](#9-試點設計指南)
10. [三國案例庫使用方式](#10-三國案例庫使用方式)
11. [Firebase 連線說明](#11-firebase-連線說明)
12. [常見問題](#12-常見問題)
13. [安全與限制](#13-安全與限制)

---

## 1. 這是什麼工具

本工具協助管理者在做出重大決策之前，系統性地檢查自己的直覺（System 1）、證據品質、認知偏誤、替代方案與風險。工具以 Kahneman 的「Thinking, Fast and Slow」為證據基礎，將書中概念轉化為 43 題逐步審查問卷。

### 核心原理

- **System 1** — 快速、自動、情緒化的直覺判斷，無法關閉，容易產生偏誤
- **System 2** — 緩慢、費力、理性的分析思考，但懶惰且資源有限
- **WYSIATI** — 「眼見即為事實」，System 1 用手頭資訊建構故事，忽略缺失資訊
- **Pilot Validation** — 將大決策縮小為可觀察的試點，預設指標與停止條件

### 證據基礎

所有概念均可在 `templates/source-claim-ledger.md` 中找到對應的 claim ID（C-001 ~ C-086），每個 claim 附有 B4（原文）、B4.1（30分鐘摘要）、B4.2（中譯本）的逐字引用與位置。

**重要：所有 claim 目前 status 為 `draft`，尚未經人工確認。**

---

## 2. 適用情境

- 重大人事決策（晉升、任命、解聘）
- 專案啟動或終止決策
- 資源分配（預算、人力、設備）
- 醫療／研究管理決策（流程改革、制度變更）
- 策略選擇（併購、結盟、退出市場、新產品 Launch）
- 任何賭注高、可逆性低、不確定性大的決策

### 最佳使用時機

- 你有直覺偏好但還不確定時
- 決策賭注高（影響範圍大、資源多）
- 決策時間壓力存在但尚未迫在眉睫（仍有 30-45 分鐘可思考）
- 你願意誠實面對自己的直覺和偏誤

---

## 3. 不適用情境

- 緊急/危機決策（沒有 30 分鐘的時間）
- 已經決定好只是要尋求背書（本工具要求開放態度）
- 純執行性決策（已有明確 SOP 的例行決策）
- 取代臨床判斷、倫理審查、統計分析或正式治理程序
- 需要多人共識的團隊決策（本工具設計為個人審查）
- 醫療診斷或治療決策（本工具只協助決策品質檢核，不取代臨床判斷）

---

## 4. 開始之前

### 所需準備

1. **一個真實的決策問題** — 你正在考慮但尚未拍板的決定
2. **30-45 分鐘不受打擾的時間**
3. **誠實面對自己直覺的意願** — 本工具的價值取決於你的誠實程度
4. **紙筆或數位筆記**（手動模式）或 **電腦 + 瀏覽器**（網頁模式）

### 安裝（網頁模式）

```powershell
cd "D:\2026 Codex management book\apps\decision-review"
npm install
npm run dev
```

瀏覽器會自動開啟 `http://localhost:5173`。

---

## 5. 操作方式 A：互動式網頁

### 首頁

打開 app 後你會看到：
- 工具簡介與流程概覽
- 一個文字框，請輸入你正在考慮的決策（簡述即可，後續會逐步釐清）
- 「開始逐步審查」按鈕

### 答題介面

每題顯示：
- **當前 Phase 與進度**（例如「Phase 2 — Convergent · 第 15/22 題」）
- **整體進度條**（已回答/總題數百分比）
- **問題文字**
- **目的說明**（灰色斜體，解釋為什麼問這題）
- **輸入欄位**（文字框、下拉選單、或 1-10 分評分）
- **claim 標標籤**（綠色標籤顯示此題對應的證據 ID）
- 三個按鈕：**上一題** / **下一題** / **跳過（標記 insufficient evidence）**

### 輸入類型

| 類型 | 使用場景 | 操作方式 |
|---|---|---|
| 文字框 (text) | 簡短回答（日期、一句話） | 直接輸入 |
| 大文字框 (textarea) | 詳細描述、列舉、分析 | 多行輸入 |
| 下拉選單 (select) | 選擇題（傾向 go/stop、可逆性等） | 點選一個選項 |
| 評分 (score) | 1-10 分信心評估 | 點選數字按鈕 |

### 跳過與 insufficient evidence

如果某題你真的無法回答（資訊不足、不確定），點「跳過」按鈕，系統會標記 `insufficient evidence`。這不是失敗 — 標記資訊缺口本身就是 System 2 的功能。

### 報告頁面

完成所有題目後，系統自動產生結構化決策審查報告（Markdown 格式）。你可以：
- **複製報告** — 複製到剪貼簿，貼到你的筆記或文件中
- **儲存到 mock store / Firestore** — 視環境設定而定
- **重新開始** — 清除所有答案，重新審查

### 隨時可中斷

瀏覽器關閉後答案不會保留（目前無 localStorage）。如果你需要中斷，建議先複製報告或截圖。

---

## 6. 操作方式 B：手動訪談

### 材料

- `skills/decision-review-system-1-system-2/SKILL.md` — 完整題目清單
- `templates/decision-review.md` — 報告模板

### 流程

1. 打開 `SKILL.md`，從 Phase 0 第一題開始
2. 一次只問自己一個問題
3. 將答案寫入 `decision-review.md` 對應欄位
4. Phase 0 → Phase 1 → Phase 2 → Phase 3 → 報告完成
5. 資料不足的欄位填 `insufficient evidence`，不自行補完

### 一對一訪談模式

也可以由另一位人擔任「審查者」，逐題提問：
- 審查者讀出問題和目的
- 決策者口頭回答
- 審查者記錄答案
- 完成 Phase 2C（偏誤逐項檢查）時，審查者可以挑戰決策者的回答
- 這對應 Kahneman 的「飲水機旁閒談」概念 — 觀察別人比自己更容易發現偏誤（C-079, C-080）

---

## 7. 四個階段詳解

### Phase 0：決策問題界定（4 題，~5 分鐘）

確認決策的基本框架：是什麼、何時、範圍、可逆性。

**關鍵問題**：決策可逆嗎？如果做錯了能回頭嗎？

不可逆決策需要更謹慎 — 這是 Kahneman 的建議（C-082）：「識別容易犯錯的情境，在賭注高時更努力避免重大錯誤。」

### Phase 1：Divergent — 直覺與假設展開（9 題，~10 分鐘）

**目標：把 System 1 的直覺反應外顯化，不急於評判。**

此階段允許自由聯想，產生 `idea` 與 `hypothesis`。

兩個子階段：
- **1A 直覺外顯**：第一直覺是什麼？背後的故事？信心分數？情緒？
- **1B 假設列舉**：未驗證的假設、成功歸因、方案來源、錨定數字、框架

**為什麼要記錄直覺？**
不是為了否定直覺，而是為了讓 System 2 知道 System 1 在想什麼，才能檢查它是否可靠。

### Phase 2：Convergent — 證據與偏誤檢核（22 題，~20 分鐘）

**目標：進入 System 2 分析，逐一檢查。**

五個子階段：
- **2A 證據檢核** — 事實 vs 假設、資訊缺口、來源多樣性
- **2B Base Rate / 外部視角** — 參考類別成功率、這次哪裡不同、規劃謬誤
- **2C 偏誤逐項檢查** — 9 種偏誤逐一檢查（見下表）
- **2D 替代方案** — 至少 3 個替代方案、不做事的代價、分階段執行
- **2E 事前驗屍** — 假設一年後慘後慘敗，寫下失敗原因

#### 9 種偏誤檢查表

| # | 偏誤 | 檢查問題 | Claim |
|---|---|---|---|
| 2.9 | 錨定 | 有沒有數字影響你的估計？從零開始重新估算會怎樣？ | C-011, C-013 |
| 2.10 | 可得性 | 你想到的案例是真的常見還是因為生動/最近？ | C-015, C-017 |
| 2.11 | 框架 | 換個問法你還會做同樣選擇嗎？ | C-048, C-049 |
| 2.12 | 過度自信 | 你的信心高於應有水準嗎？你可能錯在哪？ | C-023, C-025 |
| 2.13 | 確認偏誤 | 你有主動找反證嗎？ | C-018, C-019 |
| 2.14 | 後見之明 | 如果失敗了別人會怎麼評價你？這影響你了嗎？ | C-027, C-028 |
| 2.15 | 損失厭惡 | 你是否因害怕失去而拒絕值得冒險的方案？ | C-052, C-055 |
| 2.16 | 沉沒成本 | 你是否因已投入而難以放棄？ | C-059, C-060 |
| 2.17 | 月暈效應 | 你是否因對某人的印象而過度信任/否定他的提案？ | C-020 |

### Phase 3：Pilot Design — 試點設計（8 題，~10 分鐘）

**目標：如果不確定性仍高，將決策縮小為可觀察的試點。**

三類指標：
- **Outcome metrics** — 試點成功時看到什麼具體結果
- **Process metrics** — 過程中追蹤什麼指標
- **Guardrail metrics** — 哪些指標一旦觸發就必須停止

三個門檻：
- **go threshold** — 達到什麼條件才擴大實施
- **revise threshold** — 達到什麼條件要修改方案再試
- **stop threshold** — 達到什麼條件必須完全停止

**一定要預設檢討日期。**

---

## 8. 產出報告說明

報告格式遵循 `templates/decision-review.md`，包含 7 個區塊：

1. **決策問題** — 來自 Phase 0
2. **證據與假設** — 來自 Phase 2A + Phase 1B
3. **System 1** — 來自 Phase 1A（直覺、信心、情緒）
4. **System 2** — 來自 Phase 2B-2E（base rate、替代方案、事前驗屍）
5. **偏誤檢查結果** — 來自 Phase 2C（9 項逐項）
6. **試點設計** — 來自 Phase 3（如適用）
7. **決策建議** — `recommendation` 和 `human_approval` 欄位需人工填寫

### 報告的 status

| 狀態 | 意義 | 誰可以變更 |
|---|---|---|
| `draft` | 剛產出，未確認 | 工具自動設定 |
| `reviewed` | 完成人工審閱 | 人工確認後 |
| `validated` | 通過試點驗證 | 試點完成後 |
| `published` | 可日常使用 | 使用者明確確認後 |

---

## 9. 試點設計指南

### 什麼是「最小可測試版本」

把你的方案縮小到可以在 2-4 週內執行、觀察、得出結論的規模。

**範例**：
- 原始決策：「全院推行新的病房管理制度」
- 最小可測試版本：「在一個病房試行 4 週」

### 指標設計原則

| 指標類型 | 範例 | 注意事項 |
|---|---|---|
| Outcome | 病人滿意度提升 X% | 要有具體數字和時間框 |
| Process | 每日記錄完成率 | 過程指標有問題要及時修正 |
| Guardrail | 不良事件率不升、員工加班不增 | 觸及必須 stop，不可放寬 |

### go / revise / stop 門檻範例

| 決策 | go | revise | stop |
|---|---|---|---|
| 新管理流程試點 | 滿意度 ≥提升 10%，無不良事件 | 滿意度提升 5-10% 或有小問題 | 滿意度未提升或有不良事件 |
| 新藥採購決策 | 療效優於現有 + 成本不增 | 療效相當但成本略增 | 療效不如現有或有不適反應 |

---

## 10. 三國案例庫使用方式

案例庫位於 `skills/decision-review-system-1-system-2/case-library/`。

### 可用案例

| 檔案 | 案例 | 決策領域 |
|---|---|---|
| 001-chibi.md | 赤壁之戰 — 孫劉聯軍抗曹 | 軍事／策略 |
| 002-guandu.md | 官渡之戰 — 曹操 vs 袁紹 | 軍事／資源分配 |

### 使用方式

1. 在 Phase 1 或 Phase 2 時，讀取案例作為類比思考的刺激
2. 每個案例附有「與 skill 的對應」表格，說明哪些題目可以用這個案例來啟發
3. **嚴格遵守標記規則**：
   - `Romance of the Three Kingdoms` — 文學虛構情節
   - `Records of the Three Kingdoms` — 史料記載
   - `inference` — 本專案的推論分析
4. **不可將三國故事當成現代決策的因果證據** — 它們是類比與教學素材

### 如何擴充案例庫

參考 `case-library/README.md` 的模板，為每個新案例標記：
- source_layer、decision_domain、uncertainty
- possible_biases、alternatives、modern_management_analogy
- evidence_limitations、reviewer、status

---

## 11. Firebase 連線說明

### 當前狀態

- Firebase project: `my-teaching-tools-ckt520728` (ACTIVE)
- Firestore database: `asia-east1` (已存在)
- Web app SDK config: 已寫入 `.env`（gitignored）
- Firestore rules: `allow read, write: if false` (deny all — 已部署)
- Firebase Auth: **尚未配置**

### 儲存行為

| 環境 | 行為 |
|---|---|
| 無 `.env` 或 Firebase init 失敗 | fallback 至 mock store（console.info） |
| 有 `.env` 但 Firestore rules deny all | 寫入失敗，console 顯示錯誤 |
| 有 `.env` 且 rules 允許 + Auth 已配置 | 寫入 Firestore `decision-reviews` collection |

### 啟用 Firestore 寫入的步驟

1. 在 Firebase Console 配置 Authentication（至少 anonymous auth）
2. 更新 `firestore.rules`：
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /decision-reviews/{doc} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```
3. 部署 rules: `firebase deploy --only firestore:rules`
4. 重新 `npm run dev`，app 會自動偵測並使用 Firestore

### 部署到 Hosting

```powershell
cd "D:\2026 Codex management book\apps\decision-review"
npm run build
firebase deploy --only hosting
```

---

## 12. 常見問題

### Q: 我可以直接跳到 Phase 2 嗎？

A: 不建議。Phase 1 的直覺外顯是 Phase 2 偏誤檢查的基礎。如果跳過 Phase 1，你不知道自己的 System 1 在想什麼，就無法檢查它。

### Q: 某些問題不適用我的情境怎麼辦？

A: 標記 `insufficient evidence` 並繼續。不是每題都適用每個決策。但請至少想過再跳過。

### Q: 報告說 recommendation 要人工填寫，工具不幫我做決定嗎？

A: 正確。本工具是**決策品質檢核工具**，不是決策替代品。它幫你發現偏誤和盲點，但最終判斷仍由你（管理者）做出。

### Q: 我可以重複使用嗎？

A: 可以。每個決策應該獨立走一次完整流程。不同決策的偏誤模式不同。

### Q: 網頁的答案會自動儲存嗎？

A: 目前不會。關閉瀏覽器答案就消失。建議完成後複製報告。未來可加 localStorage 或接 Firebase。

### Q: 試點一定要做嗎？

A: 如果 Phase 2 完成後你已經有高信心結論，可以跳過 Phase 3。但如果仍有不確定性，試點是把不確定性轉化為可觀察結果的最佳方式。

### Q: claim 是什麼？我要擔心嗎？

A: claim 是「證據主張」的編號（C-001 ~ C-086），可以在 `templates/source-claim-ledger.md` 查到每條 claim 的原文引用和來源位置。你不需要在使用時查claim，但如果想驗證某個概念是否有書中原文支持，可以查。

---

## 13. 安全與限制

### 本工具「不做」的事

- 不取代臨床判斷
- 不取代倫理審查
- 不取代統計分析
- 不取代正式治理程序
- 不幫你做最終決定
- 不保證決策正確

### 證據限制

- 所有 claim status 為 `draft`，未經人工確認
- 來源 OCR 有零星錯誤，引用前應對照紙本書
- B4.1 是非官方摘要，非 Kahneman 原文
- 三國案例是類比素材，不是因果證據

### 醫療／研究管理情境

本工具只協助決策品質檢核（例如：是否充分考慮了 base rate、是否忽視了沉沒成本），不取代 IRB、不取代統計分析計畫、不取代臨床判斷。

---

## 附錄：快速啟動

```powershell
# 1. 進入專案
cd "D:\2026 Codex management book\apps\decision-review"

# 2. 安裝（首次）
npm install

# 3. 啟動
npm run dev

# 4. 打開瀏覽器
# Vite 會顯示 http://localhost:5173

# 5. 驗證 build
npm run typecheck
npm run build
```

---

*本使用手冊隨 skill 版本更新。當前 version 0.2.0，status draft。*