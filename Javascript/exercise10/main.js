// Original events list
const events = [
  { id: 1, name: "Yoga Class", category: "Health", date: "2025-06-01", seats: 5 },
  { id: 2, name: "Rock Concert", category: "Music", date: "2025-06-10", seats: 20 },
  { id: 3, name: "Painting Workshop", category: "Art", date: "2025-06-15", seats: 15 },
  { id: 4, name: "Workshop on Baking", category: "Food", date: "2025-06-20", seats: 12 }
];

const container = document.querySelector("#eventsContainer");

// Function to render events with default parameter and destructuring
const renderEvents = (eventList = events) => {
  container.innerHTML = "";

  if (eventList.length === 0) {
    container.textContent = "No events available.";
    return;
  }

  eventList.forEach(({ id, name, category, date, seats }) => {
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
      <h3>${name}</h3>
      <p>Category: ${category}</p>
      <p>Date: ${date}</p>
      <p>Seats available: ${seats}</p>
    `;

    container.appendChild(card);
  });
};

// Function to filter events by category using spread operator and destructuring
const filterEventsByCategory = (category = "all") => {
  // Clone events array to avoid mutation
  const clonedEvents = [...events];

  if (category === "all") return clonedEvents;

  return clonedEvents.filter(({ category: cat }) => cat === category);
};

// Example usage:
const musicEvents = filterEventsByCategory("Music");

renderEvents(musicEvents); // Render music events only
