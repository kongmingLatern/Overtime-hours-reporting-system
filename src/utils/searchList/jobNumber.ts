import { usePersonSearch } from "@/store";
import { fuzzyQueryByKey } from "..";

export const jobNumberSearch = {
  label: "员工工号",
  placeholder: "请输入员工工号",
  onSearch: async (e: string) =>
    await fuzzyQueryByKey(usePersonSearch, "job_number", e),
};
