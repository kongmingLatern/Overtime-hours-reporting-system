<template>
  <ResponsiveTab :activeKey="activeKey" :tabList="tabList" justify-center />
</template>

<script setup lang="ts">
import ResponsiveTab from "@/components/responsive/ResponsiveTab.tsx";
import { ref } from "vue";
const activeKey = ref<string>("pending");
const tabList = [
  {
    key: "pending",
    title: "待填报",
    icon: "iconfont icon-daishenhe",
    content: "待填报",
  },
  {
    key: "reported",
    title: "已填报",
    icon: "iconfont icon-yitijiao",
    content: "已填报",
  },
];
</script>

<style scoped></style>
@/components/responsive/ResponsiveTab
