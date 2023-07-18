import { message } from "ant-design-vue";
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


// NOTE: 添加加班人员
export function addOverWorkPerson(data) {
  const res = http.post(AxiosAPIPath.ADD, data);
  message.success("添加成功");
  return res;
}

// NOTE: 删除加班人员
export function removeOverWorkPersonById(record) {
  const res = http.delete(AxiosAPIPath.DELETE, {
    params: {
      job_number: record.job_number,
    },
  });
  message.success("删除成功");
  return res;
}
