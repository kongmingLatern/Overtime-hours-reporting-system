import { message } from "ant-design-vue";
import { http } from ".";

const enum AxiosAPIPath {
  GETALL = "/getAllPendingPersonList",
  ADD = "/addReport",
  UPDATE = "/updateReject",
}
// NOTE: 获取所有的人员查询信息
export function fetchAllPendingPerson(job_number?) {
  return http.get(AxiosAPIPath["GETALL"], {
    params: {
      job_number,
    },
  });
}

// NOTE: 新增填报信息
export function addReports(data) {
  const res = http.post(AxiosAPIPath["ADD"], data);
  message.success("填报成功");
  return res;
}

// NOTE: 驳回
export function updateReject(data) {
  const res = http.put(AxiosAPIPath["UPDATE"], data);
  message.success("驳回成功");
  return res;
}
