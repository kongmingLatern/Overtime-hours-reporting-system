import { RouterName } from "@/router/RouterName";
import { useGoto } from "@/composables";
import { useSetup } from "../helpers";

describe("useGoto", () => {
  it("should go to admin page", () => {
    const { router } = useSetup(() => {
      const { goToAdmin } = useGoto();
      goToAdmin();
    });
    expect(router.push).toBeCalledWith({ name: RouterName.ADMIN });
  });
  it("should go to home page", () => {
    const { router } = useSetup(() => {
      const { goTo } = useGoto();
      goTo(RouterName.HOME);
    });
    expect(router.push).toBeCalledWith({ name: RouterName.HOME });
  });
});
