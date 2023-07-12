<template>
  <div class="cover">
    <div class="bg-image w-[500px] absolute-center">
      <h2 text-center color-white>加班人员管理后台</h2>
      <DynamicForm :form-state="formState" :rule-state="ruleState">
        <template #submit>
          <a-button html-type="submit" block bg="green-500" color="white"
            >登陆</a-button
          >
        </template>
      </DynamicForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import DynamicForm from "@/components/common/DynamicForm";
import { useLogin } from "@/store";
const { formState, ruleState } = useLogin();
</script>

<style scoped lang="scss">
.cover {
  width: 100vw;
  height: 100vh;
  background-image: url("@/assets/background.jpeg");
}
:deep(.ant-form-item-required) {
  color: white;
}
</style>
