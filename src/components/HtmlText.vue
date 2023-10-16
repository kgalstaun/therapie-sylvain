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
    font-size: 2rem;
    line-height: 1.725;

    &:last-child {
      padding-bottom: 0rem;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "Calgary";
    text-wrap: balance;
  }

  li {
    list-style: circle;

    &:not(:last-child) {
      padding-bottom: 2rem;
    }
  }

  @media screen and (max-width: $screen-size-lg) {
    h1,
    h2,
    h3,
    h4,
    h5 {
      text-align: center;
    }

    p {
      font-size: 1.8rem;
    }
  }
}
</style>
