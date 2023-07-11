import { useDepartmentSearch } from "@/store";
import { departmentNameSearch, departmentNumberSearch } from "@/utils";

export const searchList = [
  departmentNameSearch(useDepartmentSearch),
  departmentNumberSearch(useDepartmentSearch),
];
