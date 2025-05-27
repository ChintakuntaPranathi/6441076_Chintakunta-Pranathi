const events = [
  { id: 1, name: "Yoga Class", category: "Health", date: "2025-06-01", seats: 5 },
  { id: 2, name: "Rock Concert", category: "Music", date: "2025-06-10", seats: 20 },
  { id: 3, name: "Painting Workshop", category: "Art", date: "2025-06-15", seats: 15 },
  { id: 4, name: "Workshop on Baking", category: "Food", date: "2025-06-20", seats: 12 }
];

const container = document.querySelector("#eventsContainer");
const categoryFilter = document.querySelector("#categoryFilter");
const searchInput = document.querySelector("#searchInput");

// Render events based on filters
function renderEvents(filteredEvents) {
  container.innerHTML = "";

  if (filteredEvents.length === 0) {
    container.textContent = "No events found.";
    return;
  }

  filteredEvents.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";

    const title = document.createElement("h3");
    title.textContent = event.name;

    const category = document.createElement("p");
    category.textContent = `Category: ${event.category}`;

    const date = document.createElement("p");
    date.textContent = `Date: ${event.date}`;

    const seats = document.createElement("p");
    seats.textContent = `Seats available: ${event.seats}`;

    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";
    registerBtn.onclick = () => register(event.id);

    card.append(title, category, date, seats, registerBtn);
    container.appendChild(card);
  });
}

// Register function decreases seats and updates UI
function register(eventId) {
  const event = events.find(e => e.id === eventId);
  if (event && event.seats > 0) {
    event.seats--;
    applyFiltersAndRender();
    alert(`Registered for ${event.name}`);
  } else {
    alert("Sorry, no seats available.");
  }
}

// Apply filters based on category and search text
function applyFiltersAndRender() {
  const category = categoryFilter.value;
  const searchText = searchInput.value.toLowerCase();

  let filtered = events;

  if (category !== "all") {
    filtered = filtered.filter(e => e.category === category);
  }

  if (searchText) {
    filtered = filtered.filter(e => e.name.toLowerCase().includes(searchText));
  }

  renderEvents(filtered);
}

// Event listeners
categoryFilter.onchange = applyFiltersAndRender;

searchInput.onkeydown = (event) => {
  // To avoid unnecessary renders on non-character keys, 
  // but here we keep it simple:
  setTimeout(applyFiltersAndRender, 100);
};

// Initial render
renderEvents(events);
