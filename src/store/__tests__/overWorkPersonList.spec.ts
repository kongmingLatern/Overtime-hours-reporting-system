import { createPinia, setActivePinia } from "pinia";
import { useOverWorkPersonList } from "..";
import { ref } from "vue";
import { dataList } from "./fixtures";

vi.mock("..");

vi.mocked(useOverWorkPersonList as Record<string, any>).mockImplementation(
  () => {
    const data = ref<OverWorkPersonType[]>([]);
    return {
      data,
      getAllOverWorkPersonList: () => {
        data.value = dataList;
      },
    };
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

    expect(data.value).toStrictEqual(dataList);
  });
});
