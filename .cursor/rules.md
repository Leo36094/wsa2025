# WSA 2025 Project - AI Development Rules

## Project Overview
This is a Vue 3 + TypeScript project for the WorldSkills Asia 2025 website, built with Vite, Vue Router, Pinia, and SCSS.

## Styling Development Rules

### 1. REM Unit System
- **Base conversion: 100px = 1rem**
- Convert design specs to rem: `rem = design_px / 100`
- Examples:
  - 400px → 4rem
  - 180px → 1.8rem (0.18rem)
  - 32px → 0.32rem
- Root font-size is set via the `setHTML` mixin with automatic responsive scaling

### 2. Responsive Design (RWD)
- Use predefined mixins for breakpoints:
  - `@include tablet()` - max-width: 1024px
  - `@include mobile()` - max-width: 744px (portrait orientation)
- Breakpoint variables (defined in variables.scss):
  - `$queryLG: 1440` (Desktop)
  - `$queryMD: 1024` (Tablet)
  - `$querySM: 744` (Mobile Portrait)
  - `$queryXS: 320` (Small Mobile)

### 3. Global SCSS Injection
- **Important**: `mixins.scss` and `variables.scss` are globally injected
- **Never manually import** these files in components
- Configuration location: `vite.config.ts` → `css.preprocessorOptions.scss.additionalData`
- All variables and mixins are directly available in `.vue` and `.scss` files

### 4. Common Variables
#### Colors (variables.scss)
- `$main-bg: #18475b` - Main background (deep blue-green)
- `$white-bg: #f3f4f5` - White background
- `$green-primary: #c8e14b` - Primary brand green
- `$black-primary: #101e24` - Primary text black

#### Font Sizes
- `$title-font-size: 0.4rem` (40px) - Desktop title
- `$title-font-size-m: 0.36rem` (36px) - Mobile title
- `$desc-font-size: 0.28rem` (28px) - Desktop description
- `$desc-font-size-m: 0.24rem` (24px) - Mobile description
- `$supplement-font-size: 0.2rem` (20px) - Supplementary text
- `$supplement-font-size-m: 0.16rem` (16px) - Mobile supplementary

### 5. Common Mixins
#### Layout
- `@include withContainer()` - Max-width 14.4rem (1440px), centered
- `@include flexCenter(column)` - Flex center with optional direction
- `@include fullsize()` - width: 100%; height: 100%
- `@include fullcover()` - Absolute position covering entire parent

#### Typography
- `@include ellipsis(e)` - Single line ellipsis
- `@include ellipsis-line(3)` - Multi-line ellipsis (e.g., 3 lines)
- `@include textMixin($color, $size, $weight, ...)` - Text styling

#### Background
- `@include bgCenter(cover)` - Background centered with size
- `@include fullscreenBg('/path/to/image.jpg')` - Full-screen background

#### Others
- `@include customScrollBar($thumb, $track)` - Custom scrollbar
- `@include textGradient(90deg, #c8e14b, #18475b)` - Gradient text
- `@include zIndex(modal)` - Use predefined z-index values
- `@include listStyle()` - Rich text list styling

### 6. RWD Development Pattern
```scss
.banner {
  @include withContainer();
  padding: 0.32rem;  // Desktop: 32px
  
  @include tablet() {
    padding: 0.24rem;  // Tablet: 24px
  }
  
  @include mobile() {
    padding: 0.16rem;  // Mobile: 16px
  }
}
```

## Asset Management Rules

### 1. Public Assets Location
- All public images are stored in `public/images/`
- Folder structure:
  - `competition/` - Competition venue maps
  - `flags/` - Country flags (98 SVG files)
  - `host/` - Host city images
  - `media/` - Media photos (850+ images)
  - `news/` - News thumbnails
  - `sponsors/` - Sponsor logos
  - `wsa/` - Official WSA images
  - `getInvolved/` - Get involved images

### 2. Accessing Public Assets
- **Always use** `import.meta.env.BASE_URL` prefix
- Examples:
```typescript
// Static image
const imageSrc = `${import.meta.env.BASE_URL}images/wsa/banner.jpg`

// Dynamic images array
const bannerImages = Array.from(
  { length: 6 },
  (_, i) => `${import.meta.env.BASE_URL}images/wsa/banner_${i + 1}.jpg`
)

// i18n-based images
const lang = locale.value === 'en' ? 'en' : 'zh'
const venueImage = `${import.meta.env.BASE_URL}images/competition/hall_${lang}.png`
```

### 3. Environment Variables
- `BASE_URL` is automatically set based on build environment (vite.config.ts):
  - Development: `/wsa2025/`
  - Production (BUILD_ENV=live): `/`

## Component Development Rules

### 1. Component Structure
- **Always use**: Vue 3 Composition API with `<script setup lang="ts">`
- **Styling**: Use `<style lang="scss" scoped>`
- **TypeScript**: Enable strict mode, use proper typing

### 2. Component Template
```vue
<template>
  <div class="component-name">
    <h1>{{ $t('section.title') }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// Component logic here
</script>

<style lang="scss" scoped>
.component-name {
  @include withContainer();
  padding: 0.32rem;
  
  @include mobile() {
    padding: 0.16rem;
  }
}
</style>
```

### 3. Import Path Alias
- Use `@/` for src directory imports
- Examples:
  - `import Component from '@/components/Component.vue'`
  - `import { helper } from '@/utils/helper'`
  - `import type { MyType } from '@/types/my-type'`

### 4. Component Organization
- `/components/Media/*` - Media-related components
- `/components/newsArticle/*` - News article components
- `/components/HostTraffic/*` - Traffic information components
- `/components/CompetitionCountry/*` - Competition country data
- `/components/icons/*` - Icon components
- `/components/ui/*` - Base UI components
- Shared components at `/components/` root level

## Routing Rules

### 1. Router Configuration
- Location: `src/router/index.ts`
- Use lazy loading for non-critical routes: `component: () => import('../views/View.vue')`
- Dynamic routes example: `/news/:id`

### 2. Main Routes
- `/` - Home
- `/host` - Host City
- `/competition` - Competition
- `/news` - News List
- `/news/:id` - News Detail (dynamic)
- `/skills` - Skills (with 7 sub-routes)
- `/get-involved` - Get Involved
- `/media` - Media Center

### 3. Skills Sub-routes
- Base path: `/skills/`
- Default redirect to `/skills/categories`
- 7 categories: manufacturing, construction, IT, logistics, social, arts, juniors

### 4. Adding New Routes
1. Create view component in `src/views/`
2. Register route in `src/router/index.ts`
3. Use lazy loading if not critical: `() => import()`
4. Update navigation in `PageHeader.vue` if needed

## Internationalization (i18n) Rules

### 1. Usage in Templates
```vue
<template>
  <h1>{{ $t('home.title') }}</h1>
  <p v-html="$t('home.content')"></p>
</template>
```

### 2. Usage in Script
```typescript
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// Access translation
const title = t('home.title')

// Switch language
locale.value = locale.value === 'tw' ? 'en' : 'tw'

// Conditional content based on locale
const imageSrc = locale.value === 'en' 
  ? 'image_en.png' 
  : 'image_zh.png'
```

### 3. i18n Files
- `src/i18n/tw.ts` - Traditional Chinese (繁體中文)
- `src/i18n/en.ts` - English
- Configuration: `src/i18n/index.ts`

## News Management Rules

### Adding New News Article (3 Steps)

#### 1. Add News Thumbnail
- Place image in `public/images/news/`
- Use consistent naming: `news_XX.jpg`

#### 2. Update News List
- Edit `src/components/newsArticle/newsTitle.ts`
- Add news item (newer articles have lower index)
- Set correct title and date

#### 3. Create News Content Component
- Create `NewsXX.vue` in `src/components/newsArticle/`
- Use PascalCase naming (e.g., `News01.vue`)
- Register in `src/views/NewsInnerView.vue`:
```typescript
import NewsXX from '@/components/newsArticle/NewsXX.vue'

const components: Record<number, any> = {
  XX: NewsXX,  // Match index from newsTitle.ts
}
```

## Code Style Rules

### 1. TypeScript
- Use strict mode
- Prefer interfaces over types for objects
- Use proper type annotations
- Avoid `any` - use `unknown` or proper types

### 2. Formatting
- Use ESLint + Prettier
- Run `yarn lint` before committing
- 2 spaces indentation
- Single quotes for strings

### 3. Vue Best Practices
- Use Composition API (`<script setup>`)
- Define props with `defineProps<T>()`
- Define emits with `defineEmits<T>()`
- Use `ref` for primitives, `reactive` for objects
- Extract computed values with `computed()`
- Clean up side effects in `onUnmounted()`

### 4. Performance
- Use `v-show` for frequently toggled elements
- Use `v-if` for conditionally rendered elements
- Lazy load heavy components
- Optimize images (compress, use appropriate formats)
- Use `loading="lazy"` for images below the fold

## Common Patterns

### 1. Image Gallery with Lightbox
```typescript
import { useEasyLightbox } from 'vue-easy-lightbox'

const images = [/* image URLs */]
const { show, onHide, visibleRef, indexRef, imgsRef } = useEasyLightbox({
  imgs: images,
  initIndex: 0,
})

const showLightbox = (index: number) => {
  indexRef.value = index
  show()
}
```

### 2. Responsive Image Arrays
```typescript
const images = computed(() => {
  const lang = locale.value === 'en' ? 'en' : 'zh'
  return Array.from({ length: 5 }, (_, i) => 
    `${import.meta.env.BASE_URL}images/folder/${lang}/image-${i + 1}.jpg`
  )
})
```

### 3. Dropdown/Filter Pattern
```vue
<FilterDropdown
  :options="dateOptions"
  :selected="selectedDate"
  @update:selected="handleDateChange"
/>
```

## Testing

### Unit Tests
- Location: `src/components/__tests__/`
- Framework: Vitest + Vue Test Utils
- Run: `yarn test:unit`

### Linting
- Run: `yarn lint`
- Auto-fix: `yarn lint --fix`

## Build & Deploy

### Development
```bash
yarn dev
```

### Production Build
```bash
# Standard build
yarn build

# Live environment build
BUILD_ENV=live yarn build
```

### Type Checking
```bash
yarn type-check
```

## Important Notes

1. **Never import** `variables.scss` or `mixins.scss` manually - they're globally injected
2. **Always use** `import.meta.env.BASE_URL` for public assets
3. **Follow the rem system**: design_px / 100 = rem
4. **Use RWD mixins** (`@include tablet()`, `@include mobile()`) for responsive design
5. **Maintain i18n** for all user-facing text
6. **Follow news management** three-step process strictly
7. **Use TypeScript** properly with type annotations
8. **Keep components** small and focused - extract shared logic into composables

## Reference Documentation

- Main README: [README.md](README.md)
- i18n Guide: [I18N_COMPONENT_MAPPING.md](I18N_COMPONENT_MAPPING.md)
- Development Guide: [DEVELOPMENT.md](DEVELOPMENT.md)
- Scripts Guide: [scripts/README.md](scripts/README.md)

