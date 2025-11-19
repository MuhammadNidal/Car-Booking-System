import { Link } from 'react-router-dom';
import CarCard from '../components/CarCard';
import { CheckCircle, XCircle } from 'lucide-react';

// Static comparison data - Different car models comparison
const comparisons = [
  {
    id: 1,
    car1: {
      id: 101,
      title: 'Toyota Corolla',
      specsSubtitle: '1.8L • Sedan • 2023',
      imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
      price: '59.9 Lakh',
      mileage: '14 kmpl',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      detailsUrl: '/cars/101',
      type: 'Toyota Corolla',
      features: {
        'Air Conditioning': true,
        'Power Steering': true,
        'Sunroof': true,
        'Alloy Wheels': true,
        'Navigation System': true,
        'Reverse Camera': true,
        'ABS Brakes': true,
        'Leather Seats': true,
        'Cruise Control': true,
        'Heated Seats': false
      }
    },
    car2: {
      id: 102,
      title: 'Honda City',
      specsSubtitle: '1.5L • Sedan • 2023',
      imageUrl: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
      price: '46.5 Lakh',
      mileage: '16 kmpl',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      detailsUrl: '/cars/102',
      type: 'Honda City',
      features: {
        'Air Conditioning': true,
        'Power Steering': true,
        'Sunroof': true,
        'Alloy Wheels': true,
        'Navigation System': true,
        'Reverse Camera': true,
        'ABS Brakes': true,
        'Leather Seats': false,
        'Cruise Control': true,
        'Heated Seats': false
      }
    }
  },
  {
    id: 2,
    car1: {
      id: 103,
      title: 'Honda Civic',
      specsSubtitle: '1.5L Turbo • Sedan • 2023',
      imageUrl: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80',
      price: '86.6 Lakh',
      mileage: '13 kmpl',
      fuelType: 'Petrol',
      transmission: 'CVT',
      detailsUrl: '/cars/103',
      type: 'Honda Civic',
      features: {
        'Air Conditioning': true,
        'Power Steering': true,
        'Sunroof': true,
        'Alloy Wheels': true,
        'Navigation System': true,
        'Reverse Camera': true,
        'ABS Brakes': true,
        'Leather Seats': true,
        'Cruise Control': true,
        'Heated Seats': true
      }
    },
    car2: {
      id: 104,
      title: 'Suzuki Alto',
      specsSubtitle: '0.66L • Hatchback • 2023',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrFTGbvF_YEO9cocFDZ_wO1Uki8TwTH1mVA&s',
      price: '23.3 Lakh',
      mileage: '22 kmpl',
      fuelType: 'Petrol',
      transmission: 'Manual',
      detailsUrl: '/cars/104',
      type: 'Suzuki Alto',
      features: {
        'Air Conditioning': true,
        'Power Steering': true,
        'Sunroof': false,
        'Alloy Wheels': false,
        'Navigation System': false,
        'Reverse Camera': false,
        'ABS Brakes': true,
        'Leather Seats': false,
        'Cruise Control': false,
        'Heated Seats': false
      }
    }
  },
  {
    id: 3,
    car1: {
      id: 105,
      title: 'Toyota Fortuner',
      specsSubtitle: '2.7L • SUV • 2023',
      imageUrl: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
      price: '114.0 Lakh',
      mileage: '10 kmpl',
      fuelType: 'Diesel',
      transmission: 'Automatic',
      detailsUrl: '/cars/105',
      type: 'Toyota Fortuner',
      features: {
        'Air Conditioning': true,
        'Power Steering': true,
        'Sunroof': true,
        'Alloy Wheels': true,
        'Navigation System': true,
        'Reverse Camera': true,
        'ABS Brakes': true,
        'Leather Seats': true,
        'Cruise Control': true,
        'Heated Seats': true
      }
    },
    car2: {
      id: 106,
      title: 'Kia Sportage',
      specsSubtitle: '2.0L • SUV • 2023',
      imageUrl: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
      price: '99.5 Lakh',
      mileage: '11 kmpl',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      detailsUrl: '/cars/106',
      type: 'Kia Sportage',
      features: {
        'Air Conditioning': true,
        'Power Steering': true,
        'Sunroof': true,
        'Alloy Wheels': true,
        'Navigation System': true,
        'Reverse Camera': true,
        'ABS Brakes': true,
        'Leather Seats': true,
        'Cruise Control': true,
        'Heated Seats': false
      }
    }
  }
];

export default function Compare() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Compare Cars</h1>
              <p className="text-gray-600 mt-1">Compare different car models side-by-side</p>
            </div>
            <Link
              to="/cars/new"
              className="px-6 py-2.5 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium"
            >
              Browse Cars
            </Link>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="space-y-8">
          {comparisons.map((comparison) => (
            <div key={comparison.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-linear-to-r from-blue-900 to-blue-700 text-white p-4">
                <h2 className="text-xl font-bold text-center">
                  {comparison.car1.title} vs {comparison.car2.title}
                </h2>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Left Car */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{comparison.car1.title}</h3>
                    <CarCard
                      id={comparison.car1.id}
                      imageUrl={comparison.car1.imageUrl}
                      title={comparison.car1.title}
                      specsSubtitle={comparison.car1.specsSubtitle}
                      mileage={comparison.car1.mileage}
                      fuelType={comparison.car1.fuelType}
                      transmission={comparison.car1.transmission}
                      price={comparison.car1.price}
                      detailsUrl={comparison.car1.detailsUrl}
                      type={comparison.car1.type}
                    />
                  </div>

                  {/* Right Car */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{comparison.car2.title}</h3>
                    <CarCard
                      id={comparison.car2.id}
                      imageUrl={comparison.car2.imageUrl}
                      title={comparison.car2.title}
                      specsSubtitle={comparison.car2.specsSubtitle}
                      mileage={comparison.car2.mileage}
                      fuelType={comparison.car2.fuelType}
                      transmission={comparison.car2.transmission}
                      price={comparison.car2.price}
                      detailsUrl={comparison.car2.detailsUrl}
                      type={comparison.car2.type}
                    />
                  </div>
                </div>

                {/* Features Comparison */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Features Comparison</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Left Car Features */}
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-bold text-blue-900 mb-3 text-center">{comparison.car1.title}</h4>
                      <div className="space-y-2">
                        {Object.entries(comparison.car1.features).map(([feature, available]) => (
                          <div key={feature} className="flex items-center gap-2">
                            {available ? (
                              <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                            ) : (
                              <XCircle className="h-5 w-5 text-gray-300 shrink-0" />
                            )}
                            <span className={available ? 'text-gray-900' : 'text-gray-400 line-through'}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Car Features */}
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-bold text-purple-900 mb-3 text-center">{comparison.car2.title}</h4>
                      <div className="space-y-2">
                        {Object.entries(comparison.car2.features).map(([feature, available]) => (
                          <div key={feature} className="flex items-center gap-2">
                            {available ? (
                              <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                            ) : (
                              <XCircle className="h-5 w-5 text-gray-300 shrink-0" />
                            )}
                            <span className={available ? 'text-gray-900' : 'text-gray-400 line-through'}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse More */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Want to explore more cars?</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/cars/new"
              className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Browse New Cars
            </Link>
            <Link
              to="/cars/used"
              className="inline-block bg-white text-blue-900 border-2 border-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Browse Used Cars
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
