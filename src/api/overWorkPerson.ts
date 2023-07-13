import { http } from ".";

const enum AxiosAPIPath {
  GETALL = "/getAllOverWorkPersonList",
  ADD = "/addOverWorkPerson",
  DELETE = "/deleteOverWorkPerson",
}

// NOTE: 获取所有的加班人员
export function fetchAllOverWorkPerson() {
  return http.get(AxiosAPIPath.GETALL);
}

export function addOverWorkPerson(data) {
  // TODO: 新增加班人员
  return http.post(AxiosAPIPath.ADD, data);
}

export function removeOverWorkPersonById(record) {
  // TODO: 删除加班人员信息
  console.log("removeOverWorkPerson", record);
  return http.delete(AxiosAPIPath.DELETE, {
    params: {
      job_number: record.job_number,
    },
  });
}
