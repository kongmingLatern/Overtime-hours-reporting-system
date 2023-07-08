import { defineStore } from "pinia";
import { http } from "@/api";
export interface OverWorkPersonType {
  job_number: string | number;
  job_name: string;
  department: string;
  status: "已驳回" | "已通过" | "已提交";
  start_time: Date;
  end_time: Date;
  over_time: Date;
  report_time: Date;
}

const enum AxiosAPIPath {
  GETALL = "/getAllOverWorkPersonList",
}

export const useOverWorkPersonListStore = defineStore(
  "overWorkPersonList",
  () => {
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
        width: 80,
      },
      {
        title: "所属部门",
        dataIndex: "department",
        key: "department",
        ellipsis: true,
      },
      {
        title: "表单状态",
        dataIndex: "status",
        key: "status",
      },
      {
        title: "加班开始时间",
        dataIndex: "start_time",
        key: "start_time",
      },
      {
        title: "加班结束时间",
        dataIndex: "end_time",
        key: "end_time",
      },
      {
        title: "加班时长",
        dataIndex: "over_time",
        key: "over_time",
      },
      {
        title: "填报时间",
        dataIndex: "report_time",
        key: "report_time",
      },
      {
        title: "驳回原因",
        dataIndex: "operation",
        key: "operation",
      },
    ];

    async function getAllOverWorkPersonList() {
      const res = await http.get(AxiosAPIPath.GETALL);
      return res.data;
    }

    return {
      getAllOverWorkPersonList,
      columns,
    };
  }
);
