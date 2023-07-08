import { defineStore } from "pinia";

export const useDepartmentSearchStore = defineStore("departmentSearch", () => {
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

  return {
    columns,
    ruleState,
  };
});
