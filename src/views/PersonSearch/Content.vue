<template>
  <slot name="toolbar"></slot>
  <CustomTable :columns="personSearchColumns" :data="personDataSource">
    <template #operation="record">
      <a-space>
        <ModalButton
          button-text="编辑"
          title="编辑"
          :form-state="record"
          :rule-state="ruleState"
        />

        <DeleteButton title="确定是否要删除" okText="确定" />
      </a-space>
    </template>
  </CustomTable>
</template>

<script setup lang="ts">
import CustomTable from "@/components/common/CustomTable";
import ModalButton from "@/components/common/ModalButton";
import DeleteButton from "@/components/common/DeleteButton";
import { personSearchColumns, personDataSource } from "@/store";

const ruleState = {
  job_number: {
    type: "number",
    label: "工号",
    rules: [
      {
        required: true,
        message: "请输入工号",
        trigger: "blur",
      },
    ],
  },
  job_name: {
    type: "string",
    label: "姓名",
    rules: [
      {
        required: true,
        message: "请输入姓名",
        trigger: "blur",
      },
    ],
  },
  department: {
    type: "string",
    label: "所属部门",
    rules: [
      {
        required: true,
        message: "请输入所属部门",
        trigger: "blur",
      },
    ],
  },
  job: {
    type: "string",
    label: "职级",
    rules: [
      {
        required: true,
        message: "请输入职级",
        trigger: "blur",
      },
    ],
  },
};
</script>
