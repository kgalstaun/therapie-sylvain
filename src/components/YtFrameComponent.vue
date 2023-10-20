<template>
  <div class="yt-frame-container">
    <iframe
      width="100%"
      height="100%"
      :src="url"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  url: String,
});
</script>

<style scoped>
.yt-frame-container {
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
