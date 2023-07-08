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
    department_name: "",
    department_number: "",
    leader: "",
    line_number: "",
    operation: "",
    
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
  const onOk = (e) => {
    console.log("onOk", e);
  };
  </script>
  
  <style scoped></style>