import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-content">
                <h2 className="about-title">Ben Kimim?</h2>
                <p className="about-text">
                   Ben Simge. Bilgisayar Mühendisliği 3. sınıf öğrencisiyim, 
                   ancak bu alandaki ikinci yılım. Üniversite hayatıma İlköğretim 
                   Matematik Öğretmenliği bölümünde başladım. Ancak 2. sınıfa geldiğimde
                    bu mesleğin bana uygun olmadığını fark ettim ve yönümü, asıl ilgi 
                    duyduğum alan olan Bilgisayar Mühendisliği'ne çevirdim.
                    Şu anda mobil uygulama geliştirme üzerine yoğunlaşıyor ve aktif olarak 
                    eğitimler alıyorum. Ayrıca yapay zeka ve veri bilimi gibi alanlara da ilgi duyuyor, bu konularda 
                    kendimi geliştirmeye devam ediyorum.
                </p>

            </div>
        </section>
    );
};

export default AboutMe;