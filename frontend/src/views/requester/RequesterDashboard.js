// src/views/requester/RequesterDashboard.js
import React, { useState, useEffect } from 'react';
import RequesterMenu from './RequesterMenu';
import './RequesterDashboard.css';
import { useNavigate } from 'react-router-dom';
import {
  FaEnvelope,
  FaCheckCircle,
  FaUserGraduate,
  FaFileAlt,
} from 'react-icons/fa';

const RequesterDashboard = () => {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Escucha el evento 'sidebarToggle' para actualizar el estado de colapso
  useEffect(() => {
    const handleSidebarToggle = (e) => {
      setSidebarCollapsed(e.detail.collapsed);
    };
    window.addEventListener('sidebarToggle', handleSidebarToggle);
    return () => window.removeEventListener('sidebarToggle', handleSidebarToggle);
  }, []);

  const solicitudesActivas = [
    { titulo: 'Diseño de logo', fecha: '2025-06-01', estado: 'En revisión' },
    { titulo: 'App móvil', fecha: '2025-06-03', estado: 'Aceptada' },
  ];

  const proyectosEnProgreso = [
    { nombre: 'Landing page', estudiante: 'María Fernández' },
    { nombre: 'Dashboard React', estudiante: 'Carlos López' },
  ];

  const mensajes = [
    { remitente: 'Ana López', resumen: 'Nuevo mensaje sobre tu proyecto' },
    { remitente: 'Juan Pérez', resumen: 'Consulta sobre entrega' },
  ];

  const proyectosCompletados = [
    { nombre: 'E-commerce UI', calificacion: 4.5 },
    { nombre: 'Blog en Gatsby', calificacion: 5.0 },
  ];

  return (
    <div className={`dashboard-container ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <RequesterMenu />
      <div className="dashboard-content">
        <h1>Bienvenido al Dashboard</h1>

        {/* Métricas Detalladas */}
        <div className="metrics-grid">
          {/* Solicitudes Activas */}
          <div className="metric-card">
            <h3>Solicitudes Activas</h3>
            {solicitudesActivas.map((sol, i) => (
              <div key={i} className="metric-detail">
                <FaFileAlt className="metric-icon" />
                <div>
                  <strong>{sol.titulo}</strong>
                  <p>{sol.fecha} - {sol.estado}</p>
                </div>
              </div>
            ))}
            <button onClick={() => navigate('/dashboard/requester/requests')}>
              Ver todas
            </button>
          </div>

          {/* Proyectos en progreso */}
          <div className="metric-card">
            <h3>Proyectos en progreso</h3>
            {proyectosEnProgreso.map((proj, i) => (
              <div key={i} className="metric-detail">
                <FaUserGraduate className="metric-icon" />
                <div>
                  <strong>{proj.nombre}</strong>
                  <p>Estudiante: {proj.estudiante}</p>
                  <button className="small-btn">Ver detalles</button>
                </div>
              </div>
            ))}
          </div>

          {/* Mensajes sin leer */}
          <div className="metric-card">
            <h3>
              <FaEnvelope className="inline-icon" /> Mensajes sin leer
            </h3>
            {mensajes.map((msg, i) => (
              <div key={i} className="metric-detail">
                <div>
                  <strong>{msg.remitente}</strong>
                  <p>{msg.resumen}</p>
                </div>
              </div>
            ))}
            <button onClick={() => navigate('/dashboard/requester/messages')}>
              Ir a mensajes
            </button>
          </div>
        </div>

        {/* Proyectos Completados + Acciones rápidas */}
        <div className="metrics-grid">
          <div className="metric-card">
            <h3>
              <FaCheckCircle className="inline-icon" /> Proyectos Completados
            </h3>
            {proyectosCompletados.map((proj, i) => (
              <div key={i} className="metric-detail">
                <div>
                  <strong>{proj.nombre}</strong>
                  <p>Calificación: ⭐ {proj.calificacion}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="metric-card">
            <h3>⚡ Acciones rápidas</h3>
            <div className="quick-actions-inline">
              <div
                className="action-card"
                onClick={() => navigate('/dashboard/requester/new-request')}
              >
                <h4>➕ Crear Nueva Solicitud</h4>
                <p>Publica una nueva solicitud y encuentra un freelancer.</p>
              </div>
              <div
                className="action-card"
                onClick={() => navigate('/dashboard/requester/profile')}
              >
                <h4>⚙️ Editar Perfil</h4>
                <p>Gestiona tu información y preferencias.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequesterDashboard;