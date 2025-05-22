import React from 'react';
import './Services.css';
import {
  MonitorSmartphone, 
  AppWindow,         
  Smartphone,       
  BrainCircuit       
} from 'lucide-react';

const Services = () => {
  const servicesData = [
    {
      title: 'Web Tasarım',
      description: 'Web tasarımında HTML, CSS ve JavaScript’in yanı sıra React JS kütüphanesini kullanarak kullanıcı dostu ve modern arayüzler geliştiriyorum. Bu portfolyo, alandaki bilgilerimi pekiştirmek amacıyla hazırladığım bir çalışmadır.',
      icon: <MonitorSmartphone className="service-icon" />,
    },
    {
      title: 'Masaüstü Uygulama Geliştirme',
      description: 'Masaüstü uygulama geliştirmeye yönelik bir eğitim sürecindeyim. Bu süreçte, arayüzleri Qt Designer ile hazırlıyor, uygulamanın arka plan işlevlerini Python ile geliştiriyorum. Şu an üzerinde çalıştığım proje, kişisel bir sağlık uygulaması olan Kalori Sayacım.',
      icon: <AppWindow className="service-icon" />,
    },
    {
      title: 'Mobil Uygulama Geliştirme',
      description: 'Mobil uygulama geliştirmeye Kotlin ile adım attım. BTK Akademi’deki orta düzey Android eğitimini tamamladım ve şu anda ileri seviye eğitimlerle kendimi bu alanda daha da geliştirmeye devam ediyorum.',
      icon: <Smartphone className="service-icon" />,
    },
    {
      title: 'Yapay Zeka ve Veri Bilimi',
      description: 'Yapay zeka ve veri bilimi alanında kendimi geliştirmek istiyorum. Bu doğrultuda, BTK Akademi’nin sunduğu Veri Bilimi eğitimine katılarak temel kavramları öğrenmeye devam ediyorum.',
      icon: <BrainCircuit className="service-icon" />,
    },
  ];

  const skillsData = [
    { title: 'HTML/CSS', percentage: 80 },
    { title: 'Python/PyQt', percentage: 65 },
    { title: 'JavaScript', percentage: 60 },
    { title: 'Kotlin', percentage: 65 },
    { title: 'React JS', percentage: 55 },
    { title: 'Java', percentage: 50 },
  ];

  return (
    <section id="skills" className="services-section">
      <div className="services-container">
        <h2 className="section-title">Neler Yapıyorum?</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              {service.icon}
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Yetenekler Bölümü */}
        <div className="skills-section">
          <h2 className="skills-title">Yeteneklerim</h2>
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-title">{skill.title}</div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.percentage}%` }}
                  >
                    <span>{skill.percentage}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
