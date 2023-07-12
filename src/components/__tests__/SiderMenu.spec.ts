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
  beforeEach(() => {
    pushFn.mockReset();
  });
  it("should be called with one time", () => {
    const { goTo } = useGoto();

    goTo(RouterName.HOME);

    expect(pushFn).toBeCalledWith({ name: RouterName.HOME });

    goTo(name);
  });

  it("should be called with one time", () => {
    const { goToAdmin } = useGoto();

    goToAdmin();

    expect(pushFn).toBeCalledWith({ name: RouterName.ADMIN });
  });
});
