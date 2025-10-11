# 檔案檢查範圍說明

## 會被檢查的檔案 ✅

| 檔案類型 | 副檔名 | 說明 |
|---------|-------|------|
| TypeScript | `.ts` | TypeScript 原始碼 |
| TypeScript + JSX | `.tsx` | React/JSX with TypeScript |
| Vue 組件 | `.vue` | Vue 單檔案組件 |
| JavaScript | `.js` | JavaScript 原始碼 |
| JavaScript + JSX | `.jsx` | React/JSX with JavaScript |

## 不會被檢查的檔案 ❌

| 檔案類型 | 副檔名/路徑 | 原因 |
|---------|-----------|------|
| Markdown | `*.md` | 文件檔案，可能包含範例代碼 |
| README | `README`, `README.md` | 說明文件 |
| CHANGELOG | `CHANGELOG`, `CHANGELOG.md` | 版本記錄 |
| node_modules | `node_modules/**` | 第三方套件 |
| 建置輸出 | `dist/**` | 編譯後的檔案 |
| Git 目錄 | `.git/**` | Git 內部檔案 |
| 測試覆蓋率 | `coverage/**` | 測試報告 |
| 檢查腳本 | `scripts/check-test-data.js` | 腳本自身 |

## 範例說明

### ✅ 會被檢查

```
src/
├── components/
│   ├── Header.vue          ✅ 會檢查
│   └── Footer.vue          ✅ 會檢查
├── utils/
│   ├── helper.ts           ✅ 會檢查
│   └── format.js           ✅ 會檢查
└── views/
    └── HomeView.vue        ✅ 會檢查
```

### ❌ 不會被檢查

```
/
├── README.md               ❌ 不檢查（文件）
├── I18N_COMPONENT_MAPPING.md  ❌ 不檢查（文件）
├── DEVELOPMENT.md          ❌ 不檢查（文件）
├── node_modules/           ❌ 不檢查（第三方套件）
├── dist/                   ❌ 不檢查（建置輸出）
└── scripts/
    ├── check-test-data.js  ❌ 不檢查（腳本自身）
    └── README.md           ❌ 不檢查（文件）
```

## 為什麼 Markdown 檔案不檢查？

Markdown 檔案（`.md`）通常是文件檔案，會包含：

1. **代碼範例** - 用來說明如何使用，而非實際執行的代碼
2. **錯誤示範** - 展示不該這樣寫的範例
3. **教學內容** - 可能包含 `console.log` 等教學用代碼

例如：

````markdown
# 使用說明

不要這樣寫：
```javascript
console.log('debug')  // 這只是範例，不會被檢查
debugger              // 這也不會被檢查
```

應該這樣寫：
```javascript
logger.info('正式的日誌')
```
````

## 如何自訂檢查範圍

編輯 `scripts/check-test-data.js`：

```javascript
// 包含的檔案類型（會檢查）
const includePatterns = ['.ts', '.tsx', '.vue', '.js', '.jsx']

// 排除的檔案/目錄（不檢查）
const excludePatterns = [
  'node_modules/',
  'dist/',
  '.git/',
  'coverage/',
  'scripts/check-test-data.js',
  '*.md',      // 所有 Markdown
  'README',    // README 檔案
  'CHANGELOG', // CHANGELOG 檔案
]
```

### 新增要檢查的檔案類型

```javascript
// 例如要檢查 .json 檔案
const includePatterns = ['.ts', '.tsx', '.vue', '.js', '.jsx', '.json']
```

### 新增要排除的檔案

```javascript
const excludePatterns = [
  // ... 現有的排除規則
  '*.test.ts',    // 排除測試檔案
  'temp/',        // 排除暫存目錄
  'docs/',        // 排除文件目錄
]
```

## 常見問題

### Q: 為什麼我的 TypeScript 檔案沒被檢查？

A: 確認檔案：
1. 已經 `git add` 到 staging area
2. 副檔名是 `.ts` 或 `.tsx`
3. 不在排除目錄中

### Q: 可以臨時檢查 Markdown 檔案嗎？

A: 可以，修改 `includePatterns`：
```javascript
const includePatterns = ['.ts', '.tsx', '.vue', '.js', '.jsx', '.md']
```

### Q: 如何確認檔案是否會被檢查？

A: 執行測試：
```bash
# 1. 創建測試檔案
echo "console.log('test')" > test.vue
echo "console.log('test')" > test.md

# 2. Stage 檔案
git add test.vue test.md

# 3. 執行檢查
yarn check:test-data

# 結果：
# test.vue ✅ 會被檢查並報錯
# test.md  ❌ 不會被檢查

# 4. 清理
git reset HEAD test.vue test.md
rm test.vue test.md
```

