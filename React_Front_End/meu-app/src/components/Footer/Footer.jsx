import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h4 className="footer-title">Navegação</h4>
            <ul className="footer-list">
              <li><a href="#cursos">Cursos</a></li>
              <li><a href="#empresas">Empresas</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Suporte</h4>
            <ul className="footer-list">
              <li><a href="#contato">Contato</a></li>
              <li><a href="#central-ajuda">Central de Ajuda</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Recursos</h4>
            <ul className="footer-list">
              <li><a href="#certificacoes">Certificações</a></li>
              <li><a href="#trilhas">Trilhas</a></li>
              <li><a href="#documentacao">Documentação</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-list">
              <li><a href="#termos">Termos de Serviço</a></li>
              <li><a href="#privacidade">Política de Privacidade</a></li>
              <li><a href="#cookies">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">&copy; 2024 Cursos Online. Todos os direitos reservados.</p>
          <div className="footer-social">
            <a href="#facebook" className="social-link">f</a>
            <a href="#twitter" className="social-link">𝕏</a>
            <a href="#linkedin" className="social-link">in</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
