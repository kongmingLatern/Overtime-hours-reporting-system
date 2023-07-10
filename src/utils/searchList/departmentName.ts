import { fuzzyQueryByKey } from "..";

export const departmentNameSearch = (hook) => {
  return {
    label: "所属部门",
    placeholder: "请输入所属部门",
    onSearch: async (e: string) =>
      await fuzzyQueryByKey(hook, "department_name", e),
  };
};
