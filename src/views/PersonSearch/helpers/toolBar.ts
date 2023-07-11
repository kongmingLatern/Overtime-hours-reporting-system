import { useDepartmentSearch } from "@/store";
import { departmentSelect } from "@/utils";
import { reactive } from "vue";

export const formState = reactive({
  job_number: "",
  job_name: "",
  department_name: "",
  job: "",
});

export const ruleState = {
  job_number: {
    type: "number",
    label: "工号",
    rules: [
      {
        required: true,
        message: "请输入工号",
        trigger: "blur",
      },
    ],
  },
  job_name: {
    type: "string",
    label: "姓名",
    rules: [
      {
        required: true,
        message: "请输入姓名",
        trigger: "blur",
      },
    ],
  },
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
  job: {
    type: "string",
    label: "职级",
    rules: [
      {
        required: true,
        message: "请输入职级",
        trigger: "blur",
      },
    ],
  },
};
