import { fuzzyQueryByKey } from "..";

export const jobNumberSearch = (hook) => {
  return {
    label: "员工工号",
    placeholder: "请输入员工工号",
    onSearch: async (e: string) => await fuzzyQueryByKey(hook, "job_number", e),
  };
};
