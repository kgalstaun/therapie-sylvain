<template>
  <div class="html-text" v-html="data"></div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["data"]);
</script>

<style lang="scss">
$component: "html-text";

.#{$component} {
  p {
    font-family: "Quicksand";
    font-size: 2.2rem;
    line-height: 1.6;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "Calgary";
  }
}
</style>
