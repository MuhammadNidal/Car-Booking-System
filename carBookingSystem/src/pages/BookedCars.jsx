import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  CalendarIcon,
  MapPinIcon,
  EyeIcon,
  TrashIcon
} from '@heroicons/react/24/outline';
import CarCard from '../components/CarCard';

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cars.map((car) => (
              <CarCard
                key={car.bookingId || car.id}
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
