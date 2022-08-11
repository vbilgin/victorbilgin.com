// Header nav changes
const header = document.querySelector("header");

const changeNav = () => {
  if (window.scrollY > 85) {
    // Past 85 units, add the header-scrolled class
    header.classList.add("header-scrolled");
  } else if (window.scrollY === 0) {
    // Remove the class when at the top of the page
    header.classList.remove("header-scrolled");
  }
};

window.addEventListener("scroll", changeNav);

// Dark mode
let darkModeEnabled = localStorage.getItem("isDarkModeEnabled");
const colorToggleBtn = document.querySelector("#color-toggle");

const toggleColorMode = color => {
  if (color === "light") {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("isDarkModeEnabled", false);
    colorToggleBtn.src = "/assets/img/icons/sun.svg";
    colorToggleBtn.alt = "A sun icon";
  } else if (color === "dark") {
    document.body.classList.add("dark-mode");
    localStorage.setItem("isDarkModeEnabled", true);
    colorToggleBtn.src = "/assets/img/icons/moon.svg";
    colorToggleBtn.alt = "A moon icon";
  }
};

if (darkModeEnabled === "true") toggleColorMode("dark");

colorToggleBtn.addEventListener("click", () => {
  darkModeEnabled = localStorage.getItem("isDarkModeEnabled");
  if (darkModeEnabled === "false") toggleColorMode("dark");
  else toggleColorMode("light");
});
