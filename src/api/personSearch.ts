import { message } from "ant-design-vue";
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

// NOTE: 添加人员
export function addPerson(data) {
  const res = http.post(AxiosAPIPath.ADD, data);
  message.success("添加成功");
  return res;
}

// NOTE: 通过Id删除人员
export function removePersonById(record) {
  const res = http.delete(AxiosAPIPath.REMOVE, {
    params: {
      job_number: record.job_number,
    },
  });
  message.success("删除成功");
  return res;
}

// NOTE: 更新人员
export function updatePerson(data) {
  const res = http.put(AxiosAPIPath.UPDATE, data);
  message.success("更新成功");
  return res;
}
