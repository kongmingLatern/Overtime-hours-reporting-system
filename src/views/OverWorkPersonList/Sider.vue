<template>
  <a-carousel autoplay :dots="false" p="5">
    <div text="center" bg="#001529" p="2"><h3 color="white">1</h3></div>
    <div text="center" bg="#001529" p="2"><h3 color="white">2</h3></div>
    <div text="center" bg="#001529" p="2"><h3 color="white">3</h3></div>
    <div text="center" bg="#001529" p="2"><h3 color="white">4</h3></div>
  </a-carousel>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    theme="dark"
    mode="inline"
    h="100vh"
  >
    <a-menu-item key="1">
      <a-space>
        <Icon flex icon="ic:round-person" width="20" />
        <span class="nav-text">加班人员列表</span>
      </a-space>
    </a-menu-item>
    <a-menu-item key="2">
      <a-space>
        <Icon flex icon="solar:list-broken" width="20" />
        <span class="nav-text">人员查询</span>
      </a-space>
    </a-menu-item>
    <a-menu-item key="3">
      <a-space>
        <Icon flex icon="mingcute:department-fill" width="20" />
        <span class="nav-text">部门查询</span>
      </a-space>
    </a-menu-item>
    <a-menu-item key="4">
      <a-space>
        <Icon flex icon="ant-design:project-outlined" width="20" />
        <span class="nav-text">项目维护</span>
      </a-space>
    </a-menu-item>
    <a-menu-item key="5">
      <a-space>
        <Icon flex icon="lucide:sheet" width="20" />
        <span class="nav-text">生成报表</span>
      </a-space>
    </a-menu-item>
  </a-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const selectedKeys = ref<string[]>(["4"]);
</script>

<style scoped></style>
