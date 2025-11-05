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
      { id: 2, label: "$0 - $10K", value: "0-10000" },
      { id: 3, label: "$10K - $30K", value: "10000-30000" },
      { id: 4, label: "$30K - $50K", "value": "30000-50000" },
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


    const getConditionLabel = () =>
      conditionOptions.find((o) => o.value === searchData.condition)?.label;
    const getPriceLabel = () =>
      priceRanges.find((o) => o.value === searchData.price)?.label;

    return (

      <div className="h-[90vh] w-full relative overflow-hidden bg-gray-900">


        <motion.div
          className="absolute inset-0 z-0" 
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

          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 to-black/0" />
        </motion.div>


        <motion.div

          className="relative z-20 flex flex-col items-center justify-start h-full pt-16 sm:pt-20 md:pt-24 lg:pt-32 text-center"
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


          <motion.div

            className="w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-5xl bg-white/70 backdrop-blur-md rounded-lg sm:rounded-full shadow-xl flex flex-col sm:flex-row items-stretch gap-3 sm:gap-2 p-1 sm:p-2"
            variants={fadeInUp}
          >


            <Menu as="div" className="flex-1 relative">
              <MenuButton 

                className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-md sm:rounded-full bg-white p-3 text-sm sm:text-base text-gray-700 hover:bg-gray-100 transition-colors duration-150 shadow-sm"
              >
                {getConditionLabel()}
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </MenuButton>
              <MenuItems
                transition

                className="absolute left-0 z-10 mt-1 sm:mt-2 w-full sm:w-48 md:w-56 origin-top-right rounded-xl bg-white/80 backdrop-blur-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 data-closed:scale-95 data-closed:opacity-0 p-1"
              >
                <div className="py-1">
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

            <Menu as="div" className="flex-1 relative">
              <MenuButton 

                className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-md sm:rounded-full bg-white p-3 text-sm sm:text-base text-gray-700 hover:bg-gray-100 transition-colors duration-150 shadow-sm"
              >
                {searchData.make || "Any Makes"}
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </MenuButton>
              <MenuItems
                transition
                className="absolute left-0 z-10 mt-1 sm:mt-2 w-full sm:w-48 md:w-56 origin-top-right rounded-xl bg-white/80 backdrop-blur-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 data-closed:scale-95 data-closed:opacity-0 p-1"
              >
                <div className="py-1">
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


            <Menu as="div" className="flex-1 relative">
              <MenuButton
                disabled={!selectedMake}

                className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-md sm:rounded-full bg-white p-3 text-sm sm:text-base text-gray-700 hover:bg-gray-100 transition-colors duration-150 disabled:bg-gray-50/50 disabled:cursor-not-allowed disabled:text-gray-400 shadow-sm"
              >
                {searchData.model || "Any Models"}
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </MenuButton>
              <MenuItems
                transition
                className="absolute left-0 z-10 mt-1 sm:mt-2 w-full sm:w-48 md:w-56 origin-top-right rounded-xl bg-white/80 backdrop-blur-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 data-closed:scale-95 data-closed:opacity-0 p-1"
              >
                <div className="py-1">
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


            <Menu as="div" className="flex-1 relative">
              <MenuButton 

                className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-md sm:rounded-full bg-white p-3 text-sm sm:text-base text-gray-700 hover:bg-gray-100 transition-colors duration-150 shadow-sm"
              >
                {getPriceLabel()}
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </MenuButton>
              <MenuItems
                transition
                className="absolute left-0 z-10 mt-1 sm:mt-2 w-full sm:w-48 md:w-56 origin-top-right rounded-xl bg-white/80 backdrop-blur-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 data-closed:scale-95 data-closed:opacity-0 p-1"
              >
                <div className="py-1">
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


            <motion.button
              onClick={handleSearch}
              className="w-full sm:w-auto rounded-full sm:rounded-full bg-blue-900 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 p-3"
              whileHover={{ scale: 1.01, }}
              whileTap={{ scale: 0.9, }}
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