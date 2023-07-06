```vue
<template>
  <div p-2 h-full>
    <h1>搜索框</h1>
    <SearchInput
      class="w-[200px]"
      placeholder="请输入要查询的员工姓名"
      enter-button
      :on-search="onSearch"
    />
    <h1>下拉菜单</h1>
    <SingleSelect
      :value="value"
      :options="options"
      :on-focus="onFocus"
      :on-change="handleChange"
    />

    <h1>自定义表格</h1>
    <CustomTable :columns="columns" :data="dataSource">
      <template #operation>
        <a-button danger>删除</a-button>
      </template>
    </CustomTable>

    <h1>删除按钮</h1>
    <DeleteButton value="删除" cancel-text="取消" ok-text="确认" />

    <h1>模态窗口</h1>
    <ModalButton title="新增" :form-state="formState" :rule-state="ruleState" />

    <h1>动态表单</h1>
    <DynamicForm :form-state="formState" :rule-state="ruleState">
      <template #submit>
        <a-button html-type="submit">submit</a-button>
      </template>
    </DynamicForm>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SingleSelect from "@/components/common/SingleSelect";
import CustomTable from "@/components/common/CustomTable";
import DeleteButton from "@/components/common/DeleteButton";
import ModalButton from "@/components/common/ModalButton";
import SearchInput from "@/components/common/SearchInput";
import DynamicForm from "@/components/common/DynamicForm";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: 80,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address 1",
    ellipsis: true,
  },
  {
    title: "操作",
    dataIndex: "operation",
    key: "operation",
  },
];
const dataSource = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 2 Lake Park, London No. 2 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
  },
];

const options = [
  {
    value: "abc",
    options: {
      disabled: false,
    },
  },
  {
    value: "bbb",
    options: {
      disabled: true,
    },
  },
];

const formState = {
  name: "",
  age: "",
  address: "",
};

const ruleState: Record<keyof typeof formState, Record<string, any>> = {
  name: {
    type: "text",
    label: "姓名",
    rules: [
      {
        required: true,
        message: "Please input your name",
      },
    ],
  },
  age: {
    type: "number",
    label: "年龄",
    rules: [
      {
        required: true,
        message: "Please input your age",
      },
    ],
  },
  address: {
    type: "text",
    label: "地址",
    rules: [
      {
        required: true,
        message: "Please input your address",
      },
    ],
  },
};
const value = ref<string>(options[0].value);
const onFocus = () => {
  console.log("focu ---");
};
const handleChange = (target) => {
  value.value = target;
  console.log("handleChange", target);
};
const onSearch = (value) => {
  console.log("onSearch", value);
};
</script>

<style scoped></style>
```
