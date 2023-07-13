import { http } from ".";

const enum AxiosAPIPath {
  GETALL = "/getAllOverWorkPersonList",
  ADD = "/addOverWorkPerson",
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
  // TODO: 删除数据
  console.log("OverWorkPersonList confirm", record);
  return http.delete("/removeOverWorkPerson", {
    params: {
      job_number: record.job_number,
    },
  });
}
