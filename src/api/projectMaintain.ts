import { message } from "ant-design-vue";
import { http } from ".";

const enum AxiosAPIPath {
  GETALL = "/getAllProjectList",
  REMOVE = "/deleteProject",
}
// NOTE: 获取所有的人员查询信息
export function fetchAllProject() {
  return http.get(AxiosAPIPath["GETALL"]);
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
