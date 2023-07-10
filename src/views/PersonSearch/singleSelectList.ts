import { usePersonSearch } from "@/store";
import { departmentSelect } from "@/utils";

export const singleSelectList = [departmentSelect(usePersonSearch)];
