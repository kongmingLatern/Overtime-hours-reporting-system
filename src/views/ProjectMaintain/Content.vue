<template>
  <slot name="toolbar"></slot>
  <CustomTable :columns="columns" :data="departMentDataSource" />
</template>

<script setup lang="ts">
import CustomTable from "@/components/common/CustomTable";
import { useDepartmentSearchStore, departMentDataSource } from "@/store";

const { columns } = useDepartmentSearchStore();
</script>

<style scoped></style>
