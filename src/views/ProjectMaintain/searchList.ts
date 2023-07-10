import { useDepartmentSearch, useProjectMaintain } from "@/store";
import { departmentNameSearch } from "@/utils";
import { projectNameSearch } from "@/utils/searchList/projectName";

export const searchList = [
  projectNameSearch(useProjectMaintain),
  departmentNameSearch(useDepartmentSearch),
];
