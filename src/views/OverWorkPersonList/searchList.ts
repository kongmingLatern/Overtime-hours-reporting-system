import { useOverWorkPersonList } from "@/store";
import { fuzzyQueryByKey } from "@/utils";

export const searchList = [
  {
    label: "员工姓名",
    placeholder: "请输入员工姓名",
    onSearch: async (e: string) => {
      await fuzzyQueryByKey(useOverWorkPersonList, "job_name", e);
    },
  },
  {
    label: "员工工号",
    placeholder: "请输入员工工号",
    onSearch: async (e: string) => {
      await fuzzyQueryByKey(useOverWorkPersonList, "job_number", e);
    },
  },
];
