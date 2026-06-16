import React from 'react';
import './Banner.css';

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1 className="banner-title">Formação<br/>em Tecnologia</h1>
          <p className="banner-description">
            Cursos online em programação, dados, cloud, segurança e infra com certificados e trilhas para dás para profissões
          </p>
          
          <div className="banner-buttons">
            <button className="btn-primary">Ver cursos</button>
            <button className="btn-secondary">
              <span>📞</span> Fale com um consultor
            </button>
          </div>
        </div>

        <div className="banner-image">
          <div className="image-placeholder">
            <div className="image-decoration"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
