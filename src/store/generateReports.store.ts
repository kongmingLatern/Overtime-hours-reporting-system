import { http } from "@/api";
import { defineStore } from "pinia";
import { ref } from "vue";

const enum AxiosAPIPath {
  GETALL = "/getAllReportList",
}
const data = ref<GenerateReportsType[]>([]);
const loading = ref<boolean>(true);

export const useGenerateReports = defineStore("generateReports", () => {
  const columns = [
    {
      title: "员工姓名",
      dataIndex: "job_name",
      key: "job_name",
    },
    {
      title: "项目名称",
      dataIndex: "project_name",
      key: "project_name",
      width: 420,
    },
    {
      title: "部门名称",
      dataIndex: "department_name",
      key: "department_name",
      ellipsis: true,
    },
  ];
  const ruleState = {
    job_name: {
      type: "string",
      label: "员工姓名",
      rules: [
        {
          required: true,
          message: "请输入员工姓名",
          trigger: "blur",
        },
      ],
    },
    project_name: {
      type: "string",
      label: "项目名称",
      rules: [
        {
          required: true,
          message: "请输入项目名称",
          trigger: "blur",
        },
      ],
    },
    department_name: {
      type: "string",
      label: "部门名称",
      rules: [
        {
          required: true,
          message: "请输入部门名称",
          trigger: "blur",
        },
      ],
    },
  };

  async function getAllReportList() {
    const res = await http.get(AxiosAPIPath.GETALL);
    data.value = res.data;
    loading.value = false;
  }

  return {
    data,
    loading,
    columns,
    ruleState,
    getAllReportList,
  };
});
