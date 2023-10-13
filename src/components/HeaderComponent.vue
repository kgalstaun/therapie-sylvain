<template>
  <header class="header">
    <div class="header__container">
      <span class="header__title">{{ header.title }}</span>
      <div class="header__hero">
        <HeaderHeroComponent></HeaderHeroComponent>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import HeaderHeroComponent from "./HeaderHeroComponent.vue";
import Header from "@/data/Header";

const header = computed(() => {
  return Header.get().site.hero;
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: flex-start;

  &__container {
    @include contentOutline;
  }

  &__title {
    padding-top: 2.4rem;
    font-size: clamp(2.4rem, 10vw, 7.2rem);
  }

  &__hero {
    display: flex;
    justify-content: center;

    height: 100%;
    width: 100%;
  }
}
</style>
