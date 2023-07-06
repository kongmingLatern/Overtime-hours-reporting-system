<template>
  <Basic>
    <template #sider>
      <Sider />
    </template>
    <template #header>
      <Header />
    </template>
    <template #content>
      <Content />
    </template>
    <template #footer>
      <Footer />
    </template>
  </Basic>
</template>

<script setup lang="ts">
import Basic from "@/layout/Basic";
import Header from "@/views/OverWorkPersonList/Header.vue";
import Sider from "@/views/OverWorkPersonList/Sider.vue";
import Content from "@/views/OverWorkPersonList/Content.vue";
import Footer from "@/views/OverWorkPersonList/Footer.vue";
</script>

<style scoped></style>
