<template>
  <nav flex="~ justify-end" items="center" p="10px">
    <ModalButton
      button-text="新增"
      title="新增"
      :form-state="formState"
      :rule-state="ruleState"
      :on-ok="onOk"
    />
  </nav>
</template>

<script setup lang="ts">
import ModalButton from "@/components/common/ModalButton";
import { reactive } from "vue";

const formState = reactive({
  job_number: "",
  job_name: "",
  department: "",
  start_time: "",
  end_time: "",
  over_time: "",
  report_time: "",
  status: "",
  reason: "",
});

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
const onOk = (e) => {
  console.log("onOk", e);
};
</script>

<style scoped></style>
