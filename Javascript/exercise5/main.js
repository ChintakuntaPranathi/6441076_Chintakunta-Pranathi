// Event constructor function
function Event(name, date, seats, category) {
  this.name = name;
  this.date = date;
  this.seats = seats;
  this.category = category;
}

// Adding method to prototype
Event.prototype.checkAvailability = function() {
  return this.seats > 0 ? "Seats available" : "Event full";
};

// Create some event objects
const event1 = new Event("Community Yoga", "2025-06-01", 10, "Health");
const event2 = new Event("Music Festival", "2025-06-10", 0, "Music");
const event3 = new Event("Art Exhibit", "2025-06-15", 5, "Art");

// Store events in an array
const events = [event1, event2, event3];

// Render event info with availability
const container = document.getElementById("eventsContainer");
events.forEach(event => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>${event.name}</h3>
    <p>Date: ${event.date}</p>
    <p>Category: ${event.category}</p>
    <p>Seats: ${event.seats}</p>
    <p>Status: ${event.checkAvailability()}</p>
  `;
  container.appendChild(div);
});

// Function to list keys and values using Object.entries
function showEventEntries() {
  events.forEach((event, index) => {
    console.log(`Event ${index + 1}:`);
    Object.entries(event).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
    console.log('---');
  });
}

