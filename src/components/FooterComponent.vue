<template>
  <div class="footer">
    <div class="footer__container">
      <span class="footer__text"
        >© {{ header.title }} {{ new Date().getFullYear() }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { computed } from "vue";
import Header from "@/data/Header";

const header = computed(() => {
  return Header.get().meta;
});

defineProps(["data"]);
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;

  margin-top: 8.4rem;
  height: 5rem;

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  &__text {
    font-family: "Quicksand";
    font-size: 1.6rem;
  }

  @media screen and (max-width: $screen-size-lg) {
    margin-top: 4.6rem;
  }
}
</style>
