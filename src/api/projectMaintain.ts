import { message } from "ant-design-vue";
import { http } from ".";

const enum AxiosAPIPath {
  GETALL = "/getAllProjectList",
  GETNAMEBYDEPARTMENTNAME = "/getProjectNameByDepartmentName",
  GETNAMEBYJOBNUMBER = "/getProjectNameByJobNumber",
  ADD = "/addProject",
  UPDATE = "/updateProject",
  REMOVE = "/deleteProject",
}
// NOTE: 获取所有的人员查询信息
export function fetchAllProject() {
  return http.get(AxiosAPIPath["GETALL"]);
}

// NOTE: 添加项目
export function addProject(values) {
  const res = http.post(AxiosAPIPath["ADD"], values);
  message.success("添加成功");
  return res;
}

// NOTE: 根据部门名称获取项目名称
export function fetchProjectName(key: "department_name" | "job_number", value) {
  const path =
    key === "department_name"
      ? AxiosAPIPath.GETNAMEBYDEPARTMENTNAME
      : AxiosAPIPath.GETNAMEBYJOBNUMBER;

  console.log("key", key);
  console.log("value", value);

  return http.get(path, {
    params: {
      [key]: value,
    },
  });
}

// NOTE: 编辑项目
export function updateProject(values) {
  const res = http.put(AxiosAPIPath["UPDATE"], values);
  message.success("更新成功");
  return res;
}

// NOTE: 根据 Id 删除项目新息
export function removeProjectById(record) {
  const res = http.delete(AxiosAPIPath.REMOVE, {
    params: {
      project_id: record.project_id,
    },
  });
  message.success("删除成功");
  return res;
}
