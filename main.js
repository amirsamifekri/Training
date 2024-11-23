const body = document.querySelector("body");
const nav = document.querySelector("nav");
const modeToggle = document.querySelector(".dark-light");
const searchToggle = document.querySelector(".search-toggle");
const sideBarClose = document.querySelector(".side-bar-close");
const sideBarOpen = document.querySelector(".side-bar-open");
if (localStorage.getItem("mode") === "dark-mode") {
  body.classList.add("dark");
  modeToggle.classList.add("active");
}

// toggle active class to modeToggle

modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});

// toggle active class to searchToggle
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

// toggle sidebar
sideBarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", (e) => {
  const clickedElement = e.target;
  if (
    !clickedElement.classList.contains("side-bar-open") &&
    !clickedElement.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});
