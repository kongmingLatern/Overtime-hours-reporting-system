<template>
  <Basic>
    <template #sider>
      <div color="blue" h-full>Sider</div>
    </template>
    <template #header>
      <h1 bg="blue-400" h-full>Header</h1>
    </template>
    <template #content>
      <div bg="red-400" h-full>Content</div>
    </template>
    <template #footer>
      <div bg="green-400" h-full>Footer</div>
    </template>
  </Basic>

  <!-- <ModalButtonTSX
    :form-state="formState"
    :rule-state="ruleState"
    button-text="button"
    cancel-text="cancel"
    ok-text="ok"
    title="TestDemo"
    :on-ok="onOk"
    :on-fail="onFail"
  />
  <CascaderSelect :options="options" :on-change="onChange" />
  <DeleteButton
    value="delete"
    cancel-text="取消"
    ok-text="确认"
    :on-confirm="onConfirm"
  >
    <Icon icon="material-symbols:10k" />
  </DeleteButton> -->
</template>

<script setup lang="ts">
import ModalButtonTSX from "@/components/ModalButton.tsx";
import CascaderSelect from "@/components/CascaderSelect.tsx";
import DeleteButton from "@/components/DeleteButton.tsx";
import Basic from "@/layout/basic";
import { CascaderProps } from "ant-design-vue";
import { Icon } from "@iconify/vue";

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
const options: CascaderProps["options"] = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];
const onChange = (value: string[]) => {
  console.log("value", value);
};
const onConfirm = (e) => {
  console.log(e);
};
const onOk = (value) => {
  console.log("onOk", value);
};
const onFail = (info) => {
  console.log("onFail", info);
};
</script>
@/layout/Basic
