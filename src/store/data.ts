


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
