"use strict";
const form = document.getElementById("contact-form");
const toast = document.getElementById("toast");
const formInputs = form.querySelectorAll("input, select, textarea");

const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const errorMessages = {
  valueMissing: (input) =>
    input.type === "radio"
      ? "Please select a query type"
      : input.type === "checkbox"
      ? "To submit this form, please consent to being contacted"
      : `${input.labels[0]?.firstChild.nodeValue || "Field"} is required`,
  typeMismatch: (input) => "Please enter a valid email address",
};

const validateInput = (input, submit = false) => {
  input.setAttribute("aria-invalid", !input.checkValidity());
  const errId = input.getAttribute("aria-describedby");
  console.log(errId);
  console.log(input.validity);
  const getErrorMessage = (validity) => {
    for (const [key, val] of Object.entries(errorMessages)) {
      if (
        validity[key] &&
        (input.type === "radio" ||
          input.type === "checkbox" ||
          input.matches(":user-invalid") ||
          submit)
      ) {
        return val(input);
      }
    }
    return "";
  };

  const errorContainer = form.querySelector("#" + errId);
  errorContainer.textContent = getErrorMessage(input.validity);
};

const showToast = () => {
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 5000);

  console.log("toast");
};

const handleFormInput = (event) => {
  validateInput(event.target);
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  formInputs.forEach((element) => {
    console.log(element);
    validateInput(element, true);
  });
  if (form.checkValidity()) {
    showToast();
    form.reset();
  }
};

form.addEventListener("input", handleFormInput);
form.addEventListener("focusout", handleFormInput);
form.addEventListener("submit", handleFormSubmit);
