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
      <a-button @click="exportExcel(handleExcelData(data), '加班时长统计')"
        >导出Excel</a-button
      >
    </a-space>
  </nav>
</template>

<script setup lang="ts">
import ModalButton from "@/components/common/ModalButton";
import { formState, ruleState } from "./helpers";
import { exportExcel, handleExcelData } from "@/utils";
import { useOverWorkPersonList } from "@/store";
import { addOverWorkPerson } from "@/api";
const { data } = useOverWorkPersonList();

const onOk = async (e) => {
  await addOverWorkPerson(e);
  window.location.reload();
};
</script>

<style scoped></style>
