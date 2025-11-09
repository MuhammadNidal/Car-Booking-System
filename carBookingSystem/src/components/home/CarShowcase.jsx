import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, EyeIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

const CarShowcase = () => {
  const [featuredCars, setFeaturedCars] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Sample featured cars with better images
    const sampleCars = [
      {
        id: 1,
        title: "Toyota Corolla GLi 2022",
        price: "₨42,50,000",
        image: "https://toyota-central.com/Assets/images/Vehicle/XLI/Exterior/Exterior6.jpg",
        year: 2022,
        mileage: "15,000 km",
        fuel: "Petrol",
        transmission: "Manual",
        location: "Karachi",
        type: "new",
        featured: true
      },
      {
        id: 2,
        title: "Honda Civic Oriel 2021",
        price: "₨52,00,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZYRdDSBijnghRNFEIPMFikxt_Df86TmY7g&s",
        year: 2021,
        mileage: "25,000 km",
        fuel: "Petrol",
        transmission: "CVT",
        location: "Lahore",
        type: "used",
        featured: true
      },
      {
        id: 3,
        title: "Suzuki Alto VXR 2023",
        price: "₨23,50,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDfLa36SWSixNKAA4q8xzao99vcSm5BHmsSg&s",
        year: 2023,
        mileage: "8,000 km",
        fuel: "Petrol",
        transmission: "Manual",
        location: "Islamabad",
        type: "new",
        featured: true
      },
      {
        id: 4,
        title: "Toyota Camry 2020",
        price: "₨95,00,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL28Znf9DaABBurHXqbfKi5eULzdxhypjmfA&s",
        year: 2020,
        mileage: "35,000 km",
        fuel: "Hybrid",
        transmission: "CVT",
        location: "Karachi",
        type: "used",
        featured: true
      }
    ];

    // Load cars from localStorage or use sample data
    const existingCars = JSON.parse(localStorage.getItem('cars') || '[]');
    const featuredExisting = existingCars.filter(car => car.featured).slice(0, 4);
    
    if (featuredExisting.length > 0) {
      setFeaturedCars(featuredExisting);
    } else {
      setFeaturedCars(sampleCars);
      // Save sample cars to localStorage if none exist
      if (existingCars.length === 0) {
        localStorage.setItem('cars', JSON.stringify(sampleCars));
      }
    }

    // Load wishlist
    const existingWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlist(existingWishlist);
  }, []);

  const toggleWishlist = (carId) => {
    const newWishlist = wishlist.includes(carId)
      ? wishlist.filter(id => id !== carId)
      : [...wishlist, carId];
    
    setWishlist(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Cars
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium vehicles from trusted sellers
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              {/* Car Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Car+Image';
                  }}
                />
                
                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(car.id)}
                  className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors duration-200"
                >
                  {wishlist.includes(car.id) ? (
                    <HeartSolidIcon className="h-5 w-5 text-red-500" />
                  ) : (
                    <HeartIcon className="h-5 w-5 text-gray-600" />
                  )}
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
                
                <div className="text-2xl font-bold text-blue-600 mb-3">
                  {car.price}
                </div>

                {/* Car Info */}
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <div className="flex justify-between">
                    <span>Year:</span>
                    <span className="font-medium">{car.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mileage:</span>
                    <span className="font-medium">{car.mileage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fuel:</span>
                    <span className="font-medium">{car.fuel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="font-medium">{car.location}</span>
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

        {/* CTA Buttons */}
        <div className="text-center space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            to="/cars/new"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg"
          >
            View All New Cars
          </Link>
          <Link
            to="/cars/used"
            className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
          >
            Browse Used Cars
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CarShowcase;