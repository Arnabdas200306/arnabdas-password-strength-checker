let password = document.getElementById("password");
let strengthText = document.getElementById("strengthText");
let strengthBar = document.getElementById("strengthBar");

password.addEventListener("input", () => {
    let val = password.value;
    let strength = 0;

    if (val.length > 5) strength++;
    if (val.match(/[A-Z]/)) strength++;
    if (val.match(/[0-9]/)) strength++;
    if (val.match(/[@$!%*?&]/)) strength++;

    if (strength === 0) {
        strengthText.innerText = "";
        strengthBar.style.width = "0%";
    } 
    else if (strength <= 2) {
        strengthText.innerText = "Weak";
        strengthBar.style.width = "33%";
        strengthBar.style.background = "red";
    } 
    else if (strength === 3) {
        strengthText.innerText = "Medium";
        strengthBar.style.width = "66%";
        strengthBar.style.background = "orange";
    } 
    else {
        strengthText.innerText = "Strong";
        strengthBar.style.width = "100%";
        strengthBar.style.background = "green";
    }
});