import React, { useState } from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowSuccess(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  }

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: ['+92 21 1234 5678', '+92 300 1234567'],
      color: 'bg-blue-500'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: ['info@cardealer.pk', 'support@cardealer.pk'],
      color: 'bg-green-500'
    },
    {
      icon: MapPinIcon,
      title: 'Address',
      details: ['123 Main Street, Block A', 'Karachi, Pakistan'],
      color: 'bg-purple-500'
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      color: 'bg-orange-500'
    }
  ];

  const faqItems = [
    {
      question: 'How do I list my car for sale?',
      answer: 'Click on the "Sell" button in the navigation, create an account, and fill out the car listing form with details and photos.'
    },
    {
      question: 'Is there a fee for listing my car?',
      answer: 'Basic listings are free. We offer premium listing options with additional features for better visibility.'
    },
    {
      question: 'How do I schedule a test drive?',
      answer: 'Contact the seller directly through our platform or call the number provided in the listing.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We facilitate secure transactions through bank transfers, certified checks, and cash payments with proper documentation.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Have questions about buying or selling a car? We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Success Message */}
        {showSuccess && (
          <div className="mb-8 bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
              <div>
                <h3 className="font-semibold text-green-800">Message Sent Successfully!</h3>
                <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-600" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                  <p className="text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input 
                      name="name" 
                      value={form.name} 
                      onChange={handleChange} 
                      placeholder="Your full name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input 
                      name="email" 
                      type="email"
                      value={form.email} 
                      onChange={handleChange} 
                      placeholder="your.email@example.com"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      name="phone" 
                      value={form.phone} 
                      onChange={handleChange} 
                      placeholder="+92 300 1234567"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select 
                      name="subject" 
                      value={form.subject} 
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="buying">Buying a Car</option>
                      <option value="selling">Selling a Car</option>
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea 
                    name="message" 
                    value={form.message} 
                    onChange={handleChange} 
                    placeholder="Tell us about your inquiry..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={6}
                    required
                  />
                </div>
                
                <div className="flex justify-end">
                  <button 
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Browse Cars
                </button>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  Sell Your Car
                </button>
                <button className="w-full border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Schedule Inspection
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">yt</span>
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">ig</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact us and we'll be happy to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Our Office</h3>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPinIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Interactive map would be displayed here</p>
                <p className="text-sm text-gray-500">123 Main Street, Block A, Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
