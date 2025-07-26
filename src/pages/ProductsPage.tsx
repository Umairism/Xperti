import React, { useState } from 'react';
import { MonitorSpeaker, Stethoscope, Zap, Search, Filter, Star } from 'lucide-react';

interface ProductsPageProps {
  setCurrentPage?: (page: string) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ setCurrentPage }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', icon: Filter },
    { id: 'ultrasound', name: 'Ultrasound', icon: Stethoscope },
    { id: 'ct-scan', name: 'CT Scan', icon: MonitorSpeaker },
    { id: 'xray', name: 'X-Ray', icon: Zap }
  ];

  const products = [
    {
      id: 1,
      name: 'UltraSound Pro 5000',
      category: 'ultrasound',
      price: '$85,000',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['4D Imaging', '15-inch Display', 'Wireless Probes', '2-Year Warranty'],
      rating: 4.9,
      description: 'Advanced ultrasound system with superior image quality and user-friendly interface.'
    },
    {
      id: 2,
      name: 'CT Scanner Elite 128',
      category: 'ct-scan',
      price: '$450,000',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['128-Slice Technology', 'Low Dose Imaging', 'AI-Enhanced', '5-Year Warranty'],
      rating: 4.8,
      description: 'High-performance CT scanner with advanced imaging capabilities and reduced radiation exposure.'
    },
    {
      id: 3,
      name: 'Digital X-Ray DX-2000',
      category: 'xray',
      price: '$35,000',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Digital Radiography', 'Instant Imaging', 'PACS Compatible', '3-Year Warranty'],
      rating: 4.7,
      description: 'Modern digital X-ray system offering instant high-resolution images with enhanced workflow.'
    },
    {
      id: 4,
      name: 'Portable Ultrasound U-Mini',
      category: 'ultrasound',
      price: '$25,000',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Portable Design', 'Tablet Interface', 'Multiple Probes', '1-Year Warranty'],
      rating: 4.6,
      description: 'Compact portable ultrasound perfect for point-of-care imaging and mobile applications.'
    },
    {
      id: 5,
      name: 'CT Scanner Compact 64',
      category: 'ct-scan',
      price: '$280,000',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['64-Slice Imaging', 'Space Efficient', 'Fast Scanning', '3-Year Warranty'],
      rating: 4.5,
      description: 'Compact CT scanner ideal for smaller facilities without compromising on image quality.'
    },
    {
      id: 6,
      name: 'Mobile X-Ray MX-100',
      category: 'xray',
      price: '$45,000',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Mobile Unit', 'Battery Powered', 'Wireless Transmission', '2-Year Warranty'],
      rating: 4.4,
      description: 'Mobile X-ray unit designed for bedside imaging and emergency care applications.'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Our Products
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover our comprehensive range of advanced medical equipment designed to meet 
          the highest standards of healthcare excellence.
        </p>
      </section>

      {/* Search and Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(({ id, name, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setSelectedCategory(id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">{product.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {product.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">{product.price}</div>
                  <button 
                    onClick={() => setCurrentPage?.('contact')}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No products found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help Choosing the Right Equipment?
          </h3>
          <p className="text-lg text-blue-100 mb-8">
            Our experts are here to help you find the perfect medical equipment solution for your facility.
          </p>
          <button 
            onClick={() => setCurrentPage?.('contact')}
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
          >
            Consult Our Experts
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;