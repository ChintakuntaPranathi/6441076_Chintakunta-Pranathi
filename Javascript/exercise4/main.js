// Sample events list
let events = [
  { name: "Yoga Class", date: "2025-06-01", seats: 5, category: "Health" },
  { name: "Music Night", date: "2025-06-10", seats: 10, category: "Music" },
  { name: "Art Workshop", date: "2025-06-20", seats: 8, category: "Art" }
];

// Function to add a new event
function addEvent(name, date, seats, category) {
  events.push({ name, date, seats, category });
}

// Closure to track total registrations by category
function createCategoryTracker() {
  const counts = {};
  return function(category) {
    counts[category] = (counts[category] || 0) + 1;
    console.log(`Total registrations for ${category}: ${counts[category]}`);
  };
}

const trackRegistration = createCategoryTracker();

// Function to register a user
function registerUser(eventIndex) {
  try {
    const event = events[eventIndex];
    if (event.seats > 0) {
      event.seats--;
      trackRegistration(event.category); // closure call
      alert(`Registered for ${event.name}`);
      renderEvents(events);
    } else {
      throw new Error("No seats left!");
    }
  } catch (error) {
    alert("Registration failed: " + error.message);
  }
}

// Higher-order function to filter events by dynamic callback
function filterEvents(callback) {
  return events.filter(callback);
}

// Filter by category input
function filterEventsByCategory(category) {
  return filterEvents(event => event.category.toLowerCase() === category.toLowerCase());
}

// Renders a list of events
function renderEvents(eventList) {
  const container = document.getElementById("eventList");
  container.innerHTML = "";

  eventList.forEach((event, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${event.name}</h3>
      <p>Category: ${event.category}</p>
      <p>Date: ${event.date}</p>
      <p>Seats: ${event.seats}</p>
      <button onclick="registerUser(${index})">Register</button>
    `;
    container.appendChild(div);
  });
}

// Called from button in HTML
function searchByCategory() {
  const input = document.getElementById("categoryInput").value.trim();
  const filtered = filterEventsByCategory(input);
  renderEvents(filtered);
}

// Initial render
renderEvents(events);

