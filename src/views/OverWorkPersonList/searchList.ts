import { useOverWorkPersonList } from "@/store";
function searchByValue(key: string, value: string) {
  return function (item: any) {
    return item[key].includes(value);
  };
}
export async function fuzzyQueryByKey(key, e) {
  const { data, resetData } = useOverWorkPersonList();
  await resetData();
  console.log("data", data);
  data.value = data.value.filter((item: any) => searchByValue(key, e)(item));
}

export const searchList = [
  {
    label: "员工姓名",
    placeholder: "请输入员工姓名",
    onSearch: async (e: any) => {
      await fuzzyQueryByKey("job_name", e);
    },
  },
  {
    label: "员工工号",
    placeholder: "请输入员工工号",
    onSearch: async (e: any) => {
      await fuzzyQueryByKey("job_number", e);
    },
  },
  {
    label: "加班时间",
    placeholder: "请输入加班时间",
    onSearch: async (e: any) => {
      await fuzzyQueryByKey("start_time", e);
    },
  },
];
