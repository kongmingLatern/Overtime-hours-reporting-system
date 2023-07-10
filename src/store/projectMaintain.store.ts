import { http } from "@/api";
import { ref } from "vue";

const enum AxiosAPIPath {
  GETALL = "/getAllProjectList",
}
const data = ref<ProjectMaintainType[]>([]);
const loading = ref<boolean>(true);

export const useProjectMaintain = () => {
  const columns = [
    {
      title: "项目名称",
      dataIndex: "work_name",
      key: "work_name",
    },
    {
      title: "项目时间",
      dataIndex: "work_time",
      key: "work_time",
      width: 200,
    },
    {
      title: "所属部门",
      dataIndex: "department",
      key: "department",
      ellipsis: true,
    },
    {
      title: "操作",
      dataIndex: "operation",
      key: "operation",
    },
  ];

  async function getAllProjectList() {
    const res = await http.get(AxiosAPIPath.GETALL);
    data.value = res.data;
    loading.value = false;
  }

  return {
    data,
    loading,
    columns,
    getAllProjectList,
  };
};
