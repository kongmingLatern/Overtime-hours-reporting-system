<template>
  <slot name="toolbar"></slot>
  <CustomTable :columns="columns" :data="data" :loading="loading" />
</template>

<script setup lang="ts">
import CustomTable from "@/components/common/CustomTable";
import { useProjectMaintain } from "@/store";
import { onMounted } from "vue";

const { data, loading, columns, getAllProjectList } = useProjectMaintain();

onMounted(async () => {
  await getAllProjectList();
});
</script>

<style scoped></style>
