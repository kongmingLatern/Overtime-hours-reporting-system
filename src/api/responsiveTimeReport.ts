import { http } from ".";

const enum AxiosAPIPath {
  GETALL = "/getAllPendingPersonList",
  UPDATE = "/updateReject",
}
// NOTE: 获取所有的人员查询信息
export function fetchAllPendingPerson() {
  return http.get(AxiosAPIPath["GETALL"]);
}

// NOTE: 驳回
export function updateReject(data) {
  // TODO: 驳回
  return http.put(AxiosAPIPath["UPDATE"], data);
}
