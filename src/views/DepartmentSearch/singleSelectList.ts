import { useDepartmentSearch } from "@/store";
import { leaderSelect } from "@/utils";

export const singleSelectList = [await leaderSelect(useDepartmentSearch)];
