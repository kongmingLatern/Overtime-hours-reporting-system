<template>
  <ModalButtonTSX
    :form-state="formState"
    :rule-state="ruleState"
    button-text="button"
    cancel-text="cancel"
    ok-text="ok"
    title="TestDemo"
  />
  <CascaderSelect :options="options" :on-change="onChange" />
</template>

<script setup lang="ts">
import ModalButtonTSX from "@/components/ModalButton.tsx";
import CascaderSelect from "@/components/CascaderSelect.tsx";
import { CascaderProps } from "ant-design-vue";

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
</script>
