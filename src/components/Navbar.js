import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Controle Empresarial - CEBP</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/clients">Clientes</Link>
        </li>
        <li>
          <Link to="/employees">Funcionários</Link>
        </li>
        <li>
          <Link to="/income">Renda</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;