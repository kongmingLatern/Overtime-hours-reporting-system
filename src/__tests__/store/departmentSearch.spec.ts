import { createPinia, setActivePinia } from "pinia";
import { useDepartmentSearch } from "@/store";
import { departmentList } from "../fixtures";
import { fetchAllDepartment } from "@/api";

vi.mock("@/api");

vi.mocked(fetchAllDepartment as Record<string, any>).mockImplementation(() => {
  return Promise.resolve({
    data: departmentList,
  });
});

describe("test data", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  afterEach(() => {
    const { data } = useDepartmentSearch();
    data.value = [];
  });
  it("should be empty array", () => {
    const { data } = useDepartmentSearch();
    expect(data.value).toEqual([]);
  });
  it("should return dataList", async () => {
    const { data, getAllDepartmentList } = useDepartmentSearch();

    expect(data.value).toStrictEqual([]);

    await getAllDepartmentList();

    expect(data.value).toStrictEqual(departmentList);
  });
});
