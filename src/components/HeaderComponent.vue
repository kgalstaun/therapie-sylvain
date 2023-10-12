<template>
  <header class="header">
    <div class="header__container">
      <span class="header__title">THERAPIE bij SYLVAIN</span>
      <div class="header__hero">
        <HeaderHeroComponent></HeaderHeroComponent>
      </div>
    </div>
  </header>
</template>

<script setup>
import HeaderHeroComponent from "./HeaderHeroComponent.vue";
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: flex-start;

  max-height: 100vh;

  &__container {
    max-width: 1600px;
    @include defaultPadding;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  &__title {
    padding-top: 2.3rem;
    font-size: clamp(2.4rem, 10vw, 7.8rem);
  }

  &__hero {
    display: flex;
    justify-content: center;

    height: 100%;
  }
}
</style>
