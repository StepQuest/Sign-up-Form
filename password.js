// Variables

let password;
let passwordConfirmation;

let firstInput = document.querySelector("#password");
let secondInput = document.querySelector("#confirm-password");
let wrongAlert = document.querySelector("#wrong-password-match");

// Functions

function showReaction() {
    if (password != passwordConfirmation) {
        wrongAlert.style.visibility = 'visible';
        firstInput.style.borderColor = 'var(--incorrect-color)';
        secondInput.style.borderColor = 'var(--incorrect-color)';
    } else {
        wrongAlert.style.visibility = 'hidden';
        firstInput.style.borderColor = 'rgb(226, 222, 222)';
        secondInput.style.borderColor = 'rgb(226, 222, 222)';
    }
}

// Event Listeners

firstInput.addEventListener("input", () => {
    password = firstInput.value;
    console.log(password);
    showReaction();
});

secondInput.addEventListener('input', () => {
    passwordConfirmation = secondInput.value;
    showReaction();
});