

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
