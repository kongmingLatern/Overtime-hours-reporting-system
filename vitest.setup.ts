import {
  createRouterMock,
  injectRouterMock,
  VueRouterMock,
} from "vue-router-mock";
import { vi, beforeEach } from "vitest";
import { config } from "@vue/test-utils";

function setupRouterMock() {
  const router = createRouterMock({
    spy: {
      create: (fn) => vi.fn(fn),
      reset: (spy) => spy.mockClear(),
    },
  });

  config.plugins.VueWrapper.install(VueRouterMock);
  beforeEach(() => {
    router.reset();
    injectRouterMock(router);
  });
}

setupRouterMock();
