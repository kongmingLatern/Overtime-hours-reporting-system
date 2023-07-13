import { http } from ".";

const enum AxiosAPIPath {
  GETALL = "/getAllDepartmentList",
  ADD = "/addDepartment",
}
// NOTE: 获取所有的部门查询信息
export function fetchAllDepartment() {
  return http.get(AxiosAPIPath["GETALL"]);
}

export function addDepartment(data) {
  // TODO: 新增部门
  return http.post(AxiosAPIPath["ADD"], data);
}

export function updateDepartment(updateValue) {
  // TODO: 编辑 更新部门数据
  console.log("fetchUpdateDepartment", updateValue);
  return http.put("/updateDepartment", updateValue);
}

export function removeDepartmentById(record) {
  // TODO: 删除 部门数据
  console.log("removeDepartmentById", record);
  return http.delete("/removeDepartment", {
    params: {
      department_id: record.department_id,
    },
  });
}
