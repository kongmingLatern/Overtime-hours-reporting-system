<template>
  <slot name="toolbar"></slot>
  <CustomTable :columns="columns" :data="dataSource">
    <template #operation="record">
      <ModalButton
        v-if="record.status === '已提交'"
        type="primary"
        button-text="查看"
        title="查看"
        :form-state="record"
        :rule-state="ruleState"
      />
      <ModalButton
        v-if="record.status === '已驳回'"
        button-text="查看"
        title="查看"
        :form-state="{ ...record, reason: '驳回原因' }"
        :rule-state="ruleState"
      />
      <a-button v-if="record.status === '已通过'" disabled>删除</a-button>
    </template>
  </CustomTable>
</template>

<script setup lang="ts">
import CustomTable from "@/components/common/CustomTable";
import ModalButton from "@/components/common/ModalButton";
import { columns, dataSource } from "@/store";

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
  status: {
    type: "string",
    label: "表单状态",
    rules: [
      {
        required: true,
        message: "请输入表单状态",
        trigger: "blur",
      },
    ],
  },
  start_time: {
    type: "date",
    label: "加班开始时间",
    rules: [
      {
        required: true,
        message: "请输入加班开始时间",
        trigger: "blur",
      },
    ],
  },
  end_time: {
    type: "date",
    label: "加班结束时间",
    rules: [
      {
        required: true,
        message: "请输入加班结束时间",
        trigger: "blur",
      },
    ],
  },
  over_time: {
    type: "text",
    label: "加班时长",
    rules: [
      {
        required: true,
        message: "请输入加班时长",
        trigger: "blur",
      },
    ],
  },
  report_time: {
    type: "date",
    label: "填报时间",
    rules: [
      {
        required: true,
        message: "请输入填报时间",
        trigger: "blur",
      },
    ],
  },
  reason: {
    type: "text",
    label: "驳回原因",
    options: {
      disabled: true,
    },
  },
};
</script>
