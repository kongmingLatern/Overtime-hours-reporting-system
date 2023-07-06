<template>
  <CustomTable :columns="columns" :data="dataSource">
    <template #operation="record">
      <a-button v-if="record.status === '已提交'" type="primary">查看</a-button>
      <a-button v-if="record.status === '已驳回'">删除</a-button>
      <a-button v-if="record.status === '已通过'" disabled>删除</a-button>
    </template>
  </CustomTable>
</template>

<script setup lang="ts">
import CustomTable from "@/components/common/CustomTable";
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
    report_time: "2021-09-01 12:00:00",
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
    report_time: "2021-09-01 12:00:00",
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
    report_time: "2021-09-01 12:00:00",
  },
];
</script>
