import { fetchAllGenerateReports } from "@/api";
import { ref } from "vue";

const data = ref<GenerateReportsType[]>([]);
const loading = ref<boolean>(true);

export const useGenerateReports = () => {
  const columns = [
    {
      title: "员工号",
      dataIndex: "job_number",
      key: "job_number",
    },
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
    {
      title: "生成报表",
      dataIndex: "operation",
      key: "operation",
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
    const res = await fetchAllGenerateReports();
    data.value = res.data.map((i) => {
      return {
        ...i,
        key: i.job_number,
      };
    });
    loading.value = false;
  }

  async function init() {
    await getAllReportList();
  }

  return {
    init,
    data,
    loading,
    columns,
    ruleState,
    getAllReportList,
    resetData: getAllReportList,
  };
};
