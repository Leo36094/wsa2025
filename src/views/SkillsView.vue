<template>
  <div class="skill">
    <RouterView />
  </div>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.skill {
  padding-top: 0.76rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100svh;
  > * {
    align-self: stretch;
  }
}
</style>
