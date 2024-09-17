import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for ads performance
const adsData = [
    { date: '2024-01-01', impressions: 30000, clicks: 2000, conversions: 500, revenue: 10000 },
    { date: '2024-01-02', impressions: 32000, clicks: 2100, conversions: 550, revenue: 11000 },
    { date: '2024-01-03', impressions: 31000, clicks: 2200, conversions: 600, revenue: 12000 },
    { date: '2024-01-04', impressions: 30000, clicks: 2000, conversions: 500, revenue: 10000 },
    { date: '2024-01-05', impressions: 32000, clicks: 2100, conversions: 550, revenue: 11000 },
    { date: '2024-01-06', impressions: 31000, clicks: 2200, conversions: 600, revenue: 12000 },
    { date: '2024-01-07', impressions: 30000, clicks: 2000, conversions: 500, revenue: 10000 },
    { date: '2024-01-08', impressions: 32000, clicks: 2100, conversions: 550, revenue: 11000 },
    { date: '2024-01-09', impressions: 20000, clicks: 2200, conversions: 600, revenue: 12000 },
    { date: '2024-01-10', impressions: 19000, clicks: 2000, conversions: 500, revenue: 10000 },
    { date: '2024-01-11', impressions: 32000, clicks: 2100, conversions: 550, revenue: 11000 },
    { date: '2024-01-12', impressions: 10000, clicks: 2200, conversions: 600, revenue: 12000 },
    { date: '2024-01-13', impressions: 30000, clicks: 2000, conversions: 500, revenue: 10000 },
    { date: '2024-01-14', impressions: 32000, clicks: 2100, conversions: 550, revenue: 11000 },
    { date: '2024-01-15', impressions: 5000, clicks: 2200, conversions: 600, revenue: 12000 },
    { date: '2024-01-16', impressions: 30000, clicks: 2000, conversions: 500, revenue: 10000 },
    { date: '2024-01-17', impressions: 32000, clicks: 2100, conversions: 550, revenue: 11000 },
    { date: '2024-01-18', impressions: 1000, clicks: 2200, conversions: 600, revenue: 12000 },
    // Add more data points as needed
];

// Function to calculate totals from adsData
const calculateTotals = (data) => {
    return data.reduce((totals, entry) => {
        totals.impressions += entry.impressions;
        totals.clicks += entry.clicks;
        totals.conversions += entry.conversions;
        totals.revenue += entry.revenue;
        return totals;
    }, { impressions: 0, clicks: 0, conversions: 0, revenue: 0 });
};

const AdsPerformance = () => {
    // Calculate totals
    const totals = calculateTotals(adsData);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Ads Performance</h2>

            {/* Key Metrics */}
            <div className="grid gap-4 mb-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-white p-4 rounded-lg shadow">
                    <div className="text-xl font-bold">{totals.impressions.toLocaleString()}</div>
                    <div className="text-sm">Total Impressions</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <div className="text-xl font-bold">{totals.clicks.toLocaleString()}</div>
                    <div className="text-sm">Total Clicks</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <div className="text-xl font-bold">{totals.conversions.toLocaleString()}</div>
                    <div className="text-sm">Total Conversions</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <div className="text-xl font-bold">${totals.revenue.toLocaleString()}</div>
                    <div className="text-sm">Total Revenue</div>
                </div>
            </div>

            {/* Charts */}
            <div className="mb-8 flex flex-col lg:flex-row gap-8">
                <div className="flex-1 bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4">Impressions and Clicks</h3>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={adsData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                            <YAxis tick={{ fontSize: 12 }} />
                            <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '4px' }} />
                            <Legend verticalAlign="top" height={36} />
                            <Line type="monotone" dataKey="impressions" stroke="url(#impressionsGradient)" strokeWidth={3} dot={{ r: 5 }} name="Impressions" />
                            <Line type="monotone" dataKey="clicks" stroke="url(#clicksGradient)" strokeWidth={3} dot={{ r: 5 }} name="Clicks" />
                            <defs>
                                <linearGradient id="impressionsGradient" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="clicksGradient" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="flex-1 bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4">Conversions and Revenue</h3>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={adsData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="conversions" fill="#8884d8" name="Conversions" />
                            <Bar dataKey="revenue" fill="#82ca9d" name="Revenue ($)" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdsPerformance;
