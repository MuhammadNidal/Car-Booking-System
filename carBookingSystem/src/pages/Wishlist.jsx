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
              <CarCard
                key={car.id}
                id={car.id}
                imageUrl={car.image || car.imageUrl}
                title={car.title}
                specsSubtitle={car.specsSubtitle || `${car.year || '2020'} • ${car.location || 'Karachi'}`}
                mileage={car.mileage || '0 km'}
                fuelType={car.fuelType || 'Unknown'}
                transmission={car.transmission || 'Unknown'}
                price={car.price}
                detailsUrl={`/cars/${car.id}`}
                type={car.type || 'used'}
              />
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
