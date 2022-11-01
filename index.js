const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());


// Remove loader
const loader = document.getElementById('loader_block');
loader.style.opacity = '0';
setTimeout(() => loader.style.display = 'none', 300);
