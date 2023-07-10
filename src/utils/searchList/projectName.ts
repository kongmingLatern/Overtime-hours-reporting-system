import { fuzzyQueryByKey } from "..";

export const projectNameSearch = (hook) => {
  return {
    label: "项目名称",
    placeholder: "请输入项目名称",
    onSearch: async (e: string) =>
      await fuzzyQueryByKey(hook, "project_name", e),
  };
};
