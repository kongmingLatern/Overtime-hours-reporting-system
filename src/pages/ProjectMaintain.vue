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
import Header from "@/views/ProjectMaintain/Header.vue";
import Content from "@/views/ProjectMaintain/Content.vue";
import ToolBar from "@/views/ProjectMaintain/ToolBar.vue";
import Footer from "@/views/ProjectMaintain/Footer.vue";
</script>

<style scoped></style>
