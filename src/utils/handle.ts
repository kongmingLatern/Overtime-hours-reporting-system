/**
 * 处理excel数据
 * @param data excel数据
 * @returns
 *  department_name: "财务部"
    end_time: "2023-07-12T00:00:00.000Z"
    job_name: "John Brown"
    job_number: "1"
    key: "1"
    over_time: "2"
    project_name: "项目1"
    report_time: "2021-07-12T00:00:00.000Z"
    start_time: "2021-07-12T00:00:00.000Z"
    status: "已通过"

 */
// ['job_number', 'job_name', 'department_name', 'status', 'start_time', 'end_time', 'over_time', 'report_time', 'reason']
export const handleExcelData = (data: any[]) => {
  function transformTitle() {
    const titleMap = {
      job_number: "工号",
      job_name: "姓名",
      department_name: "所属部门",
      status: "表单状态",
      start_time: "加班开始时间",
      end_time: "加班结束时间",
      over_time: "加班时长",
      report_time: "填报时间",
      reason: "驳回原因",
    };

    return Object.keys(titleMap).map((item) => titleMap[item]);
  }

  function getExcelTitle() {
    // 获取表头的key
    return transformTitle();
  }

  function getExcelData() {
    // 获取表格数据
    return data.map((item) => {
      // 过滤掉 key
      delete item.key;
      return Object.values(item);
    });
  }

  return [getExcelTitle(), ...getExcelData()];
};
