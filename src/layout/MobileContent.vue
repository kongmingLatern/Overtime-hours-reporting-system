<template>
  <div class="pb-75px">
    <RouterView />
  </div>
  <TarBar />
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
import TarBar from "@/views/UserTimeReport/TarBar.vue";
</script>
