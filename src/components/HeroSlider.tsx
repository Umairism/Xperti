import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Stethoscope, MonitorSpeaker, Zap } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Advanced Ultrasound Technology",
      subtitle: "Precision Imaging for Better Diagnostics",
      description: "State-of-the-art ultrasound machines with crystal-clear imaging capabilities for accurate medical diagnostics.",
      icon: Stethoscope,
      gradient: "from-blue-600 to-teal-600"
    },
    {
      title: "CT Scan Excellence",
      subtitle: "High-Resolution Medical Imaging",
      description: "Premium CT scan equipment delivering exceptional image quality for comprehensive patient care.",
      icon: MonitorSpeaker,
      gradient: "from-teal-600 to-cyan-600"
    },
    {
      title: "Digital X-Ray Solutions",
      subtitle: "Fast & Accurate Radiography",
      description: "Modern digital X-ray systems providing instant, high-quality images with reduced radiation exposure.",
      icon: Zap,
      gradient: "from-cyan-600 to-blue-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden">
      {slides.map((slide, index) => {
        const Icon = slide.icon;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentSlide ? 'transform translate-x-0' : 
              index < currentSlide ? 'transform -translate-x-full' : 
              'transform translate-x-full'
            }`}
          >
            <div className={`h-full bg-gradient-to-r ${slide.gradient} flex items-center justify-center relative overflow-hidden`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full animate-pulse delay-500"></div>
              </div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
                <div className="mb-6">
                  <Icon className="h-16 w-16 mx-auto mb-4 animate-bounce" />
                </div>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl mb-6 opacity-95">
                  {slide.subtitle}
                </p>
                <p className="text-lg max-w-3xl mx-auto leading-relaxed opacity-90">
                  {slide.description}
                </p>
                <button className="mt-8 px-8 py-3 bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;