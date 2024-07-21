var submitButton = document.querySelector("button");
var errorMessage = document.querySelector(".errorMessage");
var setPasswordBorder = document.querySelectorAll(".error");
if (submitButton) {
    submitButton.addEventListener("click", function (eventy) {
        checkPasswordsMatch(eventy);
    });
}
function checkPasswordsMatch(eventy) {
    var password = (document.querySelector("#password")).value;
    var confirmedPassword = (document.querySelector("#confirmPassword")).value;
    if (password !== confirmedPassword && errorMessage) {
        errorMessage.textContent = "*Passwords do not match";
        eventy.preventDefault();
        setPasswordBorder.forEach(function (el) {
            return el.setAttribute("style", "border-color: red");
        });
    }
}
