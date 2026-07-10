# 來源／主張紀錄 (Source-Claim Ledger)

- ledger_date: 2026-07-11
- extractor: opencode (glm-5.2)
- sources:
  - B4: `books/sources/thinking-fast-and-slow/B4_Thinking, Fast and Slow_Daniel Kahneman - (2013).pdf.md` (原文)
  - B4.1: `books/sources/thinking-fast-and-slow/B4.1_Thinking fast and slow in 30 minutes.pdf.md` (30分鐘摘要，非官方)
  - B4.2: `books/sources/thinking-fast-and-slow/B4.2_思考, 快与慢_...pdf.md` (中譯本)
- evidence_rule: `fact`=來源可直接支持; `hypothesis`=待驗證; `idea`=建議; `inference`=推論須說明依據
- review_status: `pending` — 所有條目均未經人工確認，不得用於 `reviewed` 以上之 skill
- per_claim_files:
  - B4 claims: `books/sources/thinking-fast-and-slow/B4_claims.md` (50 claims)
  - B4.1 claims: `books/sources/thinking-fast-and-slow/B4.1_claims.md` (35 claims)
  - B4.2 claims: `books/sources/thinking-fast-and-slow/B4.2_claims.md` (70 claims)

## 概念 1：System 1 / System 2 — 本質與分工

| ID | claim | type | source | location | confidence | reviewer | status |
|---|---|---|---|---|---|---|---|
| C-001 | System 1 自動、快速、不費力、無法關閉；System 2 緩慢、費力、需集中注意力。 | fact | B4-C-001; B4.1-C-001; B4.2-C-001 | B4 Part I Ch.1; B4.1 I; B4.2 第1章 | high | pending | draft |
| C-002 | System 2 雖自視為決策主角，實際上大多數想法和行為由 System 1 引導；System 2 懶惰。 | fact | B4-C-002; B4-C-007; B4.1-C-002; B4.2-C-002 | B4 Part I Ch.1/Ch.3; B4.1 I; B4.2 第2章 | high | pending | draft |
| C-003 | System 1 在熟悉情境中通常準確，但存在成見和系統性錯誤，且無法關閉。 | fact | B4-C-003; B4-C-004; B4.2-C-005 | B4 Part I Ch.1; B4.2 第1章 | high | pending | draft |
| C-004 | 當 System 2 被認知負擔佔據時，System 1 對行為影響更大（自我控制下降）。 | fact | B4-C-008; B4.2-C-003; B4.2-C-004 | B4 Part I Ch.3; B4.2 第3章 | high | pending | draft |

## 概念 2：WYSIATI (眼見即為事實)

| ID | claim | type | source | location | confidence | reviewer | status |
|---|---|---|---|---|---|---|---|
| C-005 | WYSIATI：System 1 用手頭資訊建構最合理的故事，對資訊的品質和數量根本不敏感。 | fact | B4-C-017; B4.1-C-007; B4.2-C-009 | B4 Part I Ch.7; B4.1 I; B4.2 第7章 | high | pending | draft |
| C-006 | 過度自信是 WYSIATI 的表現：主觀自信主要由故事的連貫性決定，而非證據的數量與品質。 | fact | B4-C-018; B4.1-C-034; B4.2-C-010 | B4 Part I Ch.7; B4.1 I; B4.2 第7章 | high | pending | draft |
| C-007 | 在財務領域，故事越連貫，人們越有信心它有效，即使它不真實（效度錯覺）。 | fact | B4.1-C-034 | B4.1 I | high | pending | draft |
| C-008 | 重大決策若僅基於單一顧問報告，就是 WYSIATI — 組織未意識到自己擁有多少資訊。 | idea | B4-C-043 | B4 Part I Ch.7 | medium | pending | draft |

## 概念 3：替代效應 (Substitution)

| ID | claim | type | source | location | confidence | reviewer | status |
|---|---|---|---|---|---|---|---|
| C-009 | 面對難題時，System 1 會用較易回答的啟發性問題替代，且這種置換是無意識的。 | fact | B4-C-020; B4.1-C-009; B4.2-C-008 | B4 Introduction; B4.1 I; B4.2 第9章 | high | pending | draft |
| C-010 | 在低效度環境中，決策者預測公司前景時實際被對高管能力的印象支配（替代自動發生）。 | inference | B4.2-C-029 | B4.2 第22章 | medium | pending | draft |

## 概念 4：錨定效應 (Anchoring)

| ID | claim | type | source | location | confidence | reviewer | status |
|---|---|---|---|---|---|---|---|
| C-011 | 錨定效應是最可靠且最穩健的實驗心理學結果之一：估測值會向先前考量的任意數字靠攏。 | fact | B4.1-C-010; B4.2-C-012 | B4.1 I; B4.2 第11章 | high | pending | draft |
| C-012 | 即使專家（房地產經紀人、法官）也受錨定效應影響，但往往否認這一點。 | fact | B4.1-C-010; B4.2-C-014 | B4.1 I; B4.2 第11章 | high | pending | draft |
| C-013 | 抵制談判中錨定效應：集中注意力搜尋記憶以激活 System 2，"為對方著想"是有效策略。 | idea | B4.2-C-015 | B4.2 第11章 | medium | pending | draft |
| C-014 | 計劃要避開錨定效應；做計劃時應預先設想各種失誤方式。 | idea | B4.2-C-016 | B4.2 第11章 | medium | pending | draft |

## 概念 5：可得性啟發法 (Availability)

| ID | claim | type | source | location | confidence | reviewer | status |
|---|---|---|---|---|---|---|---|
| C-015 | 可得性啟發法：用從記憶中提取相關實例的輕鬆程度判斷頻率/概率，必然產生系統性偏見。 | fact | B4-C-024; B4.2-C-017 | B4 Introduction; B4.2 第12章 | high | pending | draft |
| C-016 | 連續成功的 CEO 會因失敗案例難以在腦海中出現而過度自信（可得性偏見在管理中的典型表現）。 | inference | B4.2-C-018 | B4.2 第12章 | medium | pending | draft |
| C-017 | 媒體報導扭曲公眾對風險的評估（可得性啟發法）。 | inference | B4-C-025 | B4 Introduction | medium | pending | draft |

## 概念 6：確認偏誤 / 月暈效應

| ID | claim | type | source | location | confidence | reviewer | status |
|---|---|---|---|---|---|---|---|
| C-018 | 確認偏誤源於聯想記憶：人們尋求與現有信念兼容的資料，而非嘗試反駁假設。 | fact | B4-C-013; B4.2-C-011 | B4 Part I Ch.7; B4.2 第4章 | high | pending | draft |
| C-019 | System 1 易受騙且偏向相信；System 2 負責懷疑，但 System 2 有時忙碌且常懶惰。 | fact | B4-C-012 | B4 Part I Ch.7 | high | pending | draft |
| C-020 | 月暈效應：接受有利的第一印象後自動添加更多正面特質；只有 System 2 能遏制。 | fact | B4-C-014; B4-C-049; B4.1-C-008 | B4 Part I Ch.7/Introduction; B4.1 I | high | pending | draft |
| C-021 | 委員會討論前，所有成員應先簡短寫下自己的立場 — 防止發言早且強勢的人主導。 | idea | B4-C-016 | B4 Part I Ch.7 | high | pending | draft |
| C-022 | 消除資訊來源的冗餘：獨立證人在作證前不應互相影響（去關聯錯誤）。 | idea | B4-C-015 | B4 Part I Ch.7 | medium | pending | draft |

## 概念 7：過度自信 / 效度錯覺

| ID | claim | type | source | location | confidence | reviewer | status |
|---|---|---|---|---|---|---|---|
| C-023 | 預測者的高信心從來不是準確性的可靠指標；低信心可能更好，因為它促使 System 2 介入。 | fact | B4.1-C-011 | B4.1 I | high | pending | draft |
| C-024 | 交易員選股成功如同擲骰子般隨機；即使被出示證據，公司仍將運氣當作技能來獎勵。 | fact | B4.1-C-012 | B4.1 I | high | pending | draft |
| C-025 | 人們過度自信，傾向過度信賴直覺，盡可能避免認知努力。 | fact | B4-C-009 | B4 Part I Ch.3 | high | pending | draft |
| C-026 | 直覺推理在需要預測未來和評估風險的決策中最不可靠。 | fact | B4.1-C-013 | B4.1 Introduction | high | pending | draft |

## 概念 8：後見之明 / 結果偏誤

| ID | claim | type | source | location | confidence | reviewer | status |
|---|---|---|---|---|---|---|---|
| C-027 | 後見之明偏見：人們誇大自己原先對已發生事件賦予的概率；將未發生事件記為"一直認為不太可能"。 | fact | B4-C-034 | B4 Part III Ch.19 | high | pending | draft |
| C-028 | 後見之明對決策者評估有惡劣影響：觀察者按結果而非過程合理性評估判斷品質。 | fact | B4-C-035; B4.2-C-022 | B4 Part III Ch.19; B4.2 第19章 | high | pending | draft |
| C-029 | 預期被後見之明審查的決策者傾向官僚作風和極度不願冒風險。 | inference | B4-C-036; B4.2-C-022 | B4 Part III Ch.19; B4.2 第19章 | medium | pending | draft |
| C-030 | 幸運的領導者從不受罰，反而被認為有先見之明和膽識；質疑者被視為平庸膽小。 | inference | B4-C-037; B4.2-C-023 | B4 Part III Ch.19; B4.2 第19章 | medium | pending | draft |
| C-031 | 敘事謬誤：簡化的過去故事過度重視才能/愚蠢/意圖，過度輕視運氣。 | fact | B4-C-039 | B4 Part III Ch.19 | high | pending | draft |

## 概念 9：基礎比率 / 外部視角 / 參考類別

| ID | claim | type | source | location | confidence | reviewer | status |
|---|---|---|---|---|---|---|---|
| C-032 | 有具體個案資訊時，人們（即使是統計學家）往往忽略基礎比率。 | fact | B4.2-C-019; B4.2-C-020 | B4.2 第16章 | high | pending | draft |
| C-033 | 貝葉斯定理關鍵點：基礎比率很重要（即使手頭有證據），且通過證據得到的直覺印象通常被誇大。 | inference | B4.2-C-021 | B4.2 第16章 | medium | pending | draft |
| C-034 | 證據薄弱時，應堅持基礎比率。 | idea | B4-C-041 | B4 Part II Ch.14 | high | pending | draft |
| C-035 | 新創公司看起來不可能失敗，但該行業的基礎成功率極低 — 應問"我們如何知道此案不同？" | idea | B4-C-042 | B4 Part II Ch.14 | high | pending | draft |
| C-036 | 內部意見/外部意見：人們偏向用內部意見，即使外部意見更準也集體忽略。 | fact | B4.2-C-030 | B4.2 第23章 | high | pending | draft |
| C-037 | 規劃謬誤：計劃和預測中過度樂觀、忽視基礎比率，廣泛見於個人、政府、企業。 | fact | B4.2-C-031 | B4.2 第23章 | high | pending | draft |
| C-038 | 避免規劃謬誤最有效的辦法是採用參考類別預測（外部視角）。 | idea | B4.2-C-032; B4.1-C-023 | B4.2 第23章; B4.1 II | high | pending | draft |
| C-039 | 高管在風險項目決策上易落入規劃謬誤：根據脫離現實的樂觀心態做決策而非理性分析。 | inference | B4.2-C-034 | B4.2 第23章 | medium | pending | draft |
| C-040 | 即使理性上知道外部意見合理，團隊仍會默許按內部意見繼續（非理性堅持/沉沒成本悖論）。 | inference | B4.2-C-033 | B4.2 第23章 | medium | pending | draft |

## 概念 10：樂觀偏見 / 競爭忽略

| ID | claim | type | source | location | confidence | reviewer | status |
|---|---|---|---|---|---|---|---|
| C-041 | 樂觀偏見是認知偏見中最重要的一種：應同時保持樂觀與謹慎。 | inference | B4.2-C-035 | B4.2 第24章 | medium | pending | draft |
| C-042 | 過度自信的高管承擔過多風險、向併購目標支付過高溢價。 | fact | B4.2-C-036 | B4.2 第24章 | high | pending | draft |
| C-043 | 競爭忽略：企業決策中只關注自身，不把競爭因素納入考慮，導致市場過度進入、平均虧損。 | inference | B4.2-C-037 | B4.2 第24章 | medium | pending | draft |
| C-044 | 財務總監等"專家"被過度自信傳染，置信區間外的"意外"遠超預期。 | fact | B4.2-C-038 | B4.2 第24章 | high | pending | draft |

## 概念 11：事前驗屍 (Premortem)

| ID | claim | type | source | location | confidence | reviewer | status |
|---|---|---|---|---|---|---|---|
| C-045 | 事前驗屍（Klein 提出）：決策下達前召集人員假定一年後計劃已慘敗，簡短寫下慘敗緣由。 | idea | B4.2-C-039 | B4.2 第24章 | high | pending | draft |
| C-046 | 事前驗屍兩大優點：扼制集體思考影響，並激發見多識廣者向最需要方向探尋潛在威脅。 | inference | B4.2-C-040 | B4.2 第24章 | medium | pending | draft |
| C-047 | 事前驗屍能減少由 WYSIATI 偏差和盲目樂觀導致的計劃損失，雖非靈丹妙藥。 | idea | B4.2-C-041 | B4.2 第24章 | medium | pending | draft |

## 概念 12：框架效應 (Framing)

| ID | claim | type | source | location | confidence | reviewer | status |
|---|---|---|---|---|---|---|---|
| C-048 | 框架效應：同一資訊的不同表達方式激發不同情感與決策（"90%存活率" vs "10%死亡率"）。 | fact | B4-C-019; B4.1-C-022; B4.2-C-059 | B4 Part I Ch.7; B4.1 II; B4.2 第7章 | high | pending | draft |
| C-049 | 醫生與公共衛生專家同樣受框架效應影響；醫學培訓也阻擋不了框架效應。 | fact | B4.2-C-060 | B4.2 第34章 | high | pending | draft |
| C-050 | 人們在寬框架/聯合評估下做出更理性的選擇；單一（窄）評估受 System 1 情緒影響。 | fact | B4.1-C-021 | B4.1 II | high | pending | draft |
| C-051 | 框架效應可被有心人利用（如信用卡業遊說把"附加費"說成"現金折扣"以利用損失厭惡）。 | inference | B4.2-C-061 | B4.2 第34章/附錄B | medium | pending | draft |

## 概念 13：損失厭惡 / 前景理論 / 稟賦效應

| ID | claim | type | source | location | confidence | reviewer | status |
|---|---|---|---|---|---|---|---|
| C-052 | 損失厭惡極其強大，甚至壓過獲利欲望，可能導致代價高昂的決策（前景理論）。 | fact | B4.1-C-014; B4.2-C-042 | B4.1 Introduction; B4.2 第26章 | high | pending | draft |
| C-053 | 損失厭惡係數通常在 1.5~2.5 之間；"像商人那樣思考"可減輕損失規避。 | fact | B4.2-C-043 | B4.2 第26章 | high | pending | draft |
| C-054 | 稟賦效應：放棄已有物品的痛苦大於獲得同一物品的快樂。 | fact | B4.1-C-017; B4.2-C-044 | B4.1 II; B4.2 第27章 | high | pending | draft |
| C-055 | 損失厭惡是保守力量，偏愛現狀的微小改變，使機構或個人拒絕承擔風險。 | inference | B4.2-C-046 | B4.2 第28章 | medium | pending | draft |
| C-056 | 損失厭惡使談判中難以達成共識：雙方對讓步價值評估不對稱。 | inference | B4.2-C-045 | B4.2 第28章 | medium | pending | draft |
| C-057 | 四重模式：對大概率獲利和 unlikely 損失趨避風險；對大概率損失和 unlikely 獲利追求風險。 | fact | B4.1-C-024 | B4.1 II | high | pending | draft |
| C-058 | 人們過度高估稀有事件的概率；生動細節干擾準確的風險計算。 | fact | B4.1-C-018 | B4.1 II | high | pending | draft |

## 概念 14：沉沒成本 / 處置效應

| ID | claim | type | source | location | confidence | reviewer | status |
|---|---|---|---|---|---|---|---|
| C-059 | 沉沒成本謬誤：公司明知項目回報不佳仍追加投資，關閉項目相當於承認失敗。 | fact | B4.1-C-019; B4.2-C-056 | B4.1 II; B4.2 第32章 | high | pending | draft |
| C-060 | 董事會替換受困沉沒成本的高管，原因不是新總裁更有能力，而是他沒有前任的心理帳戶。 | inference | B4.2-C-057 | B4.2 第32章 | medium | pending | draft |
| C-061 | 沉沒成本悖論可以被克服；經濟學/商貿學課堂將其作為錯誤理論教授，畢業生更可能放棄注定失敗的項目。 | fact | B4.2-C-058 | B4.2 第32章 | high | pending | draft |
| C-062 | 處置效應：投資者為每隻股票開設心理帳戶，盈利時才關閉（賣盈持虧）。 | fact | B4.1-C-019; B4.2-C-055 | B4.1 II; B4.2 第32章 | high | pending | draft |

## 概念 15：寬框架 vs 窄框架 / 風險政策

| ID | claim | type | source | location | confidence | reviewer | status |
|---|---|---|---|---|---|---|---|
| C-063 | 寬框架 vs 窄框架：綜合考慮多項決策（寬框架）明顯更優，但人們天生偏好窄框架。 | inference | B4.2-C-048; B4.2-C-054 | B4.2 第31章/第32章 | medium | pending | draft |
| C-064 | 風險政策是寬框架的一種形式（如"買保險總選最高免賠額"、"絕不買延長保險"）。 | idea | B4.2-C-051; B4.1-C-023 | B4.2 第31章; B4.1 II | high | pending | draft |
| C-065 | 外部意見與風險政策是補救兩種相互對立偏見的辦法；機構應同時採用。 | idea | B4.2-C-052; B4.1-C-023 | B4.2 第31章; B4.1 II | high | pending | draft |
| C-066 | 部門經理各自採取損失厭惡的做法 → 後果是機構不敢冒險；執行總裁採用寬框架才能讓所有人冒險。 | inference | B4.2-C-047; B4.2-C-053 | B4.2 第31章 | medium | pending | draft |

## 概念 16：直覺 vs 公式演算法 (何時可信任專家直覺)

| ID | claim | type | source | location | confidence | reviewer | status |
|---|---|---|---|---|---|---|---|
| C-067 | 在低效度環境中，公式/演算法預測通常勝過專家判斷；至今無令人信服的例外。 | fact | B4.2-C-024 | B4.2 第21章 | high | pending | draft |
| C-068 | 只要公式能替代人工判斷，至少應考慮使用演算法。 | idea | B4.2-C-025 | B4.2 第21章 | high | pending | draft |
| C-069 | 主觀自信不是直覺準確性的可靠指標："當有人告訴你應相信他們判斷時，不要相信他們，也不要相信自己。" | inference | B4.2-C-026; B4.1-C-011 | B4.2 第22章; B4.1 I | high | pending | draft |
| C-070 | 直覺只在兩種條件下可信：環境有足夠規律可循，且專家有長期訓練學習這些規律的機會。 | idea | B4.2-C-027 | B4.2 第22章 | high | pending | draft |
| C-071 | 反饋品質和速度決定能否培養專業技能；麻醉師能培養有效直覺，放射科醫生則不能。 | fact | B4.2-C-028 | B4.2 第22章 | high | pending | draft |

## 概念 17：記憶自我 vs 經驗自我

| ID | claim | type | source | location | confidence | reviewer | status |
|---|---|---|---|---|---|---|---|
| C-072 | 經驗自我回答"現在疼嗎"，記憶自我回答"總體如何"；決策由記憶自我做出。 | inference | B4-C-045; B4.2-C-062 | B4 Introduction/Part V; B4.2 第35章 | medium | pending | draft |
| C-073 | 峰終定律 + 過程忽視：記憶自我作明顯荒謬選擇，承擔不必要痛苦。 | fact | B4.1-C-025; B4.1-C-026; B4.2-C-063 | B4.1 III; B4.2 第38章 | high | pending | draft |
| C-074 | 記憶自我是 System 2 的一部分；過程忽視與峰終定律歪曲反映真實體驗。 | inference | B4.2-C-064 | B4.2 終章 | medium | pending | draft |
| C-075 | 聚焦錯覺的實質是 WYSIATI：所關注的生活任意面向會在整體評估中被放大。 | inference | B4.2-C-065; B4.1-C-027 | B4.2 第37章; B4.1 III | medium | pending | draft |

## 概念 18：組織決策改善

| ID | claim | type | source | location | confidence | reviewer | status |
|---|---|---|---|---|---|---|---|
| C-076 | 組織做出更好的決策，因為它們行動更慢並使用檢查表；個人也可放慢並啟動 System 2。 | fact | B4.1-C-028 | B4.1 A Final Word | high | pending | draft |
| C-077 | 提升機構決策品質的方法：制定檢查表、參考類別預測、事前驗屍、構建決策關鍵階段的品質控制文化。 | idea | B4.2-C-066 | B4.2 終章 | high | pending | draft |
| C-078 | 機構比個人更容易做規避錯誤的決策：因為人多思慢、有能力按規則行事；決策階段應像工廠品質控制一樣被檢查。 | idea | B4.2-C-067 | B4.2 終章 | high | pending | draft |
| C-079 | 觀察別人比觀察自己更容易發現"雷區"。 | inference | B4-C-050; B4.1-C-033; B4.2-C-069 | B4 Introduction; B4.1 Introduction; B4.2 終章 | high | pending | draft |
| C-080 | "飲水機旁閒談"越多，決策可能更好；當批評者經驗豐富且公平正直，決策按過程而非結果被評判時，決策更好。 | idea | B4.2-C-070; B4.1-C-033; B4-C-046 | B4.2 終章; B4.1 Introduction; B4 Introduction | high | pending | draft |
| C-081 | 偏誤無法總是被避免，因為 System 2 可能對錯誤毫無察覺；持續警覺不切實際。 | fact | B4-C-006; B4.1-C-032 | B4 Part I Ch.1; B4.1 Glossary | high | pending | draft |
| C-082 | 最佳做法是妥協：識別容易犯錯的情境，在賭注高時更努力避免重大錯誤。 | idea | B4-C-005 | B4 Part I Ch.1 | high | pending | draft |
| C-083 | 明確預先預期遺憾可減輕其後續效果。 | idea | B4.1-C-020 | B4.1 II | medium | pending | draft |

## 概念 19：回歸均值

| ID | claim | type | source | location | confidence | reviewer | status |
|---|---|---|---|---|---|---|---|
| C-084 | 回歸均值：每當兩個分數的相關性不完美時，就會出現回歸均值；對它的因果解釋通常是錯的。 | fact | B4-C-028 | B4 Part II Ch.17 | high | pending | draft |
| C-085 | 直覺預測匹配證據評估且非回歸性，產生過度自信、過度極端的預測。 | fact | B4-C-030 | B4 Part II Ch.18 | high | pending | draft |
| C-086 | 糾正直覺預測：以合理的基礎比率為錨，然後只朝直覺預測方向移動一部分（基於相關性）。 | idea | B4-C-031 | B4 Part II Ch.18 | high | pending | draft |

---

## 注意事項

1. **B4 OCR 品質**：B4 原文 PDF 轉 Markdown 有零星 OCR 錯誤（斷字、混入 tab 字元）。引用前應對照紙本書驗證精確措辭。
2. **B4.1 是非官方摘要**：B4.1 標記為 `fact` 的條目是摘要者對 Kahneman 觀點的重述，非 Kahneman 原文。下游 skill 引用時應優先交叉比對 B4 原文。
3. **B4 覆蓋範圍**：B4 提取目前覆蓋至 Part III Ch.19。Part III Ch.22-24（事前驗屍、外部視角、規劃謬誤）、Part IV（前景理論、稟賦效應、四重模式、框架）、Part V（兩個自我）的逐字引用主要來自 B4.2 中譯本。建議第二輪補提取 B4 原文這些章節以升級證據品質。
4. **三國案例**：本 ledger 不含三國案例。三國案例須獨立標記 `Romance of the Three Kingdoms`/`Records of the Three Kingdoms`/modern research/`inference`，不得與本 ledger 混淆。
5. **所有條目 status=`draft`**：在人工確認前，不得用於 `reviewed` 以上之 skill。
