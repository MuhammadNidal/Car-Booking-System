  import React, { useState } from "react";

  import { motion } from "framer-motion";


  const background = "https://spn-sta.spinny.com/blog/20220228142243/ezgif.com-gif-maker-98-5.jpg?compress=true&quality=80&w=1200&dpr=1";



  import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

  import { ChevronDownIcon } from "@heroicons/react/20/solid";


  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  const imageFadeIn = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Helper to get the display label from the selected value
  const getConditionLabel = () =>
    conditionOptions.find((o) => o.value === searchData.condition)?.label;
  const getPriceLabel = () =>
    priceRanges.find((o) => o.value === searchData.price)?.label;

  return (
    <div className="h-[90vh] w-full relative overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0 flex items-end justify-center pb-4 sm:pb-0">
        <img
          src={background}
          alt="Hero Image"
          className="w-full sm:w-[70%] h-auto object-contain max-h-[40vh] sm:max-h-[50vh]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full px-2 sm:px-4 pt-8 sm:pt-16 md:pt-20 lg:pt-32 text-center">
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-4 px-2">
          Find cars for sale and for rent near you
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 px-2">
          Find Your Dream Car
        </h1>

        {/* Enhanced Search Bar with Headless UI */}
        <div className="w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-5xl bg-white/20 rounded-lg sm:rounded-full shadow-xl flex flex-col sm:flex-row items-stretch gap-1 sm:gap-2 p-1 sm:p-2">
          
          {/* Condition Dropdown */}
          <Menu as="div" className="flex-1 relative">
            <MenuButton className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-md sm:rounded-full bg-transparent p-2 sm:p-3 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">
              {getConditionLabel()}
              <ChevronDownIcon
                className="-mr-1 h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                aria-hidden="true"
              />
            </MenuButton>
            <MenuItems
              transition
              className="absolute left-0 z-10 mt-1 sm:mt-2 w-full sm:w-48 md:w-56 origin-top-right rounded-xl bg-white/60 backdrop-blur-2xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 data-closed:scale-95 data-closed:opacity-0 p-1"
            >
              <div className="py-1">
                {conditionOptions.map((option) => (
                  <MenuItem key={option.id}>
                    <button
                      onClick={() =>
                        setSearchData({ ...searchData, condition: option.value })
                      }
                      className="text-gray-900 group flex w-full items-center rounded-md px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm data-focus:bg-primary data-focus:text-white"
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
            <MenuButton className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-md sm:rounded-full bg-transparent p-2 sm:p-3 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">
              {searchData.make || "Any Makes"}
              <ChevronDownIcon
                className="-mr-1 h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                aria-hidden="true"
              />
            </MenuButton>
            <MenuItems
              transition
              className="absolute left-0 z-10 mt-1 sm:mt-2 w-full sm:w-48 md:w-56 origin-top-right rounded-xl bg-white/60 backdrop-blur-2xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 data-closed:scale-95 data-closed:opacity-0 p-1"
            >
              <div className="py-1">
                {carMakes.map((car) => (
                  <MenuItem key={car.id}>
                    <button
                      onClick={() => handleMakeChange(car.name)}
                      className="text-gray-900 group flex w-full items-center rounded-md px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm data-focus:bg-primary data-focus:text-white"
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
              className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-md sm:rounded-full bg-transparent p-2 sm:p-3 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150 disabled:bg-gray-50/50 disabled:cursor-not-allowed disabled:text-gray-400"
            >
              {searchData.model || "Any Models"}
              <ChevronDownIcon
                className="-mr-1 h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                aria-hidden="true"
              />
            </MenuButton>
            <MenuItems
              transition
              className="absolute left-0 z-10 mt-1 sm:mt-2 w-full sm:w-48 md:w-56 origin-top-right rounded-xl bg-white/60 backdrop-blur-2xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 data-closed:scale-95 data-closed:opacity-0 p-1"
            >
              <div className="py-1">
                {availableModels.map((model, index) => (
                  <MenuItem key={index}>
                    <button
                      onClick={() =>
                        setSearchData({ ...searchData, model: model })
                      }
                      className="text-gray-900 group flex w-full items-center rounded-md px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm data-focus:bg-primary data-focus:text-white"
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
            <MenuButton className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-md sm:rounded-full bg-transparent p-2 sm:p-3 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">
              {getPriceLabel()}
              <ChevronDownIcon
                className="-mr-1 h-4 w-4 sm:h-5 sm:w-5 text-gray-400"
                aria-hidden="true"
              />
            </MenuButton>
            <MenuItems
              transition
              className="absolute left-0 z-10 mt-1 sm:mt-2 w-full sm:w-48 md:w-56 origin-top-right rounded-xl bg-white/60 backdrop-blur-2xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 data-closed:scale-95 data-closed:opacity-0 p-1"
            >
              <div className="py-1">
                {priceRanges.map((range) => (
                  <MenuItem key={range.id}>
                    <button
                      onClick={() =>
                        setSearchData({ ...searchData, price: range.value })
                      }
                      className="text-gray-900 group flex w-full items-center rounded-md px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm data-focus:bg-primary data-focus:text-white"
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
            className="btn btn-sm sm:btn-md btn-primary rounded-full sm:rounded-full transition-all duration-300 shadow-lg flex items-center justify-center p-2 sm:p-3 min-w-[44px] sm:min-w-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
            
              <span className="sm:hidden font-medium">Search</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    );
  };

  export default HeroSection;