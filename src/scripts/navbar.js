document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scroll ke bawah, sembunyikan navbar
      navbar.style.top = "-100px";
    } else {
      // Scroll ke atas, tampilkan navbar
      navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
  });
});
