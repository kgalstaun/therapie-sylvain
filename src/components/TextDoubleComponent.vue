<template>
  <div class="text-double">
    <div class="text-double__container">
      <div v-if="data.title" class="text-double__title">
        <h1>
          {{ data.title }}
        </h1>
      </div>
      <div
        v-if="data.textLeft.html && data.textRight.html"
        class="text-double__text-container"
      >
        <div class="text-double__text">
          <HtmlText :data="data.textLeft.html"></HtmlText>
        </div>
        <div class="text-double__text">
          <HtmlText :data="data.textRight.html"></HtmlText>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HtmlText from "./HtmlText.vue";
import { defineProps } from "vue";

defineProps(["data"]);
</script>

<style lang="scss" scoped>
.text-double {
  width: 100%;
  display: flex;
  justify-content: center;

  &__container {
    @include contentOutline;

    width: auto;
  }

  &__text-container {
    width: 100%;
    max-width: 100rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;

    padding-top: 1.2rem;
  }

  &__title {
    text-align: center;
  }

  @media screen and (max-width: $screen-size-lg) {
    &__text-container {
      display: flex;
      flex-direction: column;
      gap: 0rem;
    }
    &__text {
      &:first-child {
        margin-bottom: 2rem;
      }

      @include defaultPadding;
    }
    &__title {
      @include defaultPadding;
    }
  }
}
</style>
