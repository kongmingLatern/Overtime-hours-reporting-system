import { message } from "ant-design-vue";
import { http } from ".";

const enum AxiosAPIPath {
  GETALL = "/getAllDepartmentList",
  ADD = "/addDepartment",
  UPDATE = "/updateDepartment",
  DELETE = "/deleteDepartment",
}
// NOTE: 获取所有的部门查询信息
export function fetchAllDepartment() {
  return http.get(AxiosAPIPath["GETALL"]);
}

// NOTE: 新增部门
export function addDepartment(data) {
  const res = http.post(AxiosAPIPath["ADD"], data);
  message.success("添加成功");
  return res;
}

// NOTE: 更新部门
export function updateDepartment(updateValue) {
  const res = http.put(AxiosAPIPath["UPDATE"], updateValue);
  message.success("更新成功");
  return res;
}

// NOTE: 部门
export function removeDepartmentById(record) {
  const res = http.delete(AxiosAPIPath["DELETE"], {
    params: {
      department_id: record.department_id,
    },
  });
  message.success("删除成功");
  return res;
}
