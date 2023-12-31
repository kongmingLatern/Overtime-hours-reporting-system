import { fetchAllPersonSearch } from "@/api";
import { ref } from "vue";

const data = ref<PersonDataType[]>([]);
const loading = ref<boolean>(true);

export const usePersonSearch = () => {
  const columns = [
    {
      title: "工号",
      dataIndex: "job_number",
      key: "job_number",
    },
    {
      title: "姓名",
      dataIndex: "job_name",
      key: "job_name",
      width: 160,
    },
    {
      title: "所属部门",
      dataIndex: "department_name",
      key: "department_name",
      ellipsis: true,
    },
    {
      title: "职级",
      dataIndex: "job",
      key: "job",
      width: 160,
    },
    {
      title: "操作",
      dataIndex: "operation",
      key: "operation",
    },
  ];

  async function getAllPersonList() {
    const res = await fetchAllPersonSearch();
    data.value = res.data.map((i) => {
      return {
        ...i,
        key: i.job_number,
      };
    });
    loading.value = false;
  }

  async function init() {
    await getAllPersonList();
  }

  return {
    data,
    loading,
    columns,
    init,
    getAllPersonList,
    resetData: getAllPersonList,
  };
};
