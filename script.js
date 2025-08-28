const navbar = document.getElementById("navbar");
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("closeMenu");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact form");
  const fields = ["name", "number", "email", "subject", "message"];

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let firstInvalid = null;

    form.querySelectorAll(".error").forEach((ele) => (ele.textContent = ""));
    form
      .querySelectorAll(".contact-inputs")
      .forEach((ele) => ele.classList.remove("border-red-500"));

    for (const fieldName of fields) {
      const input = form[fieldName];
      const value = input.value.trim();
      const errorEl =
        input.parentElement.querySelector(".error") || input.nextElementSibling;

      let errorMsg = "";

      if (fieldName === "name" && value === "") {
        errorMsg = "Please enter your name";
      }

      if (fieldName === "number" && (value === "" || !/^\d+$/.test(value))) {
        errorMsg = "Please enter a valid number";
      }

      if (
        fieldName === "email" &&
        (value === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      ) {
        errorMsg = "Please enter a valid email address";
      }

      if (fieldName === "subject" && value === "") {
        errorMsg = "Please enter a subject";
      }

      if (fieldName === "message" && value === "") {
        errorMsg = "Please enter your message";
      }

      if (errorMsg) {
        errorEl.textContent = errorMsg;
        input.classList.add("border-red-500");
        if (!firstInvalid) firstInvalid = input;
      }
    }

    if (firstInvalid) {
      firstInvalid.focus(); // focus first invalid field
      return;
    }

    // Success
    alert("Form submitted successfully!");
    form.reset();
  });
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-styling");
  } else {
    navbar.classList.remove("navbar-styling");
  }
});

burger.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.remove("translate-x-full");
  menu.classList.add("translate-x-0", "active");

  document.body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
  menu.classList.add("translate-x-full");
  menu.classList.remove("translate-x-0", "active");

  document.body.style.overflow = "auto";
});

menu.addEventListener("click", () => {
  menu.classList.add("translate-x-full");
  menu.classList.remove("translate-x-0", "active");
  document.body.style.overflow = "auto";
});
