<template>
  <div class="pb-75px">
    <Header />
    <Content />
  </div>
  <TarBar />
</template>

<script setup lang="ts">
import Header from "@/views/ResponsiveTimeReport/Header.vue";
import Content from "@/views/UserTimeReport/Content.tsx";
import TarBar from "@/views/UserTimeReport/Tarbar.vue";
</script>

<style scoped></style>
