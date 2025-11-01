<template>
  <div class="text-block">
    <h2 v-if="title" class="text-block__title">{{ title }}</h2>
    <div class="text-block__content" role="region">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
$block-bg-color: #fafcf2;

.text-block {
  padding: 0.24rem;
  border-radius: 0.08rem;
  background-color: $block-bg-color;
  margin-bottom: 0.16rem;

  &__title {
    margin-bottom: 0.08rem;
    font-size: 0.28rem;
    font-weight: 700;
    text-align: center;
  }

  &__content {
    :deep(a) {
      cursor: pointer;
      text-decoration: underline;
    }

    :deep(p) {
      line-height: normal;
      font-size: 0.18rem;
      text-align: left;

      &:not(:last-child) {
        margin-bottom: 0.08rem;
      }
    }

    :deep(ul),
    :deep(ol) {
      padding-left: 0.2rem;
      margin: 0.08rem 0;
    }

    :deep(li) {
      margin-bottom: 0.04rem;
      font-size: 0.18rem;
    }

    :deep(h3),
    :deep(h4) {
      font-weight: 600;
      margin: 0.12rem 0 0.08rem 0;
    }

    :deep(strong) {
      font-weight: 700;
    }
  }
}

@include mobile {
  .text-block {
    &__title {
      font-size: 0.16rem;
    }

    &__content {
      :deep(p),
      :deep(li) {
        font-size: 0.16rem;
      }
    }
  }
}
@include listStyle();
</style>
