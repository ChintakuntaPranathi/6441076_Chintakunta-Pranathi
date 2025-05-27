document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const messageDiv = document.getElementById("message");
  messageDiv.textContent = "Submitting...";
  messageDiv.className = "message";

  const formData = new FormData(event.target);
  const user = {
    name: formData.get("name"),
    email: formData.get("email"),
    event: formData.get("event"),
  };

  // Simulate network delay
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        messageDiv.textContent = "✅ Registration successful!";
        messageDiv.classList.add("success");
      })
      .catch((error) => {
        console.error("Error:", error);
        messageDiv.textContent = "❌ Registration failed!";
        messageDiv.classList.add("error");
      });
  }, 2000); // 2-second delay to simulate real-world latency
});

