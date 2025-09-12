<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <div class="error-section">
        <h1 class="error-code">404</h1>
        <h2 class="error-title">{{ $t('notFound.title') }}</h2>
        <p class="error-description">{{ $t('notFound.description') }}</p>
      </div>

      <div class="action-section">
        <router-link to="/" class="primary-button">
          {{ $t('notFound.backToHome') }}
        </router-link>

        <div class="suggested-links">
          <p class="suggested-text">{{ $t('notFound.suggestedLinks') }}:</p>
          <div class="links-container">
            <router-link to="/competition" class="suggested-link">
              {{ $t('nav.competition') }}
            </router-link>
            <router-link to="/skills" class="suggested-link">
              {{ $t('nav.skills') }}
            </router-link>
            <router-link to="/news" class="suggested-link">
              {{ $t('nav.news') }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component for handling 404 errors and invalid routes
</script>

<style lang="scss" scoped>
.not-found-container {
  @include sizeWH(100%, 100vh);
  @include flexCenter(column);
  background-color: $white-bg;
  padding: 0.32rem;

  @include mobile() {
    padding: 0.24rem;
  }
}

.not-found-content {
  @include sizeWH(100%, auto);
  max-width: 6rem;
  text-align: center;

  @include mobile() {
    max-width: 100%;
  }
}

.error-section {
  margin-bottom: 0.4rem;

  @include mobile() {
    margin-bottom: 0.32rem;
  }
}

.error-code {
  @include textMixin($black-primary, 0.8rem, 700);
  margin-bottom: 0.16rem;
  letter-spacing: -0.02em;

  @include mobile() {
    font-size: 0.6rem;
    margin-bottom: 0.12rem;
  }
}

.error-title {
  @include textMixin($black-primary, $title-font-size, 600);
  margin-bottom: 0.16rem;

  @include mobile() {
    font-size: $title-font-size-m;
    margin-bottom: 0.12rem;
  }
}

.error-description {
  @include textMixin(#666, $desc-font-size, 400);
  margin-bottom: 0.32rem;
  line-height: 1.5;

  @include mobile() {
    font-size: $desc-font-size-m;
    margin-bottom: 0.24rem;
  }
}

.action-section {
  @include flexCenter(column);
  gap: 0.24rem;

  @include mobile() {
    gap: 0.2rem;
  }
}

.primary-button {
  @include textMixin(#fff, $supplement-font-size, 500);
  background-color: $main-bg;
  padding: 0.16rem 0.32rem;
  border-radius: 0.08rem;
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-block;

  &:hover {
    background-color: darken($main-bg, 10%);
    transform: translateY(-0.02rem);
  }

  @include mobile() {
    font-size: $supplement-font-size-m;
    padding: 0.14rem 0.28rem;
  }
}

.suggested-links {
  text-align: center;
}

.suggested-text {
  @include textMixin(#999, 0.16rem, 400);
  margin-bottom: 0.12rem;

  @include mobile() {
    font-size: 0.14rem;
  }
}

.links-container {
  @include flexCenter();
  gap: 0.24rem;
  flex-wrap: wrap;

  @include mobile() {
    gap: 0.16rem;
  }
}

.suggested-link {
  @include textMixin($main-bg, 0.16rem, 500);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease;

  &:hover {
    border-bottom-color: $main-bg;
    color: darken($main-bg, 10%);
  }

  @include mobile() {
    font-size: 0.14rem;
  }
}
</style>
