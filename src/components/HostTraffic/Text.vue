<template>
  <component
    :is="tag"
    :class="textClasses"
    :aria-level="ariaLevel"
    role="text"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Define props with proper types and defaults
interface Props {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  variant?: 'h2' | 'h3' | 'h4' | 'p'
  color?: string
  align?: 'left' | 'center' | 'right' | 'justify'
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'p',
  variant: 'p',
  align: 'left'
})

// Compute aria-level for heading accessibility
const ariaLevel = computed(() => {
  if (props.tag && props.tag.startsWith('h')) {
    return parseInt(props.tag.charAt(1))
  }
  return undefined
})

// Compute CSS classes based on variant and alignment
const textClasses = computed(() => [
  'text-component',
  `text-component--${props.variant}`,
  `text-component--align-${props.align}`,
  props.color && `text-component--color-${props.color}`
].filter(Boolean))
</script>

<style scoped lang="scss">
// Typography configuration
$text-config: (
  color: #101E24,
  line-height-base: 1.5,
  variants: (
    h2: (
      font-size: 0.36rem,
      font-weight: 700,
      line-height: 1.2,
      margin-bottom: 0
    ),
    h3: (
      font-size: 0.28rem,
      font-weight: 700,
      line-height: 1.3,
      margin-bottom: 0.24rem,
      margin-bottom-tablet: 0.16rem
    ),
    h4: (
      font-size: 0.18rem,
      font-weight: 700,
      line-height: 1.4,
      margin-bottom: 0
    ),
    p: (
      font-size: 0.18rem,
      font-weight: 400,
      line-height: 1.5,
      margin-bottom: 0
    )
  ),
  alignments: (left, center, right, justify)
);

// Base component styles
.text-component {
  color: map-get($text-config, color);
  line-height: map-get($text-config, line-height-base);
  letter-spacing: normal;
  word-wrap: break-word;
  hyphens: auto;

  // Accessibility improvements
  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  &:empty::before {
    content: '\00a0'; // Non-breaking space for empty elements
  }
}

// Generate variant styles
@each $variant, $props in map-get($text-config, variants) {
  .text-component--#{$variant} {
    font-size: map-get($props, font-size);
    font-weight: map-get($props, font-weight);
    line-height: map-get($props, line-height);

    @if map-has-key($props, margin-bottom) {
      margin-bottom: map-get($props, margin-bottom);
    }
  }
}

// Generate alignment classes
@each $alignment in map-get($text-config, alignments) {
  .text-component--align-#{$alignment} {
    text-align: #{$alignment};
  }
}

// Responsive styles
@include tablet {
  .text-component--h3 {
    $h3-props: map-get(map-get($text-config, variants), h3);
    @if map-has-key($h3-props, margin-bottom-tablet) {
      margin-bottom: map-get($h3-props, margin-bottom-tablet);
    }
  }
}

// Accessibility media queries
@media (prefers-contrast: high) {
  .text-component {
    font-weight: 600;
  }
}

@media (prefers-reduced-motion: reduce) {
  .text-component {
    transition: none;
  }
}

// Color variants (if needed in the future)
@if map-has-key($text-config, color-variants) {
  @each $color-name, $color-value in map-get($text-config, color-variants) {
    .text-component--color-#{$color-name} {
      color: $color-value;
    }
  }
}
</style>
