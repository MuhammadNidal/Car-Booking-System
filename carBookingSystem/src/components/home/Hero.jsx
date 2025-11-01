import React, { useState } from "react";
import background from "/src/assets/slider51.png.webp";

// Imports from Headless UI
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
// Import the icon from the standard v2.0 heroicons library
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const HeroSection = () => {
  // --- Data Arrays (These are necessary for MenuItems to map over) ---
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

  // --- State ---
  const [selectedMake, setSelectedMake] = useState("");
  const [availableModels, setAvailableModels] = useState([]);
  const [searchData, setSearchData] = useState({
    condition: "used",
    make: "",
    model: "",
    price: "all",
  });

  // --- Event Handlers ---
  const handleMakeChange = (makeValue) => {
    setSelectedMake(makeValue);
    setSearchData({ ...searchData, make: makeValue, model: "" });
    const selectedCar = carMakes.find((car) => car.name === makeValue);
    setAvailableModels(selectedCar ? selectedCar.models : []);
  };

  const handleSearch = () => {
    console.log("Search initiated with:", searchData);
  };

  // Helper to get the display label from the selected value
  const getConditionLabel = () =>
    conditionOptions.find((o) => o.value === searchData.condition)?.label;
  const getPriceLabel = () =>
    priceRanges.find((o) => o.value === searchData.price)?.label;

  return (
  <div className="h-[90vh] w-full relative overflow-hidden bg-surface">
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

        {/* Enhanced Search Bar with Headless UI */}
        <div className="w-full max-w-5xl bg-white/20 rounded-lg sm:rounded-full shadow-xl flex flex-col sm:flex-row items-stretch gap-2 p-2">
          
          {/* Condition Dropdown */}
          <Menu as="div" className="flex-1 relative">
            {/* UPDATED: Cleaned up button styling */}
            <MenuButton className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-lg sm:rounded-full bg-transparent p-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">
              {getConditionLabel()}
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </MenuButton>
            {/* UPDATED: Added backdrop blur, transparency, and new styling */}
            <MenuItems
              transition
              className="absolute left-0 z-10 mt-2 w-full sm:w-56 origin-top-right rounded-xl bg-white/60 backdrop-blur-2xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 data-closed:scale-95 data-closed:opacity-0 p-1"
            >
              <div className="py-1">
                {conditionOptions.map((option) => (
                  <MenuItem key={option.id}>
                    <button
                      onClick={() =>
                        setSearchData({ ...searchData, condition: option.value })
                      }
                      className="text-gray-900 group flex w-full items-center rounded-md px-3 py-2 text-sm data-focus:bg-primary data-focus:text-white"
                    >
                      {option.label}
                    </button>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>

          {/* Make Dropdown */}
          <Menu as="div" className="flex-1 relative">
            <MenuButton className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-lg sm:rounded-full bg-transparent p-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">
              {searchData.make || "Any Makes"}
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </MenuButton>
            <MenuItems
              transition
              className="absolute left-0 z-10 mt-2 w-full sm:w-56 origin-top-right rounded-xl bg-white/60 backdrop-blur-2xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 data-closed:scale-95 data-closed:opacity-0 p-1"
            >
              <div className="py-1">
                {carMakes.map((car) => (
                  <MenuItem key={car.id}>
                    <button
                      onClick={() => handleMakeChange(car.name)}
                      className="text-gray-900 group flex w-full items-center rounded-md px-3 py-2 text-sm data-focus:bg-primary data-focus:text-white"
                    >
                      {car.name}
                    </button>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>

          {/* Model Dropdown */}
          <Menu as="div" className="flex-1 relative">
            <MenuButton
              disabled={!selectedMake}
              className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-lg sm:rounded-full bg-transparent p-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150 disabled:bg-gray-50/50 disabled:cursor-not-allowed"
            >
              {searchData.model || "Any Models"}
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </MenuButton>
            <MenuItems
              transition
              className="absolute left-0 z-10 mt-2 w-full sm:w-56 origin-top-right rounded-xl bg-white/60 backdrop-blur-2xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 data-closed:scale-95 data-closed:opacity-0 p-1"
            >
              <div className="py-1">
                {availableModels.map((model, index) => (
                  <MenuItem key={index}>
                    <button
                      onClick={() =>
                        setSearchData({ ...searchData, model: model })
                      }
                      className="text-gray-900 group flex w-full items-center rounded-md px-3 py-2 text-sm data-focus:bg-primary data-focus:text-white"
                    >
                      {model}
                    </button>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>

          {/* Price Dropdown */}
          <Menu as="div" className="flex-1 relative">
            <MenuButton className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-lg sm:rounded-full bg-transparent p-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">
              {getPriceLabel()}
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </MenuButton>
            <MenuItems
              transition
              className="absolute left-0 z-10 mt-2 w-full sm:w-56 origin-top-right rounded-xl bg-white/80 backdrop-blur-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 data-closed:scale-95 data-closed:opacity-0 p-1"
            >
              <div className="py-1">
                {priceRanges.map((range) => (
                  <MenuItem key={range.id}>
                    <button
                      onClick={() =>
                        setSearchData({ ...searchData, price: range.value })
                      }
                      className="text-gray-900 group flex w-full items-center rounded-md px-3 py-2 text-sm data-focus:bg-primary data-focus:text-white"
                    >
                      {range.label}
                    </button>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="btn btn-md btn-primary rounded-full transition-all duration-300 shadow-lg flex items-center justify-center p-3"
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