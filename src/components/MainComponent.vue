<template>
  <main v-if="loaded && !error"></main>
</template>

<script setup>
import { ref, onMounted } from "vue";

import QueryService from "@/service/QueryService";
import HeroQuery from "@/queries/HeroQuery";
import Header from "@/data/Header";

let loaded = ref(false);
let error = ref(false);

onMounted(() => {
  fetchHero();
});

async function fetchHero() {
  QueryService.fetch(HeroQuery)
    .then((data) => {
      console.log(data);
      let header = data.header;
      Header.set(header.text);
      loaded.value = true;
      return true;
    })
    .catch(() => {
      error.value = true;
    });
}
</script>

<style lang="scss" scoped>
main {
  max-width: 1400px;
  width: 100%;
}

.loading-animation-wraopper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
