// src/components/RequesterMenu.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RequesterMenu.css';
import {
  FaHome,
  FaTasks,
  FaBell,
  FaChartBar,
  FaUser,
  FaWallet,
  FaMoon,
  FaSun,
  FaSignOutAlt,
  FaBars,
} from 'react-icons/fa';

const RequesterMenu = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  // Cuando cambie el estado de "collapsed", disparamos un evento global
  // para que el contenedor del dashboard se actualice dinámicamente.
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('sidebarToggle', { detail: { collapsed } }));
  }, [collapsed]);

  // Definición de rutas para cada opción del menú
  const menuItems = [
    { icon: <FaHome />, label: 'Dashboard', route: '/dashboard/requester' },
    { icon: <FaTasks />, label: 'Projects', route: '/dashboard/requester/projects' },
    { icon: <FaBell />, label: 'Notifications', route: '/dashboard/requester/notifications' },
    { icon: <FaChartBar />, label: 'Analytics', route: '/dashboard/requester/analytics' },
    { icon: <FaUser />, label: 'Users', route: '/dashboard/requester/users' },
    { icon: <FaWallet />, label: 'Wallets', route: '/dashboard/requester/wallets' },
  ];

  return (
    <div className={`sidebar ${darkMode ? 'dark' : 'light'} ${collapsed ? 'collapsed' : ''}`}>
      <div className="top">
        <div className="logo">{collapsed ? 'JS' : 'JustStudents'}</div>
        <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
          <FaBars />
        </button>
      </div>

      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.route}>
              <span className="icon">{item.icon}</span>
              {!collapsed && <span className="text">{item.label}</span>}
            </Link>
          </li>
        ))}
      </ul>

      <div className="bottom">
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <Link to="/login/requester" className="logout">
          <FaSignOutAlt />
          {!collapsed && <span className="text">Logout</span>}
        </Link>
      </div>
    </div>
  );
};

export default RequesterMenu;