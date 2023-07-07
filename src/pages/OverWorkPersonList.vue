<template>
  <RouterContent>
    <template #header>
      <Header />
    </template>
    <template #content>
      <Content>
        <template #toolbar>
          <ToolBar />
        </template>
      </Content>
    </template>
    <template #footer>
      <Footer />
    </template>
  </RouterContent>
</template>

<script setup lang="ts">
import RouterContent from "@/layout/RouterContent";
import Header from "@/views/OverWorkPersonList/Header.vue";
import Content from "@/views/OverWorkPersonList/Content.vue";
import Footer from "@/views/OverWorkPersonList/Footer.vue";
import ToolBar from "@/views/OverWorkPersonList/ToolBar.vue";
</script>

<style scoped></style>
