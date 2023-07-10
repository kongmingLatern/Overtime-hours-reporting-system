import { http } from "@/api";
import { ref } from "vue";

const enum AxiosAPIPath {
  GETALL = "/getAllPendingPersonList",
}

const data = ref<ResponsiveTimeReportType[]>([]);
const loading = ref<boolean>(true);

export const useResponsiveTimeReport = () => {
  const columns = [
    {
      title: "姓名",
      dataIndex: "job_name",
      key: "job_name",
      ellipsis: true,
    },
    {
      title: "工号",
      dataIndex: "job_number",
      key: "job_number",
      ellipsis: true,
    },
    {
      title: "所属项目",
      dataIndex: "project",
      key: "project",
      ellipsis: true,
      width: 100,
    },
    {
      title: "加班时长",
      dataIndex: "over_time",
      key: "over_time",
      ellipsis: true,
      width: 100,
    },
    {
      title: "申请时间",
      dataIndex: "apply_time",
      key: "apply_time",
      width: 200,
    },
    {
      title: "操作",
      dataIndex: "operation",
      key: "operation",
    },
  ];
  const reportColumns = [
    {
      title: "工号",
      dataIndex: "job_number",
      key: "job_number",
      width: 80,
      ellipsis: true,
    },
    {
      title: "姓名",
      dataIndex: "job_name",
      key: "job_name",
      width: 100,
      ellipsis: true,
    },
    {
      title: "所属项目",
      dataIndex: "project",
      key: "project",
      ellipsis: true,
      width: 100,
    },
    {
      title: "加班时长",
      dataIndex: "over_time",
      key: "over_time",
      ellipsis: true,
      width: 100,
    },
    {
      title: "申请时间",
      dataIndex: "apply_time",
      key: "apply_time",
      width: 200,
    },
  ];

  const ruleState = {
    job_number: {
      type: "readonly",
      label: "工号",
      options: {
        disabled: true,
      },
    },
    job_name: {
      type: "readonly",
      label: "姓名",
      options: {
        disabled: true,
      },
    },
    project: {
      type: "readonly",
      label: "所属项目",
      options: {
        disabled: true,
      },
    },
    over_time: {
      type: "readonly",
      label: "加班时长",
      options: {
        disabled: true,
      },
    },
    apply_time: {
      type: "date",
      label: "申请时间",
      options: {
        disabled: true,
      },
    },
  };

  async function getAllPendingPersonList() {
    const res = await http.get(AxiosAPIPath["GETALL"]);
    data.value = res.data;
    loading.value = false;
  }

  return {
    data,
    loading,
    columns,
    reportColumns,
    ruleState,
    getAllPendingPersonList,
  };
};
