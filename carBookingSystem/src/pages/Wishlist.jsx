import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartIcon, 
  TrashIcon, 
  EyeIcon,
  MapPinIcon,
  CalendarIcon 
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import CarCard from '../components/CarCard';

export default function Wishlist() {
  const [wishlistCars, setWishlistCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = () => {
    try {
      const wishlistData = JSON.parse(localStorage.getItem('wishlist') || '[]');
      const allCars = JSON.parse(localStorage.getItem('cars') || '[]');
      
      let cars = [];
      
      // Handle both ID-based and object-based wishlist storage
      if (wishlistData.length > 0) {
        if (typeof wishlistData[0] === 'number') {
          // ID-based storage (new format)
          cars = allCars.filter(car => wishlistData.includes(car.id));
        } else {
          // Object-based storage (old format)
          cars = wishlistData;
        }
      }
      
      setWishlistCars(cars);
    } catch (error) {
      console.error('Error loading wishlist:', error);
      setWishlistCars([]);
    } finally {
      setLoading(false);
    }
  };

  const removeFromWishlist = (carId) => {
    try {
      const wishlistData = JSON.parse(localStorage.getItem('wishlist') || '[]');
      
      let newWishlist;
      if (typeof wishlistData[0] === 'number') {
        // ID-based storage
        newWishlist = wishlistData.filter(id => id !== carId);
      } else {
        // Object-based storage
        newWishlist = wishlistData.filter(car => car.id !== carId);
      }
      
      localStorage.setItem('wishlist', JSON.stringify(newWishlist));
      loadWishlist(); // Reload the wishlist
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  const clearAllWishlist = () => {
    if (window.confirm('Are you sure you want to clear your entire wishlist?')) {
      localStorage.setItem('wishlist', JSON.stringify([]));
      setWishlistCars([]);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your wishlist...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <HeartSolidIcon className="h-8 w-8 text-red-500" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
                <p className="text-gray-600 mt-1">
                  {wishlistCars.length} car{wishlistCars.length !== 1 ? 's' : ''} saved
                </p>
              </div>
            </div>
            
            {wishlistCars.length > 0 && (
              <button
                onClick={clearAllWishlist}
                className="text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Wishlist Content */}
        {wishlistCars.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <HeartIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
            <p className="text-gray-600 mb-6">
              Start browsing cars and save your favorites to see them here
            </p>
            <div className="space-y-3 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link
                to="/cars/new"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Browse New Cars
              </Link>
              <Link
                to="/cars/used"
                className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Browse Used Cars
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistCars.map((car) => (
              <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                
                {/* Car Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={car.image || car.imageUrl || 'https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Car+Image'} 
                    alt={car.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Car+Image';
                    }}
                  />
                  
                  {/* Remove from Wishlist Button */}
                  <button
                    onClick={() => removeFromWishlist(car.id)}
                    className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors duration-200 group"
                    title="Remove from wishlist"
                  >
                    <TrashIcon className="h-4 w-4 text-red-500 group-hover:text-red-600" />
                  </button>

                  {/* Type Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      car.type === 'new' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {car.type === 'new' ? 'New' : 'Used'}
                    </span>
                  </div>
                </div>

                {/* Car Details */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
                    {car.title}
                  </h3>
                  
                  <div className="text-xl font-bold text-blue-600 mb-3">
                    {car.price || `₨${(Math.random() * 5000000 + 1000000).toLocaleString()}`}
                  </div>

                  {/* Car Info */}
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{car.year || '2020'}</span>
                      <span>•</span>
                      <span>{car.mileage || '25,000 km'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4" />
                      <span>{car.location || 'Karachi'}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link
                      to={`/cars/${car.id}`}
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/cars/${car.id}`}
                      className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <EyeIcon className="h-5 w-5 text-gray-600" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Additional Actions */}
        {wishlistCars.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Looking for more options?
            </p>
            <div className="space-y-3 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link
                to="/cars/new"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Browse More Cars
              </Link>
              <Link
                to="/rent"
                className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Rent a Car
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
