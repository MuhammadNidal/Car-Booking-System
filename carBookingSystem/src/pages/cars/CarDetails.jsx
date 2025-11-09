import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  HeartIcon, 
  ShareIcon, 
  MapPinIcon,
  CalendarIcon,
  CogIcon,
  FireIcon,
  TruckIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

export default function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem('cars');
    const arr = raw ? JSON.parse(raw) : [];
    // Try to find car by id (handle both string and number IDs)
    const found = arr.find(c => String(c.id) === String(id) || c.id === parseInt(id) || c.id === id);
    setCar(found || null);

    // Load wishlist
    const existingWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlist(existingWishlist);
  }, [id]);

  const handleBook = () => {
    if (!car) return;
    const booked = JSON.parse(localStorage.getItem('bookedCars') || '[]');
    const bookingData = { 
      ...car, 
      bookedAt: Date.now(),
      bookingId: 'BK' + Date.now(),
      status: 'confirmed'
    };
    booked.push(bookingData);
    localStorage.setItem('bookedCars', JSON.stringify(booked));
    setShowBookingModal(false);
    navigate('/cars/booked?success=true');
  };

  const toggleWishlist = () => {
    if (!car) return;
    const newWishlist = wishlist.includes(car.id)
      ? wishlist.filter(itemId => itemId !== car.id)
      : [...wishlist, car.id];
    
    setWishlist(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  };

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Car not found</h2>
          <p className="text-gray-600 mb-6">The car you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={() => navigate('/cars/used')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Cars
          </button>
        </div>
      </div>
    );
  }

  // Sample images for demonstration (in real app, car would have multiple images)
  const carImages = [
    car.image || car.imageUrl || 'https://via.placeholder.com/800x600/e5e7eb/6b7280?text=Car+Image',
    'https://cache2.pakwheels.com/system/car_model_pictures/pictures/000/001/688/medium/toyota-corolla-2020-2.jpg',
    'https://cache3.pakwheels.com/system/car_model_pictures/pictures/000/001/688/medium/toyota-corolla-2020-3.jpg'
  ];

  const specifications = [
    { label: 'Make', value: car.make || 'N/A', icon: CogIcon },
    { label: 'Year', value: car.year || 'N/A', icon: CalendarIcon },
    { label: 'Fuel Type', value: car.fuel || car.fuelType || 'N/A', icon: FireIcon },
    { label: 'Transmission', value: car.transmission || 'N/A', icon: CogIcon },
    { label: 'Mileage', value: car.mileage || 'N/A', icon: TruckIcon },
    { label: 'Location', value: car.location || 'N/A', icon: MapPinIcon }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Back to listings</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={carImages[selectedImage]} 
                  alt={car.title}
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x600/e5e7eb/6b7280?text=Car+Image';
                  }}
                />
                
                {/* Image Navigation */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex gap-2">
                    {carImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          selectedImage === index ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="p-4 flex gap-2">
                {carImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Car Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{car.title}</h1>
                  <p className="text-gray-600">{car.specsSubtitle || car.description}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={toggleWishlist}
                    className="p-2 rounded-full border hover:bg-gray-50 transition-colors"
                  >
                    {wishlist.includes(car.id) ? (
                      <HeartSolidIcon className="h-6 w-6 text-red-500" />
                    ) : (
                      <HeartIcon className="h-6 w-6 text-gray-600" />
                    )}
                  </button>
                  <button className="p-2 rounded-full border hover:bg-gray-50 transition-colors">
                    <ShareIcon className="h-6 w-6 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <spec.icon className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{spec.value}</p>
                      <p className="text-xs text-gray-500">{spec.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['Air Conditioning', 'Power Steering', 'ABS Brakes', 'Airbags', 'Central Locking', 'Electric Windows'].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {car.description || `This ${car.title} is in excellent condition and has been well-maintained. 
                  It features modern amenities and safety features, making it perfect for both city driving and long journeys. 
                  The vehicle has a clean service history and is ready for immediate delivery.`}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Pricing and Actions */}
          <div className="space-y-6">
            
            {/* Price Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {car.price || `₨${(Math.random() * 5000000 + 1000000).toLocaleString()}`}
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <MapPinIcon className="h-4 w-4" />
                  <span>{car.location || 'Karachi'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => setShowBookingModal(true)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <PhoneIcon className="h-4 w-4" />
                    <span className="text-sm">Call</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <ChatBubbleLeftRightIcon className="h-4 w-4" />
                    <span className="text-sm">Chat</span>
                  </button>
                </div>
              </div>

              {/* Seller Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Seller Information</h4>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">AB</span>
                  </div>
                  <div>
                    <p className="font-medium">Auto Bazaar</p>
                    <p className="text-sm text-gray-600">Verified Dealer</p>
                  </div>
                </div>
              </div>

              {/* Safety Notice */}
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-xs text-yellow-800">
                  <strong>Safety Tip:</strong> Always inspect the vehicle and verify documents before making payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold mb-4">Confirm Booking</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to book this {car.title}? You can manage your bookings from the Booked Cars page.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowBookingModal(false)}
                className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleBook}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
