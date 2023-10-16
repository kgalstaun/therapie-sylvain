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

  &__container {
    @include contentOutline;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  &__text-container {
    width: 100%;
    max-width: 100rem;
    display: flex;
    justify-content: space-around;
  }
}
</style>
