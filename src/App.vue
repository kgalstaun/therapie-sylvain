<template>
  <div class="app">
    <Transition>
      <HeaderComponent v-if="loaded && !error"></HeaderComponent>
    </Transition>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import QueryService from "@/service/QueryService";
import MetaQuery from "@/queries/MetaQuery";
import Header from "@/data/Header";

import HeaderComponent from "./components/HeaderComponent.vue";

let loaded = ref(false);
let error = ref(false);

onMounted(() => {
  fetchHero();
  document.title = "Therapie bij Sylvain";
});

async function fetchHero() {
  const locale = window.location.pathname.startsWith("/en")
    ? ["en"]
    : ["nl_NL", "en"];

  QueryService.fetch(MetaQuery, { locale })
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
.app {
  overflow: hidden;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
