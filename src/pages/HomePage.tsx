import React from 'react';
import { Award, Users, Wrench, Globe, ArrowRight, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const stats = [
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Wrench, value: '1000+', label: 'Equipment Serviced' },
    { icon: Globe, value: '50+', label: 'Countries Served' },
  ];

  const services = [
    {
      title: 'Equipment Sales',
      description: 'Premium medical equipment from leading manufacturers worldwide.',
      features: ['Latest Technology', 'Warranty Included', 'Training Provided']
    },
    {
      title: 'Maintenance & Repair',
      description: 'Expert maintenance and repair services for all medical equipment.',
      features: ['24/7 Support', 'Certified Technicians', 'Genuine Parts']
    },
    {
      title: 'Installation Services',
      description: 'Professional installation and setup of medical equipment.',
      features: ['Expert Installation', 'Safety Compliance', 'Staff Training']
    }
  ];

  return (
    <div className="space-y-16 py-16">
      {/* Welcome Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Xpert i</span> Enterprises
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Your trusted partner in advanced medical equipment solutions. We provide cutting-edge 
          technology, expert services, and comprehensive support for healthcare facilities worldwide.
        </p>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }, index) => (
              <div key={index} className="text-center text-white">
                <Icon className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold mb-2">{value}</div>
                <div className="text-blue-100">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions for all your medical equipment needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Upgrade Your Medical Equipment?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Contact us today for a free consultation and discover how we can help improve your healthcare facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Get Free Quote
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300">
              View Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;