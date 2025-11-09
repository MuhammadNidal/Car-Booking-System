import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Gauge, 
  Fuel, 
  Cog, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const CarDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] =  useState(false);

  // Mock car data - replace with actual API call
  const carData = {
    id: id,
    title: "Toyota Camry 2022",
    subtitle: "2.5L Hybrid LE",
    price: 3500000,
    images: [
      "https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800"
    ],
    specs: {
      mileage: "15,000 km",
      fuelType: "Hybrid",
      transmission: "Automatic",
      year: "2022",
      location: "Karachi, Pakistan"
    },
    features: [
      "Leather Seats",
      "Sunroof",
      "Navigation System",
      "Backup Camera",
      "Bluetooth",
      "Cruise Control",
      "Heated Seats",
      "Premium Sound System"
    ],
    description: "This well-maintained Toyota Camry offers excellent fuel efficiency and reliability. Perfect for city driving with all modern amenities included.",
    seller: {
      name: "Ahmed Motors",
      phone: "+92 300 1234567",
      email: "contact@ahmedmotors.com",
      location: "Karachi"
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === carData.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? carData.images.length - 1 : prev - 1
    );
  };

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(carData.price);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{carData.title}</h1>
          <p className="text-lg text-gray-600">{carData.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={carData.images[currentImageIndex]}
                  alt={carData.title}
                  className="w-full h-96 object-cover"
                />
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                >
                  <ChevronRight className="h-6 w-6 text-gray-700" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {carData.images.length}
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="p-4 flex gap-2 overflow-x-auto">
                {carData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? 'border-blue-900' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${carData.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Gauge className="h-5 w-5 text-blue-900" />
                  <div>
                    <p className="text-xs text-gray-600">Mileage</p>
                    <p className="font-semibold">{carData.specs.mileage}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Fuel className="h-5 w-5 text-blue-900" />
                  <div>
                    <p className="text-xs text-gray-600">Fuel Type</p>
                    <p className="font-semibold">{carData.specs.fuelType}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Cog className="h-5 w-5 text-blue-900" />
                  <div>
                    <p className="text-xs text-gray-600">Transmission</p>
                    <p className="font-semibold">{carData.specs.transmission}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="h-5 w-5 text-blue-900" />
                  <div>
                    <p className="text-xs text-gray-600">Year</p>
                    <p className="font-semibold">{carData.specs.year}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {carData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">{carData.description}</p>
            </div>
          </div>

          {/* Right Column - Price and Contact */}
          <div className="space-y-6">
            
            {/* Price Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl font-bold text-gray-900">{formattedPrice}</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-2 rounded-full transition-colors ${
                      isLiked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-600 mb-6">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{carData.specs.location}</span>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-blue-900 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Contact Seller
                </button>
                <button className="w-full border border-blue-900 text-blue-900 py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Schedule Test Drive
                </button>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Seller Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">{carData.seller.name}</p>
                  <p className="text-sm text-gray-600">{carData.seller.location}</p>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="h-4 w-4 text-blue-900" />
                  <span className="text-sm">{carData.seller.phone}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="h-4 w-4 text-blue-900" />
                  <span className="text-sm">{carData.seller.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;