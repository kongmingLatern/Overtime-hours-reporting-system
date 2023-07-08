<template>
  <slot name="toolbar"></slot>
  <CustomTable :columns="columns" :data="generateResportsDataSource" />
</template>

<script setup lang="ts">
import CustomTable from "@/components/common/CustomTable";
import { useGenerateReports, generateResportsDataSource } from "@/store";

const { columns } = useGenerateReports();
</script>
