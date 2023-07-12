import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";
import presetAttributify from "@unocss/preset-attributify";
import presetIcons from "@unocss/preset-icons";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({}),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
  shortcuts: {
    "j-c-c": "justify-center",
    "a-i-c": "items-center",
    "j-a-c": "justify-center items-center",
    "absolute-center":
      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
});
