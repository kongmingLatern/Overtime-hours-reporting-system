import { useDepartmentSearch } from "@/store";
import { fuzzyQueryByKey } from "@/utils";

export const statusSelect = {
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
  onChange: async (e: any) => {
    await fuzzyQueryByKey(useDepartmentSearch, "status", e);
  },
};
