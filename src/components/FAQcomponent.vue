<template>
  <div class="faq">
    <div class="faq__container">xxx</div>
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

  @media screen and (max-width: $screen-size-lg) {
  }
}
</style>
