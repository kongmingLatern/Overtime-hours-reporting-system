<template>
  <RouterContent>
    <template #header>
      <Header />
    </template>
    <template #content>
      <Content />
    </template>
    <template #footer>
      <Footer />
    </template>
  </RouterContent>
</template>

<script setup lang="ts">
import RouterContent from "@/layout/RouterContent";
import Header from "@/views/PersonSearch/Header.vue";
import Content from "@/views/PersonSearch/Content.vue";
import Footer from "@/views/PersonSearch/Footer.vue";
</script>

<style scoped></style>
