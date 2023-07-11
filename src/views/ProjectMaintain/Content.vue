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
import CustomTable from "@/components/common/CustomTable";
import DeleteButton from "@/components/common/DeleteButton";
import { useProjectMaintain } from "@/store";
import { onMounted } from "vue";

const { data, loading, columns, getAllProjectList } = useProjectMaintain();

onMounted(async () => {
  await getAllProjectList();
});

const onConfirm = (record) => {
  // NOTE: 删除数据
  console.log("confirm", record);
};
</script>

<style scoped></style>
