<template>
  <Transition>
    <ContentComponent
      v-if="loaded && !error"
      :data="content"
    ></ContentComponent>
  </Transition>
</template>

<script setup>
import ContentComponent from "./ContentComponent.vue";
import { onMounted, ref } from "vue";

import QueryService from "@/service/QueryService";
import ContentQuery from "@/queries/ContentQuery";

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
.home {
  overflow: hidden;
}
</style>
