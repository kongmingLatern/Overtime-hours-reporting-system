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

const onOk = (e) => {
  // TODO: 更新数据 addPerson
  console.log("onOk", e);
};
</script>

<style scoped></style>
