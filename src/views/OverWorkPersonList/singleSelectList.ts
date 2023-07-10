import { statusSelect, projectSelect, departmentSelect } from "@/utils";

export const singleSelectList = [
  {
    ...departmentSelect,
  },
  {
    ...statusSelect,
  },
  {
    ...projectSelect,
  },
];
