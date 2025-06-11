import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FreelancerMenu from './FreelancerMenu';
import './FreelancerProjectDetails.css';

// Datos dummy para simular la información del proyecto.
// En producción, los datos se obtendrán desde el backend usando el parámetro id.
const dummyProject = {
  id: 1,
  title: "Desarrollo de Sitio Web",
  postedDate: "2025-06-01",
  state: "Disponible",
  description: "Se requiere el desarrollo de un sitio web responsive para una startup en el sector tecnológico. El sitio debe incluir una página de inicio, sección de productos y formulario de contacto.",
  requirements: "Conocimientos en HTML, CSS, JavaScript y experiencia con frameworks como React.",
  scope: "No incluye diseño gráfico; solo desarrollo frontend.",
  budget: "$1,000",
  paymentMethod: "Pago único al completar",
  rateType: "$20/hora",
  dueDate: "2025-07-01",
  milestones: "Diseño: 2025-06-15, Desarrollo: 2025-06-25",
  deliverables: "Sitio web funcional, código fuente y documentación básica.",
  requiredSkills: ["React", "HTML", "CSS", "JavaScript"],
  experienceRequirement: "Al menos 1 proyecto similar completado.",
  suggestedTools: ["Git", "VS Code"],
  instructions: "Enviar mensaje con portafolio y propuesta de precio.",
  documentsRequired: "Incluir enlace a GitHub o portafolio.",
  applyDeadline: "Solicitudes aceptadas hasta 2025-06-10",
  conditions: "El cliente revisará las propuestas en 48 horas.",
  warnings: "Proyecto requiere NDA; firma requerida."
};

const FreelancerProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Aquí en producción se debería obtener la información del proyecto
  // usando el id recibido (por ejemplo, fetch(`/api/projects/${id}`)).
  const project = dummyProject; // Para este ejemplo, se usa dummyProject.

  return (
    <div className="project-details-wrapper">
      {/* Menú superior común */}
      <FreelancerMenu />
      
      <div className="project-details-container">
        <button className="back-button" onClick={() => navigate('/dashboard/freelancer/projects')}>
          Volver
        </button>
        
        {/* 1. Encabezado del proyecto */}
        <header className="project-header">
          <h1>{project.title}</h1>
          <div className="header-info">
            <span>Publicado: {project.postedDate}</span>
            <span>Estado: {project.state}</span>
          </div>
        </header>
        
        {/* 2. Descripción detallada */}
        <section className="project-section description">
          <h2>Descripción Detallada</h2>
          <p><strong>Resumen:</strong> {project.description}</p>
          <p><strong>Requisitos Específicos:</strong> {project.requirements}</p>
          <p><strong>Alcance del Trabajo:</strong> {project.scope}</p>
        </section>
        
        {/* 3. Detalles financieros */}
        <section className="project-section financial">
          <h2>Detalles Financieros</h2>
          <p><strong>Presupuesto:</strong> {project.budget}</p>
          <p><strong>Forma de Pago:</strong> {project.paymentMethod}</p>
          <p><strong>Tarifa Preferida:</strong> {project.rateType}</p>
        </section>
        
        {/* 4. Cronograma y entregables */}
        <section className="project-section schedule">
          <h2>Cronograma y Entregables</h2>
          <p><strong>Fecha Límite:</strong> {project.dueDate}</p>
          <p><strong>Etapas o Hitos:</strong> {project.milestones}</p>
          <p><strong>Entregables:</strong> {project.deliverables}</p>
        </section>
        
        {/* 5. Habilidades y experiencia requeridas */}
        <section className="project-section skills">
          <h2>Habilidades y Experiencia Requeridas</h2>
          <p><strong>Habilidades:</strong> {project.requiredSkills.join(', ')}</p>
          <p><strong>Experiencia Mínima:</strong> {project.experienceRequirement}</p>
          <p><strong>Herramientas Sugeridas:</strong> {project.suggestedTools.join(', ')}</p>
        </section>
        
        {/* 7. Instrucciones para postularse */}
        <section className="project-section instructions">
          <h2>Instrucciones para Postularse</h2>
          <p><strong>Cómo Aplicar:</strong> {project.instructions}</p>
          <p><strong>Documentos Requeridos:</strong> {project.documentsRequired}</p>
          <p><strong>Plazo para Solicitudes:</strong> {project.applyDeadline}</p>
        </section>
        
        {/* 8. Acciones disponibles */}
        <section className="project-section actions">
          <button className="proposal-button">Enviar Propuesta</button>
          <button className="contact-button">Preguntar al Cliente</button>
          <button className="save-button">Guardar Proyecto</button>
        </section>
        
        {/* 9. Notas adicionales */}
        <section className="project-section notes">
          <h2>Notas Adicionales</h2>
          <p><strong>Condiciones:</strong> {project.conditions}</p>
          <p><strong>Advertencias:</strong> {project.warnings}</p>
        </section>
      </div>
    </div>
  );
};

export default FreelancerProjectDetails;