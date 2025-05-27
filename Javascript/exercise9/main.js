const loadingEl = document.getElementById("loading");
const container = document.getElementById("eventsContainer");

// Mock API endpoint (You can replace with a real API)
const mockApiUrl = "https://mocki.io/v1/9e09d1f0-8a5a-4fcb-9a3c-cac0d1b18b1f"; 
// (This URL returns a JSON array of events, or you can create your own at https://mocki.io/)

// 1. Using .then() and .catch()
function fetchEventsWithThen() {
  loadingEl.style.display = "block";
  container.innerHTML = "";

  fetch(mockApiUrl)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(events => {
      loadingEl.style.display = "none";
      renderEvents(events);
    })
    .catch(error => {
      loadingEl.style.display = "none";
      container.textContent = "Error loading events: " + error.message;
    });
}

// 2. Using async/await and try/catch
async function fetchEventsAsync() {
  loadingEl.style.display = "block";
  container.innerHTML = "";

  try {
    const response = await fetch(mockApiUrl);
    if (!response.ok) throw new Error("Network response was not ok");
    const events = await response.json();
    loadingEl.style.display = "none";
    renderEvents(events);
  } catch (error) {
    loadingEl.style.display = "none";
    container.textContent = "Error loading events: " + error.message;
  }
}

// Helper function to render events
function renderEvents(events) {
  if (!events.length) {
    container.textContent = "No events found.";
    return;
  }

  container.innerHTML = "";
  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";

    const title = document.createElement("h3");
    title.textContent = event.name;

    const date = document.createElement("p");
    date.textContent = `Date: ${event.date}`;

    const seats = document.createElement("p");
    seats.textContent = `Seats available: ${event.seats}`;

    card.append(title, date, seats);
    container.appendChild(card);
  });
}

// Call one of these to test:
// fetchEventsWithThen();
fetchEventsAsync();
