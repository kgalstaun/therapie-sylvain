<template>
  <header class="header">
    <div class="header__container">
      <div class="header__top">
        <span class="header__title">{{ header.title }} </span>
        <span class="header__lang"
          ><a @click="changeLang()">{{ langText }}</a></span
        >
      </div>

      <div class="header__hero">
        <HeaderHeroComponent></HeaderHeroComponent>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import HeaderHeroComponent from "./HeaderHeroComponent.vue";
import Header from "@/data/Header";

const header = computed(() => {
  return Header.get().site.hero;
});

const langText = computed(() => {
  return english.value ? "nederlands" : "english";
});

const english = ref(false);

const changeLang = () => {
  english.value ? (window.location.href = "/") : (window.location.href = "/en");
};

onMounted(() => {
  english.value = window.location.pathname.startsWith("/en") ? true : false;
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
    font-size: clamp(2.8rem, 10vw, 7.2rem);
    line-height: 1;
  }

  &__top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-top: 4.8rem;
    padding-bottom: 2.4rem;
  }

  &__hero {
    display: flex;
    justify-content: center;

    height: 100%;
    width: 100%;
  }

  &__lang {
    font-family: "Quicksand";
    font-size: 1.8rem;

    margin-top: -2rem;

    text-decoration: underline;
    font-style: italic;

    cursor: pointer;
  }

  @media screen and (max-width: $screen-size-lg) {
    &__title {
      @include defaultMargin;
    }
    &__lang {
      @include defaultMargin;
    }
  }
}
</style>
