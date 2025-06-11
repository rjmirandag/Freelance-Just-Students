import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FreelancerMenu from './FreelancerMenu';
import './FreelancerActiveProjectDetails.css';

const FreelancerActiveProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Datos dummy para simular un proyecto activo
  const dummyActiveProject = {
    id: 101,
    title: "Proyecto Activo 1",
    state: "En marcha (50% completado)",
    client: "Cliente #123",
    publishedDate: "2025-06-05",
    deadline: "2025-06-20",
    budget: "$1,200",
    description:
      "Desarrollo de un sitio web responsive para una startup en el sector tecnológico. Incluye interfaz moderna, integración con APIs y optimización para dispositivos móviles.",
    milestones: [
      { name: "Diseño", progress: 100 },
      { name: "Desarrollo", progress: 50 },
    ],
    overallProgress: 75, // porcentaje calculado (ejemplo)
    files: [
      { fileName: "Diseño_v1.pdf", uploadedDate: "2025-06-06" },
    ],
    notifications: "Falta 3 días para la entrega",
  };

  // Estados para simular acciones (por ejemplo, subir archivo o actualizar hito)
  const [newFile, setNewFile] = useState(null);
  const [updatedMilestone, setUpdatedMilestone] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewFile(file);
      alert(`Archivo "${file.name}" subido.`);
    }
  };

  const handleMilestoneUpdate = () => {
    if (updatedMilestone.trim() === "") {
      alert("Ingrese el nombre del hito a marcar como completado.");
    } else {
      alert(`Hito "${updatedMilestone}" marcado como completado.`);
      setUpdatedMilestone("");
    }
  };

  const handleContactClient = () => {
    // Redirige a la vista de mensajes
    navigate('/dashboard/freelancer/messages');
  };

  const handleViewDetails = () => {
    alert("Consultando requisitos detallados…");
  };

  const handleDeliverWork = () => {
    alert("Iniciar proceso de entrega del trabajo.");
  };

  const handleRequestReview = () => {
    alert("Solicitando revisión al cliente.");
  };

  const handleCancelProject = () => {
    if (window.confirm("¿Estás seguro de cancelar el proyecto? Esta acción no se podrá deshacer.")) {
      alert("Proyecto cancelado.");
    }
  };

  const handleSaveChanges = () => {
    alert("Cambios guardados.");
  };

  return (
    <div className="active-project-details-wrapper">
      {/* Menú superior común */}
      <FreelancerMenu />

      <div className="active-project-details-container">
        <button className="back-button" onClick={() => navigate('/dashboard/freelancer/projects')}>
          Volver
        </button>

        {/* 1. Encabezado del proyecto */}
        <header className="project-header">
          <h1>{dummyActiveProject.title}</h1>
          <div className="header-info">
            <span><strong>Estado:</strong> {dummyActiveProject.state}</span>
            <span><strong>Cliente:</strong> {dummyActiveProject.client}</span>
            <span><strong>Publicado:</strong> {dummyActiveProject.publishedDate}</span>
            <span><strong>Fecha límite:</strong> {dummyActiveProject.deadline}</span>
            <span><strong>Presupuesto:</strong> {dummyActiveProject.budget}</span>
          </div>
        </header>

        {/* 2. Descripción y detalles */}
        <section className="project-section description">
          <h2>Descripción del Proyecto</h2>
          <p>{dummyActiveProject.description}</p>

          <h3>Hitos / Tareas</h3>
          <ul className="milestones-list">
            {dummyActiveProject.milestones.map((m, index) => (
              <li key={index}>
                {m.name}: {m.progress}% completado
              </li>
            ))}
          </ul>

          <div className="overall-progress">
            <label>Progreso General:</label>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${dummyActiveProject.overallProgress}%` }}
              />
            </div>
            <span>{dummyActiveProject.overallProgress}%</span>
          </div>
        </section>

        {/* 3. Sección de gestión */}
        <section className="project-section management">
          <h2>Gestión del Proyecto</h2>

          {/* Archivos y entregables */}
          <div className="files-section">
            <h3>Archivos y Entregables</h3>
            <ul>
              {dummyActiveProject.files.map((file, index) => (
                <li key={index}>
                  {file.fileName} - Subido: {file.uploadedDate}
                </li>
              ))}
            </ul>
            <div className="upload-file">
              <label htmlFor="fileUpload" className="upload-button">
                Subir Entregable
              </label>
              <input
                id="fileUpload"
                type="file"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
            </div>
          </div>

          {/* Comunicación */}
          <div className="communication-section">
            <h3>Comunicación</h3>
            <button className="contact-button" onClick={handleContactClient}>
              Contactar Cliente
            </button>
          </div>
        </section>

        {/* 4. Opciones clave */}
        <section className="project-section actions">
          <button onClick={handleViewDetails}>Ver Requisitos Detallados</button>
          <button onClick={handleDeliverWork}>Entregar Trabajo</button>
          <button onClick={handleRequestReview}>Solicitar Revisión</button>
          <div className="update-progress">
            <input
              type="text"
              placeholder="Marcar hito como completado"
              value={updatedMilestone}
              onChange={(e) => setUpdatedMilestone(e.target.value)}
            />
            <button onClick={handleMilestoneUpdate}>Actualizar Progreso</button>
          </div>
          <button className="cancel-button" onClick={handleCancelProject}>
            Cancelar Proyecto
          </button>
        </section>

        {/* 5. Notificaciones y alertas */}
        <section className="project-section notifications">
          <h2>Notificaciones y Alertas</h2>
          <p>{dummyActiveProject.notifications}</p>
        </section>

        {/* 6. Botones de navegación */}
        <section className="project-section navigation">
          <button onClick={() => navigate('/dashboard/freelancer/projects')}>Volver</button>
          <button onClick={handleSaveChanges}>Guardar Cambios</button>
        </section>
      </div>
    </div>
  );
};

export default FreelancerActiveProjectDetails;