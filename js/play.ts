const submitButton: HTMLButtonElement | null = document.querySelector("button");
const errorMessage: HTMLParagraphElement | null =
  document.querySelector(".errorMessage");
const setPasswordBorder = document.querySelectorAll(".error");

if (submitButton) {
  submitButton.addEventListener("click", (eventy) => {
    checkPasswordsMatch(eventy);
  });
}

function checkPasswordsMatch(eventy) {
  const password: string | null = (<HTMLInputElement>(
    document.querySelector("#password")
  )).value;
  const confirmedPassword: string | null = (<HTMLInputElement>(
    document.querySelector("#confirmPassword")
  )).value;
  if (password !== confirmedPassword && errorMessage) {
    errorMessage.textContent = "*Passwords do not match";
    eventy.preventDefault();
    setPasswordBorder.forEach((el) =>
      el.setAttribute("style", "border-color: red")
    );
  }
}
