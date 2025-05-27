// Sample list of events
const events = [
  { name: "Yoga Class", date: "2025-06-01", seats: 5 },
  { name: "Music Night", date: "2024-12-01", seats: 10 }, // Past event
  { name: "Art Workshop", date: "2025-06-10", seats: 0 }, // Full event
  { name: "Coding Bootcamp", date: "2025-06-15", seats: 8 }
];

// Get today's date for comparison
const today = new Date().toISOString().split("T")[0];

// Display valid events
const container = document.getElementById("eventsContainer");

events.forEach((event, index) => {
  if (event.date >= today && event.seats > 0) {
    // Create event card
    const eventDiv = document.createElement("div");
    eventDiv.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Available Seats: <span id="seats-${index}">${event.seats}</span></p>
      <button onclick="register(${index})">Register</button>
    `;
    container.appendChild(eventDiv);
  }
});

// Registration function with error handling
function register(index) {
  try {
    if (events[index].seats > 0) {
      events[index].seats--;
      document.getElementById(`seats-${index}`).textContent = events[index].seats;
      alert("You have registered successfully!");
    } else {
      throw new Error("No seats available.");
    }
  } catch (error) {
    alert("Registration failed: " + error.message);
    console.error(error);
  }
}
