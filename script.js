function validateRegisterForm() {
 
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
   
    var errors = [];
    
  
    var emailPattern = /^[a-z A-Z]\s{1,13}@\s{2,3}\.com/i;

   
    if (!emailPattern.test(email)) {
        errors.push("Please enter a valid email address.");
    }
    if (password !== confirmPassword) {
        errors.push("Passwords do not match. Please try again.");
    }

    if (errors.length > 0) {
        alert("Registration Errors:\n- " + errors.join("\n- "));
        return false;
    }

    alert("Registration successful!");
    return true;
}


function validateLoginForm() {
    var email = document.getElementById("loginEmail").value;
    
    var errors = [];
    var emailPattern = /^[a-z A-Z]\s{1,13}@\s{2,3}\.com/i;

    if (!emailPattern.test(email)) {
        errors.push("Please enter a valid email address.");
    }

    if (errors.length > 0) {
        alert("Login Errors:\n- " + errors.join("\n- "));
        return false;
    }

    alert("Login successful!");
    return true;
}