<template>
  <div class="bg-[url('@/assets/background.jpeg')] w-[500px] absolute-center">
    <a-typography-title text-center>加班人员管理后台</a-typography-title>
    <DynamicForm :form-state="formState" :rule-state="ruleState">
      <template #submit>
        <a-button html-type="submit" block bg="green-500" color="white"
          >登陆</a-button
        >
      </template>
    </DynamicForm>
  </div>
</template>

<script setup lang="ts">
import DynamicForm from "@/components/common/DynamicForm";
import { reactive } from "vue";
const formState = reactive({
  job_number: "",
  password: "",
});

const ruleState = {
  job_number: {
    type: "text",
    label: "工号",
    placeholder: "请输入工号",
    rules: [{ required: true, message: "请输入工号", trigger: "blur" }],
  },
  password: {
    type: "password",
    label: "密码",
    placeholder: "请输入密码",
    rules: [{ required: true, message: "请输入密码", trigger: "blur" }],
  },
};
</script>

<style scoped></style>
