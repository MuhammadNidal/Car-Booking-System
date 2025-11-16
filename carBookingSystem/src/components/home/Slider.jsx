import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import CarCard from "../CarCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HeartIcon, EyeIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";

const NextArrow = ({ className, onClick }) => (
    <div
        className={`${className} absolute top-1/2 -translate-y-1/2 z-10 cursor-pointer hidden sm:flex 
        items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg 
        hover:bg-gray-100 transition`}
        onClick={onClick}
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
            className="w-6 h-6 text-gray-800">
            <path strokeLinecap="round" strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    </div>
);

const PrevArrow = ({ className, onClick }) => (
    <div
        className={`${className} absolute top-1/2 -translate-y-1/2 z-10 cursor-pointer hidden sm:flex 
        items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg 
        hover:bg-gray-100 transition`}
        onClick={onClick}
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
            className="w-6 h-6 text-gray-800">
            <path strokeLinecap="round" strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
    </div>
);

const SliderComponent = () => {
    const [featuredCars, setFeaturedCars] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [hasMounted, setHasMounted] = useState(false);
    const [slidesToShow, setSlidesToShow] = useState(1);

    // Load cars + wishlist
    useEffect(() => {
        setHasMounted(true);

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
                featured: true,
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
                featured: true,
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
                featured: true,
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
                featured: true,
            }
        ];

        const savedCars = JSON.parse(localStorage.getItem("cars") || "[]");
        const featuredExisting = savedCars.filter(c => c.featured).slice(0, 10);

        if (featuredExisting.length > 0) {
            setFeaturedCars(featuredExisting);
        } else {
            setFeaturedCars(sampleCars);
            if (savedCars.length === 0) {
                localStorage.setItem("cars", JSON.stringify(sampleCars));
            }
        }

        const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
        setWishlist(savedWishlist);

        const updateSlides = () => {
            if (window.innerWidth >= 1024) setSlidesToShow(3);
            else if (window.innerWidth >= 640) setSlidesToShow(2);
            else setSlidesToShow(1);
        };

        updateSlides();
        window.addEventListener("resize", updateSlides);
        return () => window.removeEventListener("resize", updateSlides);
    }, []);

    const toggleWishlist = (carId) => {
        const updated = wishlist.includes(carId)
            ? wishlist.filter(id => id !== carId)
            : [...wishlist, carId];

        setWishlist(updated);
        localStorage.setItem("wishlist", JSON.stringify(updated));
    };

    if (!hasMounted) return null;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        customPaging: () => <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />,
    };

    return (
        <section className="py-12 relative px-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
 <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                    Featured Cars
                </h2>
                <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
                    Discover premium new and used cars — selected for reliability,
                    performance, and great value. Updated daily.
                </p>
            </div>
                <Slider {...settings}>
                    {featuredCars.map((car) => (
                        <div key={car.id} className="p-3">
                            <CarCard
                                title={car.title}
                                price={car.price}
                                year={car.year}
                                mileage={car.mileage}
                                fuelType={car.fuel}
                                transmission={car.transmission}
                                location={car.location}
                                imageUrl={car.image}
                                badgeText={car.type === "new" ? "New" : "Used"}
                                detailsUrl={`/cars/${car.id}`}
                                isWishlisted={wishlist.includes(car.id)}
                                toggleWishlist={() => toggleWishlist(car.id)}
                            />
                        </div>
                    ))}
                </Slider>

            </div>
        </section>
    );
};

export default SliderComponent;
