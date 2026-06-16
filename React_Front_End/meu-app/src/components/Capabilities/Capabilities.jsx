import React from 'react';
import './Capabilities.css';

export default function Capabilities() {
  const capabilities = [
    {
      id: 1,
      icon: '📦',
      title: 'Desenvolvimento<br/>Full Stack',
      description: 'Aprenda a construir aplicações completas'
    },
    {
      id: 2,
      icon: '💾',
      title: 'Banco de Dados',
      description: 'Domine as melhores práticas de dados'
    },
    {
      id: 3,
      icon: '☁️',
      title: 'Cloud e DevOps',
      description: 'Implante aplicações em nuvem'
    },
    {
      id: 4,
      icon: '⚙️',
      title: 'Padrões e métodos',
      description: 'Arquitetura e design patterns'
    },
    {
      id: 5,
      icon: '🧠',
      title: 'Inteligência de<br/>negócios',
      description: 'Análise de dados e insights'
    }
  ];

  return (
    <section className="capabilities">
      <div className="capabilities-container">
        <h2 className="section-label">CAPACITAÇÃO</h2>
        
        <div className="capabilities-grid">
          {capabilities.map((item) => (
            <div key={item.id} className="capability-card">
              <div className="capability-icon">{item.icon}</div>
              <h3 
                className="capability-title"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <p className="capability-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
