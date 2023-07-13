import { createPinia, setActivePinia } from "pinia";
import { useResponsiveTimeReport } from "@/store";
import { responsiveTimeReportList } from "../fixtures";
import { fetchAllPendingPerson } from "@/api";

vi.mock("@/api");

vi.mocked(fetchAllPendingPerson as Record<string, any>).mockImplementation(
  () => {
    return Promise.resolve({
      data: responsiveTimeReportList,
    });
  }
);

describe("test data", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  afterEach(() => {
    const { data } = useResponsiveTimeReport();
    data.value = [];
  });
  it("should be empty array", () => {
    const { data } = useResponsiveTimeReport();
    expect(data.value).toEqual([]);
  });
  it("should return dataList", async () => {
    const { data, getAllPendingPersonList } = useResponsiveTimeReport();

    expect(data.value).toStrictEqual([]);

    await getAllPendingPersonList();

    expect(data.value).toStrictEqual(responsiveTimeReportList);
  });
});
