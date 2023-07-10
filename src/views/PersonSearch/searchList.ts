import { usePersonSearch } from "@/store";
import { jobNameSearch, jobNumberSearch } from "@/utils";

export const searchList = [
  jobNameSearch(usePersonSearch),
  jobNumberSearch(usePersonSearch),
];
