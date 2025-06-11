import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FreelancerMenu from './FreelancerMenu';
import './FreelancerProjects.css';

// Datos de ejemplo para los proyectos disponibles
const dummyAvailableProjects = [
  {
    id: 1,
    title: "Desarrollo de Sitio Web",
    description: "Creación de un sitio web responsive para una startup.",
    budget: "$1,000",
    postedDate: "2025-06-01",
  },
  {
    id: 2,
    title: "Aplicación Móvil en React Native",
    description: "Desarrollo de una app móvil para servicios de transporte.",
    budget: "$1,500",
    postedDate: "2025-05-20",
  },
  {
    id: 3,
    title: "Diseño UX/UI para Plataforma E-commerce",
    description: "Diseño de interfaces y experiencia de usuario para una tienda online.",
    budget: "$800",
    postedDate: "2025-04-15",
  },
];

// Datos de ejemplo para los proyectos activos
const dummyActiveProjects = [
  {
    id: 101,
    title: "Proyecto Activo 1",
    description: "Proyecto actualmente en marcha.",
    budget: "$1,200",
    postedDate: "2025-06-05"
  },
  {
    id: 102,
    title: "Proyecto Activo 2",
    description: "Proyecto en desarrollo.",
    budget: "$900",
    postedDate: "2025-06-10"
  },
];

const FreelancerProjects = () => {
  const [activeTab, setActiveTab] = useState('available');
  const navigate = useNavigate();

  // Navegación a vista de detalles de proyecto disponible
  const goToProjectDetails = (projectId) => {
    navigate(`/dashboard/freelancer/project-details/${projectId}`);
  };

  // Navegación a vista de detalles de proyecto activo
  const goToActiveProjectDetails = (projectId) => {
    navigate(`/dashboard/freelancer/active-project-details/${projectId}`);
  };

  return (
    <div className="projects-wrapper">
      <FreelancerMenu />

      <div className="projects-content">
        {/* Pestañas para seleccionar proyectos disponibles o activos */}
        <div className="tabs">
          <button
            className={activeTab === 'available' ? 'active' : ''}
            onClick={() => setActiveTab('available')}
          >
            Proyectos Disponibles
          </button>
          <button
            className={activeTab === 'active' ? 'active' : ''}
            onClick={() => setActiveTab('active')}
          >
            Proyectos Activos
          </button>
        </div>

        {/* Lista de proyectos disponibles */}
        {activeTab === 'available' && (
          <>
            <h2>Proyectos Disponibles</h2>
            <div className="projects-grid">
              {dummyAvailableProjects.map((project) => (
                <div
                  className="project-card"
                  key={project.id}
                  onClick={() => goToProjectDetails(project.id)}
                >
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-info">
                    <span><strong>Presupuesto:</strong> {project.budget}</span>
                    <span><strong>Publicado:</strong> {project.postedDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Lista de proyectos activos */}
        {activeTab === 'active' && (
          <>
            <h2>Proyectos Activos</h2>
            {dummyActiveProjects.length > 3 ? (
              <p className="warning">
                No se pueden tener más de 3 proyectos activos.
              </p>
            ) : (
              <div className="projects-grid">
                {dummyActiveProjects.map((project) => (
                  <div
                    className="project-card"
                    key={project.id}
                    onClick={() => goToActiveProjectDetails(project.id)}
                  >
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-info">
                      <span><strong>Presupuesto:</strong> {project.budget}</span>
                      <span><strong>Publicado:</strong> {project.postedDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FreelancerProjects;