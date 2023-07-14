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
          title="确定是否要删除"
          okText="确定"
          cancelText="取消"
          :on-confirm="() => onConfirm(record)"
        />
      </a-space>
    </template>
  </CustomTable>
</template>

<script setup lang="ts">
import CustomTable from "@/components/common/CustomTable";
import ModalButton from "@/components/common/ModalButton";
import DeleteButton from "@/components/common/DeleteButton";
import { useDepartmentSearch } from "@/store";
import { onMounted } from "vue";
import { removeDepartmentById, updateDepartment } from "@/api";
const { data, loading, getAllDepartmentList, columns, ruleState } =
  useDepartmentSearch();

onMounted(async () => {
  await getAllDepartmentList();
});

const onOk = async (updateValue) => {
  await updateDepartment(updateValue);
};

const onConfirm = async (record) => {
  await removeDepartmentById(record);
};
</script>
