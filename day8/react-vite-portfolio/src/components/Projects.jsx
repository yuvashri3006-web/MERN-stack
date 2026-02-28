import { useState } from "react";

function Projects() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="projects" style={{ padding: "40px" }}>
      <h2>Projects</h2>

      <ul>
        <li>Personal Portfolio Website using HTML</li>
        <li>Smart Attendance System for Colleges</li>
        <li>Automatic Door Opening System based on IoT</li>
      </ul>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Description" : "Show Description"}
      </button>

      {showDetails && (
        <p>
          These projects demonstrate my skills in web development,
          IoT systems, and real-world problem solving.
        </p>
      )}
    </section>
  );
}

export default Projects;