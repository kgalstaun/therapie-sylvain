<template>
  <div class="video-container">
    <iframe
      width="560"
      height="315"
      :src="videoUrl"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  videoUrl: String,
});
</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
