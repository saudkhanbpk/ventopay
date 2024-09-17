// PienaAdminDashboard.jsx
import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';  // Outlet will render the nested routes

const PienaAdminDashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100 overflow-auto">
        {/* Example Data Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Total Users</h3>
              <p className="text-3xl font-bold">1,234</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Active Campaigns</h3>
              <p className="text-3xl font-bold">56</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Monthly Revenue</h3>
              <p className="text-3xl font-bold">$45,678</p>
            </div>
          </div>
        </section>

        {/* Outlet for nested routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default PienaAdminDashboard;



// import React from 'react';
// import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// // Mock data for charts
// const performanceData = [
//   { name: 'Jan', ads: 4000, revenue: 2400 },
//   { name: 'Feb', ads: 3000, revenue: 1398 },
//   { name: 'Mar', ads: 2000, revenue: 9800 },
//   { name: 'Apr', ads: 2780, revenue: 3908 },
//   { name: 'May', ads: 1890, revenue: 4800 },
//   { name: 'Jun', ads: 2390, revenue: 3800 },
// ];

// const registrationData = [
//   { name: 'Mon', advertisers: 3, brands: 5 },
//   { name: 'Tue', advertisers: 2, brands: 3 },
//   { name: 'Wed', advertisers: 4, brands: 6 },
//   { name: 'Thu', advertisers: 1, brands: 2 },
//   { name: 'Fri', advertisers: 5, brands: 4 },
//   { name: 'Sat', advertisers: 2, brands: 3 },
//   { name: 'Sun', advertisers: 3, brands: 1 },
// ];

// const PienaAdminDashboard = () => {
//   return (
//     <div className="space-y-4 p-8">
//       <h1 className="text-3xl font-bold mb-6">PIENA CRM/CMS Administrator Dashboard</h1>
      
//       {/* Key Metrics */}
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//         <div className="bg-white p-4 rounded-lg shadow">
//           <div className="flex flex-row items-center justify-between pb-2">
//             <h2 className="text-sm font-medium">Total Ads Running</h2>
//           </div>
//           <div className="text-2xl font-bold">1,234</div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow">
//           <div className="flex flex-row items-center justify-between pb-2">
//             <h2 className="text-sm font-medium">Total Revenue</h2>
//           </div>
//           <div className="text-2xl font-bold">$456,789</div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow">
//           <div className="flex flex-row items-center justify-between pb-2">
//             <h2 className="text-sm font-medium">New Advertisers (This Week)</h2>
//           </div>
//           <div className="text-2xl font-bold">23</div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow">
//           <div className="flex flex-row items-center justify-between pb-2">
//             <h2 className="text-sm font-medium">New Brands (This Week)</h2>
//           </div>
//           <div className="text-2xl font-bold">45</div>
//         </div>
//       </div>

//       {/* Charts */}
//       <div className="grid gap-4 md:grid-cols-2">
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h2 className="text-lg font-semibold">Ad Performance & Revenue</h2>
//           <div className="mt-4">
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={performanceData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
//                 <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
//                 <Tooltip />
//                 <Legend />
//                 <Bar yAxisId="left" dataKey="ads" fill="#8884d8" name="Total Ads" />
//                 <Bar yAxisId="right" dataKey="revenue" fill="#82ca9d" name="Revenue ($)" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h2 className="text-lg font-semibold">New Registrations</h2>
//           <div className="mt-4">
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={registrationData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="advertisers" stroke="#8884d8" name="New Advertisers" />
//                 <Line type="monotone" dataKey="brands" stroke="#82ca9d" name="New Brands" />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>

//       {/* Quick Access Links */}
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h2 className="text-lg font-semibold">Quick Access</h2>
//           <ul className="mt-4 space-y-2">
//             <li><a href="#" className="text-blue-600 hover:underline">Advertisers Status</a></li>
//             <li><a href="#" className="text-blue-600 hover:underline">Advertiser Management</a></li>
//             <li><a href="#" className="text-blue-600 hover:underline">Brand Management</a></li>
//             <li><a href="#" className="text-blue-600 hover:underline">Team Members</a></li>
//             <li><a href="#" className="text-blue-600 hover:underline">Media Reviews</a></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PienaAdminDashboard;
