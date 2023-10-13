<template>
  <div class="text-image">
    <div class="text-image__container">
      <div v-if="data.title" class="text-image__title">
        <h1>
          {{ data.title }}
        </h1>
      </div>
      <div
        v-if="(data.image?.url || data.videoUrl) && data.text.html"
        class="text-image__text-image-container"
        :class="{ 'text-right': data.textRight }"
      >
        <div class="text-image__text">
          <HtmlText :data="data.text.html"></HtmlText>
        </div>
        <div v-if="data.image?.url" class="text-image__image">
          <img :src="data.image.url" />
        </div>
        <div v-if="data.videoUrl">
          <VideoComponent :videoUrl="data.videoUrl"></VideoComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import HtmlText from "./HtmlText.vue";
import VideoComponent from "./VideoComponent.vue";

defineProps(["data"]);
</script>

<style lang="scss" scoped>
.text-image {
  width: 100%;
  display: flex;
  justify-content: center;

  &__container {
    @include contentOutline;
  }
  &__text-image-container {
    display: grid;
    grid-template-columns: 6fr 5fr;
    gap: 6.2rem;

    align-items: center;

    &.text-right {
      grid-template-columns: 5fr 6fr;

      & > *:first-child {
        order: 2;
      }

      & > *:last-child {
        order: 1;
      }
    }
  }
}
</style>
