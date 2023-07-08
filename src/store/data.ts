// personSearch
export const personSearchColumns = [
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
    title: "职级",
    dataIndex: "job",
    key: "job",
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
    job: "CEO",
  },
  {
    key: "2",
    job_number: "2",
    job_name: "John Brown2",
    department: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    job: "CFO",
  },
  {
    key: "3",
    job_number: "3",
    job_name: "John Brown3",
    department: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    job: "经理",
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
