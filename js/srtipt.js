// Header mobile
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const burger = document.querySelector(".header__burger");

    burger.addEventListener("click", () => {
      header.classList.toggle("active");
    });
  });
})();

// Profile page, form
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const editBtn = document.querySelector(
      ".form--profile .form__buttons .btn"
    );
    const saveBtn = document.querySelector(
      ".form--profile .form__buttons .btn--save"
    );
    const profileFormInputs = document.querySelectorAll(
      ".form--profile .form-item input"
    );

    editBtn.addEventListener("click", () => {
      editBtn.style.display = "none";
      saveBtn.style.display = "flex";
      profileFormInputs.forEach((input) => {
        input.disabled = !input.disabled;
      });
    });
  });
})();
