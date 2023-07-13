import { http } from ".";

const enum AxiosAPIPath {
  GETALL = "/getAllPersonList",
}
// NOTE: 获取所有的人员查询信息
export function fetchAllPersonSearch() {
  return http.get(AxiosAPIPath["GETALL"]);
}
