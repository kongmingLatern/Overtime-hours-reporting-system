import { createPinia, setActivePinia } from "pinia";
import { useProjectMaintain } from "@/store";
import { projectList } from "../fixtures";
import { fetchAllProject } from "@/api";

vi.mock("@/api");

vi.mocked(fetchAllProject as Record<string, any>).mockImplementation(() => {
  return Promise.resolve({
    data: projectList,
  });
});

describe("test data", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  afterEach(() => {
    const { data } = useProjectMaintain();
    data.value = [];
  });
  it("should be empty array", () => {
    const { data } = useProjectMaintain();
    expect(data.value).toEqual([]);
  });
  it("should return projectList", async () => {
    const { data, getAllProjectList } = useProjectMaintain();

    expect(data.value).toStrictEqual([]);

    await getAllProjectList();

    expect(data.value).toStrictEqual(projectList);
  });
});
