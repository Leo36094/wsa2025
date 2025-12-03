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

---

# 專案架構文檔

## 技術棧

- **前端框架**: Vue 3 (Composition API)
- **語言**: TypeScript
- **路由**: Vue Router 4
- **狀態管理**: Pinia
- **構建工具**: Vite
- **樣式**: SCSS + Tailwind CSS
- **多語系**: Vue I18n
- **動畫**: GSAP, AOS, Locomotive Scroll
- **UI 組件**: Radix Vue

## 頁面與路由對應

### 主要路由表

| 路徑 | 名稱 | 組件 | 說明 |
|------|------|------|------|
| `/` | home | `HomeView.vue` | 首頁 |
| `/host` | host | `HostView.vue` | 主辦城市介紹 |
| `/competition` | competition | `CompetitionView.vue` | 競賽資訊 |
| `/news` | news | `NewsView.vue` | 新聞列表 |
| `/news/:id` | news-detail | `NewsInnerView.vue` | 新聞詳情（動態路由） |
| `/skills` | skills | `SkillsView.vue` | 技能分類（含子路由） |
| `/get-involved` | get-involved | `GetInvolvedView.vue` | 參與資訊 |
| `/media` | media | `MediaView.vue` | 媒體中心 |
| `/:pathMatch(.*)*` | not-found | `NotFoundView.vue` | 404 頁面 |

### Skills 子路由

Skills 頁面包含 7 個子路由，採用懶加載：

| 路徑 | 組件 | 說明 |
|------|------|------|
| `/skills/categories` | `SkillsCategoriesView.vue` | 技能分類總覽（預設） |
| `/skills/manufacturing_and_engineering_technology` | `SkillsManufacturingView.vue` | 製造與工程技術 |
| `/skills/construction_and_building_technology` | `SkillsConstructionView.vue` | 營造與建築技術 |
| `/skills/information_technology` | `SkillsITView.vue` | 資訊科技 |
| `/skills/logistics` | `SkillsLogisticView.vue` | 物流 |
| `/skills/social_and_personal_services` | `SkillsSocialView.vue` | 社會與個人服務 |
| `/skills/arts` | `SkillsArtView.vue` | 藝術 |
| `/skills/juniors` | `SkillsJuniorsView.vue` | 青年組 |

## 頁面與組件關係

### HomeView (首頁)
- `HomeBanner.vue` - 橫幅與標題
- `HomeCountdown.vue` - 倒數計時
- `HomeGallery.vue` - 相片藝廊
- `HomeQuickFact.vue` - 快速資訊
- `HomeYoutubeVideo.vue` - YouTube 影片
- `HomeNews.vue` - 最新消息
- `HomeSponsors.vue` - 贊助商

### HostView (主辦城市)
- `HostBanner.vue` - 橫幅
- `HostIntroduction.vue` - 介紹
- `HostTaipei.vue` - 台北資訊
- `HostLocation.vue` - 位置
- `HostTraffic.vue` - 交通資訊
- `HostClimate.vue` - 氣候
- `HostCurrency.vue` - 貨幣
- `HostPower.vue` - 電力
- `HostTourist.vue` - 觀光景點
- 等...

### CompetitionView (競賽)
- `CompetitionBanner.vue` - 橫幅與場館圖
- `CompetitionSchedule.vue` - 賽程表
- `CompetitionCountryBySkill.vue` - 各國參賽選手

### MediaView (媒體中心)
- `Media/BehindTheScenes.vue` - 幕後花絮
- `Media/LiveStream.vue` - 直播
- `Media/VOD.vue` - 隨選影片
- `Media/Regulation.vue` - 媒體規範

### 共用組件
- `PageHeader.vue` - 頁首導航列
- `PageFooter.vue` - 頁尾
- `BaseTitle.vue` - 標題組件
- `FilterDropdown.vue` - 篩選下拉選單
- `Flag.vue` - 國旗組件

## 圖片資源管理

### 存放位置
所有公開圖片資源存放於 `public/images/` 目錄下，分類如下：

```
public/images/
├── competition/     # 競賽相關圖片（場館平面圖等）
├── flags/          # 國旗 SVG（98 個國家）
├── host/           # 主辦城市圖片
├── media/          # 媒體照片（850+ 張）
├── news/           # 新聞縮圖
├── sponsors/       # 贊助商 Logo
├── wsa/            # WSA 官方圖片
└── getInvolved/    # 參與資訊圖片
```

### 圖片存取方式

在組件中使用 `import.meta.env.BASE_URL` 前綴來存取公開圖片：

```vue
<template>
  <img :src="`${import.meta.env.BASE_URL}images/wsa/banner.jpg`" alt="Banner" />
</template>

<script setup lang="ts">
// 動態生成圖片 URL
const bannerImages = Array.from(
  { length: 6 },
  (_, i) => `${import.meta.env.BASE_URL}images/wsa/banner_${i + 1}.jpg`
)

// 多語系圖片
const lang = locale.value === 'en' ? 'en' : 'zh'
const venueImage = `${import.meta.env.BASE_URL}images/competition/hall_${lang}.png`
</script>
```

### 環境變數說明

`BASE_URL` 根據建置環境自動設定（見 `vite.config.ts`）：

```typescript
base: process.env.BUILD_ENV === 'live' ? '/' : '/wsa2025/'
```

- **開發環境** (`yarn dev`): `/wsa2025/`
- **正式環境** (`BUILD_ENV=live yarn build`): `/`

## RWD 切版規範

### rem 單位系統

專案採用 **100px = 1rem** 的換算系統，透過 `setHTML` mixin 自動設定：

```scss
// src/assets/styles/mixins.scss
@mixin setHTML {
  font-size: 100px;  // 基準: 1rem = 100px (1440px 寬度)
  
  @media only screen and (max-width: 1440px) {
    font-size: calc(100vw / 1440 * 100);  // 自動縮放
  }
  @media only screen and (max-width: 1024px) {
    font-size: calc(100vw / 744 * 100);
  }
  @media only screen and (max-width: 744px) and (orientation: portrait) {
    font-size: calc(100vw / 320 * 100);
  }
}
```

### 換算公式

**設計稿 px 值 → 代碼 rem 值**:

```
rem 值 = 設計稿 px 值 / 100
```

**範例**:
```scss
// 設計稿 400px → 4rem
width: 4rem;

// 設計稿 180px → 1.8rem (18px)
font-size: 0.18rem;

// 設計稿 32px → 0.32rem
padding: 0.32rem;
```

### 響應式斷點

斷點定義於 `src/assets/styles/variables.scss`：

```scss
$queryLG: 1440;  // Desktop (設計稿基準)
$queryMD: 1024;  // Tablet / Landscape Mobile
$querySM: 744;   // Mobile Portrait
$queryXS: 320;   // Small Mobile
```

### RWD Mixins

專案提供兩個主要的 RWD mixins：

```scss
// Tablet 以下 (≤ 1024px)
@include tablet() {
  padding: 0.24rem;
}

// Mobile Portrait (≤ 744px)
@include mobile() {
  padding: 0.16rem;
  font-size: 0.14rem;
}
```

### 實際應用範例

```vue
<template>
  <div class="banner">
    <h1 class="title">標題</h1>
    <p class="description">描述文字</p>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  @include withContainer();  // 最大寬度 14.4rem (1440px)
  padding: 0.32rem;  // Desktop: 32px
  
  @include tablet() {
    padding: 0.24rem;  // Tablet: 24px
  }
  
  @include mobile() {
    padding: 0.16rem;  // Mobile: 16px
  }
}

.title {
  font-size: $title-font-size;  // 0.4rem (40px)
  
  @include mobile() {
    font-size: $title-font-size-m;  // 0.36rem (36px)
  }
}

.description {
  font-size: 0.18rem;  // 18px
  line-height: 1.5;
  
  @include mobile() {
    font-size: 0.16rem;  // 16px
  }
}
</style>
```

## 全局樣式配置

### 自動注入

`mixins.scss` 和 `variables.scss` 已透過 Vite 全局注入，**所有 `.vue` 和 `.scss` 檔案中可直接使用，無需手動引入**。

配置位置：`vite.config.ts`

```typescript
css: {
  preprocessorOptions: {
    scss: {
      additionalData: `
        @use "@/assets/styles/variables.scss" as *;
        @use "@/assets/styles/mixins.scss" as *;
      `
    }
  }
}
```

### 常用變數

#### 顏色變數 (`variables.scss`)

```scss
$main-bg: #18475b;        // 主背景色（深藍綠）
$white-bg: #f3f4f5;       // 白色背景
$green-primary: #c8e14b;  // 主要綠色（品牌色）
$black-primary: #101e24;  // 主要黑色（文字色）
```

#### 字體大小變數

```scss
$title-font-size: 0.4rem;       // 標題 Desktop (40px)
$title-font-size-m: 0.36rem;    // 標題 Mobile (36px)
$desc-font-size: 0.28rem;       // 描述 Desktop (28px)
$desc-font-size-m: 0.24rem;     // 描述 Mobile (24px)
$supplement-font-size: 0.2rem;  // 補充文字 (20px)
$supplement-font-size-m: 0.16rem; // 補充文字 Mobile (16px)
```

### 常用 Mixins

#### 佈局相關

```scss
// 容器（最大寬度 1440px，自動置中）
@include withContainer();

// Flex 置中
@include flexCenter(column);  // 垂直方向
@include flexCenter();        // 水平方向

// 完整尺寸
@include fullsize();  // width: 100%; height: 100%;

// 絕對定位覆蓋
@include fullcover();  // position: absolute; top/bottom/left/right: 0;
```

#### 文字處理

```scss
// 單行省略
@include ellipsis(e);

// 多行省略
@include ellipsis-line(3);  // 3 行後省略

// 文字樣式
@include textMixin($color, $size, $weight, $transform, $decoration, $align, $style);
```

#### 背景圖

```scss
// 背景圖置中
@include bgCenter(cover);  // background-position: center; background-size: cover;

// 完整背景圖
@include fullscreenBg('/path/to/image.jpg');
```

#### 其他實用 Mixins

```scss
// 自訂滾動條
@include customScrollBar($thumb: $green-primary, $track: $white-bg);

// 漸層文字
@include textGradient(90deg, #c8e14b, #18475b);

// Z-index 管理
@include zIndex(modal);  // 使用預定義的 z-index 值

// 列表樣式（用於富文本內容）
@include listStyle();
```

## 組件結構

### 分類說明

#### `/src/components/Media/*` - 媒體相關
- `BehindTheScenes.vue` - 幕後花絮
- `LiveStream.vue` - 直播
- `VOD.vue` - 隨選影片
- `CompetitionPhotosGrid.vue` - 競賽照片網格
- `WorkPhotosGrid.vue` - 作品照片網格
- `ClosingCeremonyGrid.vue` - 閉幕典禮照片
- `Regulation.vue` - 媒體規範

#### `/src/components/newsArticle/*` - 新聞文章
- `newsTitle.ts` - 新聞標題與元資料
- `News01.vue`, `News02.vue` - 各則新聞內容組件
- `YTVideo.vue` - YouTube 影片嵌入

#### `/src/components/HostTraffic/*` - 交通資訊
- `MRTSection.vue` - 捷運資訊
- `HSRSection.vue` - 高鐵資訊
- `BusSection.vue` - 公車資訊
- `BikeSection.vue` - 自行車資訊
- `InfoBlock.vue` - 資訊區塊
- `Text.vue` - 文字組件

#### `/src/components/CompetitionCountry/*` - 競賽國家資料
- `Competitors.vue` - 參賽選手列表
- `Members.vue` - 成員資訊
- `constants.ts` - 常數定義

#### `/src/components/icons/*` - 圖標組件
- `IconArt.vue`, `IconIT.vue`, `IconManufacturing.vue` - 各技能分類圖標
- `IconLogo.vue` - Logo 圖標
- `IconClose.vue` - 關閉圖標
- `enum.ts` - 圖標枚舉定義

#### `/src/components/ui/*` - UI 基礎組件
- `button/Button.vue` - 按鈕組件
- `pagination/*` - 分頁組件系列

### 共用組件

- `BaseLoading.vue` - 載入動畫
- `BaseTitle.vue` - 標題組件
- `PageHeader.vue` - 頁首導航
- `PageFooter.vue` - 頁尾
- `PageTab.vue` - 頁籤
- `FilterDropdown.vue` - 篩選下拉選單
- `Flag.vue` - 國旗顯示
- `TextBlock.vue` - 文字區塊

## 開發指南

### 新增頁面流程

1. 在 `src/views/` 建立新的 Vue 組件
2. 在 `src/router/index.ts` 註冊路由
3. 使用懶加載（非首頁）：`component: () => import('../views/YourView.vue')`
4. 更新導航選單（`PageHeader.vue`）

### 樣式開發流程

1. 使用 `<style lang="scss" scoped>`
2. 直接使用 `$變數` 和 `@include mixin()` （已全局注入）
3. 遵循 rem 換算規則（設計稿 px / 100）
4. 使用 `@include tablet()` 和 `@include mobile()` 處理響應式

### 多語系開發

使用 Vue I18n：

```vue
<template>
  <h1>{{ $t('home.title') }}</h1>
  <p v-html="$t('home.content')"></p>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// 切換語系
const switchLanguage = () => {
  locale.value = locale.value === 'tw' ? 'en' : 'tw'
}
</script>
```

語系檔位置：
- `src/i18n/tw.ts` - 繁體中文
- `src/i18n/en.ts` - 英文

## 相關文檔

- [I18N 組件對應表](I18N_COMPONENT_MAPPING.md) - 詳細的多語系開發指南
- [開發文檔](DEVELOPMENT.md) - 額外的開發說明
- [腳本說明](scripts/README.md) - 輔助腳本使用說明
