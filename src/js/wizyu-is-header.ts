export {};
declare global {
  interface Window {
    loopRenderWizyuIs: Function;
  }
}
window.loopRenderWizyuIs = async () => {
  const titles: string[] = [
    "is weight loss",
    "is 100% human",
    "is genuine",
    "just works",
  ];
  const elm = document.getElementById("wizyu-is");
  while (true) {
    for (let x = 0; x < titles.length; x++) {
      elm.innerText = titles[x];
      elm.style.animationDuration = titles[x].length * 0.1 + "s";
      elm.classList.remove("wiped");
      await new Promise((resolve) => setTimeout(resolve, 5000));
      elm.classList.add("wiped");
      elm.style.animationDuration = titles[x].length * 0.03 + "s";

      await new Promise((resolve) =>
        setTimeout(resolve, 30 * titles[x].length)
      );
    }
  }
};
