# WSA2025 開發指南

## 快速開始

```bash
# 安裝依賴
yarn install

# 啟動開發伺服器
yarn dev

# 建置專案
yarn build

# 預覽建置結果
yarn preview
```

## 開發流程

### 1. 開發前準備

確認 Git hooks 已正確設置：

```bash
# Husky 會在 yarn install 時自動設置
# 如果沒有，可以手動執行：
yarn prepare
```

### 2. 開發與測試

```bash
# 啟動開發伺服器（含熱重載）
yarn dev

# 執行單元測試
yarn test:unit

# 執行 E2E 測試
yarn test:e2e

# 執行 ESLint 檢查並自動修復
yarn lint

# 執行 Prettier 格式化
yarn format

# TypeScript 型別檢查
yarn type-check
```

### 3. 提交代碼

#### 自動檢查

當你執行 `git commit` 時，會自動觸發以下檢查：

1. **測試資料檢查** - 檢查是否有 console.log、debugger 等測試代碼
2. 如果檢查失敗，commit 會被阻止

**檢查範圍**:
- ✅ 檢查: `.ts`, `.tsx`, `.vue`, `.js`, `.jsx` 檔案
- ❌ 排除: `.md` 文件檔案、`node_modules/`、`dist/` 等

```bash
# 正常提交流程
git add .
git commit -m "feat: add new feature"
# ✅ 自動執行檢查

# 如果檢查失敗
❌ Push blocked: Please fix the errors above before pushing

# 修復問題後重新提交
git add .
git commit -m "feat: add new feature"
# ✅ 檢查通過
```

#### 手動檢查

在 commit 前手動執行檢查：

```bash
yarn check:test-data
```

#### 跳過檢查 (不建議)

僅在緊急情況下使用：

```bash
git commit --no-verify -m "emergency fix"
```

### 4. 推送代碼

```bash
# 推送到遠端
git push origin your-branch

# 推送並設置上游分支
git push -u origin your-branch
```

## 代碼規範

### 檔案命名

- **View 組件**: `{PageName}View.vue` (如 `HomeView.vue`)
- **頁面相關組件**: `{PageName}{Feature}.vue` (如 `HomeBanner.vue`)
- **模組組件**: `{ModuleName}/{Component}.vue` (如 `Media/LiveStream.vue`)

### 樣式規範

使用 rem 單位進行響應式設計：

```scss
// ✅ 好的做法
.container {
  width: 4rem;      // 400px on 1440px viewport
  padding: 0.32rem; // 32px
  
  @include tablet() {
    width: 3rem;    // 針對 tablet 調整
  }
  
  @include mobile() {
    width: 2rem;    // 針對 mobile 調整
  }
}

// ❌ 避免使用固定 px
.container {
  width: 400px;     // 不會響應式縮放
}
```

### 翻譯規範

大部分文案使用 i18n 系統：

```vue
<template>
  <!-- ✅ 一般文案 -->
  <h1>{{ $t('home.title') }}</h1>
  
  <!-- ✅ 帶參數的翻譯 -->
  <p>{{ $t('home.welcome', { name: userName }) }}</p>
</template>
```

特殊情況（新聞、交通資訊）參考 [I18N_COMPONENT_MAPPING.md](./I18N_COMPONENT_MAPPING.md)

### 避免的寫法

以下寫法會被 pre-commit hook 阻止：

```typescript
// ❌ 會被阻止
console.log('debug info')
debugger
// TEST DATA
// DEMO CODE

// ✅ 允許的 console（錯誤日誌）
// eslint-disable-next-line no-console
console.error('Critical error:', error)

// ⚠️ 會警告但不阻止
// TODO: 待優化
// FIXME: 修復此問題
```

## 測試

### 單元測試

```bash
# 執行所有測試
yarn test:unit

# 監聽模式（開發時使用）
yarn test:unit --watch

# 生成覆蓋率報告
yarn test:unit --coverage
```

### E2E 測試

```bash
# 在 headless 模式執行
yarn test:e2e

# 開啟 Cypress UI（開發模式）
yarn test:e2e:dev
```

## 建置與部署

### 開發環境建置

```bash
yarn build
```

### 生產環境建置

```bash
yarn build-live
```

### 部署到 GitHub Pages

```bash
yarn deploy-gh-pages
```

## 疑難排解

### Husky hooks 沒有執行

```bash
# 重新設置 Husky
yarn prepare

# 確認 hook 檔案有執行權限
chmod +x .husky/pre-commit
```

### 型別錯誤

```bash
# 執行型別檢查查看詳細錯誤
yarn type-check
```

### 樣式問題

```bash
# 檢查 SCSS 編譯錯誤
# 查看終端輸出的錯誤訊息

# 確認是否正確引入 mixins
@use '@/assets/styles/mixins.scss' as *;
```

### 翻譯缺失

如果看到 missing translation 警告：

1. 檢查 `src/i18n/tw.ts` 和 `src/i18n/en.ts`
2. 確認兩個語言檔案都有該 key
3. 重新啟動開發伺服器

## Git Workflow

### 分支策略

```bash
# 主分支
main/master     - 生產環境代碼

# 開發分支
develop         - 開發環境代碼

# 功能分支
feature/xxx     - 新功能開發
bugfix/xxx      - Bug 修復
hotfix/xxx      - 緊急修復
```

### Commit Message 格式

```bash
# 格式
<type>: <subject>

# 類型
feat:     新功能
fix:      Bug 修復
docs:     文件更新
style:    代碼格式（不影響功能）
refactor: 重構
test:     測試相關
chore:    建置工具或輔助工具

# 範例
feat: add news article component
fix: resolve translation key missing issue
docs: update i18n mapping documentation
refactor: simplify traffic data structure
```

## 相關文件

- [I18N 組件對照表](./I18N_COMPONENT_MAPPING.md) - 翻譯與組件對應關係
- [測試資料檢查說明](./scripts/README.md) - Pre-commit hook 詳細說明
- [README.md](./README.md) - 專案概述

## 常見問題

### Q: 如何新增新頁面？

1. 在 `src/views/` 建立 View 組件
2. 在 `src/components/` 建立相關組件
3. 在 `src/router/index.ts` 新增路由
4. 在 `src/i18n/tw.ts` 和 `src/i18n/en.ts` 新增翻譯

### Q: 如何新增新聞文章？

參考 [I18N_COMPONENT_MAPPING.md - newsArticle 組件](./I18N_COMPONENT_MAPPING.md#1-newsarticle-組件-新聞文章)

### Q: 如何修改交通資訊？

參考 [I18N_COMPONENT_MAPPING.md - HostTraffic 組件](./I18N_COMPONENT_MAPPING.md#2-hosttraffic-組件-交通資訊)

### Q: rem 單位如何換算？

```
rem 值 = 設計稿 px 值 / 100

範例：
設計稿 400px → 4rem
設計稿 32px → 0.32rem
```

詳細說明參考 [I18N_COMPONENT_MAPPING.md - 樣式系統](./I18N_COMPONENT_MAPPING.md#樣式系統說明)

---

**需要協助？** 請聯繫開發團隊或查看相關文件。

