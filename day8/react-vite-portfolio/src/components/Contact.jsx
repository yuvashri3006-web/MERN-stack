import { useState } from "react";

function Contact() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <section style={{ padding: "60px", textAlign: "center" }}>
      <h2>Contact Me</h2>
      <p>Email: yourname@email.com</p>
      <p>Phone: +1234567890</p>

      <button onClick={handleClick}>
        {clicked ? "Thanks for reaching out!" : "Say Hello"}
      </button>
    </section>
  );
}

export default Contact;