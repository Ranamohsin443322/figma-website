{/*export {};
declare global {
  interface Window {
    registerTopBarListener: Function;
  }
}
window.registerTopBarListener = () => {
  document.addEventListener("scroll", (e) => {
    styleTopHeader();
  });
  function styleTopHeader(force: boolean = false) {
    const topBar = document.getElementById("top-bar");
    if (window.scrollY % 3 == 0 || force) {
      if (window.scrollY > window.innerHeight * 0.6) {
        if (!topBar.classList.contains("scrolled"))
          topBar.classList.add("scrolled");
      } else {
        if (topBar.classList.contains("scrolled"))
          topBar.classList.remove("scrolled");
      }
    }
  }
  styleTopHeader(true);
};*/}


