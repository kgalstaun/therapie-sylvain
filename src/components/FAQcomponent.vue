<template>
  <div class="faq">
    <div class="faq__container">
      <div v-if="data.title" class="faq__title">
        <h1>
          {{ data.title }}
        </h1>
      </div>
      <ul class="faq__list">
        <li v-for="item in data.items" :key="item.title" class="faq__item">
          <div class="faq__item-upper" role="button">
            <span class="faq__item-title">
              {{ item.title }}
            </span>
            <div>+</div>
          </div>
          <HtmlText class="faq__item-text" :data="item.text.html"></HtmlText>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import HtmlText from "./HtmlText.vue";

defineProps(["data"]);
</script>

<style lang="scss" scoped>
.faq {
  width: 100%;
  display: flex;
  justify-content: center;

  &__container {
    @include contentOutline;
    max-width: 76rem;
  }

  &__list {
    width: 100%;
    padding-top: 1.2rem;

    background-color: rgb(242, 242, 242);
    border-radius: 20px;
    padding: 1.3rem 2.3rem;
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 1.2rem;
      border-bottom: 1px solid black;
    }
    z-index: 1;
  }

  &__item-upper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    z-index: 1;
  }

  &__item-title {
    text-align: start;

    padding-top: 1rem;
    padding-bottom: 2rem;
    line-height: normal;

    font-family: "Quicksand";
    font-size: 2.2rem;
  }

  &__item-text {
    min-height: 0px;
    max-height: 0px;
    opacity: 0;
    z-index: -1;
    position: relative;

    p {
      z-index: -1;
      position: relative;
    }
  }

  @media screen and (max-width: $screen-size-lg) {
  }
}
</style>
