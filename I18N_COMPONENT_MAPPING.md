# WSA2025 專案文件

## 目錄
- [專案概述](#專案概述)
- [i18n 翻譯對照表](#i18n-翻譯對照表)
- [樣式系統說明](#樣式系統說明)
- [如何更新翻譯](#如何更新翻譯)

---

## 專案概述

WorldSkills Asia Taipei 2025 官方網站 - Vue 3 + TypeScript + SCSS (rem-based)

### 核心技術
- Vue 3 (Composition API) + TypeScript
- Vue Router + Vue I18n (雙語系統)
- SCSS with rem-based responsive design

### 專案結構
```
src/
├── views/          # 頁面組件 (@views/)
├── components/     # UI 組件 (@components/)
├── i18n/          # 翻譯檔案 (tw.ts, en.ts)
├── router/        # 路由設定
├── assets/styles/ # SCSS (mixins.scss, variables.scss)
└── composables/   # 可複用邏輯
```

### 組件命名規則
1. **View 組件**: `{頁面名稱}View.vue` (如 `HomeView.vue`)
2. **頁面相關組件**: `{View名稱}{功能}.vue` (如 `HomeBanner.vue`)
3. **獨立模組**: 建立資料夾 (如 `Media/LiveStream.vue`)
4. **通用組件**: 無前綴或 `Page` 前綴 (如 `PageHeader.vue`)

---

## i18n 翻譯對照表

### 翻譯檔案
- **繁中**: `src/i18n/tw.ts`
- **英文**: `src/i18n/en.ts`

### 頁面與組件對照

| i18n Key 前綴 | View | 主要組件 | 說明 |
|--------------|------|---------|------|
| `header.*` | - | PageHeader, LangButton, NavMenubar | 導航列與語言切換 |
| `footer.*` | - | PageFooter | 頁尾資訊 |
| `page_tabs.*` | - | PageTab | 各頁面的分頁標籤 |
| `home.*` | HomeView | HomeBanner, HomeCountdown, HomeGallery, HomeQuickFact, HomeNews, HomeSponsors | 首頁所有區塊 |
| `host.*` | HostView | HostBanner, HostIntroduction, HostCurrency, HostPower, HostClimate, HostSkill, HostWDA, HostLocation, HostTraffic, HostMedic, HostTourist, HostVegan, HostMuslim | 關於主辦的所有內容 |
| `competition.*` | CompetitionView | CompetitionBanner, CompetitionSchedule, CompetitionCountry | 競賽資訊與日程 |
| `skills.*` | SkillsView (父路由) + 7個子頁面 | SkillsInnerViewTemplate, SkillPanel, SkillTab, SkillSubIcon | 競賽職類內容 |
| `news.*` | NewsView, NewsInnerView | NewsList, newsArticle/* | 最新消息 |
| `involved.*` | GetInvolvedView | GetInvolvedSponsorship, GetInvolvedVisa, GetInvolvedForum, GetInvolvedTour, GetInvolvedNotice | 參與活動相關 |
| `media.*` | MediaView | Media/ThemeAd, Media/OccupationIntro, Media/LiveStream, Media/VOD | 影音專區 |
| `notFound.*` | NotFoundView | - | 404 頁面 |

### Skills 職類命名規則

職類翻譯 key 格式：`skills.{類別}_{職類英文名}`

**類別前綴**:
- `manufacturing_*` - 製造工程技術 (SkillsManufacturingView)
- `construction_*` - 營建技術 (SkillsConstructionView)
- `it_*` - 資訊與通訊技術 (SkillsITView)
- `logistics_*` - 運輸與物流 (SkillsLogisticView)
- `social_*` - 社會與個人服務 (SkillsSocialView)
- `art_*` - 藝術與時尚 (SkillsArtView)
- `juniors_*` - 青少年組 (SkillsJuniorsView)

**範例**:
```typescript
skills: {
  // 職類名稱
  manufacturing_Mechatronics: '機電整合',
  // 職類描述 (加 _copy 後綴)
  manufacturing_Mechatronics_copy: '機電整合在業界簡稱「自動化」...',
  
  it_CloudComputing: '雲端運算',
  it_CloudComputing_copy: '雲端運算是現今產業發展...',
}
```

### Page Tabs 分頁對照

`page_tabs.*` 用於各頁面的子分頁導航 (PageTab.vue)

| 頁面 | tab key 前綴 | 範例 |
|------|-------------|------|
| Host | `host_tab_*` | host_tab_01: '亞洲技能競賽' |
| Competition | `competition_tab_*` | competition_tab_01: '競賽' |
| Get Involved | `involved_tab_*` | involved_tab_01: '贊助商' |
| Media | `media_tab_*` | media_tab_01: '主題廣告' |

---

## 樣式系統說明

### Rem 單位換算系統

**核心概念**: 使用動態根字體大小實現響應式

設定位置：`src/assets/styles/mixins.scss` 的 `setHTML` mixin

```scss
@mixin setHTML {
  font-size: 100px;  // 基準: 1rem = 100px (設計稿 1440px)
  
  @media only screen and (max-width: 1440px) {
    font-size: calc(100vw / 1440 * 100);  // 自動縮放
  }
  // ... 其他斷點
}
```

### 換算公式

**設計稿 px → 代碼 rem**:
```
rem 值 = 設計稿 px 值 / 100
```

**範例**:
```scss
// 設計稿 400px → 4rem
width: 4rem;

// 設計稿 180px → 1.8rem
font-size: 1.8rem;

// 設計稿 32px → 0.32rem
padding: 0.32rem;
```

### 斷點與 Mixins

**斷點** (`variables.scss`):
```scss
$queryLG: 1440;  // Desktop
$queryMD: 1024;  // Tablet
$querySM: 744;   // Mobile Portrait
$queryXS: 320;   // Small Mobile
```

**常用 Mixins**:
```scss
// 響應式斷點
@include tablet() { /* < 1024px */ }
@include mobile() { /* < 744px portrait */ }

// 容器與佈局
@include withContainer();  // 1440px 最大寬度 + 置中
@include flexCenter(column);  // Flex 置中

// 文字處理
@include ellipsis(e);  // 單行省略
@include ellipsis-line(3);  // 3 行省略

// 背景圖
@include bgCenter(cover);  // 背景圖置中覆蓋
```

### 預設變數

**顏色** (`variables.scss`):
```scss
$main-bg: #18475b;        // 主背景色
$white-bg: #f3f4f5;       // 白色背景
$green-primary: #c8e14b;  // 主要綠色
$black-primary: #101e24;  // 主要黑色
```

**字體大小**:
```scss
$title-font-size: 0.4rem;      // 40px (標題)
$title-font-size-m: 0.36rem;   // 36px (標題 mobile)
$desc-font-size: 0.28rem;      // 28px (描述)
$desc-font-size-m: 0.24rem;    // 24px (描述 mobile)
```

### 樣式開發範例

```vue
<template>
  <div class="banner">
    <h1 class="title">標題</h1>
    <p class="desc">描述文字</p>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  @include withContainer();  // 最大寬度 1440px
  padding: 0.32rem;  // 32px on desktop
  
  @include tablet() {
    padding: 0.24rem;  // 24px on tablet
  }
  
  @include mobile() {
    padding: 0.16rem;  // 16px on mobile
  }
}

.title {
  font-size: $title-font-size;  // 0.4rem (40px)
  color: $main-bg;
  
  @include mobile() {
    font-size: $title-font-size-m;  // 0.36rem (36px)
  }
}

.desc {
  font-size: 0.18rem;  // 18px
  @include ellipsis-line(2);  // 最多 2 行
}
</style>
```

---

## 如何更新翻譯

### 基本流程

1. **找到對應的 i18n key** (參考上方對照表)
2. **同步修改兩個語言檔案** (`tw.ts` 和 `en.ts`)
3. **在組件中使用翻譯**
4. **測試切換語言**

### 在組件中使用翻譯

#### Template 中直接使用
```vue
<template>
  <h1>{{ $t('home.title') }}</h1>
  <p>{{ $t('home.banner_desc') }}</p>
</template>
```

#### Script 中使用
```vue
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const title = t('home.title')
</script>
```

#### 帶參數的翻譯
```typescript
// tw.ts
{
  aria_label: '第 {index} 張圖片'
}
```
```vue
<template>
  <img :aria-label="$t('home.aria_label', { index: 5 })" />
  <!-- 輸出: "第 5 張圖片" -->
</template>
```

#### 包含 HTML 的翻譯
```vue
<template>
  <!-- 使用 v-html 渲染 HTML 標籤 -->
  <p v-html="$t('host.skill_link_text')"></p>
</template>
```

### 新增翻譯範例

**步驟 1**: 在兩個語言檔案中新增

```typescript
// src/i18n/tw.ts
export default {
  home: {
    new_section_title: '新區塊標題',
    new_section_desc: '新區塊描述',
  }
}

// src/i18n/en.ts
export default {
  home: {
    new_section_title: 'New Section Title',
    new_section_desc: 'New Section Description',
  }
}
```

**步驟 2**: 在組件中使用

```vue
<template>
  <div class="new-section">
    <h2>{{ $t('home.new_section_title') }}</h2>
    <p>{{ $t('home.new_section_desc') }}</p>
  </div>
</template>
```

### 常見問題

**Q: 如何處理多行文字？**
```typescript
// 使用樣板字串 (backticks)
banner_desc: `第一段文字。

第二段文字，中間有空行。

第三段文字。`
```

**Q: 如何組織新的翻譯區塊？**
```typescript
// 按頁面/組件分類，遵循現有結構
export default {
  home: { /* 首頁翻譯 */ },
  host: { /* 主辦頁面翻譯 */ },
  // 新增頁面
  new_page: {
    title: '...',
    subtitle: '...',
  }
}
```

**Q: 翻譯 key 找不到怎麼辦？**
1. 檢查 key 路徑拼寫
2. 確認 tw.ts 和 en.ts 都有該 key
3. 重新啟動開發伺服器

---

## 特殊雙語處理方式

專案中有兩個特殊模組不使用 i18n 系統，而是透過 JavaScript/TypeScript 直接管理雙語內容。

### 1. newsArticle 組件 (新聞文章)

**位置**: `src/components/newsArticle/`

#### 架構說明

新聞文章通常包含豐富的 HTML 內容（標題、段落、列表、圖片、連結等），這些內容如果放在 i18n 檔案中會非常難以維護和編輯。

**為什麼不用 i18n？**

如果用 i18n 處理新聞，會變成這樣：

```typescript
// ❌ 難以維護的方式
export default {
  news: {
    article1_content: `
      <h2>第三屆亞洲技能競賽職類公布</h2>
      <p>第三屆亞洲技能競賽將於2025年11月27日至29日在<strong>臺北南港展覽館</strong>舉行...</p>
      <img src="/images/news/news_01.jpg" alt="..." />
      <h3>正式職類（共34項）</h3>
      <ul>
        <li>機器人系統整合</li>
        <li>工業設計技術</li>
        ...
      </ul>
    `
  }
}
```

這樣的 HTML 字串：
- ❌ 無法使用 IDE 的 HTML 語法高亮
- ❌ 無法自動格式化和排版
- ❌ 容易出現跳脫字元問題
- ❌ 不易閱讀和編輯長篇內容

因此採用 **template 條件渲染** 的方式，直接在組件內分別撰寫中英文的 HTML 內容，讓編輯者可以在熟悉的 Vue template 環境中直觀地編輯文章結構和格式。

#### 檔案結構

```
src/components/newsArticle/
├── newsTitle.ts          # 新聞標題、日期、圖片資訊
├── News01.vue            # 新聞文章 1
├── News02.vue            # 新聞文章 2
├── News03.vue            # 新聞文章 3
└── YTVideo.vue           # YouTube 影片組件
```

#### newsTitle.ts - 新聞元資料

定義新聞列表的標題、縮圖、日期等資訊：

```typescript
// src/components/newsArticle/newsTitle.ts
const titles = {
  zh: [
    {
      title: '2025亞洲技能競賽團體導覽熱烈開放報名！',
      image: `${import.meta.env.BASE_URL}images/news/news_03_zh.png`,
      date: '2025年7月2日',
      id: 3,
    },
    {
      title: '2025亞洲技能競賽在臺北',
      image: `${import.meta.env.BASE_URL}images/news/news_02.jpg`,
      date: '2025年4月26日',
      id: 2,
    },
    // ...
  ],
  en: [
    {
      title: 'Guided Group Tours Registration Now Open!',
      image: `${import.meta.env.BASE_URL}images/news/news_03_en.png`,
      date: '2 Jul 2025',
      id: 3,
    },
    {
      title: 'Introduction of the WorldSkills Asia Competition Taipei 2025',
      image: `${import.meta.env.BASE_URL}images/news/news_02.jpg`,
      date: '26 Apr 2025',
      id: 2,
    },
    // ...
  ],
}

export default titles
```

#### News 組件 - Template 條件渲染

每個新聞文章使用 `v-if` 根據 `locale` 顯示對應語言的內容：

```vue
<!-- src/components/newsArticle/News01.vue -->
<template>
  <!-- 英文版 -->
  <template v-if="locale === 'en'">
    <h2 class="news-inner-title">The 3<sup>rd</sup> Worldskills Asia Competition Skills</h2>
    <div class="news-inner-content">
      <p>The 3rd WorldSkills Asia Competition will take place...</p>
      <img src="/images/news/news_01.jpg" alt="..." />
      <h3>Official Skills (34 skills in total):</h3>
      <ul>
        <li>Robot System Integration</li>
        <li>Industrial Design Technology</li>
        <!-- ... -->
      </ul>
    </div>
  </template>
  
  <!-- 繁體中文版 -->
  <template v-else>
    <h2 class="news-inner-title">第三屆亞洲技能競賽職類公布</h2>
    <div class="news-inner-content">
      <p>第三屆亞洲技能競賽將於2025年11月27日至29日...</p>
      <img src="/images/news/news_01.jpg" alt="..." />
      <h3>正式職類（共34項）</h3>
      <ul>
        <li>機器人系統整合</li>
        <li>工業設計技術</li>
        <!-- ... -->
      </ul>
    </div>
  </template>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
</script>
```

#### 如何新增新聞

**步驟 1**: 在 `newsTitle.ts` 新增新聞元資料

```typescript
const titles = {
  zh: [
    {
      title: '新新聞標題',
      image: `${import.meta.env.BASE_URL}images/news/news_04.jpg`,
      date: '2025年12月1日',
      id: 4,  // 新 ID
    },
    // ...現有新聞
  ],
  en: [
    {
      title: 'New News Title',
      image: `${import.meta.env.BASE_URL}images/news/news_04.jpg`,
      date: '1 Dec 2025',
      id: 4,  // 對應相同 ID
    },
    // ...現有新聞
  ],
}
```

**步驟 2**: 建立新聞組件 `News04.vue`

```vue
<template>
  <template v-if="locale === 'en'">
    <h2 class="news-inner-title">English Title</h2>
    <div class="news-inner-content">
      <!-- 英文內容 -->
    </div>
  </template>
  <template v-else>
    <h2 class="news-inner-title">中文標題</h2>
    <div class="news-inner-content">
      <!-- 中文內容 -->
    </div>
  </template>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
</script>
```

**步驟 3**: 在路由/列表中引入新組件

---

### 2. HostTraffic 組件 (交通資訊)

**位置**: `src/components/HostTraffic/`

#### 架構說明

交通資訊包含複雜的結構化數據（路線、時刻、票價等），採用 **computed 切換數據物件** 的方式處理雙語。

#### 檔案結構

```
src/components/HostTraffic/
├── MRTSection.vue        # 捷運資訊
├── BusSection.vue        # 公車資訊
├── HSRSection.vue        # 高鐵資訊
├── BikeSection.vue       # 自行車資訊
├── InfoBlock.vue         # 通用資訊區塊
└── Text.vue              # 通用文字組件
```

#### 雙語數據物件模式

每個交通組件定義兩個資料物件，使用 `computed` 根據語言切換：

```vue
<!-- src/components/HostTraffic/MRTSection.vue -->
<template>
  <HostTrafficInfoBlock
    :title="data.title"
    :imageUrl="data.imageUrl"
  >
    <div class="content-section">
      <Text tag="h3" variant="h3">{{ data.stop.title }}</Text>
      <Text tag="p" variant="p">{{ data.stop.name }}</Text>
    </div>
    
    <div class="content-section">
      <Text tag="h3" variant="h3">{{ data.route.title }}</Text>
      <ul>
        <li v-for="route in data.route.list" :key="route">
          <Text tag="p" variant="p">{{ route }}</Text>
        </li>
      </ul>
    </div>
    <!-- 更多區塊... -->
  </HostTrafficInfoBlock>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

// 繁體中文資料物件
const MRTBlock = {
  title: '捷運',
  imageUrl: import.meta.env.BASE_URL + 'images/host/transportation/mrt.jpg',
  stop: {
    title: '站名',
    name: '南港展覽館站',
  },
  route: {
    title: '路線',
    list: ['板南線（藍線、BL23）', '文湖線（棕線、BR24）'],
  },
  purchaseMethod: {
    title: '購票方式',
    methods: [
      {
        title: '單程票',
        image: import.meta.env.BASE_URL + 'images/host/transportation/ticket.png',
        list: [
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/clock-icon.svg',
            iconAlt: '時間 icon',
            text: '當日有效，逾期作廢。',
          },
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/home-icon.svg',
            iconAlt: '地點 icon',
            text: ['捷運站的自動售票機', '捷運站的旅客詢問處'],
          },
        ],
      },
      {
        title: '悠遊卡（儲值卡）',
        image: import.meta.env.BASE_URL + 'images/host/transportation/easycard.png',
        list: [
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/clock-icon.svg',
            iconAlt: '時間 icon',
            text: '可重複儲值使用，適用於台北捷運、公車及部分商店。',
          },
        ],
      },
    ],
  },
  reminder: {
    title: '貼心提醒',
    list: [
      '本站擁有藍線、棕線兩條路線交會，轉乘便利。',
      '展覽、活動或比賽期間人潮較多，建議提早抵達月台邊候車。',
    ],
  },
}

// 英文資料物件
const MRTBlockEn = {
  title: 'Taipei Mass Rapid Transit (MRT)',
  imageUrl: import.meta.env.BASE_URL + 'images/host/transportation/mrt.jpg',
  stop: {
    title: 'Station',
    name: 'Nangang Exhibition Center Hall',
  },
  route: {
    title: 'Route',
    list: ['Bannan Line (Blue Line, BL23)', 'Wenhu Line (Brown Line, BR24)'],
  },
  purchaseMethod: {
    title: 'Ticketing Information',
    methods: [
      {
        title: 'One-way Ticket',
        image: import.meta.env.BASE_URL + 'images/host/transportation/ticket.png',
        list: [
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/clock-icon.svg',
            iconAlt: 'Time icon',
            text: 'Valid on the same day, expired and void.',
          },
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/home-icon.svg',
            iconAlt: 'Location icon',
            text: ['Available at automatic ticket machines', 'Information counters in MRT stations.'],
          },
        ],
      },
      {
        title: 'EasyCard (Stored-Value Card)',
        image: import.meta.env.BASE_URL + 'images/host/transportation/easycard.png',
        list: [
          {
            icon: import.meta.env.BASE_URL + 'images/host/icons/clock-icon.svg',
            iconAlt: 'Time icon',
            text: 'Rechargeable and reuseable on Taipei MRT, buses, and selected retail stores.',
          },
        ],
      },
    ],
  },
  reminder: {
    title: 'Helpful Tips:',
    list: [
      'This station is an interchange for both the Blue Line and Brown Line.',
      'During exhibitions, events, or competitions, the station may be crowded.',
    ],
  },
}

// 使用 computed 根據 locale 切換資料
const data = computed(() => {
  return locale.value === 'en' ? MRTBlockEn : MRTBlock
})
</script>
```

#### 資料結構範例

其他交通組件（BusSection, HSRSection, BikeSection）遵循相同模式：

```typescript
// 通用結構
const DataBlock = {
  title: '標題',
  imageUrl?: '圖片路徑',
  imageSource?: '圖片來源',
  // 自訂區塊
  section1: {
    title: '區塊標題',
    content: '內容' | ['列表項目1', '列表項目2'],
  },
  // 可以有多個自訂區塊...
}

const DataBlockEn = {
  // 對應的英文版本，結構相同
}

const data = computed(() => locale.value === 'en' ? DataBlockEn : DataBlock)
```

#### 如何新增/修改交通資訊

**步驟 1**: 找到對應的交通組件檔案

```
MRTSection.vue - 捷運
BusSection.vue - 公車
HSRSection.vue - 高鐵
BikeSection.vue - 自行車
```

**步驟 2**: 同步修改兩個資料物件

```typescript
// 修改繁中版本
const MRTBlock = {
  // ... 修改內容
  reminder: {
    title: '貼心提醒',
    list: [
      '新增的提醒事項',  // 新增
      // ...
    ],
  },
}

// 修改英文版本（保持結構一致）
const MRTBlockEn = {
  // ... 修改內容
  reminder: {
    title: 'Helpful Tips:',
    list: [
      'New reminder item',  // 對應新增
      // ...
    ],
  },
}
```

**步驟 3**: 測試語言切換

確認兩個語言版本的資料結構一致，不會因為缺少欄位而報錯。

#### 注意事項

1. **結構必須一致**: 繁中和英文的資料物件結構必須完全對應
2. **陣列長度**: 如果某個欄位是陣列，兩個語言版本的陣列長度應該相同
3. **圖片路徑**: 共用的圖片使用相同路徑，語言特定的圖片（如新聞縮圖）使用不同路徑
4. **型別檢查**: 建議使用 TypeScript interface 確保兩個版本結構一致

---

## 雙語處理方式總結

| 方式 | 使用情境 | 位置 | 優點 | 缺點 |
|------|---------|------|------|------|
| **i18n 系統** | 大部分組件 | `src/i18n/tw.ts`, `src/i18n/en.ts` | 統一管理、易於維護、支援動態切換 | HTML 內容在 i18n 檔案中難以編輯和閱讀 |
| **Template 條件渲染** | 新聞文章、內容頁 | `src/components/newsArticle/` | 支援複雜 HTML、直觀編輯、格式完整保留 | 中英文內容分散在同一檔案中 |
| **Computed 數據物件** | 交通資訊、結構化數據 | `src/components/HostTraffic/` | 結構化清晰、型別安全、易於維護 | 需維護兩份資料物件 |

### 選擇建議

- **一般文字、按鈕、標籤、短文案** → 使用 **i18n 系統**
- **新聞文章、包含豐富 HTML 的內容頁** → 使用 **Template 條件渲染**
  - 原因：新聞通常包含多層 HTML 結構（`<h2>`, `<p>`, `<ul>`, `<img>`, `<a>` 等），在 i18n 檔案中維護這些 HTML 字串會很難閱讀和編輯
  - 使用 Template 可以讓編輯者在熟悉的 Vue template 環境中撰寫內容
- **交通資訊、表格、卡片等結構化數據** → 使用 **Computed 數據物件**

---

## 附錄

### 完整路由表

| 路徑 | View | i18n | 說明 |
|------|------|------|------|
| `/` | HomeView | `home.*` | 首頁 |
| `/host` | HostView | `host.*` | 關於主辦 |
| `/competition` | CompetitionView | `competition.*` | 關於競賽 |
| `/skills` | SkillsView | `skills.*` | 競賽職類(父路由) |
| `/skills/categories` | SkillsCategoriesView | `skills.*` | 職類總覽 |
| `/skills/manufacturing_and_engineering_technology` | SkillsManufacturingView | `skills.manufacturing_*` | 製造工程技術 |
| `/skills/construction_and_building_technology` | SkillsConstructionView | `skills.construction_*` | 營建技術 |
| `/skills/information_technology` | SkillsITView | `skills.it_*` | 資訊與通訊技術 |
| `/skills/logistics` | SkillsLogisticView | `skills.logistics_*` | 運輸與物流 |
| `/skills/social_and_personal_services` | SkillsSocialView | `skills.social_*` | 社會與個人服務 |
| `/skills/arts` | SkillsArtView | `skills.art_*` | 藝術與時尚 |
| `/skills/juniors` | SkillsJuniorsView | `skills.juniors_*` | 青少年組 |
| `/news` | NewsView | `news.*` | 最新消息列表 |
| `/news/:id` | NewsInnerView | `news.*` | 新聞內頁 |
| `/get-involved` | GetInvolvedView | `involved.*` | 參與活動 |
| `/media` | MediaView | `media.*` | 影音專區 |
| `/*` (404) | NotFoundView | `notFound.*` | 找不到頁面 |

### TypeScript Path Alias

```typescript
@/          → src/
@views/     → src/views/
@components/ → src/components/
```

### 常用 SCSS Mixins 速查

```scss
// 響應式
@include tablet() { }
@include mobile() { }

// 佈局
@include withContainer() { }      // 1440px 容器
@include flexCenter(column) { }   // Flex 置中
@include bgCenter(cover) { }      // 背景圖置中

// 文字
@include ellipsis(e) { }          // 單行省略
@include ellipsis-line(3) { }     // 多行省略
```

---

## 測試資料檢查

### 自動檢查機制

專案已設置 Git pre-commit hook，會在 commit 前自動檢查代碼中是否有不應該被提交的內容。

#### 檢查項目

**錯誤 (會阻止 commit)**:
- `console.log()` 語句（除非有 `eslint-disable` 註解）
- `debugger` 語句
- 測試/Demo 資料標記（如 `// TEST DATA`, `// DEMO CODE`）

**警告 (允許但會提醒)**:
- `TODO`/`FIXME` 註解
- 標記為 `// unused` 的 import

#### 使用方式

**自動執行** (推薦):
```bash
git add .
git commit -m "your message"
# 腳本會自動檢查
```

**手動檢查**:
```bash
yarn check:test-data
```

#### 例外處理

如果某些 console.log 是必要的：
```typescript
// ❌ 會被阻止
console.log('debug info')

// ✅ 會被允許
// eslint-disable-next-line no-console
console.error('Critical error:', error)
```

詳細說明請參考: [scripts/README.md](../scripts/README.md)

---

**最後更新**: 2025-10-11
