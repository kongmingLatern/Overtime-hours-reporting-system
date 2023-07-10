import { http } from "@/api";
import { ref } from "vue";

interface ProjectMaintainType {
  key: string | number;
  work_name: string;
  work_time: string;
  department: string;
}

const enum AxiosAPIPath {
  GETALL = "/getAllProjectList",
}
//projectmaintain
export const projectMaintainDataSource = [
  {
    key: "1",
    work_name: "人员查询",
    work_time: "2020-1-1",
    department: "研发部",
  },
  {
    key: "2",
    work_name: "薪资调整",
    work_time: "2020-2-1",
    department: "财务部",
  },
  {
    key: "3",
    work_name: "市场拓展",
    work_time: "2020-3-1",
    department: "营销部",
  },
];
export const useProjectMaintain = () => {
  const data = ref<ProjectMaintainType[]>([]);
  const loading = ref<boolean>(true);

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
