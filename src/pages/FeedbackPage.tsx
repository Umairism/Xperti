import React, { useState } from 'react';
import { Star, Quote, ThumbsUp, MessageCircle, Award, TrendingUp } from 'lucide-react';

const FeedbackPage = () => {
  const [selectedRating, setSelectedRating] = useState('all');

  const testimonials = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      position: 'Chief of Radiology',
      hospital: 'Metropolitan Medical Center',
      rating: 5,
      date: '2024-03-15',
      comment: 'Exceptional service and top-quality equipment. The CT scanner installation was flawless, and the training provided was comprehensive. Our diagnostic capabilities have improved significantly.',
      avatar: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=100',
      equipment: 'CT Scanner Elite 128'
    },
    {
      id: 2,
      name: 'Mark Rodriguez',
      position: 'Hospital Administrator',
      hospital: 'St. Vincent\'s Hospital',
      rating: 5,
      date: '2024-03-08',
      comment: 'Outstanding support throughout the entire process. From initial consultation to final installation, Xpert i exceeded our expectations. The ultrasound equipment is state-of-the-art.',
      avatar: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=100',
      equipment: 'UltraSound Pro 5000'
    },
    {
      id: 3,
      name: 'Dr. Emily Chen',
      position: 'Emergency Department Director',
      hospital: 'Regional Medical Center',
      rating: 4,
      date: '2024-02-28',
      comment: 'The mobile X-ray unit has been a game-changer for our emergency department. Quick installation, excellent image quality, and responsive customer support.',
      avatar: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=100',
      equipment: 'Mobile X-Ray MX-100'
    },
    {
      id: 4,
      name: 'Robert Wilson',
      position: 'Biomedical Engineer',
      hospital: 'University Medical Center',
      rating: 5,
      date: '2024-02-20',
      comment: 'Professional installation team and excellent technical support. The digital X-ray system integration was seamless. Highly recommend Xpert i for medical equipment needs.',
      avatar: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=100',
      equipment: 'Digital X-Ray DX-2000'
    },
    {
      id: 5,
      name: 'Dr. Maria Gonzalez',
      position: 'Head of Imaging',
      hospital: 'Children\'s Hospital',
      rating: 5,
      date: '2024-02-10',
      comment: 'The pediatric ultrasound equipment is perfect for our young patients. Child-friendly design and exceptional image quality. The staff training was thorough and well-structured.',
      avatar: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=100',
      equipment: 'Portable Ultrasound U-Mini'
    },
    {
      id: 6,
      name: 'James Thompson',
      position: 'IT Director',
      hospital: 'City General Hospital',
      rating: 4,
      date: '2024-01-25',
      comment: 'Smooth PACS integration and excellent system compatibility. The technical team was knowledgeable and provided great support during the implementation phase.',
      avatar: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=100',
      equipment: 'CT Scanner Compact 64'
    }
  ];

  const stats = [
    { icon: Star, value: '4.8/5', label: 'Average Rating' },
    { icon: ThumbsUp, value: '95%', label: 'Customer Satisfaction' },
    { icon: MessageCircle, value: '500+', label: 'Reviews Collected' },
    { icon: Award, value: '98%', label: 'Recommendation Rate' }
  ];

  const ratingFilters = [
    { id: 'all', label: 'All Reviews', count: testimonials.length },
    { id: '5', label: '5 Stars', count: testimonials.filter(t => t.rating === 5).length },
    { id: '4', label: '4 Stars', count: testimonials.filter(t => t.rating === 4).length },
    { id: '3', label: '3 Stars', count: testimonials.filter(t => t.rating === 3).length }
  ];

  const filteredTestimonials = selectedRating === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.rating === parseInt(selectedRating));

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="space-y-16 py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Customer Feedback
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Hear what healthcare professionals say about our equipment and services. 
          Your success is our success, and we're proud of the relationships we've built.
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

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {ratingFilters.map(({ id, label, count }) => (
            <button
              key={id}
              onClick={() => setSelectedRating(id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                selectedRating === id
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <span>{label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                selectedRating === id ? 'bg-white/20' : 'bg-gray-300 dark:bg-gray-600'
              }`}>
                {count}
              </span>
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {testimonial.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {testimonial.hospital}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex space-x-1 mb-2">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {new Date(testimonial.date).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-200 dark:text-blue-700" />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed pl-6 mb-4">
                  "{testimonial.comment}"
                </p>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Equipment:</span>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {testimonial.equipment}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-green-600">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm font-semibold">Verified Purchase</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review Trends */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Review Trends
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our customer satisfaction continues to improve
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center">
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Customer Satisfaction
              </h4>
              <p className="text-green-600 font-semibold text-lg">↑ 8% this quarter</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Compared to previous quarter
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Average Rating
              </h4>
              <p className="text-yellow-600 font-semibold text-lg">4.8/5.0</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Based on 500+ reviews
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Recommendation Rate
              </h4>
              <p className="text-blue-600 font-semibold text-lg">98%</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Would recommend to others
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Share Your Experience
          </h3>
          <p className="text-lg text-blue-100 mb-8">
            Help other healthcare professionals by sharing your experience with our equipment and services.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
            Leave a Review
          </button>
        </div>
      </section>
    </div>
  );
};

export default FeedbackPage;