// Events data
const events = [
  { id: 1, name: "Yoga Class", date: "2025-06-01", seats: 5 },
  { id: 2, name: "Rock Concert", date: "2025-06-10", seats: 20 },
  { id: 3, name: "Painting Workshop", date: "2025-06-15", seats: 15 }
];

// Select the container using querySelector()
const container = document.querySelector("#eventsContainer");

// Function to render events dynamically
function renderEvents() {
  container.innerHTML = ""; // Clear existing

  events.forEach(event => {
    // Create card div
    const card = document.createElement("div");
    card.className = "event-card";

    // Event info
    const title = document.createElement("h3");
    title.textContent = event.name;

    const date = document.createElement("p");
    date.textContent = `Date: ${event.date}`;

    const seats = document.createElement("p");
    seats.id = `seats-${event.id}`;
    seats.textContent = `Seats available: ${event.seats}`;

    // Register button
    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";
    registerBtn.onclick = () => register(event.id);

    // Cancel button
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel Registration";
    cancelBtn.style.marginLeft = "10px";
    cancelBtn.onclick = () => cancelRegistration(event.id);

    // Append children
    card.appendChild(title);
    card.appendChild(date);
    card.appendChild(seats);
    card.appendChild(registerBtn);
    card.appendChild(cancelBtn);

    container.appendChild(card);
  });
}

// Register a user for an event (reduce seats)
function register(eventId) {
  const event = events.find(e => e.id === eventId);
  if (event && event.seats > 0) {
    event.seats--;
    updateSeatsDisplay(eventId, event.seats);
    alert(`Registered for ${event.name}`);
  } else {
    alert("Sorry, no seats available.");
  }
}

// Cancel registration (increase seats)
function cancelRegistration(eventId) {
  const event = events.find(e => e.id === eventId);
  if (event) {
    event.seats++;
    updateSeatsDisplay(eventId, event.seats);
    alert(`Cancelled registration for ${event.name}`);
  }
}

// Update the seats count in UI
function updateSeatsDisplay(eventId, seats) {
  const seatsElement = document.getElementById(`seats-${eventId}`);
  if (seatsElement) {
    seatsElement.textContent = `Seats available: ${seats}`;
  }
}

// Initial render call
renderEvents();
