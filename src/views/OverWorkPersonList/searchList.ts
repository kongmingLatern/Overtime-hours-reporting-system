import { useOverWorkPersonList } from "@/store";
import { searchByValue } from "@/utils";

export async function fuzzyQueryByKey(key, e) {
  const { data, resetData } = useOverWorkPersonList();
  await resetData();
  data.value = data.value.filter((item: any) => searchByValue(key, e)(item));
}

export const searchList = [
  {
    label: "员工姓名",
    placeholder: "请输入员工姓名",
    onSearch: async (e: string) => {
      await fuzzyQueryByKey("job_name", e);
    },
  },
  {
    label: "员工工号",
    placeholder: "请输入员工工号",
    onSearch: async (e: string) => {
      await fuzzyQueryByKey("job_number", e);
    },
  },
];
