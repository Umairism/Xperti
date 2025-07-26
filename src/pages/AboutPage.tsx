import React from 'react';
import { Target, Eye, Users, Award, Calendar, MapPin } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To provide cutting-edge medical equipment solutions that enhance healthcare delivery and improve patient outcomes worldwide.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be the leading global provider of advanced medical equipment, setting new standards in healthcare technology.'
    },
    {
      icon: Users,
      title: 'Values',
      description: 'Excellence, Innovation, Integrity, and Customer-centricity drive everything we do in serving the healthcare community.'
    }
  ];

  const milestones = [
    { year: '2008', event: 'Company founded with focus on medical equipment sales' },
    { year: '2012', event: 'Expanded to include maintenance and repair services' },
    { year: '2016', event: 'Achieved ISO 13485 certification for medical devices' },
    { year: '2020', event: 'Launched digital transformation initiative' },
    { year: '2024', event: 'Serving 500+ healthcare facilities globally' }
  ];

  return (
    <div className="space-y-16 py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Xpert i</span> Enterprises
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          For over 15 years, we have been at the forefront of medical equipment innovation, 
          providing healthcare facilities with the tools they need to deliver exceptional patient care.
        </p>
      </section>

      {/* Mission, Vision, Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map(({ icon: Icon, title, description }, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed">
                  Founded in 2008, Xpert i Enterprises began as a small team of medical equipment 
                  specialists with a vision to revolutionize healthcare technology access. Our journey 
                  started with a simple belief: every healthcare facility deserves access to the most 
                  advanced medical equipment available.
                </p>
                <p className="leading-relaxed">
                  Over the years, we've grown from a local distributor to a global leader in medical 
                  equipment solutions. Our commitment to excellence has earned us partnerships with 
                  leading manufacturers and the trust of healthcare providers worldwide.
                </p>
                <p className="leading-relaxed">
                  Today, we continue to push boundaries, embracing new technologies and expanding 
                  our services to meet the evolving needs of modern healthcare.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Milestones</h4>
              <div className="space-y-6">
                {milestones.map(({ year, event }, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{year}</div>
                      <p className="text-gray-600 dark:text-gray-300">{event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Leadership Team
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Meet the experts driving innovation in medical equipment technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Dr. Sarah Johnson', role: 'Chief Executive Officer', experience: '20+ years in medical technology' },
            { name: 'Michael Chen', role: 'Chief Technology Officer', experience: '15+ years in biomedical engineering' },
            { name: 'Dr. Robert Williams', role: 'Head of Clinical Solutions', experience: '18+ years in healthcare innovation' }
          ].map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h4>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300">{member.experience}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Certifications & Awards
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'ISO 13485 Certified',
              'FDA Registered',
              'CE Marking Compliant',
              'Excellence Award 2023'
            ].map((cert, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <p className="font-semibold text-gray-900 dark:text-white">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;