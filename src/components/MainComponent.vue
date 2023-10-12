<template>
  <div class="main" v-if="loaded && !error">
    <HeaderComponent></HeaderComponent>
    <ContentComponent></ContentComponent>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import QueryService from "@/service/QueryService";
import HeroQuery from "@/queries/HeroQuery";
import Header from "@/data/Header";
import HeaderComponent from "./HeaderComponent.vue";
import ContentComponent from "./ContentComponent.vue";

let loaded = ref(false);
let error = ref(false);

onMounted(() => {
  fetchHero();
});

async function fetchHero() {
  QueryService.fetch(HeroQuery)
    .then((data) => {
      let header = data;
      Header.set(header);
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
.main {
  overflow-x: hidden;
}
</style>
