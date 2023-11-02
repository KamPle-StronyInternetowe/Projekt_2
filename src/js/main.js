const burgerBtn = document.querySelector(".burger-icon");
const navItems = document.querySelector(".nav-items");
const navItem = document.querySelectorAll(".nav-item");
const burgerSpans = burgerBtn.querySelectorAll("span");
const cards = document.querySelectorAll(".ofert-card");
const aboutUsTxt = document.querySelectorAll(".aboutus-text");
const aboutUsImg = document.querySelectorAll(".aboutus-img");
const realisationImg = document.querySelectorAll(".realisation-img");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.5,
  }
);

cards.forEach((card) => {
  observer.observe(card);
});

aboutUsTxt.forEach((text) => {
  observer.observe(text);
});

aboutUsImg.forEach((img) => {
  observer.observe(img);
});

realisationImg.forEach((img) => {
  observer.observe(img);
});

const toggleMobileMenu = () => {
  navItems.classList.toggle("mobile-menu");
  burgerSpans.forEach((span) => {
    span.classList.toggle("active");
  });
  navItem.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.classList.remove("mobile-menu");
      burgerSpans.forEach((span) => {
        span.classList.remove("active");
      });
    });
  });
};

burgerBtn.addEventListener("click", toggleMobileMenu);
