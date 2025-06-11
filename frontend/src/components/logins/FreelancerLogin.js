// src/components/logins/FreelancerLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const FreelancerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook para redirección

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Freelancer:', email, password);
    // Simula un inicio de sesión exitoso redirigiendo al dashboard del freelancer
    navigate('/dashboard/freelancer'); 
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión como Freelancer</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Correo electrónico" 
          value={email} 
          onChange={(e)=>setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e)=>setPassword(e.target.value)} 
          required 
        />
        <button type="submit" className="btn">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default FreelancerLogin;