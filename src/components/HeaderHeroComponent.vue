<template>
  <div class="hero">
    <div class="hero__image"><img :src="header.image.url" /></div>
  </div>
</template>

<script setup>
import Header from "@/data/Header";
import { computed, onMounted } from "vue";

const header = computed(() => {
  return Header.get().site.hero;
});

onMounted(() => {});
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;

  &__image {
    width: 100%;

    max-height: calc(100vh - 194px);

    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      max-height: calc(100vh - 194px);
      border-radius: 2.5rem;
    }
  }

  &__text {
  }
}
</style>
