import { fetchAllProject, fetchProjectName } from "@/api";
import { ref } from "vue";

const data = ref<ProjectMaintainType[]>([]);
const loading = ref<boolean>(true);

export const useProjectMaintain = () => {
  const columns = [
    {
      title: "项目名称",
      dataIndex: "project_name",
      key: "project_name",
    },
    {
      title: "项目时间",
      dataIndex: "project_time",
      key: "project_time",
      width: 200,
    },
    {
      title: "所属部门",
      dataIndex: "department_name",
      key: "department_name",
      ellipsis: true,
    },
    {
      title: "操作",
      dataIndex: "operation",
      key: "operation",
    },
  ];

  async function getAllProjectList() {
    const res = await fetchAllProject();
    data.value = res.data;
    loading.value = false;
  }

  async function getProjectName(key, value) {
    const res = await fetchProjectName(key, value);
    data.value = res.data;
  }

  async function init() {
    await getAllProjectList();
  }

  return {
    init,
    data,
    loading,
    columns,
    getAllProjectList,
    getProjectName,
    resetData: getAllProjectList,
  };
};
