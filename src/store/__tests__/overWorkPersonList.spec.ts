import { createPinia, setActivePinia } from "pinia";
import { useOverWorkPersonList } from "..";
import { ref } from "vue";

vi.mock("..");

const dataList: OverWorkPersonType[] & { key: string }[] = [
  {
    key: "1",
    department_name: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    end_time: new Date("2023-07-12"),
    job_name: "John Brown",
    job_number: "2",
    over_time: "2 days",
    report_time: new Date("2023-07-12"),
    start_time: new Date("2023-07-10"),
    status: "已驳回",
  },
];

vi.mocked(useOverWorkPersonList).mockImplementation(() => {
  const data = ref<OverWorkPersonType[]>([]);
  return {
    data,
    getAllOverWorkPersonList: () => {
      data.value = dataList;
    },
  } as any;
});

describe("test data", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("should be empty array", () => {
    const { data } = useOverWorkPersonList();
    expect(data.value).toEqual([]);
  });
  it("should be null", async () => {
    const { data, getAllOverWorkPersonList } = useOverWorkPersonList();

    await getAllOverWorkPersonList();

    expect(data.value).toStrictEqual(dataList);
  });
});
