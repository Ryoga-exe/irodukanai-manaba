import type { PlasmoCSConfig } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: ["https://manaba.tsukuba.ac.jp/*"]
};

window.addEventListener("load", () => {
  document.documentElement.style.filter = "grayscale(1)";
});
