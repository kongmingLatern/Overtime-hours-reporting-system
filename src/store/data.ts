import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
// OverWorkPersonList
export const columns = [
  {
    title: "工号1",
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
    start_time: dayjs(),
    end_time: dayjs("2023-07-12"),
    over_time: dayjs("2023-07-12").fromNow(true),
    report_time: dayjs(),
  },
  {
    key: "2",
    job_number: "2",
    job_name: "John Brown2",
    department: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    status: "已通过",
    start_time: dayjs(),
    end_time: dayjs(),
    over_time: dayjs("2023-07-11").fromNow(true),
    report_time: dayjs(),
  },
  {
    key: "3",
    job_number: "3",
    job_name: "John Brown3",
    department: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    status: "已提交",
    start_time: dayjs(),
    end_time: dayjs(),
    over_time: dayjs("2023-07-13").fromNow(true),
    report_time: dayjs(),
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


// responsive
export const data = [
  {
    key: "1",
    job_name: "张三",
    job_number: "1",
    project: "项目1",
    over_time: dayjs("2023-07-11").fromNow(true),
    apply_time: dayjs(),
  },
  {
    key: "2",
    job_name: "张三2",
    job_number: "2",
    project: "项目2",
    over_time: dayjs("2023-07-14").fromNow(true),
    apply_time: dayjs(),
  },
  {
    key: "3",
    job_name: "张三",
    job_number: "31",
    project: "项目3",
    over_time: dayjs("2023-07-10").fromNow(true),
    apply_time: dayjs(),
  },
]
  .concat(
    new Array(10).fill({
      key: "1",
      job_name: "张三",
      job_number: "1",
      project: "项目1",
      over_time: dayjs("2023-07-11").fromNow(true),
      apply_time: dayjs(),
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

export const ruleState = {
  job_number: {
    type: "number",
    label: "工号",
    rules: [
      {
        required: true,
        message: "请输入工号",
      },
    ],
  },
  job_name: {
    type: "text",
    label: "姓名",
    rules: [
      {
        required: true,
        message: "请输入姓名",
      },
    ],
  },
  project: {
    type: "text",
    label: "所属项目",
    rules: [
      {
        required: true,
        message: "请输入所属项目",
      },
    ],
  },
  over_time: {
    type: "text",
    label: "加班时长",
    rules: [
      {
        required: true,
        message: "请输入加班时长",
      },
    ],
  },
  apply_time: {
    type: "date",
    label: "申请时间",
    rules: [
      {
        required: true,
        message: "请输入申请时间",
      },
    ],
  },
};
