<template>
  <slot name="toolbar"></slot>
  <CustomTable :columns="columns" :data="data" :loading="loading" />
</template>

<script setup lang="ts">
import CustomTable from "@/components/common/CustomTable";
import { useGenerateReports } from "@/store";
import { onMounted } from "vue";
const { data, loading, columns, getAllReportList } = useGenerateReports();
onMounted(async () => {
  await getAllReportList();
});
</script>
