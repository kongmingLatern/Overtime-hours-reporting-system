import { useDepartmentSearch } from "@/store";
import { ref } from "vue";
import { fuzzyQueryByKey } from "./searchList";
const { data, getAllDepartmentList } = useDepartmentSearch();
await getAllDepartmentList();
const result = ref(
  data.value.map((item) => {
    return {
      value: item.department_name,
    };
  })
);
console.log("value", result.value);

export const singleSelectList = [
  {
    label: "所属部门",
    placeholder: "请选择所属部门",
    value: result.value[0].value,
    options: result.value,
    onChange: async (e: any) => {
      await fuzzyQueryByKey("department_name", e);
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
