import { useOverWorkPersonList } from "@/store";
import { statusSelect, projectSelect, departmentSelect } from "@/utils";

export const singleSelectList = [
  departmentSelect(useOverWorkPersonList),
  statusSelect(useOverWorkPersonList),
  projectSelect(useOverWorkPersonList),
];
