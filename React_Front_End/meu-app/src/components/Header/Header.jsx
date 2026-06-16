import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">Cursos Online</span>
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#cursos">Cursos</a>
            </li>
            <li className="nav-item">
              <a href="#empresas">Empresas</a>
            </li>
            <li className="nav-item">
              <a href="#certificacoes">Certificações</a>
            </li>
            <li className="nav-item">
              <a href="#departamentos">Departamentos</a>
            </li>
          </ul>
        </nav>

        <button className="btn-entrar">Entrar</button>
      </div>
    </header>
  );
}
