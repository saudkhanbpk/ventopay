import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for advertisers management
const advertisersData = [
  { month: 'Jan', activeAdvertisers: 150, newAdvertisers: 20, revenue: 30000 },
  { month: 'Feb', activeAdvertisers: 160, newAdvertisers: 25, revenue: 32000 },
  { month: 'Mar', activeAdvertisers: 170, newAdvertisers: 30, revenue: 35000 },
  { month: 'Apr', activeAdvertisers: 150, newAdvertisers: 20, revenue: 10000 },
  { month: 'May', activeAdvertisers: 160, newAdvertisers: 25, revenue: 20000 },
  { month: 'Jun', activeAdvertisers: 170, newAdvertisers: 30, revenue: 15000 },
  { month: 'Jul', activeAdvertisers: 150, newAdvertisers: 20, revenue: 16000 },
  { month: 'Aug', activeAdvertisers: 160, newAdvertisers: 25, revenue: 2000 },
  { month: 'Sep', activeAdvertisers: 170, newAdvertisers: 30, revenue: 6000 },
  { month: 'Oct', activeAdvertisers: 150, newAdvertisers: 20, revenue: 9000 },
  { month: 'Nov', activeAdvertisers: 160, newAdvertisers: 25, revenue: 12000 },
  { month: 'Dec', activeAdvertisers: 170, newAdvertisers: 30, revenue: 50000 },
  // Add more data points as needed
];

// Function to calculate totals from advertisersData
const calculateTotals = (data) => {
  const lastMonthData = data[data.length - 1]; // assuming the last entry is for the current month
  return data.reduce((totals, entry) => {
    totals.activeAdvertisers = entry.activeAdvertisers; // last month's active advertisers
    totals.newAdvertisers = lastMonthData.newAdvertisers; // new advertisers for the current month
    totals.revenue += entry.revenue;
    return totals;
  }, { activeAdvertisers: 0, newAdvertisers: 0, revenue: 0 });
};

const AdvertisersManagement = () => {
  // Calculate totals
  const totals = calculateTotals(advertisersData);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Advertisers Management</h2>

      {/* Key Metrics */}
      <div className="grid gap-4 mb-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-xl font-bold">{totals.activeAdvertisers.toLocaleString()}</div>
          <div className="text-sm">Active Advertisers</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-xl font-bold">{totals.newAdvertisers.toLocaleString()}</div>
          <div className="text-sm">New Advertisers This Month</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-xl font-bold">${totals.revenue.toLocaleString()}</div>
          <div className="text-sm">Total Revenue</div>
        </div>
      </div>

      {/* Charts */}
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        <div className="flex-1 bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Advertisers Growth</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={advertisersData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '4px' }} />
              <Legend verticalAlign="top" height={36} />
              <Line type="monotone" dataKey="activeAdvertisers" stroke="#1f77b4" strokeWidth={3} dot={{ r: 5 }} name="Active Advertisers" />
              <Line type="monotone" dataKey="newAdvertisers" stroke="#ff7f0e" strokeWidth={3} dot={{ r: 5 }} name="New Advertisers" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex-1 bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Revenue</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={advertisersData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '4px' }} />
              <Legend />
              <Bar dataKey="revenue" fill="#2ca02c" name="Revenue ($)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdvertisersManagement;
