import React from 'react';
import { Link } from 'react-router-dom';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo2.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <Link to="/">
          <img className="Logo" src={Logo} alt="Gameplays Logo"/>
        </Link>
        
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
