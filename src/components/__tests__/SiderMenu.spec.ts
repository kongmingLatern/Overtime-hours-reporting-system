import { useGoto } from "@/composables";
import { RouterName } from "@/router/RouterName";
import { useRouter } from "vue-router";

vi.mock("vue-router");

const pushFn = vi.fn();
vi.mocked(useRouter as any).mockImplementation(() => {
  return {
    push: pushFn,
  };
});

describe("useGoto", () => {
  afterEach(() => {
    pushFn.mockReset();
  });
  it("should be called with one time", () => {
    const { goTo } = useGoto();

    goTo("home");

    expect(pushFn).toBeCalledWith({ name: "home" });
  });

  it("should be called with one time", () => {
    const { goToAdmin } = useGoto();

    goToAdmin();

    expect(pushFn).toBeCalledWith({ name: RouterName.Admin });
  });
});
