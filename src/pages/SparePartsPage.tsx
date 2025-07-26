import React, { useState } from 'react';
import { Wrench, Clock, Shield, Phone, CheckCircle, AlertCircle, Hammer } from 'lucide-react';

const SparePartsPage = () => {
  const [selectedService, setSelectedService] = useState('maintenance');

  const services = [
    {
      id: 'maintenance',
      title: 'Preventive Maintenance',
      icon: Wrench,
      description: 'Regular maintenance schedules to keep your equipment running at peak performance.',
      features: [
        'Scheduled maintenance visits',
        'Performance optimization',
        'Preventive part replacement',
        'Detailed maintenance reports'
      ]
    },
    {
      id: 'repair',
      title: 'Emergency Repairs',
      icon: Hammer,
      description: '24/7 emergency repair services to minimize downtime and ensure continuous operation.',
      features: [
        '24/7 emergency response',
        'Certified technicians',
        'Genuine spare parts',
        'Quick turnaround time'
      ]
    },
    {
      id: 'parts',
      title: 'Genuine Spare Parts',
      icon: Shield,
      description: 'Authentic spare parts from original manufacturers with full warranty coverage.',
      features: [
        'OEM parts guarantee',
        'Quality assurance',
        'Global sourcing network',
        'Competitive pricing'
      ]
    }
  ];

  const responseTime = [
    { urgency: 'Critical', time: '< 4 hours', color: 'red' },
    { urgency: 'High', time: '< 8 hours', color: 'orange' },
    { urgency: 'Medium', time: '< 24 hours', color: 'yellow' },
    { urgency: 'Low', time: '< 48 hours', color: 'green' }
  ];

  const maintenancePackages = [
    {
      name: 'Basic Care',
      price: '$299/month',
      features: [
        'Quarterly maintenance visits',
        'Basic performance checks',
        'Minor adjustments',
        'Email support'
      ]
    },
    {
      name: 'Premium Care',
      price: '$599/month',
      features: [
        'Monthly maintenance visits',
        'Comprehensive diagnostics',
        'Preventive part replacement',
        'Priority phone support',
        '20% discount on repairs'
      ],
      popular: true
    },
    {
      name: 'Enterprise Care',
      price: '$999/month',
      features: [
        'Bi-weekly maintenance visits',
        'Advanced diagnostics',
        'Predictive maintenance',
        '24/7 dedicated support',
        '30% discount on parts',
        'Loaner equipment available'
      ]
    }
  ];

  return (
    <div className="space-y-16 py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Spare Parts & Services
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Professional maintenance, repair services, and genuine spare parts to keep 
          your medical equipment operating at peak performance.
        </p>
      </section>

      {/* Service Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`cursor-pointer rounded-xl p-8 transition-all duration-300 transform hover:-translate-y-2 ${
                  selectedService === service.id
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-xl'
                    : 'bg-white dark:bg-gray-800 hover:shadow-lg'
                }`}
              >
                <Icon className={`h-12 w-12 mb-6 ${
                  selectedService === service.id ? 'text-white' : 'text-blue-600'
                }`} />
                <h3 className={`text-2xl font-bold mb-4 ${
                  selectedService === service.id ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}>
                  {service.title}
                </h3>
                <p className={`mb-6 ${
                  selectedService === service.id ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'
                }`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className={`h-5 w-5 ${
                        selectedService === service.id ? 'text-blue-200' : 'text-green-500'
                      }`} />
                      <span className={selectedService === service.id ? 'text-blue-100' : 'text-gray-700 dark:text-gray-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Response Times */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Emergency Response Times
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Fast response times based on urgency level
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {responseTime.map(({ urgency, time, color }, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  color === 'red' ? 'bg-red-100 dark:bg-red-900' :
                  color === 'orange' ? 'bg-orange-100 dark:bg-orange-900' :
                  color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900' :
                  'bg-green-100 dark:bg-green-900'
                }`}>
                  <AlertCircle className={`h-8 w-8 ${
                    color === 'red' ? 'text-red-600' :
                    color === 'orange' ? 'text-orange-600' :
                    color === 'yellow' ? 'text-yellow-600' :
                    'text-green-600'
                  }`} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{urgency}</h4>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Maintenance Packages
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Choose the perfect maintenance plan for your facility
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {maintenancePackages.map((pkg, index) => (
            <div key={index} className={`relative rounded-xl p-8 ${
              pkg.popular 
                ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-xl transform scale-105' 
                : 'bg-white dark:bg-gray-800 shadow-lg'
            }`}>
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-500 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h4 className={`text-2xl font-bold mb-4 ${
                  pkg.popular ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}>
                  {pkg.name}
                </h4>
                <div className={`text-4xl font-bold ${
                  pkg.popular ? 'text-white' : 'text-blue-600'
                }`}>
                  {pkg.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center space-x-3">
                    <CheckCircle className={`h-5 w-5 ${
                      pkg.popular ? 'text-blue-200' : 'text-green-500'
                    }`} />
                    <span className={pkg.popular ? 'text-blue-100' : 'text-gray-700 dark:text-gray-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                pkg.popular
                  ? 'bg-white text-blue-600 hover:bg-gray-100'
                  : 'bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:shadow-lg'
              }`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-red-50 dark:bg-red-900/20 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Phone className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            24/7 Emergency Support
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Equipment failure? Need immediate assistance? Our emergency response team is available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold">
              <Phone className="h-5 w-5" />
              <span>Emergency: +1 (555) 911-HELP</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
              <Clock className="h-5 w-5" />
              <span>Available 24/7</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SparePartsPage;