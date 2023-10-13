<template>
  <main class="content">
    <div class="content__container">
      <template v-if="loaded && !error">
        <component
          v-for="component in content"
          :key="component"
          :is="components[component.type]"
          :data="component"
          class="content__item"
        ></component>
      </template>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";

import QueryService from "@/service/QueryService";
import ContentQuery from "@/queries/ContentQuery";

import TextImage from "./TextImageComponent.vue";

const components = {
  TextImage,
};

let loaded = ref(false);
let error = ref(false);
const content = ref();

onMounted(() => {
  fetchContent();
});

async function fetchContent() {
  const locale = window.location.pathname.startsWith("/en")
    ? ["en"]
    : ["nl_NL", "en"];

  QueryService.fetch(ContentQuery, { locale })
    .then((data) => {
      content.value = data.site.components;
      loaded.value = true;
      return true;
    })
    .catch((error) => {
      console.error(error);
      error.value = true;
    });
}
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
  }
  &__item {
    margin-top: 10.8rem;
  }

  @media screen and (max-width: $screen-size-lg) {
    &__item {
      margin-top: 3.6rem;
    }
  }
}
</style>
