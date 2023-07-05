<template>
  <ModalButtonTSX
    :form-state="formState"
    :rule-state="ruleState"
    button-text="button"
    cancel-text="cancel"
    ok-text="ok"
    title="TestDemo"
  />
  123
</template>

<script setup lang="ts">
import ModalButtonTSX from "@/components/ModalButton.tsx";

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
</script>
