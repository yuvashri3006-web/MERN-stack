function Skills() {
  return (
    <section id="skills" style={{ padding: "40px" }}>
      <h2>Skills</h2>
      <ul>
        <li>
          Web Development <progress value="80" max="100"></progress>
        </li>
        <li>
          Problem Solving <progress value="70" max="100"></progress>
        </li>
        <li>
          Communication <progress value="85" max="100"></progress>
        </li>
      </ul>
    </section>
  );
}

export default Skills;