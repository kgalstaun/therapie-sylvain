<template>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.title = "Therapie bij Sylvain";
});
</script>
