$(document).ready(function () {
  // Show event card with fade-in animation
  $("#event1").fadeIn(1000);

  // Register button click handler
  $("#registerBtn").click(function () {
    alert("You have successfully registered!");
    
    // Simulate hiding the card after registration
    $("#event1").fadeOut(800);
  });
});
