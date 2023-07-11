import { useDepartmentSearch } from "@/store";
import { departmentSelect } from "@/utils";
import { reactive } from "vue";

export const formState = reactive({
  department_name: "",
  department_number: "",
  leader: "",
  line_number: "",
});

export const ruleState = {
  department_name: {
    type: "select",
    label: "所属部门",
    rules: [
      {
        required: true,
        message: "请输入所属部门",
        trigger: "blur",
      },
    ],
    options: {
      options: (await departmentSelect(useDepartmentSearch)).options,
    },
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
    type: "text",
    label: "部长",
    rules: [
      {
        required: true,
        message: "请输入部长姓名",
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
