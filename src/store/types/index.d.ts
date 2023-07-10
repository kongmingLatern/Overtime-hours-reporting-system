interface DepartMentDataType {
  key: string | number;
  department_name: string;
  department_number: string;
  leader: string;
  line_number: string;
}

interface GenerateReportsType {
  key: string | number;
  job_name: string;
  work_name: string;
  department_name: string;
}

interface OverWorkPersonType {
  job_number: string | number;
  job_name: string;
  department_name: string;
  status: "已驳回" | "已通过" | "已提交";
  start_time: Date;
  end_time: Date;
  over_time: Date;
  report_time: Date;
}

interface PersonDataType {
  key: string | number;
  job_number: string | number;
  job_name: string;
  department_name: string;
  job: string;
}

interface ProjectMaintainType {
  key: string | number;
  work_name: string;
  work_time: string;
  department_name: string;
}

interface ResponsiveTimeReportType {
  key: string | number;
  job_name: string;
  job_number: string | number;
  project: string;
  over_time: Date;
  apply_time: Date;
}
