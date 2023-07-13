import { http } from ".";

const enum AxiosAPIPath {
  GETALL = "/getAllDepartmentList",
}
// NOTE: 获取所有的部门查询信息
export function fetchAllDepartment() {
  return http.get(AxiosAPIPath["GETALL"]);
}
