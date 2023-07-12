<template>
  <div class="cover">
    <div
      class="bg-image max-w-[900px] min-w-[300px] absolute-center"
      lg="w-[400px]"
    >
      <h2 text-center color-white>加班人员管理后台</h2>
      <DynamicForm
        :form-state="formState"
        :rule-state="ruleState"
        :on-finish="onFinish"
      >
        <template #submit>
          <a-button html-type="submit" block bg="green-500" color="white" mt="2"
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
const { formState, ruleState, onFinish } = useLogin();
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
