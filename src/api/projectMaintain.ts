import { http } from ".";

const enum AxiosAPIPath {
  GETALL = "/getAllPendingPersonList",
}
// NOTE: 获取所有的人员查询信息
export function fetchAllPendingPerson() {
  return http.get(AxiosAPIPath["GETALL"]);
}
