<template>
  <header class="header">
    <div class="header__container">
      <div class="header__top">
        <span class="header__title">{{ header.title }} </span>
        <span class="header__lang"
          ><a @click="changeLang()">{{ langText }}</a></span
        >
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import Header from "@/data/Header";

const header = computed(() => {
  return Header.get().meta;
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

  &__container {
    @include contentOutline;
  }

  &__title {
    font-size: clamp(3.8rem, 5vw, 7.2rem);
    line-height: 1;
    text-wrap: balance;
  }

  &__top {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 3.8rem;
    padding-bottom: 1rem;
  }

  &__hero {
    display: flex;
    justify-content: center;

    height: 100%;
    width: 100%;
  }

  &__lang {
    font-family: "Quicksand";

    margin-top: -0.5rem;
    margin-bottom: 1rem;

    text-decoration: underline;
    font-style: italic;

    cursor: pointer;

    a {
      font-size: clamp(1.2rem, 3vw, 1.6rem);
    }
  }

  @media screen and (max-width: $screen-size-lg) {
    &__top {
      padding-top: 2.5rem;
      padding-bottom: 0.5rem;
    }
    &__lang {
      margin-top: 0rem;
    }
    a {
      font-size: 1.4rem;
    }
  }
}
</style>
