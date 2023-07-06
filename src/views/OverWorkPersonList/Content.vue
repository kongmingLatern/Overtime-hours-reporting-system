<template>
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
      <a-button v-if="record.status === '已驳回'">删除</a-button>
      <a-button v-if="record.status === '已通过'" disabled>删除</a-button>
    </template>
  </CustomTable>
</template>

<script setup lang="ts">
import CustomTable from "@/components/common/CustomTable";
import ModalButton from "@/components/common/ModalButton";
const columns = [
  {
    title: "工号",
    dataIndex: "job_number",
    key: "job_number",
  },
  {
    title: "姓名",
    dataIndex: "job_name",
    key: "job_name",
    width: 80,
  },
  {
    title: "所属部门",
    dataIndex: "department",
    key: "department",
    ellipsis: true,
  },
  {
    title: "表单状态",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "加班开始时间",
    dataIndex: "start_time",
    key: "start_time",
  },
  {
    title: "加班结束时间",
    dataIndex: "end_time",
    key: "end_time",
  },
  {
    title: "加班时长",
    dataIndex: "over_time",
    key: "over_time",
  },
  {
    title: "填报时间",
    dataIndex: "report_time",
    key: "report_time",
  },
  {
    title: "驳回原因",
    dataIndex: "operation",
    key: "operation",
  },
];
const dataSource = [
  {
    key: "1",
    job_number: "1",
    job_name: "John Brown",
    department: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    status: "已驳回",
    start_time: "2021-09-01 12:00:00",
    end_time: "2021-09-01 12:00:00",
    over_time: "2小时",
    report_time: "",
  },
  {
    key: "2",
    job_number: "2",
    job_name: "John Brown2",
    department: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    status: "已通过",
    start_time: "2021-09-01 12:00:00",
    end_time: "2021-09-01 12:00:00",
    over_time: "3小时",
    report_time: "",
  },
  {
    key: "3",
    job_number: "3",
    job_name: "John Brown3",
    department: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    status: "已提交",
    start_time: "2021-09-01 12:00:00",
    end_time: "2021-09-01 12:00:00",
    over_time: "3小时",
    report_time: "",
  },
];

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
    type: "text",
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
    type: "text",
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
};
</script>
