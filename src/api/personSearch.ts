import { http } from ".";

const enum AxiosAPIPath {
  GETALL = "/getAllPersonList",
  ADD = "/addPerson",
  UPDATE = "/updatePerson",
  REMOVE = "/deletePerson",
}
// NOTE: 获取所有的人员查询信息
export function fetchAllPersonSearch() {
  return http.get(AxiosAPIPath.GETALL);
}

export function addPerson(data) {
  // TODO: 新增人员
  return http.post(AxiosAPIPath.ADD, data);
}

export function removePersonById(record) {
  // TODO: 删除人员新息
  return http.delete(AxiosAPIPath.REMOVE, {
    params: {
      job_number: record.job_number,
    },
  });
}

export function updatePerson(data) {
  // TODO: 编辑 更新人员信息
  return http.put(AxiosAPIPath.UPDATE, data);
}
