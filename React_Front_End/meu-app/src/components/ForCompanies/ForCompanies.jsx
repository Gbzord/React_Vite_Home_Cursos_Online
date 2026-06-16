import React from 'react';
import './ForCompanies.css';

export default function ForCompanies() {
  return (
    <section className="for-companies">
      <div className="for-companies-container">
        <div className="companies-content">
          <h2 className="companies-heading">Para empresas</h2>
          <h3 className="companies-title">Capacite sua equipe<br/>com trilhas<br/>personalizadas em TI</h3>
          
          <button className="btn-specialist">Fale com especialista</button>
        </div>

        <div className="companies-image">
          <div className="dashboard-mock">
            <div className="dashboard-header"></div>
            <div className="dashboard-content">
              <div className="chart-placeholder"></div>
              <div className="stats-placeholder"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
