# Firebase

- status: `configured` (Firestore rules deployed pending)
- role: 互動式網頁的執行層
- stack: TypeScript + Vite + Firebase Hosting／Firestore
- current app: `apps/decision-review/`
- project_id: `my-teaching-tools-ckt520728`
- web_app_id: `1:964306510514:web:920ce74786d0697bb59fab`
- firestore_location: `asia-east1`
- env_file: `apps/decision-review/.env` (gitignored, contains web SDK config)
- env_example: `apps/decision-review/.env.example`

## 連線狀態

- Firebase project: ACTIVE
- Web app: ACTIVE (SDK config in .env)
- Firestore database: exists (default, asia-east1, FIRESTORE_NATIVE)
- Firestore rules: `allow read, write: if false` (deny all — needs auth integration before app can write)
- Hosting: configured in `firebase.json` (`public: dist`)
- Auth: not yet configured

## 安全提醒

- Firebase web SDK config（apiKey 等）是公開的客戶端設定，安全依賴 Firestore rules 與 Auth，不依賴隱藏 config。
- `.env` 已被 `.gitignore` 排除，不會提交到 GitHub。
- 目前 Firestore rules 拒絕所有存取。app 在缺少有效 Auth 時會 fallback 到 mock store。
- 未配置 Auth 前，不宣稱 Firebase 連線可用於使用者資料儲存。

## 下一步

1. 配置 Firebase Authentication（至少 anonymous auth）。
2. 更新 Firestore rules 允許已認證使用者寫入 `decision-reviews` collection。
3. 部署 Hosting: `firebase deploy --only hosting`。
4. 部署 Firestore rules: `firebase deploy --only firestore:rules`。
