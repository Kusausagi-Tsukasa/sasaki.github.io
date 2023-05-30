document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopBtn = document.querySelector(".scroll-to-top");

  function handleScroll() {
    var scrollY = window.scrollY;

    if (scrollY > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  }

  function scrollToTop() {
    if (window.scrollY !== 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  window.addEventListener("scroll", handleScroll);
  scrollToTopBtn.addEventListener("click", scrollToTop);
});
