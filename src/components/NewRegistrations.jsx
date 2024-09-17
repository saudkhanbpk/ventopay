import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for new registrations
const registrationData = [
  { day: 'Monday', newRegistrations: 50, activeUsers: 200 },
  { day: 'Tuesday', newRegistrations: 60, activeUsers: 220 },
  { day: 'Wednesday', newRegistrations: 70, activeUsers: 250 },
  { day: 'Thursday', newRegistrations: 20, activeUsers: 270 },
  { day: 'Friday', newRegistrations: 10, activeUsers: 500 },
  { day: 'Saturday', newRegistrations: 30, activeUsers: 420 },
  { day: 'Sunday', newRegistrations: 110, activeUsers: 350 },
];

const NewRegistrations = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">New Registrations</h2>

      {/* Key Metrics */}
      <div className="grid gap-4 mb-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-xl font-bold">500</div>
          <div className="text-sm">Total Registrations This Week</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-xl font-bold">2,000</div>
          <div className="text-sm">Total Active Users</div>
        </div>
      </div>

      {/* Charts */}
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        <div className="flex-1 bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Daily Registrations</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={registrationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '4px' }} />
              <Legend verticalAlign="top" height={36} />
              <Line type="monotone" dataKey="newRegistrations" stroke="#1f77b4" strokeWidth={3} dot={{ r: 5 }} name="New Registrations" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex-1 bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Active Users</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={registrationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '4px' }} />
              <Legend />
              <Bar dataKey="activeUsers" fill="#2ca02c" name="Active Users" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default NewRegistrations;
