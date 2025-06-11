// src/components/FreelancerMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './FreelancerMenu.css';

// Si cuentas con un logo, puedes importarlo o referenciarlo directamente:
import logo from '../../assets/Just Students Logo.png';

const FreelancerMenu = () => {
  return (
    <header className="freelancer-menu">
      {/* Logo o nombre de la plataforma */}
      <div className="menu-logo">
        <Link to="/dashboard/freelancer">
          <img src={logo} alt="Just Students" />
        </Link>
      </div>
      {/* Navegación principal */}
      <nav className="menu-nav">
        <ul>
          <li>
            <Link to="/dashboard/freelancer">Inicio</Link>
          </li>
          <li>
            <Link to="/dashboard/freelancer/projects">Proyectos</Link>
          </li>
          <li>
            <Link to="/dashboard/freelancer/messages">Mensajes</Link>
          </li>
          <li>
            <Link to="/dashboard/freelancer/profile">Perfil</Link>
          </li>
        </ul>
      </nav>
      {/* Acciones adicionales, como cerrar sesión */}
      <div className="menu-actions">
        <button className="logout-btn">Cerrar sesión</button>
      </div>
    </header>
  );
};

export default FreelancerMenu;