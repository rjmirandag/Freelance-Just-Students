// src/views/freelancer/FreelancerDashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FreelancerMenu from './FreelancerMenu';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './FreelancerDashboard.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const FreelancerDashboard = () => {
  const navigate = useNavigate();
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  // Datos dummy de fallback
  const dummy = {
    activeProjects: 5,
    sentProposals: 12,
    notifications: 3,
    earnings: 0,
    monthlyEarnings: [
      { month: 'Ene', value: 0 },
      { month: 'Feb', value: 0 },
      { month: 'Mar', value: 0 },
      { month: 'Abr', value: 0 },
      { month: 'May', value: 0 },
      { month: 'Jun', value: 0 }
    ],
    opportunities: [
      { title: 'Proyecto de Desarrollo Web', description: 'Crea una app React con APIs REST.' },
      { title: 'Diseño UX/UI para App Móvil', description: 'Rediseña una app con enfoque en experiencia de usuario.' }
    ]
  };

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const res = await fetch('/api/freelancer/dashboard');
        if (!res.ok) throw new Error('No disponible');
        const data = await res.json();
        setMetrics(data);
      } catch {
        setMetrics(dummy);
      } finally {
        setLoading(false);
      }
    };
    fetchMetrics();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-wrapper">
        <FreelancerMenu />
        <div className="loading">Cargando dashboard...</div>
      </div>
    );
  }

  // Datos para el gráfico
  const chartData = {
    labels: metrics.monthlyEarnings.map(m => m.month),
    datasets: [
      {
        label: 'Ganancias Mensuales',
        data: metrics.monthlyEarnings.map(m => m.value),
        borderColor: '#3498db',
        backgroundColor: 'rgba(52,152,219,0.2)',
        tension: 0.4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { position: 'top' } },
    scales: { y: { beginAtZero: true } }
  };

  return (
    <div className="dashboard-wrapper">
      <FreelancerMenu />
      <div className="dashboard-body">
        <div className="metrics-grid">
          <div className="metric-card" onClick={() => navigate('/dashboard/freelancer/projects')}>
            <h4>Proyectos Activos</h4>
            <p>{metrics.activeProjects}</p>
          </div>
          <div className="metric-card" onClick={() => navigate('/dashboard/freelancer/proposals')}>
            <h4>Propuestas Enviadas</h4>
            <p>{metrics.sentProposals}</p>
          </div>
          <div className="metric-card" onClick={() => navigate('/dashboard/freelancer/notifications')}>
            <h4>Notificaciones</h4>
            <p>{metrics.notifications}</p>
          </div>
          <div className="metric-card" onClick={() => navigate('/dashboard/freelancer/earnings')}>
            <h4>Ganancias Totales</h4>
            <p>${metrics.earnings}</p>
          </div>
        </div>
        <section className="dashboard-panel chart-panel">
          <h3>📈 Progreso de Ganancias</h3>
          <Line data={chartData} options={chartOptions} redraw />
        </section>
        <section className="dashboard-panel opportunities-panel">
          <h3>💼 Oportunidades Recomendadas</h3>
          <ul>
            {metrics.opportunities.map((o, i) => (
              <li key={i} onClick={() => navigate('/dashboard/freelancer/projects')}>
                <strong>{o.title}</strong>
                <p>{o.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default FreelancerDashboard;