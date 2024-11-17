import React, { useEffect } from "react";
import "./App.css";

function App() {
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

  return (
    <div className="App">
      <div className="background">
        <h1>DevOps Portfolio</h1>
        <h2>Coming Soon</h2>
        <p>We are working hard to deliver amazing content. Stay tuned!</p>
        <form>
          <textarea placeholder="Leave your feedback..." />
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default App;
