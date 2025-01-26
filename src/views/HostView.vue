<template>
  <div class="host">
    <div class="host-container">
      <div class="host-title">
        <h1>{{ $t('host.title') }}</h1>
      </div>
      <p v-html="$t('host.content')"></p>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
.host {
  .host-container {
    @include withContainer;
  }
  .host-title {
    h1 {
      font-size: 0.88rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }
}
</style>
