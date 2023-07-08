export const columns = [
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
export const dataSource = [
  {
    key: "1",
    job_number: "1",
    job_name: "John Brown",
    department: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    status: "已驳回",
    start_time: new Date(),
    end_time: new Date("2023-07-12"),
    over_time: new Date(),
    report_time: new Date(),
  },
  {
    key: "2",
    job_number: "2",
    job_name: "John Brown2",
    department: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    status: "已通过",
    start_time: new Date(),
    end_time: new Date("2023-07-12"),
    over_time: new Date("2023-07-22"),
    report_time: new Date(),
  },
  {
    key: "3",
    job_number: "3",
    job_name: "John Brown3",
    department: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    status: "已提交",
    start_time: new Date(),
    end_time: new Date("2023-07-12"),
    over_time: new Date("2023-09-20"),
    report_time: new Date(),
  },
];


// personSearch
export const personSearchColumns=[
  {
    title: "工号",
    dataIndex: "job_number",
    key: "job_number",
  },
  {
    title: "姓名",
    dataIndex: "job_name",
    key: "job_name",
    width: 160,
  },
  {
    title: "所属部门",
    dataIndex: "department",
    key: "department",
    ellipsis: true,
  },
  {
    title: "职级",
    dataIndex: "job",
    key: "job",
    width:160,
  },
  {
    title: "操作",
    dataIndex: "operation",
    key: "operation",
  },
];
export const personDataSource = [
  {
    key: "1",
    job_number: "1",
    job_name: "John Brown",
    department: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    job: 'CEO'
  },
  {
    key: "2",
    job_number: "2",
    job_name: "John Brown2",
    department: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    job:'CFO'
  },
  {
    key: "3",
    job_number: "3",
    job_name: "John Brown3",
    department: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    job:"经理"
  },
];
//department
export const departMentColumns=[
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
export const departMentDataSource = [
  {
    key: "1",
    department_name: "财务部",
    department_number: "2014",
    leader: "David",
    line_number: "1000-12"
  },
  {
    key: "2",
    department_name: "研发部",
    department_number: "2015",
    leader: "White",
    line_number: "1000-13"
  },
  {
    key: "3",
    department_name: "营销部",
    department_number: "2016",
    leader: "Taylor",
    line_number: "1000-14"
  },
];
//projectmaintain
export const projectMaintainColumns=[
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
export const projectMaintainDataSource = [
  {
    key: "1",
    work_name: "人员查询",
    work_time: "2020-1-1",
    department: "研发部",
    
  },
  {
    key: "2",
    work_name: "薪资调整",
    work_time: "2020-2-1",
    department: "财务部",
  },
  {
    key: "3",
    work_name: "市场拓展",
    work_time: "2020-3-1",
    department: "营销部",
  },
];
//generateResports
export const generateResportsColumns=[
  {
    title: "员工姓名",
    dataIndex: "job_name",
    key: "job_name",
  },
  {
    title: "项目名称",
    dataIndex: "work_name",
    key: "work_name",
    width: 420,
  },
  {
    title: "部门名称",
    dataIndex: "department_name",
    key: "department_name",
    ellipsis: true,
  },
  // {
  //   title: "操作",
  //   dataIndex: "operation",
  //   key: "operation",
  // },
];
export const generateResportsDataSource = [
  {
    key: "1",
    job_name: "BOb",
    work_name: "人员查询",
    department_name: "研发部",
    
  },
  {
    key: "2",
    job_name: "Andy",
    work_name: "薪资调整",
    department_name: "财务部",
  },
  {
    key: "3",
    job_name: "ALaly",
    work_name: "市场拓展",
    department_name: "营销部",
  },
];
// responsive
export const data = [
  {
    key: "1",
    job_name: "张三",
    job_number: "1",
    project: "项目1",
    over_time: new Date("2023-09-20"),
    apply_time: new Date(),
  },
  {
    key: "2",
    job_name: "张三2",
    job_number: "2",
    project: "项目2",
    over_time: new Date("2023-09-21"),
    apply_time: new Date(),
  },
  {
    key: "3",
    job_name: "张三",
    job_number: "31",
    project: "项目3",
    over_time: new Date("2023-09-22"),
    apply_time: new Date(),
  },
]
  .concat(
    new Array(10).fill({
      key: "1",
      job_name: "张三",
      job_number: "1",
      project: "项目1",
      over_time: new Date("2023-09-12"),
      apply_time: new Date(),
    })
  )
  .map((i) => i);

export const columnsData = [
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
    dataIndex: "project",
    key: "project",
    ellipsis: true,
    width: 100,
  },
  {
    title: "加班时长",
    dataIndex: "over_time",
    key: "over_time",
    ellipsis: true,
    width: 100,
  },
  {
    title: "申请时间",
    dataIndex: "apply_time",
    key: "apply_time",
    width: 200,
  },
  {
    title: "操作",
    dataIndex: "operation",
    key: "operation",
  },
];

export const reportColumnsData = [
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
    dataIndex: "project",
    key: "project",
    ellipsis: true,
    width: 100,
  },
  {
    title: "加班时长",
    dataIndex: "over_time",
    key: "over_time",
    ellipsis: true,
    width: 100,
  },
  {
    title: "申请时间",
    dataIndex: "apply_time",
    key: "apply_time",
    width: 200,
  },
];

export const ruleState = {
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
  project: {
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
  apply_time: {
    type: "date",
    label: "申请时间",
    options: {
      disabled: true,
    },
  },
};
