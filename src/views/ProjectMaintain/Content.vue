<template>
  <slot name="toolbar"></slot>
  <CustomTable :columns="columns" :data="data" :loading="loading">
    <template #operation="record">
      <a-space>
        <ModalButton
          button-text="编辑"
          title="编辑"
          :form-state="record"
          :rule-state="ruleState"
          :on-ok="onOk"
        />

        <DeleteButton
          :button-props="{ danger: true }"
          ok-text="删除"
          :on-confirm="() => onConfirm(record)"
        />
      </a-space>
    </template>
  </CustomTable>
</template>

<script setup lang="ts">
import { updateProject, removeProjectById } from "@/api";
import CustomTable from "@/components/common/CustomTable";
import ModalButton from "@/components/common/ModalButton";
import DeleteButton from "@/components/common/DeleteButton";
import { useProjectMaintain } from "@/store";
import { onMounted } from "vue";
import { ruleState } from "./helpers";
const { data, loading, columns, getAllProjectList } = useProjectMaintain();

onMounted(async () => {
  await getAllProjectList();
});

const onOk = async (e) => {
  await updateProject(e);
  window.location.reload();
};

const onConfirm = async (record) => {
  await removeProjectById(record);
  window.location.reload();
};
</script>

<style scoped></style>
