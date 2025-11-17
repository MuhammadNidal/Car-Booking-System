import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, X } from 'lucide-react';

export default function Sell() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    price: '',
    mileage: '',
    fuelType: '',
    transmission: '',
    condition: '',
    description: '',
    location: '',
    contactName: '',
    contactPhone: '',
    contactEmail: ''
  });
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages([...images, ...newImages].slice(0, 6));
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData, images);
    alert('Your car listing has been submitted successfully!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white shadow-sm border border-gray-200 mb-8">
          <div className="border-b border-gray-200 bg-gray-50 px-8 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Sell Your Car</h1>
            <p className="text-gray-600 mt-2">Fill in the details below to list your vehicle</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            
            <div className="mb-10">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Vehicle Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Brand *</label>
                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Toyota"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#193CB8] focus:border-[#193CB8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Model *</label>
                  <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Camry"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#193CB8] focus:border-[#193CB8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Year *</label>
                  <input
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    min="1990"
                    max={new Date().getFullYear()}
                    placeholder="2020"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#193CB8] focus:border-[#193CB8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price ($) *</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    min="0"
                    placeholder="25000"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#193CB8] focus:border-[#193CB8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mileage (km) *</label>
                  <input
                    type="number"
                    name="mileage"
                    value={formData.mileage}
                    onChange={handleChange}
                    required
                    min="0"
                    placeholder="50000"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#193CB8] focus:border-[#193CB8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type *</label>
                  <select
                    name="fuelType"
                    value={formData.fuelType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#193CB8] focus:border-[#193CB8]"
                  >
                    <option value="">Select Fuel Type</option>
                    <option value="Gasoline">Gasoline</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Transmission *</label>
                  <select
                    name="transmission"
                    value={formData.transmission}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#193CB8] focus:border-[#193CB8]"
                  >
                    <option value="">Select Transmission</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Condition *</label>
                  <select
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#193CB8] focus:border-[#193CB8]"
                  >
                    <option value="">Select Condition</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Poor">Poor</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Describe your vehicle's features, condition, and any additional information..."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#193CB8] focus:border-[#193CB8]"
                />
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Photos</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <label className="cursor-pointer">
                  <span className="text-sm text-gray-600">
                    Click to upload photos (Max 6 images)
                  </span>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {images.length > 0 && (
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {images.map((img, index) => (
                    <div key={index} className="relative group">
                      <img src={img} alt={`Upload ${index + 1}`} className="w-full h-32 object-cover rounded-lg border border-gray-200" />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-10">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#193CB8] focus:border-[#193CB8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    required
                    placeholder="+1 234 567 8900"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#193CB8] focus:border-[#193CB8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#193CB8] focus:border-[#193CB8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="City, State"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#193CB8] focus:border-[#193CB8]"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-[#193CB8] text-white py-3.5 px-6 rounded-md font-semibold hover:bg-blue-800 transition-colors"
              >
                Submit Listing
              </button>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-6 py-3.5 border border-gray-300 rounded-md font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
