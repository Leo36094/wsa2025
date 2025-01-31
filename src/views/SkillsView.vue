<template>
  <div class="skill">
    <RouterView />
  </div>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.skill {
  padding-top: 0.76rem;
  /* min-height: 100svh; */
  display: flex;
  flex-direction: column;
  > * {
    align-self: stretch;
  }
}
</style>
