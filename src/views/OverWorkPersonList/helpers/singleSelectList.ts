import { useOverWorkPersonList } from "@/store";
import { statusSelect, projectSelect, departmentSelect } from "@/utils";

export const singleSelectList = [
  await departmentSelect(useOverWorkPersonList),
  await statusSelect(useOverWorkPersonList),
  await projectSelect(useOverWorkPersonList),
];
