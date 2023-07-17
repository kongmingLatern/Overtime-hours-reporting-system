import { ref } from "vue";
import { fuzzyQueryByKey } from "@/utils";

export const projectSelect = async (hook) => {
  const { data: projectData, init: initProjectData } = hook();

  await initProjectData();

  const projectList = ref(
    Array.from(new Set(projectData.value.map((item) => item.project_name))).map(
      (item) => {
        return {
          value: item,
        };
      }
    )
  );

  return {
    label: "所属项目",
    value: projectList?.value[0]?.value,
    options: projectList?.value,
    placeholder: "请选择所属项目",
    onChange: async (e: any) => {
      await fuzzyQueryByKey(hook, "project_name", e);
    },
  };
};
