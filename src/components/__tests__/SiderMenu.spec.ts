import {
  createRouterMock,
  injectRouterMock,
  VueRouterMock,
} from "vue-router-mock";
import { config, mount } from "@vue/test-utils";
import { RouterName } from "@/router/RouterName";
import { useGoto } from "@/composables";

const router = createRouterMock({
  spy: {
    create: (fn) => vi.fn(fn),
    reset: (spy) => spy.mockClear(),
  },
});

injectRouterMock(router);

config.plugins.VueWrapper.install(VueRouterMock);

describe("useGoto", () => {
  it("should go to admin page", () => {
    const Comp = {
      setup() {
        const { goToAdmin } = useGoto();
        goToAdmin();
      },
      render() {},
    };
    const wrapper = mount(Comp);
    expect(wrapper.router.push).toBeCalledWith({ name: RouterName.ADMIN });
  });
});
