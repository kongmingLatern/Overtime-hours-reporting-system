import { ref } from "vue";
import { fuzzyQueryByKey } from "@/utils";

export const projectSelect = async (hook, flag = false, ...args) => {
  const { data: projectData, init: initProjectData, getProjectName } = hook();

  if (!flag) {
    await initProjectData();
  } else {
    await getProjectName(args[0], args[1]);
  }

  const projectList = ref(
    Array.from(
      new Set(projectData.value?.map((item) => item.project_name))
    )?.map((item) => {
      return {
        value: item,
      };
    })
  );

  return {
    label: "所属项目",
    value: projectList?.value[0]?.value,
    options: projectList?.value,
    placeholder: "请选择所属项目",
    onChange: async (e: any) => await fuzzyQueryByKey(hook, "project_name", e),
  };
};
