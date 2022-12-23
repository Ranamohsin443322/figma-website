export {};
declare global {
  interface Window {
    toggleMenu: Function;
  }
}
window.toggleMenu = () => {
  const menu = document.getElementById("mobile-menu");
  menu.style.visibility = "visible";
  menu.classList.toggle("open");

  document.getElementById("mobile-menu-button").classList.toggle("open");
};
