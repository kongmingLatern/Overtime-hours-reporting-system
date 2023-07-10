import { createPinia, setActivePinia } from "pinia";
import { useOverWorkPersonList } from "..";

describe("test data", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("should be empty array", () => {
    const { data } = useOverWorkPersonList();
    expect(data.value).toEqual([]);
  });
  it.skip("should be null", async () => {
    const { data, getAllOverWorkPersonList } = useOverWorkPersonList();
    await getAllOverWorkPersonList();
    expect(data.value).toMatchInlineSnapshot(`
      [
        {
          "department": "New York No. 1 Lake Park, New York No. 1 Lake Park",
          "end_time": "2023-07-12T00:00:00.000Z",
          "job_name": "John Brown",
          "job_number": "1",
          "key": "1",
          "over_time": "2023-07-10T01:27:16.998Z",
          "report_time": "2023-07-10T01:27:16.998Z",
          "start_time": "2023-07-10T01:27:16.998Z",
          "status": "已驳回",
        },
        {
          "department": "New York No. 1 Lake Park, New York No. 1 Lake Park",
          "end_time": "2023-07-12T00:00:00.000Z",
          "job_name": "John Brown2",
          "job_number": "2",
          "key": "2",
          "over_time": "2023-07-30T00:00:00.000Z",
          "report_time": "2023-07-10T01:27:16.998Z",
          "start_time": "2023-07-10T01:27:16.998Z",
          "status": "已通过",
        },
        {
          "department": "New York No. 1 Lake Park, New York No. 1 Lake Park",
          "end_time": "2023-07-12T00:00:00.000Z",
          "job_name": "John Brown3",
          "job_number": "3",
          "key": "3",
          "over_time": "2023-09-20T00:00:00.000Z",
          "report_time": "2023-07-10T01:27:16.998Z",
          "start_time": "2023-07-10T01:27:16.998Z",
          "status": "已提交",
        },
        {
          "department": "New 123123York No. 1 Lake Park, New York No. 1 Lake Park",
          "end_time": "2023-07-12T00:00:00.000Z",
          "job_name": "哈哈哈",
          "job_number": "15",
          "key": "15",
          "over_time": "2023-07-10T01:27:16.998Z",
          "report_time": "2023-07-10T01:27:16.998Z",
          "start_time": "2023-07-10T01:27:16.998Z",
          "status": "已驳回",
        },
        {
          "department": "New York No. 1 Lake Park, New York No. 1 Lake Park",
          "end_time": "2023-07-14T00:00:00.000Z",
          "job_name": "John Brown2",
          "job_number": "2",
          "key": "23",
          "over_time": "2023-07-22T00:00:00.000Z",
          "report_time": "2023-07-10T01:27:16.998Z",
          "start_time": "2023-07-10T01:27:16.998Z",
          "status": "已通过",
        },
        {
          "department": "New York No. 1 Lake Park, New York No. 1 Lake Park",
          "end_time": "2023-07-22T00:00:00.000Z",
          "job_name": "John Brown3",
          "job_number": "3",
          "key": "34",
          "over_time": "2023-08-20T00:00:00.000Z",
          "report_time": "2023-07-10T01:27:16.998Z",
          "start_time": "2023-07-10T01:27:16.998Z",
          "status": "已提交",
        },
      ]
    `);
  });
});
