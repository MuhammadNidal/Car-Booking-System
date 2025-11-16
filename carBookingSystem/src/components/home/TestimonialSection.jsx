import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ quote, name, title, avatar, rating = 5 }) => (
  <div className="group relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 transform border border-gray-100 h-full flex flex-col">
    {/* Quote Icon */}
    <div className="absolute -top-4 left-8">
      <div className="bg-blue-900 rounded-full p-3 shadow-lg">
        <Quote className="h-6 w-6 text-white" />
      </div>
    </div>
    
    {/* Stars */}
    <div className="flex items-center gap-1 mb-6 mt-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating ? 'text-amber-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>

    {/* Quote */}
    <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic grow">
      "{quote}"
    </blockquote>

    {/* Author */}
    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
      <div className="relative">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-4 border-gray-100 shadow-md"
        />
        <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-5 h-5 border-2 border-white"></div>
      </div>
      <div>
        <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
        <p className="text-blue-900 font-medium text-sm">{title}</p>
      </div>
    </div>

    {/* Decorative gradient */}
    <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-transparent rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100"></div>
  </div>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: 'AutoChoice made buying my dream car incredibly easy. The team was professional, transparent about pricing, and helped me through every step. Highly recommend!',
      name: 'Aisha Khan',
      title: 'Happy Car Owner',
       avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5
    },
    {
      quote: 'Sold my car in just 3 days! The valuation was fair, the process was smooth, and the staff was incredibly helpful. Best car selling experience ever.',
      name: 'Omar Rahman',
      title: 'Satisfied Seller',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5
    },
    {
      quote: 'The service center is top-notch! Quick repairs, genuine parts, and transparent pricing. My car runs like new. Will definitely come back for future services.',
      name: 'Sara Ahmed',
      title: 'Service Customer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-linear-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4 fill-current" />
            Customer Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-blue-900">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what real customers say about their experience with AutoChoice.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 auto-rows-max md:auto-rows-[420px] lg:auto-rows-[420px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">4.9/5</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">2,500+</div>
              <div className="text-gray-600 text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">98%</div>
              <div className="text-gray-600 text-sm">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">1,200+</div>
              <div className="text-gray-600 text-sm">5-Star Reviews</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-full font-semibold  transition-all duration-300 transform  shadow-lg ">
            <Star className="h-5 w-5 fill-current" />
            Read All Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;