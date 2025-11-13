import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  XMarkIcon,
  ArrowPathIcon,
  PlusIcon
} from '@heroicons/react/24/outline';
import { Gauge, Fuel, Cog, Calendar, MapPin } from 'lucide-react';

export default function Compare() {
  const [compareCars, setCompareCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCompare();
  }, []);

  const loadCompare = () => {
    try {
      const compareData = JSON.parse(localStorage.getItem('compare') || '[]');
      const allCars = JSON.parse(localStorage.getItem('cars') || '[]');
      const cars = allCars.filter(car => compareData.includes(car.id));
      setCompareCars(cars);
    } catch (error) {
      console.error('Error loading compare:', error);
      setCompareCars([]);
    } finally {
      setLoading(false);
    }
  };

  const removeFromCompare = (carId) => {
    try {
      const compareData = JSON.parse(localStorage.getItem('compare') || '[]');
      const newCompare = compareData.filter(id => id !== carId);
      localStorage.setItem('compare', JSON.stringify(newCompare));
      loadCompare();
    } catch (error) {
      console.error('Error removing from compare:', error);
    }
  };

  const clearAll = () => {
    if (window.confirm('Clear all cars from comparison?')) {
      localStorage.setItem('compare', JSON.stringify([]));
      setCompareCars([]);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading comparison...</p>
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
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Compare Cars</h1>
              <p className="text-gray-600 mt-1">
                {compareCars.length} of 3 cars selected
              </p>
            </div>
            
            {compareCars.length > 0 && (
              <button
                onClick={clearAll}
                className="text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {compareCars.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <ArrowPathIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No cars to compare</h3>
            <p className="text-gray-600 mb-6">
              Add cars from the listings to compare their features
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
          <>
            {/* Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {compareCars.map((car) => (
                <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  
                  {/* Car Image */}
                  <div className="relative">
                    <img 
                      src={car.image || car.imageUrl || 'https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Car+Image'} 
                      alt={car.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Car+Image';
                      }}
                    />
                    
                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCompare(car.id)}
                      className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors"
                      title="Remove from comparison"
                    >
                      <XMarkIcon className="h-4 w-4 text-gray-700" />
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
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {car.title}
                    </h3>
                    
                    <div className="text-2xl font-bold text-blue-600 mb-4">
                      {car.price || `₨${(Math.random() * 5000000 + 1000000).toLocaleString()}`}
                    </div>

                    {/* Specs */}
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>Year</span>
                        </div>
                        <span className="font-medium text-gray-900">{car.year || '2020'}</span>
                      </div>

                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Gauge className="h-4 w-4" />
                          <span>Mileage</span>
                        </div>
                        <span className="font-medium text-gray-900">{car.mileage || '25,000 km'}</span>
                      </div>

                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Fuel className="h-4 w-4" />
                          <span>Fuel</span>
                        </div>
                        <span className="font-medium text-gray-900">{car.fuelType || 'Petrol'}</span>
                      </div>

                      <div className="flex items-center justify-between py-2 border-b border-gray-100">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Cog className="h-4 w-4" />
                          <span>Transmission</span>
                        </div>
                        <span className="font-medium text-gray-900">{car.transmission || 'Automatic'}</span>
                      </div>

                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span>Location</span>
                        </div>
                        <span className="font-medium text-gray-900">{car.location || 'Karachi'}</span>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <Link
                      to={`/cars/${car.id}`}
                      className="mt-4 block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}

              {/* Add More Placeholder */}
              {compareCars.length < 3 && (
                <Link
                  to="/cars/new"
                  className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-dashed border-gray-300 hover:border-blue-500 transition-colors flex items-center justify-center min-h-[400px] group"
                >
                  <div className="text-center p-6">
                    <PlusIcon className="h-12 w-12 text-gray-400 group-hover:text-blue-500 mx-auto mb-3 transition-colors" />
                    <p className="text-gray-600 group-hover:text-blue-600 font-medium transition-colors">
                      Add another car
                    </p>
                  </div>
                </Link>
              )}
            </div>

            {/* Browse More */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Want to compare different cars?
              </p>
              <div className="space-y-3 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <Link
                  to="/cars/new"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Browse More Cars
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
