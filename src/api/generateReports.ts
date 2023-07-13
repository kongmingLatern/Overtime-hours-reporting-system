import { http } from ".";

const enum AxiosAPIPath {
  GETALL = "/getAllReportList",
}
// NOTE: 获取所有的人员查询信息
export function fetchAllGenerateReports() {
  return http.get(AxiosAPIPath["GETALL"]);
}
