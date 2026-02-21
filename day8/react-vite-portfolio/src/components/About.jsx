import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about}>
      <h2>About Me</h2>
      
      <h3>Education</h3>
      <p>Bachelor of Computer Science</p>

      <h3>Skills</h3>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML & CSS</li>
      </ul>
    </section>
  );
}

export default About;