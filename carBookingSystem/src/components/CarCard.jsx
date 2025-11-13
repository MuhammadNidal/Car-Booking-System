
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Gauge, Fuel, Cog, Bookmark, BookmarkCheck } from "lucide-react";
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartOutlineIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const CarCard = ({
                     id,
                     imageUrl,
                     image,
                     title,
                     specsSubtitle,
                     mileage,
                     fuelType,
                     transmission,
                     price,
                     detailsUrl,
                     isNew,
                     type,
                 }) => {
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [isInCompare, setIsInCompare] = useState(false);

    useEffect(() => {
        // Check if car is in wishlist
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        setIsInWishlist(wishlist.includes(id));
        
        // Check if car is in compare
        const compare = JSON.parse(localStorage.getItem('compare') || '[]');
        setIsInCompare(compare.includes(id));
    }, [id]);

    const toggleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        let newWishlist;
        
        if (isInWishlist) {
            // Remove from wishlist
            newWishlist = wishlist.filter(itemId => itemId !== id);
            setIsInWishlist(false);
        } else {
            // Add to wishlist
            newWishlist = [...wishlist, id];
            setIsInWishlist(true);
        }
        
        localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    };

    const toggleCompare = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const compare = JSON.parse(localStorage.getItem('compare') || '[]');
        let newCompare;
        
        if (isInCompare) {
            // Remove from compare
            newCompare = compare.filter(itemId => itemId !== id);
            setIsInCompare(false);
        } else {
            // Add to compare (max 3 cars)
            if (compare.length >= 3) {
                alert('You can only compare up to 3 cars at a time');
                return;
            }
            newCompare = [...compare, id];
            setIsInCompare(true);
        }
        
        localStorage.setItem('compare', JSON.stringify(newCompare));
    };

    // Format price
    const displayPrice = typeof price === 'string' 
        ? price 
        : `₨${new Intl.NumberFormat('en-PK').format(price || 0)}`;

    // Use image or imageUrl
    const carImage = image || imageUrl || 'https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Car+Image';

    return (

        <div
            className="bg-white rounded-xl shadow-lg overflow-hidden w-full transition-all duration-300 hover:shadow-2xl group
                    text-xs sm:text-sm flex flex-col h-full"
        >
            <div className="relative w-full pb-[75%] sm:pb-[65%] overflow-hidden">
                <img
                    src={carImage}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Car+Image';
                    }}
                />
                
                {/* Wishlist Button */}
                <button
                    className={`absolute top-2 right-2 sm:top-3 sm:right-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 transition-all duration-200 z-10 hover:scale-110 ${
                        isInWishlist ? 'text-red-500' : 'text-gray-700 hover:text-red-500'
                    }`}
                    title={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
                    onClick={toggleWishlist}
                >
                    {isInWishlist ? (
                        <HeartSolidIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    ) : (
                        <HeartOutlineIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    )}
                </button>

                {/* Compare Button */}
                <button
                    className={`absolute top-2 right-12 sm:top-3 sm:right-14 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 transition-all duration-200 z-10 hover:scale-110 ${
                        isInCompare ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                    title={isInCompare ? "Remove from compare" : "Add to compare"}
                    onClick={toggleCompare}
                >
                    <ArrowPathIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>

                {/* Type Badge */}
                {(type || isNew !== undefined) && (
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            type === 'new' || isNew
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                        }`}>
                            {type === 'new' || isNew ? 'New' : 'Used'}
                        </span>
                    </div>
                )}
            </div>

            
            <div className="p-3 sm:p-4 grow flex flex-col">
                <h3
                    className="text-base sm:text-lg font-bold text-gray-900 truncate"
                    title={title}
                >
                    {title}
                </h3>
                <p
                    className="text-xs text-gray-600 truncate mt-0.5 sm:mt-1"
                    title={specsSubtitle}
                >
                    {specsSubtitle}
                </p>

                <div className="flex justify-between items-center text-xs text-gray-700 mt-2 sm:mt-3 border-y border-gray-100 py-2">
                    <div className="flex items-center gap-1" title="Mileage">
                        <Gauge size={14} className="sm:size-4 text-blue-600" />
                        <span>{mileage}</span>
                    </div>
                    <div className="flex items-center gap-1" title="Fuel Type">
                        <Fuel size={14} className="sm:size-4 text-blue-600" />
                        <span>{fuelType}</span>
                    </div>
                    <div className="flex items-center gap-1" title="Transmission">
                        <Cog size={14} className="sm:size-4 text-blue-600" />
                        <span>{transmission}</span>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-auto">
          <span className="text-lg sm:text-xl font-bold text-gray-900">
            {displayPrice}
          </span>
                    <Link
                        to={detailsUrl || `/car/${title.toLowerCase().replace(/\s+/g, '-')}`}
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