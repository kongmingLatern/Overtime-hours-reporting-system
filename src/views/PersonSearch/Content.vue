<template>
  <slot name="toolbar"></slot>
  <CustomTable :columns="columns" :data="data" :loading="loading">
    <template #operation="record">
      <a-space>
        <ModalButton
          button-text="编辑"
          title="编辑"
          :form-state="record"
          :rule-state="ruleState"
          :on-ok="onOk"
        />

        <DeleteButton
          title="确定是否要删除"
          okText="确定"
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
import { usePersonSearch } from "@/store";
import { onMounted } from "vue";
import { ruleState } from "./helpers";
const { data, loading, getAllPersonList, columns } = usePersonSearch();

onMounted(async () => {
  await getAllPersonList();
});

const onOk = (value) => {
  // TODO: 更新人员信息 updatePerson
  console.log("updatePerson", value);
};

const onConfirm = (record) => {
  // TODO: 删除数据 removePersonById
  console.log("PersonSearch confirm", record);
};
</script>
