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
beforeEach(() => {
  setActivePinia(createPinia());
});
afterEach(() => {
  const { data, loading } = useOverWorkPersonList();
  data.value = [];
  loading.value = true;
});

describe("test data", () => {
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

describe("test loading", () => {
  it("should be true when init", () => {
    const { loading } = useOverWorkPersonList();
    expect(loading.value).toBeTruthy();
  });
  it("should be false when complete", async () => {
    const { loading, getAllOverWorkPersonList } = useOverWorkPersonList();

    expect(loading.value).toBeTruthy();

    await getAllOverWorkPersonList();

    expect(loading.value).toBeFalsy();
  });
});
