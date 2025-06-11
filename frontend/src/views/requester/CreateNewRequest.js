// src/views/requester/CreateNewRequest.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RequesterMenu from "./RequesterMenu";
import "./CreateNewRequest.css";

const CreateNewRequest = () => {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const handleSidebarToggle = (e) => {
      setSidebarCollapsed(e.detail.collapsed);
    };
    window.addEventListener('sidebarToggle', handleSidebarToggle);
    return () => window.removeEventListener('sidebarToggle', handleSidebarToggle);
  }, []);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");
  const [duration, setDuration] = useState("");
  const [experience, setExperience] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [instructions, setInstructions] = useState("");
  const [visibility, setVisibility] = useState("Público");
  const [proposalDeadline, setProposalDeadline] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const categoryOptions = ["Diseño gráfico", "Desarrollo web", "Edición de video", "Otro"];
  const durationOptions = ["1-3 días", "1-2 semanas", "Más de 2 semanas"];
  const experienceOptions = ["Principiante", "Intermedio", "Avanzado"];
  const visibilityOptions = ["Público", "Solo estudiantes registrados", "Invitación solo"];
  const timeZoneOptions = [
    "UTC-8: Pacific Time (PT)",
    "UTC-7: Mountain Time (MT)",
    "UTC-6: Central Time (CT)",
    "UTC-5: Eastern Time (ET)",
    "UTC+1: Central European Time (CET)",
    "UTC+2: Eastern European Time (EET)"
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAttachment(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Debes aceptar los términos de servicio");
      return;
    }
    setShowPreview(true);
  };

  const handlePublish = () => {
    alert("¡Solicitud publicada con éxito!");
    navigate("/dashboard/requester");
  };

  const handleSaveDraft = () => {
    alert("Borrador guardado");
  };

  const handleCancel = () => {
    navigate("/dashboard/requester");
  };

  const renderPreview = () => (
    <div className="preview-section">
      <h2>Vista Previa</h2>
      <p><strong>Título:</strong> {title}</p>
      <p><strong>Descripción:</strong> {description}</p>
      <p><strong>Categoría:</strong> {category}</p>
      <p><strong>Presupuesto:</strong> {budget}</p>
      <p><strong>Fecha límite:</strong> {deadline}</p>
      <p><strong>Duración estimada:</strong> {duration}</p>
      <p><strong>Nivel de experiencia:</strong> {experience}</p>
      <p><strong>Zona Horaria:</strong> {timeZone}</p>
      {attachment && <p><strong>Archivo adjunto:</strong> {attachment.name}</p>}
      <p><strong>Instrucciones adicionales:</strong> {instructions}</p>
      <p><strong>Visibilidad:</strong> {visibility}</p>
      <p><strong>Plazo para propuestas:</strong> {proposalDeadline}</p>
      <div className="form-actions">
        <button type="button" className="btn btn-secondary" onClick={() => setShowPreview(false)}>
          Editar
        </button>
        <button type="button" className="btn btn-primary" onClick={handlePublish}>
          Publicar Solicitud
        </button>
      </div>
    </div>
  );

  return (
    <div className="create-request-page">
      <RequesterMenu />
      <div className="create-request-container">
        <header className="create-request-header">
          <h1>Crear Nueva Solicitud</h1>
          <p>Publica una nueva solicitud y encuentra un freelancer</p>
        </header>
        {showPreview ? (
          renderPreview()
        ) : (
          <form className="create-request-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Título del proyecto</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={100}
                required
              />
              <small>Sé claro y específico.</small>
            </div>
            <div className="form-group">
              <label>Descripción del proyecto</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                minLength={200}
                maxLength={500}
                required
              />
              <small>Detalla requisitos, alcance y expectativas.</small>
            </div>
            <div className="form-group">
              <label>Categoría o habilidades requeridas</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Seleccione una categoría</option>
                {categoryOptions.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </select>
              <small>Elige las habilidades necesarias para el proyecto.</small>
            </div>
            <div className="form-group">
              <label>Presupuesto</label>
              <input
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                required
              />
              <small>Indica un presupuesto realista.</small>
            </div>
            <div className="form-group">
              <label>Fecha límite</label>
              <input
                type="datetime-local"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                required
              />
              <small>Establece una fecha realista para la entrega.</small>
            </div>
            <div className="form-group">
              <label>Duración estimada</label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
              >
                <option value="">Seleccione una opción</option>
                {durationOptions.map((dur, index) => (
                  <option key={index} value={dur}>{dur}</option>
                ))}
              </select>
              <small>Ayuda a los freelancers a planificar.</small>
            </div>
            <div className="form-group">
              <label>Nivel de experiencia</label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
              >
                <option value="">Seleccione una opción</option>
                {experienceOptions.map((exp, index) => (
                  <option key={index} value={exp}>{exp}</option>
                ))}
              </select>
              <small>Define el nivel de habilidad requerido.</small>
            </div>
            <div className="form-group">
              <label>Zona Horaria</label>
              <select
                value={timeZone}
                onChange={(e) => setTimeZone(e.target.value)}
                required
              >
                <option value="">Seleccione una zona horaria</option>
                {timeZoneOptions.map((tz, index) => (
                  <option key={index} value={tz}>{tz}</option>
                ))}
              </select>
              <small>Seleccione su zona horaria.</small>
            </div>
            <div className="form-group">
              <label>Archivos adjuntos (opcional)</label>
              <input
                type="file"
                onChange={handleFileChange}
                accept=".png,.jpg,.jpeg,.pdf"
              />
              <small>Sube un brief o diseño de referencia (Máximo 10MB).</small>
            </div>
            <div className="form-group">
              <label>Instrucciones adicionales</label>
              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                minLength={100}
                maxLength={200}
              />
              <small>Agrega detalles específicos.</small>
            </div>
            <div className="form-group">
              <label>Privacidad</label>
              <select
                value={visibility}
                onChange={(e) => setVisibility(e.target.value)}
                required
              >
                {visibilityOptions.map((vis, index) => (
                  <option key={index} value={vis}>{vis}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Plazo para propuestas</label>
              <input
                type="date"
                value={proposalDeadline}
                onChange={(e) => setProposalDeadline(e.target.value)}
                required
              />
              <small>Define cuándo cerrarás las propuestas.</small>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  required
                />
                He revisado los términos de servicio
              </label>
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Vista Previa
              </button>
              <button type="button" className="btn btn-secondary" onClick={handleSaveDraft}>
                Guardar Borrador
              </button>
              <button type="button" className="btn btn-danger" onClick={handleCancel}>
                Cancelar
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CreateNewRequest;
