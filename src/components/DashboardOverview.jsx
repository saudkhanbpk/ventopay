// DashboardOverview.jsx
import React from 'react';

const DashboardOverview = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      <p>Welcome to the Piena Admin Dashboard. Use the sidebar to navigate through the different sections.</p>
      <div className="mt-4">
        <p>Quick metrics can go here, like recent activity or summary data.</p>
      </div>
    </div>
  );
};

export default DashboardOverview;
