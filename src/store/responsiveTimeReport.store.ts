import { fetchAllPendingPerson } from "@/api";
import { ref } from "vue";

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
      dataIndex: "project_name",
      key: "project_name",
      ellipsis: true,
      width: 100,
    },
    {
      title: "加班时长",
      dataIndex: "start_time",
      key: "start_time",
      ellipsis: true,
      width: 100,
    },
    {
      title: "申请时间",
      dataIndex: "report_time",
      key: "report_time",
      width: 200,
    },
    {
      title: "加班事由",
      dataIndex: "over_time_reason",
      key: "over_time_reason",
      ellipsis: true,
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
      dataIndex: "project_name",
      key: "project_name",
      ellipsis: true,
      width: 100,
    },
    {
      title: "加班时长",
      dataIndex: "start_time",
      key: "start_time",
      ellipsis: true,
      width: 100,
    },
    {
      title: "申请时间",
      dataIndex: "report_time",
      key: "report_time",
      width: 200,
    },
    {
      title: "加班事由",
      dataIndex: "over_time_reason",
      key: "over_time_reason",
      ellipsis: true,
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
    project_name: {
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
    report_time: {
      type: "date",
      label: "申请时间",
      options: {
        disabled: true,
      },
    },
  };

  async function getAllPendingPersonList() {
    const res = await fetchAllPendingPerson();
    data.value = res.data;
    loading.value = false;
  }

  async function init() {
    await getAllPendingPersonList();
  }

  return {
    init,
    data,
    loading,
    columns,
    reportColumns,
    ruleState,
    getAllPendingPersonList,
    resetData: getAllPendingPersonList,
  };
};
