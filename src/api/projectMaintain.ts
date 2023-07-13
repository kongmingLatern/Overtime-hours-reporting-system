import { http } from ".";

const enum AxiosAPIPath {
  GETALL = "/getAllProjectList",
  REMOVE = "/deleteProject",
}
// NOTE: 获取所有的人员查询信息
export function fetchAllProject() {
  return http.get(AxiosAPIPath["GETALL"]);
}

export function removeProjectById(record) {
  // TODO: 删除项目新息
  return http.delete(AxiosAPIPath.REMOVE, {
    params: {
      project_id: record.project_id,
    },
  });
}
