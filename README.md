# wsa2025

# 新聞新增步驟

## 1. 新增新聞縮圖
- 將圖片放置於 `public/images/news` 目錄下
- 建議使用統一的命名規則，如 `news_XX.jpg`

## 2. 更新首頁新聞列表
- 編輯 `src/components/newsArticle/newsTitle.ts` 檔案
- 新增新聞項目（較新的文章 index 放在前面）
- 確保 title 和 date 正確設定

## 3. 新增新聞內容
- 在 `src/components/newsArticle` 目錄下建立 `NewsXX.vue` 檔案
  - 請使用大寫開頭的命名方式 (例如: `News01.vue`)
  - 文件內容請包含標題和具體內容
- 在 `src/views/NewsInnerView.vue` 中引入並註冊新元件:
  ```javascript
  import NewsXX from '@/components/newsArticle/NewsXX.vue';

  const components: Record<number, any> = {
    // 在這裡新增你的組件，index 需與 newsTitle.ts 對應
    XX: NewsXX,
  }
  ```

## 注意事項
- 確保所有引用路徑正確
- 圖片建議優化大小，以提高頁面載入速度
- 若遇到 TypeScript 路徑解析問題，可能需要重啟 TS server 或清除快取


This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
yarn test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
yarn build
yarn test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
