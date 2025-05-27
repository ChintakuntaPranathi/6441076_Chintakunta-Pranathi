// Initial events array
let events = [
  { name: "Yoga Class", category: "Health", date: "2025-06-01", seats: 5 },
  { name: "Rock Concert", category: "Music", date: "2025-06-10", seats: 20 },
  { name: "Painting Workshop", category: "Art", date: "2025-06-15", seats: 15 }
];

// Function to add new event using .push()
function addNewEvent() {
  const newEvent = {
    name: "Workshop on Baking",
    category: "Food",
    date: "2025-06-20",
    seats: 12
  };
  events.push(newEvent);
  renderEvents();
  renderMusicEvents();
}

// Function to render all events using .map()
function renderEvents() {
  const container = document.getElementById("allEvents");
  container.innerHTML = "";

  const cards = events.map(event => {
    return `<div class="event-card">
      <h3>${event.name}</h3>
      <p>Category: ${event.category}</p>
      <p>Date: ${event.date}</p>
      <p>Seats: ${event.seats}</p>
    </div>`;
  });

  container.innerHTML = cards.join("");
}

// Function to filter music events using .filter() and render
function renderMusicEvents() {
  const musicEvents = events.filter(event => event.category.toLowerCase() === "music");
  const container = document.getElementById("musicEvents");
  container.innerHTML = "";

  if (musicEvents.length === 0) {
    container.textContent = "No music events available.";
    return;
  }

  const cards = musicEvents.map(event => {
    return `<div class="event-card">
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Seats: ${event.seats}</p>
    </div>`;
  });

  container.innerHTML = cards.join("");
}

// Initial rendering
renderEvents();
renderMusicEvents();
