import React from 'react';
import './MyPath.css';

export default function MyPath() {
  return (
    <section className="my-path">
      <div className="my-path-container">
        <h2 className="section-label">MINHA TRILHA</h2>
        
        <div className="path-card">
          <div className="path-header">
            <h3 className="path-title">Full Stack Developer</h3>
            <div className="path-meta">
              <div className="meta-item">
                <span className="meta-icon">⏱️</span>
                <span className="meta-text">Cargo Horário</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">📊</span>
                <span className="meta-text">Nível</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">✓</span>
                <span className="meta-text">Certificado</span>
              </div>
            </div>
          </div>

          <button className="btn-enroll">Inscrever-se</button>
        </div>
      </div>
    </section>
  );
}
