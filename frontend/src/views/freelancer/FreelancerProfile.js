// src/views/freelancer/FreelancerProfile.js
import React, { useState, useEffect } from 'react';
import FreelancerMenu from './FreelancerMenu';
import './FreelancerProfile.css';
import axios from 'axios';

const FreelancerProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profilePic, setProfilePic] = useState(null);
  const [loading, setLoading] = useState(true);

  // Datos del perfil, portafolio, etc.
  const [profileDetails, setProfileDetails] = useState(null);
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);

  // Fetch inicial desde el backend
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileRes = await axios.get('/api/freelancer/profile');
        const portfolioRes = await axios.get('/api/freelancer/portfolio');
        const achievementsRes = await axios.get('/api/freelancer/achievements');
        const paymentsRes = await axios.get('/api/freelancer/payments');

        setProfileDetails(profileRes.data);
        setPortfolioItems(portfolioRes.data);
        setAchievements(achievementsRes.data);
        setPaymentMethods(paymentsRes.data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  // Actualización de campos editables
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileDetails({ ...profileDetails, [name]: value });
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setProfilePic(imgUrl);
    }
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    try {
      await axios.put('/api/freelancer/profile', profileDetails);
      alert('Perfil actualizado con éxito.');
    } catch (err) {
      console.error(err);
      alert('Ocurrió un error al guardar.');
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('¿Estás seguro de eliminar tu cuenta?')) {
      try {
        await axios.delete('/api/freelancer/delete-account');
        alert('Cuenta eliminada.');
        // redirigir o cerrar sesión aquí si es necesario
      } catch (err) {
        console.error(err);
      }
    }
  };

  const renderTabContent = () => {
    if (loading) return <div className="loader">Cargando datos...</div>;

    if (!profileDetails) return <p>No se encontraron datos del perfil.</p>;

    switch (activeTab) {
      case 'profile':
        return (
          <div className="profile-section">
            <div className="profile-header">
              <div className="profile-pic">
                {profilePic ? (
                  <img src={profilePic} alt="Profile" />
                ) : (
                  <img src={profileDetails.photo} alt="Profile" />
                )}
                <input type="file" accept="image/*" onChange={handleProfilePicChange} />
              </div>
              <div className="info">
                <h2>{profileDetails.name}</h2>
                <p><strong>Email:</strong> {profileDetails.email}</p>
                <p><strong>Teléfono:</strong> {profileDetails.phone}</p>
                <p><strong>Universidad:</strong> {profileDetails.university}</p>
                <p><strong>ID:</strong> {profileDetails.studentID}</p>
                <p><strong>Facultad:</strong> {profileDetails.faculty}</p>
                <p><strong>Disponibilidad:</strong> {profileDetails.availability}</p>
                <p><strong>Biografía:</strong> {profileDetails.bio}</p>
              </div>
            </div>
          </div>
        );

      case 'portfolio':
        return (
          <div className="portfolio-grid">
            {portfolioItems.map((item) => (
              <div className="portfolio-card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        );

      case 'settings':
        return (
          <div className="settings-section">
            <form onSubmit={handleSaveProfile}>
              <label>Teléfono:</label>
              <input name="phone" value={profileDetails.phone} onChange={handleInputChange} />
              <label>Biografía:</label>
              <textarea name="bio" value={profileDetails.bio} onChange={handleInputChange} />
              <label>Disponibilidad:</label>
              <select name="availability" value={profileDetails.availability} onChange={handleInputChange}>
                <option value="Disponible">Disponible</option>
                <option value="No Disponible">No Disponible</option>
              </select>
              <button type="submit">Guardar Cambios</button>
            </form>
            <div className="payment-section">
              <h3>Métodos de Pago</h3>
              <ul>
                {paymentMethods.map((pm) => (
                  <li key={pm.id}><strong>{pm.method}:</strong> {pm.details}</li>
                ))}
              </ul>
            </div>
            <div className="contract-section">
              <button onClick={() => alert('Mostrando contrato...')}>Ver Contrato</button>
            </div>
            <div className="delete-section">
              <button className="danger" onClick={handleDeleteAccount}>Eliminar Cuenta</button>
            </div>
          </div>
        );

      case 'achievements':
        return (
          <div className="achievements-section">
            <h3>Logros y Reconocimientos</h3>
            <ul>
              {achievements.map((a) => (
                <li key={a.id}>
                  <h4>{a.title}</h4>
                  <p>{a.description}</p>
                </li>
              ))}
            </ul>
          </div>
        );

      case 'support':
        return (
          <div className="support-section">
            <h3>Soporte y Ayuda</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Mensaje enviado'); }}>
              <textarea placeholder="¿En qué podemos ayudarte?" required />
              <button type="submit">Enviar</button>
            </form>
          </div>
        );

      default:
        return <p>Selecciona una sección</p>;
    }
  };

  return (
    <div className="freelancer-profile">
      <FreelancerMenu />
      <div className="profile-container">
        <div className="tabs">
          <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>Mi Perfil</button>
          <button className={activeTab === 'portfolio' ? 'active' : ''} onClick={() => setActiveTab('portfolio')}>Portafolio</button>
          <button className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>Ajustes</button>
          <button className={activeTab === 'achievements' ? 'active' : ''} onClick={() => setActiveTab('achievements')}>Logros</button>
          <button className={activeTab === 'support' ? 'active' : ''} onClick={() => setActiveTab('support')}>Soporte</button>
        </div>
        <div className="tab-content-wrapper">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default FreelancerProfile;