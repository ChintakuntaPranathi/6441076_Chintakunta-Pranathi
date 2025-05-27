const form = document.getElementById("registrationForm");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent form from submitting normally

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  messageDiv.textContent = "";

  const { name, email, event: selectedEvent } = form.elements;

  let isValid = true;

  if (!name.value.trim()) {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  }
  
  if (!email.value.trim() || !email.value.includes("@")) {
    document.getElementById("emailError").textContent = "Valid email is required";
    isValid = false;
  }
  
  if (!selectedEvent.value) {
    document.getElementById("eventError").textContent = "Please select an event";
    isValid = false;
  }

  if (isValid) {
    messageDiv.textContent = `Thank you, ${name.value}, for registering for ${selectedEvent.value}!`;
    form.reset();
  }
});
