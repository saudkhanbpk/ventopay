import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Complex mock data for brands management
const brandsData = [
  { brand: 'Brand A', impressions: 20000, clicks: 1500, sales: 500, revenue: 12000 },
  { brand: 'Brand B', impressions: 18000, clicks: 1700, sales: 600, revenue: 15000 },
  { brand: 'Brand C', impressions: 22000, clicks: 2000, sales: 700, revenue: 17000 },
  { brand: 'Brand D', impressions: 16000, clicks: 1300, sales: 400, revenue: 10000 },
  { brand: 'Brand E', impressions: 21000, clicks: 1800, sales: 650, revenue: 14000 },
];

// Function to calculate totals from brandsData
const calculateTotals = (data) => {
  return data.reduce((totals, entry) => {
    totals.impressions += entry.impressions;
    totals.clicks += entry.clicks;
    totals.sales += entry.sales;
    totals.revenue += entry.revenue;
    return totals;
  }, { impressions: 0, clicks: 0, sales: 0, revenue: 0 });
};

const BrandsManagement = () => {
  // Calculate totals
  const totals = calculateTotals(brandsData);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Brands Management</h2>

      {/* Key Metrics */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow flex-1 min-w-[250px]">
          <div className="text-2xl font-bold">{totals.impressions.toLocaleString()}</div>
          <div className="text-sm">Total Impressions</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex-1 min-w-[250px]">
          <div className="text-2xl font-bold">{totals.clicks.toLocaleString()}</div>
          <div className="text-sm">Total Clicks</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex-1 min-w-[250px]">
          <div className="text-2xl font-bold">{totals.sales.toLocaleString()}</div>
          <div className="text-sm">Total Sales</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex-1 min-w-[250px]">
          <div className="text-2xl font-bold">${totals.revenue.toLocaleString()}</div>
          <div className="text-sm">Total Revenue</div>
        </div>
      </div>

      {/* Charts */}
      <div className="flex flex-wrap gap-8">
        {/* Impressions and Clicks by Brand */}
        <div className="bg-white p-4 rounded-lg shadow flex-1 md:min-w-[500px]">
          <h3 className="text-xl font-semibold mb-4">Impressions and Clicks by Brand</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={brandsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="brand" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="impressions" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} name="Impressions" />
              <Line type="monotone" dataKey="clicks" stroke="#82ca9d" strokeWidth={2} activeDot={{ r: 8 }} name="Clicks" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Sales and Revenue by Brand */}
        <div className="bg-white p-4 rounded-lg shadow flex-1 md:min-w-[500px]">
          <h3 className="text-xl font-semibold mb-4">Sales and Revenue by Brand</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={brandsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="brand" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" name="Sales" />
              <Bar dataKey="revenue" fill="#82ca9d" name="Revenue ($)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BrandsManagement;
