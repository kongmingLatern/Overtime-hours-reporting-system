<template>
    <div bg="#001529" flex j-a-c h="150px">
      <a-space :size="32" direction="horizontal">
        <a-space :size="32">
          <SingleSelect
            v-for="item in singleSelect"
            :key="item.label"
            :value="item.value"
            :options="item.options"
            :placeholder="item.placeholder"
            :on-change="item.onChange"
            class="w-[210px]"
          />
        </a-space >
      <a-space :size="32">
        <a-button h="45px" w="90px">
            生成报表
            
            </a-button>
      </a-space>
    </a-space>
    </div>
  </template>
  
  <script setup lang="ts">
  import SingleSelect from "@/components/common/SingleSelect";
  const singleSelect = [
    {
      label: "报表类型",
      placeholder: "请选择报表类型",
      value: "月度",
      options: [
        {
          value: "月度",
          options: {
            disabled: true,
          },
        },
        {
          value: "季度",
          options: {
            disabled: true,
          },
        },
      ],
      onChange: (e: any) => {
        console.log(e);
      },
    },
  ];
  </script>
  
  <style lang="scss" scoped>
  :deep(.ant-space-item) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  </style>