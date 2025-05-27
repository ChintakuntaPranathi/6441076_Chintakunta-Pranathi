document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault(); // ✅ Prevent default form behavior
  console.log("Form submitted");

  const messageDiv = document.getElementById("message");
  messageDiv.textContent = "Submitting...";
  messageDiv.className = "message";

  const formData = new FormData(event.target);
  const user = {
    name: formData.get("name"),
    email: formData.get("email"),
    event: formData.get("event"),
  };

  console.log("Collected User Data:", user); // ✅ Log collected data

  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        console.log("Fetch response:", response);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Server Response:", data);
        messageDiv.textContent = "✅ Registration successful!";
        messageDiv.classList.add("success");
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        messageDiv.textContent = "❌ Registration failed. See console for details.";
        messageDiv.classList.add("error");
      });
  }, 1500); // Simulate a delayed response
});
