// src/components/RegisterPage.js
import React, { useState } from 'react';
import './RegisterPage.css';

const RegisterPage = () => {
  const [userType, setUserType] = useState(null);

  // Si el usuario aún no ha seleccionado su tipo, mostrar las opciones:
  if (!userType) {
    return (
      <div className="register-container">
        <h2>Regístrate</h2>
        <p>¿Cómo deseas registrarte?</p>
        <div className="register-options">
          <button onClick={() => setUserType('freelancer')} className="btn">
            Registrarse como Freelancer
          </button>
          <button onClick={() => setUserType('requester')} className="btn">
            Registrarse como Solicitante
          </button>
        </div>
      </div>
    );
  }

  // Una vez elegido el tipo, se muestra el formulario correspondiente
  return (
    <div className="register-container">
      {userType === 'freelancer' ? (
        <>
          <h2>Registro Freelancer</h2>
          <FreelancerRegistrationForm />
        </>
      ) : (
        <>
          <h2>Registro Solicitante</h2>
          <RequesterRegistrationForm />
        </>
      )}
    </div>
  );
};

const FreelancerRegistrationForm = () => {
  // Obtener el año actual y generar las opciones para el select (actual hasta actual - 7)
  const currentYear = new Date().getFullYear();
  const yearOptions = [];
  for (let i = 0; i <= 7; i++) {
    yearOptions.push(currentYear - i);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí colocar la lógica para enviar los datos al backend
    console.log('Registro de freelancer enviado');
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre Completo</label>
        <input type="text" placeholder="Ingresa tu nombre completo" required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="Ingresa tu correo" required />
      </div>
      <div className="form-group">
        <label>Contraseña</label>
        <input type="password" placeholder="Ingresa tu contraseña" required />
      </div>
      <div className="form-group">
        <label>Universidad</label>
        <input type="text" placeholder="Ej: Universidad Nacional" required />
      </div>
      <div className="form-group">
        <label>Número de Carnet</label>
        <input type="text" placeholder="Ingresa tu número de carnet" required />
      </div>
      <div className="form-group">
        <label>Número Celular</label>
        <input type="tel" placeholder="Ingresa tu número celular" required />
      </div>
      <div className="form-group">
        <label>Año de Inicio de Clases</label>
        <select required>
          <option value="">Selecciona el año</option>
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn">Registrarse</button>
    </form>
  );
};

const RequesterRegistrationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí colocar la lógica para enviar los datos al backend
    console.log('Registro de solicitante enviado');
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre de Empresa / Persona</label>
        <input type="text" placeholder="Ingresa tu nombre o el de tu empresa" required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="Ingresa tu correo" required />
      </div>
      <div className="form-group">
        <label>Contraseña</label>
        <input type="password" placeholder="Ingresa tu contraseña" required />
      </div>
      <div className="form-group">
        <label>Número Celular</label>
        <input type="tel" placeholder="Ingresa tu número celular" required />
      </div>
      <div className="form-group">
        <label>RUC (opcional)</label>
        <input type="text" placeholder="Ingresa tu RUC (opcional)" />
      </div>
      <div className="form-group">
        <label>Dirección (opcional)</label>
        <input type="text" placeholder="Ingresa tu dirección (opcional)" />
      </div>
      <div className="form-group">
        <label>Sitio Web (opcional)</label>
        <input type="url" placeholder="Ingresa tu sitio web (opcional)" />
      </div>
      <button type="submit" className="btn">Registrarse</button>
    </form>
  );
};

export default RegisterPage;