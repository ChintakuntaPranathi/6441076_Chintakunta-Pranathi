// Using const for name and date, let for availableSeats
const eventName = "Community Cleanup";
const eventDate = "2025-06-01";
let availableSeats = 30;

// Using template literals to display event info
const eventDetails = `${eventName} is scheduled for ${eventDate}. Available seats: ${availableSeats}`;
document.getElementById("eventDetails").textContent = eventDetails;
document.getElementById("seatCount").textContent = `Seats remaining: ${availableSeats}`;

// Registration function using --
function register() {
  if (availableSeats > 0) {
    availableSeats--;
    alert("You have successfully registered!");
  } else {
    alert("Sorry, the event is full.");
  }

  document.getElementById("seatCount").textContent = `Seats remaining: ${availableSeats}`;
}

