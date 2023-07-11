import { handleExcelData } from "..";

const obj = [
  {
    key: "1",
    job_number: "1",
    job_name: "John Brown",
    project_name: "人员查询",
    department_name: "财务部",
    status: "已驳回",
    start_time: "2023-07-11T01:45:20.875Z",
    end_time: "2023-07-12T00:00:00.000Z",
    over_time: "2023-07-11T01:45:20.875Z",
    report_time: "2023-07-11T01:45:20.875Z",
  },
  {
    key: "2",
    job_number: "2",
    job_name: "John Brown2",
    project_name: "人员查询",
    department_name: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    status: "已通过",
    start_time: "2023-07-11T01:45:20.875Z",
    end_time: "2023-07-12T00:00:00.000Z",
    over_time: "2023-07-30T00:00:00.000Z",
    report_time: "2023-07-11T01:45:20.875Z",
  },
];
describe("handleExcelData", () => {
  it("should be return title", () => {
    const [title] = handleExcelData(obj);
    expect(title).toEqual([
      "job_number",
      "job_name",
      "project_name",
      "department_name",
      "status",
      "start_time",
      "end_time",
      "over_time",
      "report_time",
    ]);
  });
  it("should be return format data", () => {
    const [_, data] = handleExcelData(obj);
    expect(data).toEqual([
      "1",
      "John Brown",
      "人员查询",
      "财务部",
      "已驳回",
      "2023-07-11T01:45:20.875Z",
      "2023-07-12T00:00:00.000Z",
      "2023-07-11T01:45:20.875Z",
      "2023-07-11T01:45:20.875Z",
    ]);
  });
});
