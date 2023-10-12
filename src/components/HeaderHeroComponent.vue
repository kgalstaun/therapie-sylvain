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
  &__image {
    img {
      object-fit: cover;
      object-position: center;
      width: 100vw;
      max-height: calc(100vh - 157px);
    }
  }

  &__text {
  }
}
</style>
