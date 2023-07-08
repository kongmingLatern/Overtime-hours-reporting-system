<template>
  <div bg="blue-300" p="5" text="center lg white" font="bold">
    &copy; 2023-2024 Syj & Zmt
    <a-button @click="exportExcel(data, 'demo')"> 导出excel </a-button>
  </div>
</template>

<script setup lang="ts">
import { exportExcel } from "@/utils";
const data: any[] = [
  ["Id", "Title", "Author"],
  ["123", "egegerg", "why"],
];
</script>
