import { http } from ".";

const enum AxiosAPIPath {
  GETALL = "/getAllProjectList",
}
// NOTE: 获取所有的人员查询信息
export function fetchAllProject() {
  return http.get(AxiosAPIPath["GETALL"]);
}
