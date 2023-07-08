<template>
    <slot name="toolbar"></slot>
    <CustomTable :columns="departMentColumns" :data="departMentDataSource">
      <template #operation="record">
        <a-space>
            <ModalButton
            button-text="编辑"
            title="编辑"
            :form-state="record"
            :rule-state="ruleState"
            />

            <DeleteButton 
                title="确定是否要删除"
                okText="确定"
                cancelText="取消"
            />
        </a-space>
      </template>
    </CustomTable>
  </template>
  
  <script setup lang="ts">
  import CustomTable from "@/components/common/CustomTable";
  import ModalButton from "@/components/common/ModalButton";
  import DeleteButton from "@/components/common/DeleteButton";
  import {departMentColumns, departMentDataSource } from "@/store";
  
  const ruleState = {
    department_name: {
      type: "string",
      label: "部门名称",
      rules: [
        {
          required: true,
          message: "请输入部门名称",
          trigger: "blur",
        },
      ],
    },
    department_number: {
      type: "number",
      label: "部门编码",
      rules: [
        {
          required: true,
          message: "请输入部门编码",
          trigger: "blur",
        },
      ],
    },
    leader: {
      type: "string",
      label: "部长",
      rules: [
        {
          required: true,
          message: "请输入部长",
          trigger: "blur",
        },
      ],
    },
    line_number: {
      type: "string",
      label: "所属条线",
      rules: [
        {
          required: true,
          message: "请输入所属条线",
          trigger: "blur",
        },
      ],
    },  
  };
  </script>