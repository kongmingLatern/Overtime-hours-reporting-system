import { fuzzyQueryByKey } from "..";

export const jobNameSearch = (hook) => {
  return {
    label: "员工姓名",
    placeholder: "请输入员工姓名",
    onSearch: async (e: string) => await fuzzyQueryByKey(hook, "job_name", e),
  };
};
