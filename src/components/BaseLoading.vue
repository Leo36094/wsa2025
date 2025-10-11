<template>
  <div class="loading-spinner">
    <div class="spinner"></div>
  </div>
</template>

<script lang="ts" setup>
// Component logic here if needed
</script>

<style scoped>
.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: cadetblue;
  border-radius: 50%;
  width: 0.4rem;
  height: 0.4rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
