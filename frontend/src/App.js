// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegisterPage from './components/RegisterPage';
import FreelancerLogin from './components/logins/FreelancerLogin';
import RequesterLogin from './components/logins/RequesterLogin';
import FreelancerDashboard from './views/freelancer/FreelancerDashboard';
import RequesterDashboard from './views/requester/RequesterDashboard';
import FreelancerProjects from './views/freelancer/FreelancerProjects';
import FreelancerMessages from './views/freelancer/FreelancerMessages';
import FreelancerProfile from './views/freelancer/FreelancerProfile';
import FreelancerProjectDetails from './views/freelancer/FreelancerProjectDetails';
import FreelancerActiveProjectDetails from './views/freelancer/FreelancerActiveProjectDetails';
import CreateNewRequest from "./views/requester/CreateNewRequest";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login/freelancer" element={<FreelancerLogin />} />
        <Route path="/login/requester" element={<RequesterLogin />} />

        <Route path="/dashboard/freelancer" element={<FreelancerDashboard />} />
        <Route path="/dashboard/freelancer/projects" element={<FreelancerProjects />} />
        <Route path="/dashboard/freelancer/project-details/:id" element={<FreelancerProjectDetails />} />
        <Route path="/dashboard/freelancer/active-project-details/:id" element={<FreelancerActiveProjectDetails />} />
      
        <Route path="/dashboard/freelancer/messages" element={<FreelancerMessages />} />
        <Route path="/dashboard/freelancer/profile" element={<FreelancerProfile />} />
         <Route path="/dashboard/requester/new-request" element={<CreateNewRequest />} />

        <Route path="/dashboard/requester" element={<RequesterDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;