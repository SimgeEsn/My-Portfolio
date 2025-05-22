import React from "react";
import { Link } from "react-scroll";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-subtitle">Welcome!</div>
        <h1 className="hero-title">I'm Simge ESEN</h1>
        <h2 className="hero-role">Junior Mobile App Developer</h2>
        <p className="hero-description">
          Merhaba! Ben Simge. Mobil uygulama geliştirme alanında kendini geliştiren bir 
          bilgisayar mühendisliği öğrencisiyim. Bu portfolyo, gelişim sürecimi ve 
          projelerimi daha yakından tanımanız için hazırlandı.
        </p>

        {/* Sosyal ikonlar */}
        <div className="hero-socials">
          {/* Sadece GitHub tıklanabilir */}
          <a
            href="https://github.com/SimgeEsn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hero-social-icon"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          {/* Diğer ikonlar sadece görsel olarak var */}
          <span className="hero-social-icon disabled-icon" title="Pasif">
            <i className="fa-brands fa-linkedin"></i>
          </span>
          <span className="hero-social-icon disabled-icon" title="Pasif">
            <i className="fa-solid fa-envelope"></i>
          </span>
          <span className="hero-social-icon disabled-icon" title="Pasif">
            <i className="fa-brands fa-x-twitter"></i>
          </span>
        </div>

        <Link
          to="portfolio"
          smooth={true}
          duration={600}
          className="hero-button"
        >
          Portfolyoma Göz At
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
