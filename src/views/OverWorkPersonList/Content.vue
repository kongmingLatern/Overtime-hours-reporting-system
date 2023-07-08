<template>
  <slot name="toolbar"></slot>
  <CustomTable :columns="columns" :data="dataSource">
    <template #operation="record">
      <a-space>
        <ModalButton
          v-if="record.status === '已提交'"
          type="primary"
          button-text="查看"
          title="查看"
          :form-state="record"
          :rule-state="ruleState"
        />
        <ModalButton
          v-if="record.status === '已驳回'"
          button-text="查看"
          title="查看"
          :form-state="{ ...record, reason: '驳回原因' }"
          :rule-state="ruleState"
          :button-props="{ danger: true }"
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
        />

        <DeleteButton
          :disabled="record.status === '已通过'"
          :button-props="{ danger: true, disabled: record.status === '已通过' }"
        />
      </a-space>
    </template>
  </CustomTable>
</template>

<script setup lang="ts">
import CustomTable from "@/components/common/CustomTable";
import ModalButton from "@/components/common/ModalButton";
import { onMounted, ref } from "vue";
import {
  useOverWorkPersonListStore,
  OverWorkPersonType,
} from "@/store/overWorkPersonList.store";
import DeleteButton from "@/components/common/DeleteButton";
const { columns, ruleState, getAllOverWorkPersonList } =
  useOverWorkPersonListStore();

const dataSource = ref<OverWorkPersonType[]>([]);

onMounted(async () => {
  dataSource.value = await getAllOverWorkPersonList();
});
</script>
