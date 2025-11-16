import React from 'react';
import { 
  ShieldCheckIcon, 
  UserGroupIcon, 
  GlobeAltIcon,
  StarIcon,
  TruckIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function About() {
  const features = [
    {
      title: 'Trusted Platform',
      description: 'All vehicles are verified and sellers are authenticated for your peace of mind.',
      icon: ShieldCheckIcon,
      color: 'bg-blue-500'
    },
    {
      title: 'Expert Support',
      description: 'Our team of automotive experts is here to help you make the right choice.',
      icon: UserGroupIcon,
      color: 'bg-green-500'
    },
    {
      title: 'Nationwide Network',
      description: 'Connect with buyers and sellers across Pakistan through our extensive network.',
      icon: GlobeAltIcon,
      color: 'bg-purple-500'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Cars Listed' },
    { number: '25,000+', label: 'Happy Customers' },
    { number: '15+', label: 'Cities Covered' },
    { number: '99%', label: 'Satisfaction Rate' }
  ];

  const values = [
    'Transparent pricing with no hidden fees',
    'Comprehensive vehicle history reports',
    'Secure payment processing',
    'Professional vehicle inspections',
    '24/7 customer support',
    'Flexible financing options'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About CarDealer
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Pakistan's most trusted platform connecting car buyers and sellers with transparency, security, and convenience.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We believe buying or selling a car should be simple, transparent, and trustworthy. Our platform 
            connects verified buyers and sellers, providing comprehensive tools and support to make every 
            transaction smooth and secure. Whether you're looking for your first car or selling your trusted 
            companion, we're here to help you every step of the way.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Browse Cars</h4>
              <p className="text-sm text-gray-600">Search through thousands of verified listings</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Connect Safely</h4>
              <p className="text-sm text-gray-600">Contact verified sellers through our platform</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Inspect & Test</h4>
              <p className="text-sm text-gray-600">Schedule inspections with professional mechanics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Complete Deal</h4>
              <p className="text-sm text-gray-600">Secure payment and transfer documentation</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Why Choose CarDealer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We're a passionate team of automotive enthusiasts, technology experts, and customer service professionals 
            dedicated to revolutionizing the car buying and selling experience in Pakistan.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Ahmed Khan', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' },
              { name: 'Sarah Ali', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' },
              { name: 'Hassan Ahmed', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face' }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150x150/e5e7eb/6b7280?text=' + member.name.split(' ').map(n => n[0]).join('');
                  }}
                />
                <h4 className="font-semibold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of satisfied customers who have found their perfect car with us
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Browse Cars
            </button>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              Sell Your Car
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
