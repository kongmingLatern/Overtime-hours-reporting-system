import { http } from ".";

const enum AxiosAPIPath {
  GETALL = "/getAllOverWorkPersonList",
}

// NOTE: 获取所有的加班人员
export function fetchAllOverWorkPerson() {
  return http.get(AxiosAPIPath.GETALL);
}
