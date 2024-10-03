import Navbar from "./Navbar";

import {
  ChevronRight,
  Smartphone,
  ShoppingCart,
  DollarSign,
} from "lucide-react";
import myImage from "../assets/temp.jpeg";

const Footer = () => (
  <footer className="py-8 bg-gray-800 text-white text-center">
    <p>&copy; 2024 Hotel App. All rights reserved.</p>
  </footer>
);

const Feature = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const PienaLandingPage = () => (
  <div className="min-h-screen min-w-full flex justify-center relative overflow-hidden flex-col">
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <main>
        <section className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Revolutionize Hotel Tipping and Billing with Our App
          </h2>
          <p className="text-xl mb-8">
            Effortlessly manage tipping, meal costs, and POS all in one place
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </a>
            <a
              href="#"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold border border-blue-600 hover:bg-blue-50 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </section>

        <section id="features" className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Feature
                icon={<DollarSign size={48} className="text-blue-600" />}
                title="Tipping Made Easy"
                description="Distribute tips fairly among staff directly from the app."
              />
              <Feature
                icon={<ShoppingCart size={48} className="text-blue-600" />}
                title="Meal Cost Distribution"
                description="Seamlessly calculate and split meal costs for guests."
              />
              <Feature
                icon={<Smartphone size={48} className="text-blue-600" />}
                title="Mobile and Web Integration"
                description="Access the system on mobile and web platforms with ease."
              />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">How It Works</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src={myImage}
                  alt="POS Dashboard"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-600" />
                    <span>Manage tipping distribution among staff.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-600" />
                    <span>Track meal costs and ensure accurate billing.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-600" />
                    <span>
                      Use our POS system to manage transactions efficiently.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Streamline Your Hotel Operations?
            </h2>
            <p className="text-xl mb-8">
              Get started with our all-in-one hotel management solution.
            </p>
            <a
              href="#"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
            >
              Get Started Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  </div>
);

export default PienaLandingPage;
