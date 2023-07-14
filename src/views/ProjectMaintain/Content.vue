<template>
  <slot name="toolbar"></slot>
  <CustomTable :columns="columns" :data="data" :loading="loading">
    <template #operation="record">
      <DeleteButton
        :button-props="{ danger: true }"
        ok-text="删除"
        :on-confirm="() => onConfirm(record)"
      />
    </template>
  </CustomTable>
</template>

<script setup lang="ts">
import { removeProjectById } from "@/api";
import CustomTable from "@/components/common/CustomTable";
import DeleteButton from "@/components/common/DeleteButton";
import { useProjectMaintain } from "@/store";
import { onMounted } from "vue";

const { data, loading, columns, getAllProjectList } = useProjectMaintain();

onMounted(async () => {
  await getAllProjectList();
});

const onConfirm = async (record) => {
  await removeProjectById(record);
  window.location.reload();
};
</script>

<style scoped></style>
