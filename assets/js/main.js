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
