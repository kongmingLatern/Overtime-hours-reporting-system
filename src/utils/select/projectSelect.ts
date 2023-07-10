import { useProjectMaintain } from "@/store";
import { ref } from "vue";
import { fuzzyQueryByKey } from "@/utils";

const { data: projectData, init: initProjectData } = useProjectMaintain();

await initProjectData();

const projectList = ref(
  projectData.value.map((item) => {
    return {
      value: item.project_name,
    };
  })
);

export const projectSelect = (hook) => {
  return {
    label: "所属项目",
    value: projectList.value[0].value,
    options: projectList.value,
    placeholder: "请选择所属项目",
    onChange: async (e: any) => {
      await fuzzyQueryByKey(hook, "project_name", e);
    },
  };
};
