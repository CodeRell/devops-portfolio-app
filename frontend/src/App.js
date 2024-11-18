import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX + "px";
      const y = e.clientY + "px";
      document.documentElement.style.setProperty("--mouse-x", x);
      document.documentElement.style.setProperty("--mouse-y", y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    console.log("Submitting feedback:", feedback); // Debug log for feedback submission
    const apiUrl = `${process.env.REACT_APP_API_URL}/feedback`;
    console.log("API URL:", apiUrl); // Debug log for the API URL

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feedback }),
      });

      console.log("Response status:", response.status); // Log the response status
      if (response.ok) {
        alert("Thank you for your feedback!");
        setFeedback(""); // Clear the form
      } else {
        alert("Failed to submit feedback. Please try again later.");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div className="App">
      <div className="background">
        <h1>DevOps Portfolio</h1>
        <h2>Coming Soon</h2>
        <p>We are working hard to deliver amazing content. Stay tuned!</p>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Leave your feedback..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default App;

