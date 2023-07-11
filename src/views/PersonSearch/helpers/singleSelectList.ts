import { usePersonSearch } from "@/store";
import { departmentSelect } from "@/utils";

export const singleSelectList = [await departmentSelect(usePersonSearch)];
