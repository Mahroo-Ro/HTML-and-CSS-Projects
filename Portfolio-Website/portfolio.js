// Function to validate contact form
function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all required fields.");
        return false;
    }
    
    alert("Thank you, " + name + "! Your message has been sent successfully.");
    return true;
}