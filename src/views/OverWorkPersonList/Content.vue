<template>
  <slot name="toolbar"></slot>
  <CustomTable :columns="columns" :data="dataSource">
    <template #operation="record">
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
      <a-button v-if="record.status === '已通过'" disabled>删除</a-button>
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
const { columns, ruleState, getAllOverWorkPersonList } =
  useOverWorkPersonListStore();

const dataSource = ref<OverWorkPersonType[]>([]);

onMounted(async () => {
  dataSource.value = await getAllOverWorkPersonList();
});
</script>
