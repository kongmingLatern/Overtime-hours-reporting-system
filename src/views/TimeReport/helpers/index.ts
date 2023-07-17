import { useDepartmentSearch } from "@/store";
import { departmentSelect } from "@/utils";

export const ruleState = {
  job_name: {
    type: "text",
    label: "员工姓名",
  },
  job_number: {
    type: "number",
    label: "工号",
  },
  over_time: {
    type: "date",
    label: "加班时间",
  },
  project_name: {
    type: "select",
    label: "所属项目",
    options: {
      options: (await departmentSelect(useDepartmentSearch)).options,
    },
  },
  over_time_reason: {
    type: "text",
    label: "加班事由",
  },
};
