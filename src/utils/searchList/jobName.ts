import { usePersonSearch } from "@/store";
import { fuzzyQueryByKey } from "..";

export const jobNameSearch = {
  label: "员工姓名",
  placeholder: "请输入员工姓名",
  onSearch: async (e: string) =>
    await fuzzyQueryByKey(usePersonSearch, "job_name", e),
};
