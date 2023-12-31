import { fetchAllOverWorkPerson } from "@/api";
import { ref } from "vue";

const data = ref<OverWorkPersonType[]>([]);
const loading = ref<boolean>(true);

export function useOverWorkPersonList() {
  const columns = [
    {
      title: "工号",
      dataIndex: "job_number",
      key: "job_number",
      width: 80,
    },
    {
      title: "姓名",
      dataIndex: "job_name",
      key: "job_name",
      width: 80,
      ellipsis: true,
    },
    {
      title: "所属部门",
      dataIndex: "department_name",
      key: "department_name",
      width: 100,
      ellipsis: true,
    },
    {
      title: "表单状态",
      dataIndex: "status",
      key: "status",
      width: 80,
      ellipsis: true,
    },
    {
      title: "加班开始时间",
      dataIndex: "start_time",
      key: "start_time",
      ellipsis: true,
    },
    {
      title: "加班结束时间",
      dataIndex: "end_time",
      key: "end_time",
      ellipsis: true,
    },
    {
      title: "加班时长（时）",
      dataIndex: "over_time",
      key: "over_time",
      width: 100,
      ellipsis: true,
    },
    {
      title: "填报时间",
      dataIndex: "report_time",
      key: "report_time",
      ellipsis: true,
    },
    {
      title: "驳回原因",
      dataIndex: "operation",
      key: "operation",
      ellipsis: true,
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
    department_name: {
      type: "text",
      label: "所属部门",
      rules: [
        {
          required: true,
          message: "请输入所属部门",
          trigger: "blur",
        },
      ],
    },
    status: {
      type: "string",
      label: "表单状态",
      rules: [
        {
          required: true,
          message: "请输入表单状态",
          trigger: "blur",
        },
      ],
    },
    start_time: {
      type: "date",
      label: "加班开始时间",
      rules: [
        {
          required: true,
          message: "请输入加班开始时间",
          trigger: "blur",
        },
      ],
    },
    end_time: {
      type: "date",
      label: "加班结束时间",
      rules: [
        {
          required: true,
          message: "请输入加班结束时间",
          trigger: "blur",
        },
      ],
    },
    over_time: {
      type: "text",
      label: "加班时长",
      rules: [
        {
          required: true,
          message: "请输入加班时长",
          trigger: "blur",
        },
      ],
    },
    report_time: {
      type: "date",
      label: "填报时间",
      rules: [
        {
          required: true,
          message: "请输入填报时间",
          trigger: "blur",
        },
      ],
    },
    reason: {
      type: "text",
      label: "驳回原因",
      options: {
        disabled: true,
      },
    },
  };

  async function getAllOverWorkPersonList() {
    const res = await fetchAllOverWorkPerson();
    loading.value = false;
    data.value = res.data.map((i) => {
      return {
        ...i,
        key: i.job_number,
      };
    });
  }

  async function init() {
    await getAllOverWorkPersonList();
  }

  async function reset() {
    data.value = [];
    loading.value = true;
  }

  return {
    init,
    data,
    loading,
    columns,
    ruleState,
    getAllOverWorkPersonList,
    resetData: getAllOverWorkPersonList,
    reset,
  };
}
