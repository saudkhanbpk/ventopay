import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Table } from 'antd'; // For table structure

const dashboardData = {
  totalAds: 150,
  totalRevenue: 32000,
  newAdvertisers: 5,
  newBrands: 10,
  impressions: [{ day: 'Monday', count: 12000 }, { day: 'Tuesday', count: 15000 }, { day: 'Wednesday', count: 18000 }],
  clicks: [{ day: 'Monday', count: 3000 }, { day: 'Tuesday', count: 4000 }, { day: 'Wednesday', count: 4500 }],
};

const Dashboard = () => {
  return (
    <div className="dashboard p-8">
      <h2 className="text-3xl font-bold mb-6">Administrator Dashboard</h2>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-2xl font-bold">{dashboardData.totalAds}</div>
          <div className="text-sm">Total Ads Running</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-2xl font-bold">${dashboardData.totalRevenue.toLocaleString()}</div>
          <div className="text-sm">Total Revenue</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-2xl font-bold">{dashboardData.newAdvertisers}</div>
          <div className="text-sm">Newly Registered Advertisers</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-2xl font-bold">{dashboardData.newBrands}</div>
          <div className="text-sm">Newly Registered Brands</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Impressions Over Time</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={dashboardData.impressions}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={2} name="Impressions" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Clicks Over Time</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={dashboardData.clicks}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#82ca9d" name="Clicks" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
