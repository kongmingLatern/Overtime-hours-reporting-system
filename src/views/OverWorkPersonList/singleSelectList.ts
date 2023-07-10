import { useDepartmentSearch, useProjectMaintain } from "@/store";
import { ref } from "vue";
import { fuzzyQueryByKey } from "@/utils";
const { data, init } = useDepartmentSearch();
const { data: projectData, init: initProjectData } = useProjectMaintain();

await init();
await initProjectData();

const departmentData = ref(
  data.value.map((item) => {
    return {
      value: item.department_name,
    };
  })
);

const projectList = ref(
  projectData.value.map((item) => {
    return {
      value: item.project_name,
    };
  })
);

export const singleSelectList = [
  {
    label: "所属部门",
    placeholder: "请选择所属部门",
    value: departmentData.value[0].value,
    options: departmentData.value,
    onChange: async (e: any) => {
      await fuzzyQueryByKey(useDepartmentSearch, "department_name", e);
    },
  },
  {
    label: "表单状态",
    placeholder: "请选择表单状态",
    value: "已通过",
    options: [
      {
        value: "已通过",
      },
      {
        value: "已提交",
      },
      {
        value: "已驳回",
      },
    ],
    onChange: async (e: any) => {
      await fuzzyQueryByKey(useDepartmentSearch, "status", e);
    },
  },
  {
    label: "所属项目",
    value: projectList.value[0].value,
    options: projectList.value,
    placeholder: "请选择所属项目",
    onChange: async (e: any) => {
      await fuzzyQueryByKey(useDepartmentSearch, "project_name", e);
    },
  },
];
