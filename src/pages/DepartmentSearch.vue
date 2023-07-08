<template>
  <RouterContent>
    <template #header>
      <Header />
    </template>
    <template #content>
      <Content>
        <template #toolbar>
          <ToolBar/>
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
import Header from "@/views/DepartmentSearch/Header.vue";
import Content from "@/views/DepartmentSearch/Content.vue";
import Footer from "@/views/DepartmentSearch/Footer.vue";
import ToolBar from "@/views/DepartmentSearch/ToolBar.vue";
</script>

<style scoped></style>

