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
import { formState, ruleState } from "./helpers";
import { addDepartment } from "@/api";

const onOk = async (e) => {
  await addDepartment(e);
  // window.location.reload();
};
</script>

<style scoped></style>
