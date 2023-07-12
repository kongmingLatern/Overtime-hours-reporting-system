import { VueWrapper, mount } from "@vue/test-utils";

export function useSetup(setup: () => void) {
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
