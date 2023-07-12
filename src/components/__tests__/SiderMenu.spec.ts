import { VueWrapper, mount } from "@vue/test-utils";
import { RouterName } from "@/router/RouterName";
import { useGoto } from "@/composables";

function useSetup(setup: () => void) {
  const Comp = {
    setup,
    render() {},
  };
  const wrapper = mount(Comp) as VueWrapper<any> & {
    router: {
      push: (name: string) => void;
    };
  };

  return {
    wrapper,
    router: wrapper.router,
  };
}

describe("useGoto", () => {
  it("should go to admin page", () => {
    const { router } = useSetup(() => {
      const { goToAdmin } = useGoto();
      goToAdmin();
    });
    expect(router.push).toBeCalledWith({ name: RouterName.ADMIN });
  });
});
