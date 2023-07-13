import { createPinia, setActivePinia } from "pinia";
import { useGenerateReports } from "@/store";
import { generateReportsList } from "../fixtures";
import { fetchAllGenerateReports } from "@/api";

vi.mock("@/api");

vi.mocked(fetchAllGenerateReports as Record<string, any>).mockImplementation(() => {
  return Promise.resolve({
    data: generateReportsList,
  });
});

describe("test data", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  afterEach(() => {
    const { data } = useGenerateReports();
    data.value = [];
  });
  it("should be empty array", () => {
    const { data } = useGenerateReports();
    expect(data.value).toEqual([]);
  });
  it("should return dataList", async () => {
    const { data, getAllReportList } = useGenerateReports();

    expect(data.value).toStrictEqual([]);

    await getAllReportList();

    expect(data.value).toStrictEqual(generateReportsList);
  });
});
