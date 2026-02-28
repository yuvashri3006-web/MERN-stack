import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Thank you for reaching out! I will contact you soon.");
  };

  return (
    <section id="contact" style={{ padding: "40px" }}>
      <h2>Contact</h2>
      <p>Email: yuvashri@gmail.com</p>
      <p>LinkedIn: linkedin.com/in/yuvashri</p>
      <p>GitHub: github.com/yuvashri3006</p>

      <button onClick={handleClick}>Send Message</button>

      {message && <p>{message}</p>}
    </section>
  );
}

export default Contact;