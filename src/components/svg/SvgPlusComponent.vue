<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="plus"
    width="18"
    height="18"
    viewBox="0 0 160 160"
  >
    <rect
      class="vertical-line"
      :class="{ 'animate-to-minus': active }"
      x="70"
      width="20"
      height="160"
    />
    <rect class="horizontal-line" y="70" width="160" height="20" fill="#555" />
  </svg>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["active"]);
</script>

<style lang="scss" scoped>
.plus rect {
  transition: all 0.2s;
  transform: scaleY(1);
  transform-origin: 50% 50%;

  &.animate-to-minus {
    transform: scaleY(0);
  }
}
</style>
