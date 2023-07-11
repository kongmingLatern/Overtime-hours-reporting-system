<template>
  <nav flex="~ justify-end" items="center" p="10px">
    <a-space>
      <ModalButton
        button-text="新增"
        title="新增"
        :form-state="formState"
        :rule-state="ruleState"
        :on-ok="onOk"
      />
      <a-button @click="exportExcel(data, '加班时长统计')">导出Excel</a-button>
    </a-space>
  </nav>
</template>

<script setup lang="ts">
import ModalButton from "@/components/common/ModalButton";
import { formState, ruleState } from "./helpers";
import { exportExcel } from "@/utils";
import { useOverWorkPersonList } from "@/store";

const onOk = (e) => {
  console.log("onOk", e);
};

const { data } = useOverWorkPersonList();
console.log("value", data.value);

// const data: any[] = [
//   ["Id", "Title", "Author"],
//   ["123", "egegerg", "why"],
// ];
</script>

<style scoped></style>
