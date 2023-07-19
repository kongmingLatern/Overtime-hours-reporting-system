import { http } from ".";

const enum AxiosAPIPath {
  GETALL = "/getAllReportList",
  GETMONTHLY = "/monthlyOvertime",
  GETYEARLY = "/yearlyOvertime",
}
// NOTE: 获取所有的人员查询信息
export function fetchAllGenerateReports() {
  return http.get(AxiosAPIPath["GETALL"]);
}

// NOTE: 获取月度报表
export function fetchMonthData(record) {
  return http.get(AxiosAPIPath["GETMONTHLY"], {
    params: {
      job_number: record.job_number,
    },
  });
}

// NOTE: 获取年度报表
export function fetchYearData(record) {
  return http.get(AxiosAPIPath["GETYEARLY"], {
    params: {
      job_number: record.job_number,
    },
  });
}
