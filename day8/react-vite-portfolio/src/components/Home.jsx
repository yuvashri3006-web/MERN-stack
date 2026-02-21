import { useState } from "react";

function Home() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <section style={{ padding: "60px", textAlign: "center" }}>
      <h1 style={{ color: "#00adb5" }}>Your Name</h1> {/* Inline Styling */}
      <h3>Frontend Developer</h3>
      <p>I build responsive and interactive web applications using React.</p>

      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? "Hide Welcome Message" : "Show Welcome Message"}
      </button>

      {showMessage && <p>Welcome to my portfolio website!</p>}
    </section>
  );
}

export default Home;