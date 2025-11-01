import React, { useState } from "react";
import background from "/src/assets/slider51.png.webp";

const HeroSection = () => {
  // Sample car data
  const carMakes = [
    {
      id: 1,
      name: "Tesla",
      models: ["Model S", "Model 3", "Model X", "Model Y"],
    },
    { id: 2, name: "BMW", models: ["X5", "3 Series", "5 Series", "X3"] },
    {
      id: 3,
      name: "Toyota",
      models: ["Camry", "Corolla", "RAV4", "Highlander"],
    },
    { id: 4, name: "Mercedes", models: ["C-Class", "E-Class", "GLE", "GLA"] },
    { id: 5, name: "Audi", models: ["A4", "Q5", "A6", "Q7"] },
  ];

  const priceRanges = [
    { id: 1, label: "All Prices", value: "all" },
    { id: 2, label: "$0 - $10K", value: "0-10000" },
    { id: 3, label: "$10K - $30K", value: "10000-30000" },
    { id: 4, label: "$30K - $50K", value: "30000-50000" },
    { id: 5, label: "$50K+", value: "50000+" },
  ];

  const conditionOptions = [
    { id: 1, label: "Used Cars", value: "used" },
    { id: 2, label: "New Cars", value: "new" },
    { id: 3, label: "Certified Pre-Owned", value: "certified" },
  ];

  const [selectedMake, setSelectedMake] = useState("");
  const [availableModels, setAvailableModels] = useState([]);
  const [searchData, setSearchData] = useState({
    condition: "used",
    make: "",
    model: "",
    price: "all",
  });

  const handleMakeChange = (e) => {
    const makeValue = e.target.value;
    setSelectedMake(makeValue);
    setSearchData({ ...searchData, make: makeValue, model: "" });

    const selectedCar = carMakes.find((car) => car.name === makeValue);
    setAvailableModels(selectedCar ? selectedCar.models : []);
  };

  const handleSearch = () => {
    console.log("Search initiated with:", searchData);
    // Add your search logic here
  };

  return (
    <div className="h-[90vh] w-full relative overflow-hidden bg-[#EEF1FB]">
      <div className="absolute inset-0 z-0 flex items-end justify-center pb-0">
        <img
          src={background}
          alt="Hero Image"
          className="w-[70%] h-auto object-contain"
          style={{ maxHeight: "50vh" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 pt-20 md:pt-32 text-center">
        <p className="text-sm md:text-base text-gray-600 mb-4">
          Find cars for sale and for rent near you
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
          Find Your Dream Car
        </h1>

        {/* Enhanced Search Bar */}
        {/* UPDATED: Added rounded-lg for mobile, sm:rounded-full for desktop */}
        <div className="w-full max-w-5xl bg-white rounded-lg sm:rounded-full shadow-xl flex flex-col sm:flex-row items-stretch gap-2 p-2">
          <select
            className="flex-1 p-3 rounded-lg sm:rounded-full border-none outline-none text-gray-700 text-sm sm:text-base bg-transparent cursor-pointer"
            value={searchData.condition}
            onChange={(e) =>
              setSearchData({ ...searchData, condition: e.target.value })
            }
          >
            {conditionOptions.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            className="flex-1 p-3 rounded-lg sm:rounded-full border-none outline-none text-gray-700 text-sm sm:text-base bg-transparent cursor-pointer"
            value={searchData.make}
            onChange={handleMakeChange}
          >
            <option value="">Any Makes</option>
            {carMakes.map((car) => (
              <option key={car.id} value={car.name}>
                {car.name}
              </option>
            ))}
          </select>

          <select
            className="flex-1 p-3 rounded-lg sm:rounded-full border-none outline-none text-gray-700 text-sm sm:text-base bg-transparent cursor-pointer"
            value={searchData.model}
            onChange={(e) =>
              setSearchData({ ...searchData, model: e.target.value })
            }
            disabled={!selectedMake}
          >
            <option value="">Any Models</option>
            {availableModels.map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
          </select>

          {/* UPDATED: Removed the wrapping div for better flex alignment */}
          <select
            className="flex-1 p-3 rounded-lg sm:rounded-full border-none outline-none text-gray-700 text-sm sm:text-base bg-transparent cursor-pointer"
            value={searchData.price}
            onChange={(e) =>
              setSearchData({ ...searchData, price: e.target.value })
            }
          >
            {priceRanges.map((range) => (
              <option key={range.id} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg sm:rounded-full transition-all duration-300 hover:scale-110 shadow-lg flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
