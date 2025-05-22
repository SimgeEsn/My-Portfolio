import React from "react";
import "./Portfolio.css";
import agecalculator from "./images/agecalculator.png";
import calculator from "./images/calculator.png";
import kalorisayacim from "./images/kalorisayacim.png";

const projects = [
  {
    category: "Web Uygulama",
    title: "Yaş Hesaplayıcı",
    image: agecalculator,
    description:
      "Katıldığım Web Programlama Workshop’unda geliştirdiğim bu uygulamada, HTML, CSS ve JavaScript kullanarak sade ve kullanıcı dostu bir arayüz tasarladım. Uygulama, kullanıcıların doğum tarihlerini girerek yaşlarını anında hesaplamalarını sağlıyor.",
    github: "https://github.com/SimgeEsn/Age-Calculator",
  },
  {
    category: "Mobil Uygulama",
    title: "Hesap Makinesi",
    image: calculator,
    description:
      "'Kotlin ile Android Mobil Uygulama Geliştirme Temelleri' eğitiminde kazandığım bilgileri pekiştirmek için geliştirdiğim bu uygulama, kullanıcıların temel matematik işlemlerini gerçekleştirmesine olanak tanır.",
    // github yok
  },
  {
    category: "Masaüstü Uygulama",
    title: "Kalori Sayacım",
    image: kalorisayacim,
    description:
      "Bu uygulamayı halen geliştirme aşamasındayım. Sayfa tasarımlarını QtDesigner'da yapıp Python PyQt5 ve PySide6 kütüphanelerini kullanarak işlevsellik kazandırdığım masaüstü uygulamayla kullanıcıların günlük kalori alımını takip etmelerine olanak tanımayı hedefliyorum.",
    // github yok
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <h2 className="section-title">Portfolyo</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-card" key={index}>
              <h4 className="project-category">{project.category}</h4>
              <h3 className="project-title">{project.title}</h3>
              <img src={project.image} alt={project.title} className="project-image" />
              <p className="project-description">{project.description}</p>
              {
                project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub'da Görüntüle
                  </a>
                )
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
