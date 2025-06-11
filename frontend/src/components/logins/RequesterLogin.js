import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate

const RequesterLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook para redirección

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Solicitante:', email, password);

    // Simula un inicio de sesión exitoso y redirige al dashboard del solicitante
    navigate('/dashboard/requester'); 
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión como Solicitante</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Correo electrónico" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit" className="btn">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default RequesterLogin;