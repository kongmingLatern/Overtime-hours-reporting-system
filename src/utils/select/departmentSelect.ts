import { ref } from "vue";
import { fuzzyQueryByKey } from "@/utils";

export const departmentSelect = async (hook) => {
  const { data, init } = hook();
  await init();

  const departmentData = ref(
    data.value.map((item) => {
      return {
        value: item.department_name,
      };
    })
  );

  return {
    label: "所属部门",
    placeholder: "请选择所属部门",
    value: departmentData?.value[0]?.value,
    options: departmentData?.value,
    onChange: async (e: any) => {
      await fuzzyQueryByKey(hook, "department_name", e);
    },
  };
};
