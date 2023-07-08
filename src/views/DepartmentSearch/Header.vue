<template>
    <div bg="#001529" flex j-a-c h="150px">
      <a-space :size="32" direction="vertical">
        <a-space :size="32">
          <SearchInput
            v-for="item in searchList"
            :key="item.label"
            :placeholder="item.placeholder"
            :on-search="item.onSearch"
          />
        </a-space>
  
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
        </a-space>
      </a-space>
    </div>
  </template>
  
  <script setup lang="ts">
  import SearchInput from "@/components/common/SearchInput";
  import SingleSelect from "@/components/common/SingleSelect";
  
  const searchList = [
    {
      label: "部门名称",
      placeholder: "请输入部门名称",
      onSearch: (e: any) => {
        console.log(e);
      },
    },
    {
      label: "部门编码",
      placeholder: "请输入部门编码",
      value: "1000-12",
      options: [
        {
          value: "1000-12",
          options: {
            disabled: true,
          },
        },
        {
          value: "1000-13",
          options: {
            disabled: true,
          },
        },
        {
          value: "1000-14",
          options: {
            disabled: false,
          },
        },
      ],
      onChange: (e: any) => {
        console.log(e);
      },
    },
    
  ];
  
  const singleSelect = [
    {
      label: "部长",
      placeholder: "请输入部长",
      value: "张三",
      options: [
        {
          value: "张三",
          options: {
            disabled: true,
          },
        },
        {
          value: "李四",
          options: {
            disabled: true,
          },
        },
        {
          value: "王五",
          options: {
            disabled: false,
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
  