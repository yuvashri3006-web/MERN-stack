import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <p>
        Hello! My name is <b>Yuvashri Ravindran</b>. 
        I am an aspiring web developer passionate about 
        <i> technology</i> and <u> innovation</u>.
      </p>
    </section>
  );
}

export default About;