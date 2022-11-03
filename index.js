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



// Events Start
var swiper = new Swiper(".mySwiper", {
  breakpoints: {
      1500: { slidesPerView: 3 },
      900: { slidesPerView: 2, spaceBetween: 25 },
  },
  spaceBetween: 10,
  slidesPerView: 1,
  centeredSlides: false,
  loop: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
  },
});
// Events end

// Contacts start
var iframe = document.getElementById("contact-form");
iframe.scrolling = "no";

const checkActive = () => {
    console.log("ran");
    if (document.activeElement.id == "contact-form")
        iframe.scrolling = "yes";
}

var observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true) {
        window.addEventListener('blur', checkActive);
    } else {
        window.removeEventListener('blur', checkActive);
        iframe.scrolling = "no";
    }
}, { threshold: [0] });

observer.observe(document.querySelector("#contact-form"));
// Contacts end


const pageLoaded = () => {
  
  // Remove loader
  const loader = document.getElementById('loader_block');
  loader.style.opacity = '0';
  setTimeout(() => loader.style.display = 'none', 300);

  // Lazy load contact form iframe
  document.getElementById('contact-form').setAttribute('src', 'https://docs.google.com/forms/d/e/1FAIpQLSfF5G6cvm5p2Wvrpia5ujja6lPrUmsRz7s9oAZjWc_DW6Vrug/viewform?embedded=true');

  window.removeEventListener('load', pageLoaded);
}
window.addEventListener('load', pageLoaded);
// Loading screen end