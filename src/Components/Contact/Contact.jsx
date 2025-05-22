import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); 
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">Benimle İletişime Geçin</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Adınız ve Soyadınız" required />
          <input type="email" placeholder="Mail Adresiniz" required />
          <textarea placeholder="Mesajınız" rows="5" required></textarea>
          <button type="submit">Gönder</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
