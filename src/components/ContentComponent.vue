<template>
  <main class="content">
    <div class="content__container">
      <component
        v-for="component in data"
        :key="component"
        :is="components[component.type]"
        :data="component"
        class="content__item"
      ></component>
    </div>
  </main>
</template>

<script setup>
import { defineProps } from "vue";

import TextImage from "./TextImageComponent.vue";
import TextDouble from "./TextDoubleComponent.vue";
import Hero from "./HeroComponent.vue";

defineProps(["data"]);

const components = {
  TextImage,
  TextDouble,
  Hero,
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > .hero {
      margin-top: 0rem !important;

      & + .content__item {
        margin-top: 5.6rem;
      }
    }
  }
  &__item {
    width: 100%;
    margin-top: 10.4rem;

    &:first-child {
      margin-top: 5.6rem;
    }
  }

  @media screen and (max-width: $screen-size-lg) {
    &__item {
      margin-top: 5.6rem;
    }

    &__container {
      > .hero {
        & + .content__item {
          margin-top: 1.3rem;
        }
      }
    }
  }
}
</style>
