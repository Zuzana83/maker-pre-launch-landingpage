const form = document.getElementById("notificationForm");
const emailInput = document.getElementById("email");
const errorText = document.getElementById("errorMsg");
const submitBtn = document.getElementById("notificationBtn");

// Email address pattern 
const emailPattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

// Event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateAndSubmit();
    // clearValidation();
});

emailInput.addEventListener("input", () => {
    clearValidation();
});

// Display error message
function showError(message) {
    errorText.textContent = message;
    errorText.classList.add("show");
}

// Clear validation 
function clearValidation() {
    errorText.classList.remove("show");
    console.log("clearing validation");
}

function validateAndSubmit() {
    const email = emailInput.value.trim();
    if(validateEmail(email)) {
        successfulSubmission(email);
    }
}

function validateEmail(email) {
    // Empty value
    if(!email) {
        showError("Oops! Please add your email");
        return false;
    }
    // Valid or invalid pattern of email
    if(!isValidEmailFormat(email)) {
        showError("Oops! That doesn’t look like an email address");
        return false;
    }

    errorText.classList.remove("show");
    return true;
}

// Test against regex pattern
function isValidEmailFormat(email) {
    return emailPattern.test(email);
}

function successfulSubmission(email) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    // Sending data in real world
    setTimeout(() => {
        // Confirmation message 
        alert("Thank you! Your email address has been submitted.");
        // Reset to default
        form.reset();
        clearValidation(); 
        submitBtn.disabled = false;
        submitBtn.textContent = "Get notified";
    }, 1500);
}
