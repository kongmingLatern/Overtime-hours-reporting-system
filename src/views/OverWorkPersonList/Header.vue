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
    label: "员工姓名",
    placeholder: "请输入员工姓名",
    onSearch: (e: any) => {
      console.log(e);
    },
  },
  {
    label: "员工工号",
    placeholder: "请输入员工工号",
    onSearch: (e: any) => {
      console.log(e);
    },
  },
  {
    label: "加班时间",
    placeholder: "请输入加班时间",
    onSearch: (e: any) => {
      console.log(e);
    },
  },
];

const singleSelect = [
  {
    label: "所属部门",
    placeholder: "请选择所属部门",
    value: "1号部门",
    options: [
      {
        value: "1号部门",
        options: {
          disabled: true,
        },
      },
      {
        value: "2号部门",
        options: {
          disabled: true,
        },
      },
      {
        value: "3号部门",
        options: {
          disabled: false,
        },
      },
    ],
    onChange: (e: any) => {
      console.log(e);
    },
  },
  {
    label: "表单状态",
    placeholder: "请选择表单状态",
    value: "已通过",
    options: [
      {
        value: "已通过",
      },
      {
        value: "已提交",
      },
      {
        value: "已驳回",
      },
    ],
    onChange: (e: any) => {
      console.log(e);
    },
  },
  {
    label: "所属项目",
    value: "1号项目",
    options: [
      {
        value: "1号项目",
        options: {
          disabled: true,
        },
      },
      {
        value: "2号项目",
        options: {
          disabled: true,
        },
      },
      {
        value: "3号项目",
        options: {
          disabled: false,
        },
      },
    ],
    placeholder: "请选择所属项目",
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
