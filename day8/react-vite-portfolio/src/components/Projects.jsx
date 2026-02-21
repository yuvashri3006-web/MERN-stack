import { useState } from "react";

function Projects() {
  const [showMore, setShowMore] = useState(false);

  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  return (
    <section style={{ padding: "60px", textAlign: "center" }}>
      <h2>My Projects</h2>

      <div className="project-card">
        <h3>Project One</h3>
        {showMore && <p>A React based task management application.</p>}
        <button onClick={toggleDescription}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>

      <div className="project-card">
        <h3>Project Two</h3>
        <p>E-commerce website built with React and Firebase.</p>
        <button>View</button>
      </div>

      <div className="project-card">
        <h3>Project Three</h3>
        <p>Portfolio website using React and Vite.</p>
        <button>View</button>
      </div>
    </section>
  );
}

export default Projects;