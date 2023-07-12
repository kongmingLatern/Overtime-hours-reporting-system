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
  it("should be called with one time", () => {
    const { goTo } = useGoto();

    const routerName = RouterName.Admin;

    goTo(routerName);

    expect(pushFn).toBeCalledWith({ name: routerName });
  });
});
