<template>
  <div class="hero">
    <div class="hero__container">
      <div class="hero__image"><img :src="data.image.url" /></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["data"]);
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;

  &__container {
    @include contentOutline;
  }

  &__image {
    width: 100%;

    max-height: calc(100vh - 164px);

    position: relative;

    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      max-height: calc(100vh - 164px);
      border-radius: 1rem;
    }
  }

  @media screen and (max-width: $screen-size-lg) {
    img {
      border-radius: 0px;
    }
    &__container {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
}
</style>
