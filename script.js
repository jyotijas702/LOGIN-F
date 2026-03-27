const form = document.querySelector("#loginForm");
const nameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const forgetPassword = document.querySelector(".forget");

const feedback = document.createElement("p");
feedback.style.fontWeight = "bold";
feedback.style.marginTop = "10px";
form.appendChild(feedback);

const correctUsername = "jyoti.kumari";
const correctPassword = "jyoti@2026";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = nameInput.value;
  const password = passwordInput.value;

  if (username === correctUsername && password === correctPassword) {
    feedback.textContent = "✅ Login successful!";
    feedback.style.color = "green";
    form.reset();
  } else {
    feedback.textContent = "❌ Invalid credentials!";
    feedback.style.color = "red";
  }
});

forgetPassword.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Reset link sent!");
});
