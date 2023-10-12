<template>
  <main class="content">
    <div class="content__container">
      <template v-if="loaded">
        <component
          v-for="component in content"
          :key="component"
          :is="components[component.type]"
        ></component>
      </template>
    </div>
  </main>
</template>

<script setup>
import QueryService from "@/service/QueryService";
import ContentQuery from "@/queries/ContentQuery";
import TextImage from "./TextImageComponent.vue";

import { onMounted, ref } from "vue";

let loaded = ref(false);

const content = ref();

const components = {
  TextImage,
};

onMounted(() => {
  fetchContent();
});

async function fetchContent() {
  QueryService.fetch(ContentQuery)
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
    max-width: 1600px;
    @include defaultPadding;
    padding-top: 4rem;
    padding-bottom: 4rem;
    width: 100%;
  }

  &__about {
    width: 100%;
  }
}
</style>
