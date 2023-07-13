import { http } from ".";

const enum AxiosAPIPath {
  GETALL = "/getAllReportList",
  ADD = "/addReport",
}
// NOTE: 获取所有的人员查询信息
export function fetchAllGenerateReports() {
  return http.get(AxiosAPIPath["GETALL"]);
}

export function addReports(data) {
  // TODO: 新增填报信息
  return http.post(AxiosAPIPath["ADD"], data);
}
