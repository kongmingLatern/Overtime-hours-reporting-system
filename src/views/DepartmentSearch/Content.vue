<template>
  <slot name="toolbar"></slot>
  <CustomTable :columns="columns" :data="departMentDataSource">
    <template #operation="record">
      <a-space>
        <ModalButton
          button-text="编辑"
          title="编辑"
          :form-state="record"
          :rule-state="ruleState"
        />

        <DeleteButton title="确定是否要删除" okText="确定" cancelText="取消" />
      </a-space>
    </template>
  </CustomTable>
</template>

<script setup lang="ts">
import CustomTable from "@/components/common/CustomTable";
import ModalButton from "@/components/common/ModalButton";
import DeleteButton from "@/components/common/DeleteButton";
import { departMentDataSource, useDepartmentSearchStore } from "@/store";
const { columns, ruleState } = useDepartmentSearchStore();
</script>
