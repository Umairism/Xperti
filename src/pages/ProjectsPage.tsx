import React, { useState } from 'react';
import { Building, Calendar, MapPin, Users, CheckCircle, Clock, ArrowRight } from 'lucide-react';

const ProjectsPage = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'St. Mary\'s Hospital CT Scanner Installation',
      client: 'St. Mary\'s Medical Center',
      location: 'New York, NY',
      status: 'completed',
      startDate: '2024-01-15',
      endDate: '2024-03-20',
      team: 8,
      equipment: ['CT Scanner Elite 128', 'Installation Package', 'Training Program'],
      description: 'Complete installation of advanced 128-slice CT scanner with comprehensive staff training.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
      progress: 100
    },
    {
      id: 2,
      title: 'Metro General Ultrasound Department Upgrade',
      client: 'Metro General Hospital',
      location: 'Los Angeles, CA',
      status: 'ongoing',
      startDate: '2024-02-01',
      endDate: '2024-05-30',
      team: 6,
      equipment: ['UltraSound Pro 5000', 'Portable Ultrasound U-Mini', 'PACS Integration'],
      description: 'Modernization of ultrasound department with latest imaging technology.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
      progress: 65
    },
    {
      id: 3,
      title: 'Regional Medical Center X-Ray Modernization',
      client: 'Regional Medical Center',
      location: 'Chicago, IL',
      status: 'upcoming',
      startDate: '2024-04-15',
      endDate: '2024-07-10',
      team: 5,
      equipment: ['Digital X-Ray DX-2000', 'Mobile X-Ray MX-100', 'Digital Radiography'],
      description: 'Complete overhaul of X-ray department with digital radiography systems.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
      progress: 0
    },
    {
      id: 4,
      title: 'Children\'s Hospital Pediatric Imaging Suite',
      client: 'Children\'s Hospital of Philadelphia',
      location: 'Philadelphia, PA',
      status: 'completed',
      startDate: '2023-09-01',
      endDate: '2023-12-15',
      team: 10,
      equipment: ['Pediatric CT Scanner', 'Child-Friendly Ultrasound', 'Specialized X-Ray'],
      description: 'Specialized pediatric imaging suite with child-friendly equipment and environment.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
      progress: 100
    },
    {
      id: 5,
      title: 'University Medical Center Equipment Upgrade',
      client: 'University Medical Center',
      location: 'Boston, MA',
      status: 'ongoing',
      startDate: '2024-01-10',
      endDate: '2024-06-20',
      team: 12,
      equipment: ['CT Scanner Compact 64', 'Multiple Ultrasound Units', 'Digital X-Ray Systems'],
      description: 'Comprehensive equipment upgrade across multiple departments.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
      progress: 45
    },
    {
      id: 6,
      title: 'Rural Health Clinic Mobile Imaging Solution',
      client: 'Mountain View Rural Clinic',
      location: 'Denver, CO',
      status: 'upcoming',
      startDate: '2024-05-01',
      endDate: '2024-06-30',
      team: 4,
      equipment: ['Mobile X-Ray MX-100', 'Portable Ultrasound', 'Mobile Workstation'],
      description: 'Mobile imaging solution for rural healthcare delivery.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
      progress: 0
    }
  ];

  const statusOptions = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'completed', label: 'Completed', count: projects.filter(p => p.status === 'completed').length },
    { id: 'ongoing', label: 'Ongoing', count: projects.filter(p => p.status === 'ongoing').length },
    { id: 'upcoming', label: 'Upcoming', count: projects.filter(p => p.status === 'upcoming').length }
  ];

  const filteredProjects = selectedStatus === 'all' 
    ? projects 
    : projects.filter(project => project.status === selectedStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300';
      case 'ongoing': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300';
      case 'upcoming': return 'text-orange-600 bg-orange-100 dark:bg-orange-900 dark:text-orange-300';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'ongoing': return Clock;
      case 'upcoming': return Calendar;
      default: return Clock;
    }
  };

  return (
    <div className="space-y-16 py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Our Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Showcasing our successful partnerships with healthcare facilities across the nation. 
          From small clinics to major hospitals, we deliver excellence every time.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {statusOptions.map(({ id, label, count }) => (
            <button
              key={id}
              onClick={() => setSelectedStatus(id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                selectedStatus === id
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <span>{label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                selectedStatus === id ? 'bg-white/20' : 'bg-gray-300 dark:bg-gray-600'
              }`}>
                {count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const StatusIcon = getStatusIcon(project.status);
            return (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 ${getStatusColor(project.status)}`}>
                      <StatusIcon className="h-3 w-3" />
                      <span className="capitalize">{project.status}</span>
                    </span>
                  </div>
                  {project.status === 'ongoing' && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
                      <div className="flex items-center justify-between text-white text-sm mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                      <Building className="h-4 w-4 text-blue-600" />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span>{project.startDate} - {project.endDate}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span>{project.team} team members</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Equipment Installed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.equipment.map((item, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Project Statistics
            </h3>
            <p className="text-lg text-blue-100">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">45</div>
              <div className="text-blue-100">Healthcare Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-blue-100">States Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Ready to Start Your Project?
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Let's discuss how we can help modernize your healthcare facility with the latest medical equipment.
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
          Start Your Project
        </button>
      </section>
    </div>
  );
};

export default ProjectsPage;