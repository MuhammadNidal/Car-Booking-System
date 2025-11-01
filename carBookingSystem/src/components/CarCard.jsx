import React from 'react';
import { Link } from 'react-router-dom';
import { Gauge, Fuel, Cog, Bookmark } from 'lucide-react';

/**
 * A reusable card component to display a car listing.
 *
 * @param {object} props
 * @param {string} props.imageUrl - URL for the car's image.
 * @param {string} props.title - The main title (e.g., "Corolla Altis - 2023").
 * @param {string} props.specsSubtitle - A short description of the specs.
 * @param {string} props.mileage - Mileage text (e.g., "100 Miles").
 * @param {string} props.fuelType - Fuel type (e.g., "Petrol").
 * @param {string} props.transmission - Transmission type (e.g., "Automatic").
 * @param {number} props.price - The price as a number (e.g., 45000).
 * @param {string} props.detailsUrl - The URL for the "View Details" link.
 */
const CarCard = ({
  imageUrl,
  title,
  specsSubtitle,
  mileage,
  fuelType,
  transmission,
  price,
  detailsUrl,
}) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  return (
    // Max width set to 'xs' (320px) by default, scaling down content.
    // On medium screens and up, it will take up a bit more space, but still compact.
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-[280px] sm:max-w-xs mx-auto transition-all duration-300 hover:shadow-2xl group
                    text-xs sm:text-sm">
      {/* Image and Bookmark Container */}
      <div className="relative w-full pb-[75%] sm:pb-[65%] overflow-hidden"> {/* Aspect ratio for image (e.g., 4:3) */}
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Bookmark Icon */}
        <button
          className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white bg-opacity-70 rounded-full p-1.5 sm:p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 z-10"
          title="Bookmark this car"
          onClick={() => console.log(`Bookmark: ${title}`)} // Replace with actual bookmark logic
        >
          <Bookmark size={16} sm:size={18} />
        </button>
      </div>

      {/* Content Area */}
      <div className="p-3 sm:p-4">
        {/* Title and Subtitle */}
        <h3 className="text-base sm:text-lg font-bold text-gray-900 truncate" title={title}>
          {title}
        </h3>
        <p className="text-xs text-gray-600 truncate mt-0.5 sm:mt-1" title={specsSubtitle}>
          {specsSubtitle}
        </p>

        {/* Specs with Icons */}
        <div className="flex justify-between items-center text-xs text-gray-700 mt-2 sm:mt-3 border-y border-gray-100 py-2">
          <div className="flex items-center gap-1" title="Mileage">
            <Gauge size={12} sm:size={14} className="text-blue-600" />
            <span>{mileage}</span>
          </div>
          <div className="flex items-center gap-1" title="Fuel Type">
            <Fuel size={12} sm:size={14} className="text-blue-600" />
            <span>{fuelType}</span>
          </div>
          <div className="flex items-center gap-1" title="Transmission">
            <Cog size={12} sm:size={14} className="text-blue-600" />
            <span>{transmission}</span>
          </div>
        </div>

        {/* Price and Details Link */}
        <div className="flex justify-between items-center mt-3">
          <span className="text-lg sm:text-xl font-bold text-gray-900">
            {formattedPrice}
          </span>
          <Link
            to={detailsUrl}
            className="text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;