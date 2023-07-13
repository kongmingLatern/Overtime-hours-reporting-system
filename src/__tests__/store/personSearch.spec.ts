import { createPinia, setActivePinia } from "pinia";
import { usePersonSearch } from "@/store";
import { personSearchList } from "../fixtures";
import { fetchAllPersonSearch } from "@/api";

vi.mock("@/api");

vi.mocked(fetchAllPersonSearch as Record<string, any>).mockImplementation(
  () => {
    return Promise.resolve({
      data: personSearchList,
    });
  }
);

describe("test data", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  afterEach(() => {
    const { data } = usePersonSearch();
    data.value = [];
  });
  it("should be empty array", () => {
    const { data } = usePersonSearch();
    expect(data.value).toEqual([]);
  });
  it("should return personSearchList", async () => {
    const { data, getAllPersonList } = usePersonSearch();

    expect(data.value).toStrictEqual([]);

    await getAllPersonList();

    expect(data.value).toStrictEqual(personSearchList);
  });
});
