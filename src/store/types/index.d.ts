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
  project_name: string;
  department_name: string;
}

interface OverWorkPersonType {
  job_number: string | number;
  job_name: string;
  department_name: string;
  status: "已驳回" | "已通过" | "已提交";
  start_time: Date;
  end_time: Date;
  over_time: string;
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
  project_name: string;
  project_time: Date;
  department_name: string;
}

interface ResponsiveTimeReportType {
  key: string | number;
  job_name: string;
  job_number: string | number;
  project_name: string;
  pending: 0 | 1;
  over_time: Date;
  report_time: Date;
  reason?: string;
}
