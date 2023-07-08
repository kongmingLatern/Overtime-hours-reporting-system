import { defineStore } from "pinia";

export const useProjectMaintainStore = defineStore("projectMainStore", () => {
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

  return {
    columns,
  };
});
