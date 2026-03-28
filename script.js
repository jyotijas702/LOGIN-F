const form = document.querySelector("#loginForm");
const nameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const forgetPassword = document.querySelector(".forget");

const feedback = document.createElement("p");
feedback.style.fontWeight = "bold";
feedback.style.marginTop = "10px";
form.appendChild(feedback);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  feedback.textContent = "✅ Login successful!";
  feedback.style.color = "green";

  form.reset();
});

forgetPassword.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Reset link sent!");
});
