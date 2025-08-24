const form = document.getElementById("contact-form");
const toast = document.getElementById("toast");
const errorMessages = {
  valueMissing: (type) =>
    type === "radio"
      ? "Please select a query type"
      : type === "checkbox"
      ? "To submit this form, please consent to being contacted"
      : "This field is required",
  typeMismatch: (type) => "Please enter a valid email address",
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
        return val(input.type);
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
  validateInput(event.target, true);
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  Array.from(form.elements).forEach((element) => {
    if (element instanceof HTMLInputElement) {
      console.log(element);
      validateInput(element, true);
    }
  });
  if (form.checkValidity()) {
    showToast();
    form.reset();
  }
};

form.addEventListener("input", handleFormInput);
form.addEventListener("focusout", handleFormInput);
form.addEventListener("submit", handleFormSubmit);
