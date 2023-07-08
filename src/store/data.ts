// personSearch
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

//department
export const departMentDataSource = [
  {
    key: "1",
    department_name: "财务部",
    department_number: "2014",
    leader: "David",
    line_number: "1000-12",
  },
  {
    key: "2",
    department_name: "研发部",
    department_number: "2015",
    leader: "White",
    line_number: "1000-13",
  },
  {
    key: "3",
    department_name: "营销部",
    department_number: "2016",
    leader: "Taylor",
    line_number: "1000-14",
  },
];
//projectmaintain
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
