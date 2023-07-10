import { http } from "@/api";
import { ref } from "vue";

const enum AxiosAPIPath {
  GETALL = "/getAllPersonList",
}
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

  const ruleState = {
    job_number: {
      type: "number",
      label: "工号",
      rules: [
        {
          required: true,
          message: "请输入工号",
          trigger: "blur",
        },
      ],
    },
    job_name: {
      type: "string",
      label: "姓名",
      rules: [
        {
          required: true,
          message: "请输入姓名",
          trigger: "blur",
        },
      ],
    },
    department: {
      type: "string",
      label: "所属部门",
      rules: [
        {
          required: true,
          message: "请输入所属部门",
          trigger: "blur",
        },
      ],
    },
    job: {
      type: "string",
      label: "职级",
      rules: [
        {
          required: true,
          message: "请输入职级",
          trigger: "blur",
        },
      ],
    },
  };

  async function getAllPersonList() {
    const res = await http.get(AxiosAPIPath["GETALL"]);
    data.value = res.data;
    loading.value = false;
  }

  return {
    data,
    loading,
    columns,
    ruleState,
    getAllPersonList,
    resetData: getAllPersonList,
  };
};
