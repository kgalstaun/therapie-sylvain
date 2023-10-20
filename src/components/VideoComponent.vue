<template>
  <div class="video-component">
    <div class="video-component__container">
      <div v-if="data.title" class="video-component__title">
        <h1>
          {{ data.title }}
        </h1>
      </div>
      <div class="video-component__video">
        <YtFrameComponent :url="data.url"> </YtFrameComponent>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import YtFrameComponent from "./YtFrameComponent.vue";

defineProps(["data"]);
</script>

<style lang="scss" scoped>
.video-component {
  width: 100%;
  display: flex;
  justify-content: center;

  &__container {
    @include contentOutline;
  }

  &__video {
    width: 100%;
  }
}
</style>
