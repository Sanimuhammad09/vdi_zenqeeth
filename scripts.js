document.addEventListener("DOMContentLoaded", function () {
  const uniqueIdForm = document.getElementById("uniqueIdForm");
  const uniqueIdPage = document.getElementById("uniqueIdPage");
  const registrationForm = document.getElementById("registrationForm");
  const formSteps = document.querySelectorAll(".form-step");
  const nextBtns = document.querySelectorAll(".btn-next");
  const prevBtns = document.querySelectorAll(".btn-prev");
  let currentStep = 0;

  // Handle Unique ID form submission
  uniqueIdForm.addEventListener("submit", function (e) {
    e.preventDefault();
    uniqueIdPage.style.display = "none";
    registrationForm.style.display = "block";
    formSteps[0].classList.add("active"); // Show the Personal Details form step
  });

  // Handle "Next" button clicks
  nextBtns.forEach((button) => {
    button.addEventListener("click", () => {
      formSteps[currentStep].classList.remove("active");
      currentStep++;
      formSteps[currentStep].classList.add("active");
    });
  });

  // Handle "Previous" button clicks
  prevBtns.forEach((button) => {
    button.addEventListener("click", () => {
      formSteps[currentStep].classList.remove("active");
      currentStep--;
      formSteps[currentStep].classList.add("active");
    });
  });
});
