import { http } from ".";

const enum AxiosAPIPath {
  GETALL = "/getAllPendingPersonList",
  ADD = "/addReport",
  UPDATE = "/updateReject",
}
// NOTE: 获取所有的人员查询信息
export function fetchAllPendingPerson() {
  return http.get(AxiosAPIPath["GETALL"]);
}

export function addReports(data) {
  // TODO: 新增填报信息
  return http.post(AxiosAPIPath["ADD"], data);
}

// NOTE: 驳回
export function updateReject(data) {
  // TODO: 驳回
  return http.put(AxiosAPIPath["UPDATE"], data);
}
