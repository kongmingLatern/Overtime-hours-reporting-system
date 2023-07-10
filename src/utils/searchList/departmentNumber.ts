import { fuzzyQueryByKey } from "..";

export const departmentNumberSearch = (hook) => {
  return {
    label: "部门编码",
    placeholder: "请输入部门编码",
    onSearch: async (e: string) =>
      await fuzzyQueryByKey(hook, "department_number", e),
  };
};
