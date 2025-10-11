# Pre-commit Check Script

這個腳本會在 commit 前自動檢查代碼中是否有測試資料、debug 代碼等不應該被提交的內容。

## 自動檢查項目

### 錯誤 (Errors) - 會阻止 commit

1. **console.log 語句**
   - 檢測: `console.log()`, `console.debug()`, `console.info()`, `console.warn()`, `console.error()`
   - 例外: 有 `eslint-disable` 註解的行
   
2. **debugger 語句**
   - 檢測: `debugger` 關鍵字
   
3. **測試/Demo 資料標記**
   - 檢測: `// TEST DATA`, `// DEMO CODE`, `/* MOCK DATA */` 等註解

### 警告 (Warnings) - 允許 commit 但會提醒

1. **TODO/FIXME 註解**
   - 檢測: `// TODO:`, `// FIXME:` 註解
   
2. **未使用的 imports**
   - 檢測: 標記為 `// unused` 的 import 語句

## 使用方式

### 自動檢查 (推薦)

安裝完成後，每次 `git commit` 時會自動執行檢查：

```bash
git add .
git commit -m "your message"
# 腳本會自動執行檢查
```

### 手動檢查

在 commit 之前手動執行檢查：

```bash
# 使用 npm/yarn script
yarn check:test-data

# 或直接執行腳本
node scripts/check-test-data.js
```

## 檢查範圍

### 包含的檔案類型
- `.ts` - TypeScript
- `.tsx` - TypeScript + JSX
- `.vue` - Vue 組件
- `.js` - JavaScript
- `.jsx` - JavaScript + JSX

### 排除的檔案/目錄
- `node_modules/` - 依賴套件
- `dist/` - 建置輸出
- `.git/` - Git 目錄
- `coverage/` - 測試覆蓋率報告
- `*.md` - **所有 Markdown 檔案（文件檔案不檢查）**
- `README` / `CHANGELOG` - 說明文件

## 輸出範例

### ✅ 通過檢查
```
🔍 Checking for test data and debug code...

Checking 5 file(s)...

✅ All checks passed!
```

### ❌ 發現錯誤
```
🔍 Checking for test data and debug code...

Checking 3 file(s)...

📄 src/components/TestComponent.vue
  ❌ Line 42: console.log statements
     console.log('debug info')
     Remove console.log statements before pushing

📄 src/views/HomeView.vue
  ❌ Line 15: debugger statements
     debugger
     Remove debugger statements before pushing

==================================================

❌ Push blocked: Please fix the errors above before pushing
```

### ⚠️ 發現警告
```
🔍 Checking for test data and debug code...

Checking 2 file(s)...

📄 src/utils/helper.ts
  ⚠️  Line 23: TODO/FIXME comments
     // TODO: Optimize this function
     Consider resolving TODO/FIXME comments

==================================================

⚠️  Warnings found but push is allowed
```

## 例外處理

如果某些 console.log 是必要的（例如錯誤日誌），可以加上 eslint-disable 註解：

```typescript
// 這會被阻止
console.log('debug info')

// 這會被允許
// eslint-disable-next-line no-console
console.error('Critical error:', error)
```

## 自訂檢查規則

如需修改檢查規則，編輯 `scripts/check-test-data.js` 中的 `rules` 陣列：

```javascript
const rules = [
  {
    name: 'rule name',           // 規則名稱
    pattern: /regex/g,           // 檢查的正則表達式
    exclude: [/exclude_regex/],  // 例外情況 (可選)
    severity: 'error',           // 'error' 或 'warning'
    message: 'help message',     // 提示訊息
  },
  // 新增更多規則...
]
```

## 暫時停用檢查

如果需要暫時跳過檢查（不建議），可以：

```bash
# 跳過所有 git hooks
git commit --no-verify -m "your message"

# 或暫時移除 hook
mv .husky/pre-commit .husky/pre-commit.bak
```

## 疑難排解

### 腳本沒有執行

1. 確認 Husky 已正確安裝：
   ```bash
   yarn prepare
   ```

2. 確認 hook 檔案有執行權限：
   ```bash
   chmod +x .husky/pre-commit
   chmod +x scripts/check-test-data.js
   ```

### 誤報問題

如果檢查腳本誤報某些正常的代碼，請：
1. 檢查是否可以使用例外註解（如 `eslint-disable`）
2. 修改 `scripts/check-test-data.js` 中的 `exclude` 規則
3. 聯繫團隊討論是否需要調整規則

## CI/CD 整合

此腳本也可以整合到 CI/CD pipeline 中：

```yaml
# GitHub Actions 範例
- name: Check for test data
  run: yarn check:test-data
```

## 相關連結

- [Husky 文件](https://typicode.github.io/husky/)
- [Git Hooks 說明](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)

