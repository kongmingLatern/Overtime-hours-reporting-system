import { useDepartmentSearch } from "@/store";
import { ref } from "vue";
import { fuzzyQueryByKey } from "@/utils";

const { data, init } = useDepartmentSearch();
await init();

const departmentData = ref(
  data.value.map((item) => {
    return {
      value: item.department_name,
    };
  })
);

export const departmentSelect = (hook) => {
  return {
    label: "所属部门",
    placeholder: "请选择所属部门",
    value: departmentData.value[0].value,
    options: departmentData.value,
    onChange: async (e: any) => {
      await fuzzyQueryByKey(hook, "department_name", e);
    },
  };
};
