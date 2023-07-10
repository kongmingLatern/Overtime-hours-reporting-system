import { http } from "@/api";
import { ref } from "vue";

interface DepartMentDataType {
  key: string | number;
  department_name: string;
  department_number: string;
  leader: string;
  line_number: string;
}
const enum AxiosAPIPath {
  GETALL = "/getAllDepartmentList",
}

//department
export const departMentDataSource = [
  {
    key: "1",
    department_name: "财务部",
    department_number: "2014",
    leader: "David",
    line_number: "1000-12",
  },
  {
    key: "2",
    department_name: "研发部",
    department_number: "2015",
    leader: "White",
    line_number: "1000-13",
  },
  {
    key: "3",
    department_name: "营销部",
    department_number: "2016",
    leader: "Taylor",
    line_number: "1000-14",
  },
];

export const useDepartmentSearch = () => {
  const data = ref<DepartMentDataType[]>([]);
  const loading = ref<boolean>(true);

  const columns = [
    {
      title: "部门名称",
      dataIndex: "department_name",
      key: "department_name",
    },
    {
      title: "部门编码",
      dataIndex: "department_number",
      key: "department_number",
      width: 160,
    },
    {
      title: "部长",
      dataIndex: "leader",
      key: "leader",
      ellipsis: true,
    },
    {
      title: "所属条线",
      dataIndex: "line_number",
      key: "line_number",
    },
    {
      title: "操作",
      dataIndex: "operation",
      key: "operation",
    },
  ];
  const ruleState = {
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
    department_number: {
      type: "number",
      label: "部门编码",
      rules: [
        {
          required: true,
          message: "请输入部门编码",
          trigger: "blur",
        },
      ],
    },
    leader: {
      type: "string",
      label: "部长",
      rules: [
        {
          required: true,
          message: "请输入部长",
          trigger: "blur",
        },
      ],
    },
    line_number: {
      type: "string",
      label: "所属条线",
      rules: [
        {
          required: true,
          message: "请输入所属条线",
          trigger: "blur",
        },
      ],
    },
  };

  async function getAllDepartmentList() {
    const res = await http.get(AxiosAPIPath.GETALL);
    data.value = res.data;
    loading.value = false;
  }

  return {
    data,
    loading,
    columns,
    ruleState,
    getAllDepartmentList,
  };
};
