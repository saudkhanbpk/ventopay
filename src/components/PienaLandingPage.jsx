import React from 'react';
import { ChevronRight, MonitorPlay, BarChart3, Users, Briefcase, ShoppingBag } from 'lucide-react';
import Footer from './Footer';
const Feature = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
    {icon}
    <h3 className="mt-4 text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-gray-600 text-center">{description}</p>
  </div>
);

const PienaLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Revolutionize Your Advertising with Transparent LED Screens</h2>
          <p className="text-xl mb-8">Connect advertisers and brands through a powerful marketplace for premium ad space</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">Get Started</a>
            <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold border border-blue-600 hover:bg-blue-50 transition duration-300">Learn More</a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Feature 
                icon={<MonitorPlay size={48} className="text-blue-600" />}
                title="Transparent LED Screens"
                description="High-impact advertising with cutting-edge transparent LED technology"
              />
              <Feature 
                icon={<BarChart3 size={48} className="text-blue-600" />}
                title="Performance Analytics"
                description="Detailed insights and reports on ad performance and revenue"
              />
              <Feature 
                icon={<Users size={48} className="text-blue-600" />}
                title="User Management"
                description="Efficient team collaboration with customizable access levels"
              />
            </div>
          </div>
        </section>

        {/* Advertisers Section */}
        <section id="advertisers" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">For Advertisers</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="/api/placeholder/600/400" alt="Advertiser Dashboard" className="rounded-lg shadow-md" />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-600" />
                    <span>Manage ad slots and pricing</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-600" />
                    <span>Monitor ad performance and revenue</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-600" />
                    <span>Track bids and manage deals with brands</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section id="brands" className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">For Brands</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 order-2 md:order-1">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-600" />
                    <span>Browse and bid on premium ad slots</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-600" />
                    <span>Upload and manage ad content</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-600" />
                    <span>Access performance reports and analytics</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
                <img src="/api/placeholder/600/400" alt="Brand Dashboard" className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Advertising?</h2>
            <p className="text-xl mb-8">Join PIENA CRM/CMS today and unlock the power of transparent LED advertising</p>
            <a href="#" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">Get Started Now</a>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
};

export default PienaLandingPage;
