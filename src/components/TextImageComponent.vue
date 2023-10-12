<template>
  <div class="text-image">
    asdasda asdasd
    <div class="text-image__image"></div>
    <div class="text-image__text">xx</div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["data"]);
</script>

<style lang="scss" scoped>
.text-image {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
</style>
