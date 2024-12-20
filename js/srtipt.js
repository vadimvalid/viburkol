(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const burger = document.querySelector(".header__burger");

    burger.addEventListener("click", () => {
      header.classList.toggle("active");
    });
  });
})();
