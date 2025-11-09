import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// --- Asset URL ---
const background = "https://spn-sta.spinny.com/blog/20220228142243/ezgif.com-gif-maker-98-5.jpg?compress=true&quality=80&w=1200&dpr=1";

// --- Animation Variants ---
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

// --- Main Component ---
const HeroSection = () => {
  // --- Data Arrays ---
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
    { id: 2, label: "₨0 – ₨20Lac /-", value: "0-2000000" },
    { id: 3, label: "₨20Lac – ₨60Lac /-", value: "2000000-6000000" },
    { id: 4, label: "₨60Lac – ₨1Crore /-", value: "6000000-10000000" },
    { id: 5, label: "₨1Crore+ /-", value: "10000000+" },
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
    // In a real app, you'd navigate or filter based on searchData
    console.log("Search initiated with:", searchData);
  };

  // --- Helper Functions ---
  const getConditionLabel = () =>
    conditionOptions.find((o) => o.value === searchData.condition)?.label;
  const getPriceLabel = () =>
    priceRanges.find((o) => o.value === searchData.price)?.label;

  return (
    // Fixed: Using w-full instead of w-screen to prevent horizontal overflow
    <div className="h-dvh lg:h-[110vh] w-full relative bg-gray-900">
      h
      {/* FIX 2: Added `overflow-hidden` to this inner div.
          This keeps the background image clipped to the hero bounds,
          which was the original intent, without affecting the UI controls. */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        variants={imageFadeIn}
        initial="hidden"
        animate="visible"
      >
        <img
          src={background}
          alt="Hero"
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/1920x1080/e0e7ff/3730a3?text=Image+Error'; }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 to-black/0" />
      </motion.div>

      {/* Hero Content */}
      {/* FIX 8: Reduced top padding to move content up and give
          dropdowns more space to open. */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-start h-dvh pt-12 sm:pt-16 md:pt-20 lg:pt-24 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-base sm:text-lg md:text-xl text-white mb-2 sm:mb-4 px-2 drop-shadow-lx"
          variants={fadeInUp}
        >
          Find cars for sale and for rent near you
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 px-2 drop-shadow-lg"
          variants={fadeInUp}
        >
          Find Your Dream Car
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-white max-w-lg md:max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2 drop-shadow-md"
          variants={fadeInUp}
        >
          We make finding your perfect vehicle simple and fast. Browse our extensive inventory today.
        </motion.p>

        {/* Search Bar Container */}
        {/* FIX 3: Changed mobile layout from `flex-col` to `grid grid-cols-1`.
            This provides a more stable stacking layout on small screens.
            Also adjusted padding `p-3` for mobile. */}
        <motion.div
          className="w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-5xl bg-white/70 backdrop-blur-md rounded-lg sm:rounded-full shadow-xl grid grid-cols-1 sm:flex sm:flex-row items-stretch gap-3 p-3 sm:p-2"
          variants={fadeInUp}
        >
          {/* Condition Dropdown */}
          <Menu as="div" className="flex-1 relative">
            <MenuButton
              // FIX 4: Changed `rounded-md` to `rounded-lg` for mobile
              // to match the container's rounding.
              className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-lg sm:rounded-full bg-white p-3 text-sm sm:text-base text-gray-700 hover:bg-gray-100 transition-colors duration-150 shadow-sm"
            >
              {getConditionLabel()}
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </MenuButton>
            <MenuItems
              transition
              // FIX 5: Increased `z-index` to `z-50` to ensure
              // it appears above all other content.
              className="absolute left-0 z-50 mt-1 sm:mt-2 w-full sm:w-56 origin-top-left sm:origin-top-right rounded-xl bg-white/80 backdrop-blur-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 data-closed:scale-95 data-closed:opacity-0 p-1"
            >
              {/* FIX 6: Added `max-h-60 overflow-y-auto` to this div
                  to make the *list* scrollable if it's too long,
                  preventing it from running off-screen. */}
              <div className="py-1 max-h-60 overflow-y-auto">
                {conditionOptions.map((option) => (
                  <MenuItem key={option.id}>
                    <motion.button
                      onClick={() =>
                        setSearchData({ ...searchData, condition: option.value })
                      }
                      className="text-gray-900 group flex w-full items-center rounded-md px-3 py-2 text-sm sm:text-base data-focus:bg-blue-900 data-focus:text-white"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {option.label}
                    </motion.button>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>

          {/* Make Dropdown */}
          <Menu as="div" className="flex-1 relative">
            <MenuButton
              // FIX 4: Changed `rounded-md` to `rounded-lg`
              className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-lg sm:rounded-full bg-white p-3 text-sm sm:text-base text-gray-700 hover:bg-gray-100 transition-colors duration-150 shadow-sm"
            >
              {searchData.make || "Any Makes"}
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </MenuButton>
            <MenuItems
              transition
              // FIX 5: Increased `z-index`
              className="absolute left-0 z-50 mt-1 sm:mt-2 w-full sm:w-56 origin-top-left sm:origin-top-right rounded-xl bg-white/80 backdrop-blur-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 data-closed:scale-95 data-closed:opacity-0 p-1"
            >
              {/* FIX 6: Added `max-h-60 overflow-y-auto` */}
              <div className="py-1 max-h-60 overflow-y-auto">
                {carMakes.map((car) => (
                  <MenuItem key={car.id}>
                    <motion.button
                      onClick={() => handleMakeChange(car.name)}
                      className="text-gray-900 group flex w-full items-center rounded-md px-3 py-2 text-sm sm:text-base data-focus:bg-blue-900 data-focus:text-white"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {car.name}
                    </motion.button>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>

          {/* Model Dropdown */}
          <Menu as="div" className="flex-1 relative">
            <MenuButton
              disabled={!selectedMake}
              // FIX 4: Changed `rounded-md` to `rounded-lg`
              className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-lg sm:rounded-full bg-white p-3 text-sm sm:text-base text-gray-700 hover:bg-gray-100 transition-colors duration-150 disabled:bg-gray-50/50 disabled:cursor-not-allowed disabled:text-gray-400 shadow-sm"
            >
              {searchData.model || "Any Models"}
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </MenuButton>
            <MenuItems
              transition
              // FIX 5: Increased `z-index`
              className="absolute left-0 z-50 mt-1 sm:mt-2 w-full sm:w-56 origin-top-left sm:origin-top-right rounded-xl bg-white/80 backdrop-blur-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 data-closed:scale-95 data-closed:opacity-0 p-1"
            >
              {/* FIX 6: Added `max-h-60 overflow-y-auto` */}
              <div className="py-1 max-h-60 overflow-y-auto">
                {availableModels.map((model, index) => (
                  <MenuItem key={index}>
                    <motion.button
                      onClick={() =>
                        setSearchData({ ...searchData, model: model })
                      }
                      className="text-gray-900 group flex w-full items-center rounded-md px-3 py-2 text-sm sm:text-base data-focus:bg-blue-900 data-focus:text-white"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {model}
                    </motion.button>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>

          {/* Price Dropdown */}
          <Menu as="div" className="flex-1 relative">
            <MenuButton
              // FIX 4: Changed `rounded-md` to `rounded-lg`
              className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-lg sm:rounded-full bg-white p-3 text-sm sm:text-base text-gray-700 hover:bg-gray-100 transition-colors duration-150 shadow-sm"
            >
              {getPriceLabel()}
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </MenuButton>
            <MenuItems
              transition
              // FIX 5: Increased `z-index`
              className="absolute left-0 z-50 mt-1 sm:mt-2 w-full sm:w-56 origin-top-left sm:origin-top-right rounded-xl bg-white/80 backdrop-blur-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 data-closed:scale-95 data-closed:opacity-0 p-1"
            >
              {/* FIX 6: Added `max-h-60 overflow-y-auto` */}
              <div className="py-1 max-h-60 overflow-y-auto">
                {priceRanges.map((range) => (
                  <MenuItem key={range.id}>
                    <motion.button
                      onClick={() =>
                        setSearchData({ ...searchData, price: range.value })
                      }
                      className="text-gray-900 group flex w-full items-center rounded-md px-3 py-2 text-sm sm:text-base data-focus:bg-blue-900 data-focus:text-white"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {range.label}
                    </motion.button>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>

          {/* Search Button */}
          <motion.button
            onClick={handleSearch}
            // FIX 7: Changed `rounded-full` to `rounded-lg` for mobile
            // to match the other buttons and container.
            className="w-full sm:w-auto rounded-lg sm:rounded-full bg-blue-900 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 p-3"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
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