import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  CalendarIcon,
  MapPinIcon,
  EyeIcon,
  TrashIcon
} from '@heroicons/react/24/outline';

export default function BookedCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    loadBookedCars();
  }, []);

  const loadBookedCars = () => {
    const bookedCars = JSON.parse(localStorage.getItem('bookedCars') || '[]');
    setCars(bookedCars);
  };

  const handleCancelBooking = (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      const bookedCars = JSON.parse(localStorage.getItem('bookedCars') || '[]');
      const updatedBookings = bookedCars.filter(car => car.bookingId !== bookingId);
      localStorage.setItem('bookedCars', JSON.stringify(updatedBookings));
      loadBookedCars();
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircleIcon className="h-8 w-8 text-green-500" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Booked Cars</h1>
                <p className="text-gray-600 mt-1">
                  {cars.length} booking{cars.length !== 1 ? 's' : ''} in total
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Booked Cars Content */}
        {cars.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <CheckCircleIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No bookings yet</h3>
            <p className="text-gray-600 mb-6">
              Browse our collection and book your dream car today
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
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div key={car.bookingId || car.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                
                {/* Car Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={car.image || car.imageUrl || 'https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Car+Image'} 
                    alt={car.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Car+Image';
                    }}
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      {car.status || 'Confirmed'}
                    </span>
                  </div>

                  {/* Booking ID Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 text-xs font-medium rounded bg-white/90 backdrop-blur-sm text-gray-700">
                      {car.bookingId || `BK${car.id}`}
                    </span>
                  </div>
                </div>

                {/* Car Details */}
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
                    {car.title}
                  </h3>
                  
                  <div className="text-xl font-bold text-blue-600 mb-3">
                    {car.price || `₨${(Math.random() * 5000000 + 1000000).toLocaleString()}`}
                  </div>

                  {/* Booking Info */}
                  <div className="space-y-2 text-sm text-gray-600 mb-4 pb-4 border-b">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">Booked on:</span>
                      <span>{formatDate(car.bookedAt || Date.now())}</span>
                    </div>
                    {car.location && (
                      <div className="flex items-center gap-2">
                        <MapPinIcon className="h-4 w-4 text-blue-600" />
                        <span>{car.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Car Specs */}
                  {(car.year || car.mileage) && (
                    <div className="text-xs text-gray-600 mb-4 space-y-1">
                      {car.year && <div>Year: {car.year}</div>}
                      {car.mileage && <div>Mileage: {car.mileage}</div>}
                      {car.fuelType && <div>Fuel: {car.fuelType}</div>}
                      {car.transmission && <div>Transmission: {car.transmission}</div>}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link
                      to={`/cars/${car.id}`}
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <EyeIcon className="h-4 w-4" />
                      View Details
                    </Link>
                    <button
                      onClick={() => handleCancelBooking(car.bookingId || car.id)}
                      className="px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                      title="Cancel booking"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Additional Info */}
        {cars.length > 0 && (
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Booking Information</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Your booking has been confirmed and the seller will contact you shortly.</li>
              <li>• Please keep your booking ID handy for reference.</li>
              <li>• You can cancel your booking anytime before the delivery date.</li>
              <li>• Contact the seller directly for any questions about your booking.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
