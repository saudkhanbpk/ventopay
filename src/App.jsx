import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PienaLandingPage from './components/PienaLandingPage';
import PienaAdminDashboard from './components/PienaAdminDashboard';
import AdsPerformance from './components/AdsPerformance';
import DashboardOverview from './components/DashboardOverview';
import BrandsManagement from './components/BrandsManagement';
import AdvertisersManagement from './components/AdvertisersManagement';
import NewRegistrations from './components/NewRegistrations';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<PienaLandingPage />} />
        <Route path="/dash" element={<Dashboard />} />
        
        <Route path="/dashboard" element={<PienaAdminDashboard />}>
          {/* Nested routes under the /dashboard path */}
          <Route path="overview" element={<DashboardOverview />} />
          <Route path="ads-performance" element={<AdsPerformance />} />
          <Route path="registrations" element={<NewRegistrations />} />
          <Route path="advertisers" element={<AdvertisersManagement />} />
          <Route path="brands" element={<BrandsManagement />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
