import { useDepartmentSearch } from "@/store";
import { departmentSelect } from "@/utils";
import { reactive } from "vue";

export const formState = reactive({
  project_name: "",
  project_time: "",
  department_name: "",
});

export const ruleState = {
  project_name: {
    type: "text",
    label: "项目名称",
    rules: [
      {
        required: true,
        message: "请输入名称",
        trigger: "blur",
      },
    ],
  },
  project_time: {
    type: "date",
    label: "项目时间",
    rules: [
      {
        required: true,
        message: "请选择项目时间",
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
};
