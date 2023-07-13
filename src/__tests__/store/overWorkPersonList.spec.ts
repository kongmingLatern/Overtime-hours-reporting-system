import { createPinia, setActivePinia } from "pinia";
import { useOverWorkPersonList } from "@/store";
import { overWorkPersonList } from "../fixtures";
import { fetchAllOverWorkPerson } from "@/api";

vi.mock("@/api");

vi.mocked(fetchAllOverWorkPerson as Record<string, any>).mockImplementation(
  () => {
    return Promise.resolve({
      data: overWorkPersonList,
    });
  }
);

describe("test data", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  afterEach(() => {
    const { data } = useOverWorkPersonList();
    data.value = [];
  });
  it("should be empty array", () => {
    const { data } = useOverWorkPersonList();
    expect(data.value).toEqual([]);
  });
  it("should return dataList", async () => {
    const { data, getAllOverWorkPersonList } = useOverWorkPersonList();

    expect(data.value).toStrictEqual([]);

    await getAllOverWorkPersonList();

    expect(data.value).toStrictEqual(overWorkPersonList);
  });
});
