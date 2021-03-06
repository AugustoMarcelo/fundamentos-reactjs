import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <NavLink activeClassName="active" exact to="/">
            Listagem
          </NavLink>
          <NavLink activeClassName="active" to="/import">
            Importar
          </NavLink>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
