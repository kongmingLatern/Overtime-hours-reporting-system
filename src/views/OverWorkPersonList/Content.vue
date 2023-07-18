<template>
  <slot name="toolbar"></slot>
  <CustomTable :columns="columns" :data="data" :loading="loading">
    <template #operation="record">
      <a-space>
        <ModalButton
          v-if="record.status === '已提交'"
          type="primary"
          button-text="查看"
          title="查看"
          :form-state="record"
          :rule-state="ruleState"
          :footer="null"
        />
        <ModalButton
          v-if="record.status === '已驳回'"
          button-text="查看"
          title="查看"
          :form-state="{ ...record, reason: '驳回原因' }"
          :rule-state="ruleState"
          :button-props="{ danger: true }"
          :footer="null"
        />
        <ModalButton
          v-if="record.status === '已通过'"
          type="primary"
          button-text="查看"
          title="查看"
          :form-state="{ ...record, over_time_reason: '加班事由xxx' }"
          :rule-state="{
            ...ruleState,
            over_time_reason: { label: '加班事由', type: 'readonly' },
          }"
          :button-props="{ class: 'bg-green-500' }"
          :footer="null"
        />

        <DeleteButton
          :disabled="record.status === '已通过'"
          :button-props="{ danger: true, disabled: record.status === '已通过' }"
          :on-confirm="() => onConfirm(record)"
        />
      </a-space>
    </template>
  </CustomTable>
</template>

<script setup lang="ts">
import CustomTable from "@/components/common/CustomTable";
import ModalButton from "@/components/common/ModalButton";
import DeleteButton from "@/components/common/DeleteButton";
import { onMounted } from "vue";
import { useOverWorkPersonList } from "@/store";
import { removeOverWorkPersonById } from "@/api";
const { data, loading, columns,ruleState, getAllOverWorkPersonList } =
  useOverWorkPersonList();
onMounted(async () => {
  await getAllOverWorkPersonList();
});
const onConfirm = async (record) => {
  await removeOverWorkPersonById(record);
  window.location.reload();
};
</script>
