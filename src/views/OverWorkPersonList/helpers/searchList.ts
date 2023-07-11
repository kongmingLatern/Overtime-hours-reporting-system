import { useOverWorkPersonList } from "@/store";
import { jobNameSearch, jobNumberSearch } from "@/utils";

export const searchList = [
  jobNameSearch(useOverWorkPersonList),
  jobNumberSearch(useOverWorkPersonList),
];
