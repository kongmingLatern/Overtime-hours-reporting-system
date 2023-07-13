export const overWorkPersonList: OverWorkPersonType[] & { key: string }[] = [
  {
    key: "1",
    department_name: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    end_time: new Date("2023-07-12"),
    job_name: "John Brown",
    job_number: "2",
    over_time: "2 days",
    report_time: new Date("2023-07-12"),
    start_time: new Date("2023-07-10"),
    status: "已驳回",
  },
];

export const personSearchList: PersonDataType[] & { key: string }[] = [
  {
    key: "1",
    job_number: "1312312",
    job_name: "John 123123Brown",
    department_name: "New York N123123o. 1 Lake Park, New York No. 1 Lake Park",
    job: "CEO",
  },
];

export const projectList: ProjectMaintainType[] & { key: string }[] = [
  {
    key: "1",
    project_id: "1",
    project_name: "人员查询",
    project_time: new Date("2023-07-31"),
    department_name: "研发部",
  },
];

export const departmentList: DepartMentDataType[] & { key: string }[] = [
  {
    key: "1",
    department_id: "1",
    department_name: "财务部",
    department_number: "2014",
    leader: "David",
    line_number: "1000-12",
  },
];

export const generateReportsList: GenerateReportsType[] & { key: string }[] = [
  {
    key: "1",
    job_name: "BOb",
    project_name: "人员查询",
    department_name: "研发部",
  },
];

export const responsiveTimeReportList: ResponsiveTimeReportType[] &
  { key: string }[] = [
  {
    key: "1",
    job_name: "张三",
    job_number: "1",
    pending: 1,
    project_name: "项目1",
    over_time: new Date("2023-09-20"),
    report_time: new Date(),
    over_time_reason: "有事",
  },
];
