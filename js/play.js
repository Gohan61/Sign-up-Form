const submitButton = document.querySelector("button");
const errorMessage = document.querySelector(".errorMessage");
const setPasswordBorder = document.querySelectorAll(".error");

submitButton.addEventListener("click", (eventy) => {
  checkPasswordsMatch(eventy);
});

function checkPasswordsMatch(eventy) {
  const password = document.querySelector("#password").value;
  const confirmedPassword = document.querySelector("#confirmPassword").value;
  if (password !== confirmedPassword) {
    errorMessage.textContent = "*Passwords do not match";
    eventy.preventDefault();
    setPasswordBorder.forEach((el) =>
      el.setAttribute("style", "border-color: red")
    );
  }
}
