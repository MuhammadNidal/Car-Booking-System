import React from "react";
import { Truck, Plug } from "lucide-react";

// Import your SVGs as file paths
import car1logo from "/src/assets/logo/car.svg";
import car2logo from "/src/assets/logo/Convertable.svg";
import car3logo from "/src/assets/logo/Sedan.svg";
import car4logo from "/src/assets/logo/SUV.svg";

// Array to hold the category data
const carTypes = [
  { name: "SUV", icon: car4logo },
  { name: "Sedan", icon: car3logo },
  { name: "Hatchback", icon: car1logo },
  { name: "Convertible", icon: car2logo },
  { name: "Truck", icon: Truck }, // This is a component
  { name: "Electric", icon: Plug }, // This is a component
];

const LogosSection = () => {
  return (
    <section className="w-full py-16 bg-white ">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
          Browse by Type
        </h2>

        {/* Icons Row - UPDATED with responsive gaps */}
        <div className="flex flex-row flex-wrap justify-center gap-x-4 gap-y-6 sm:gap-x-12 sm:gap-y-8 max-w-6xl mx-auto">
          {carTypes.map((type) => {
            const Icon = type.icon;

            return (
              <a
                href="#" // You can change this to your actual link
                key={type.name}
                // UPDATED with responsive width and gap
                className=" flex flex-col items-center justify-start gap-2 sm:gap-3 w-16 sm:w-24 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {/* UPDATED with responsive container size */}
                <div className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16">
                  {typeof Icon === "string" ? (
                    // UPDATED with responsive image size
                    <img
                      src={Icon}
                      alt={type.name}
                      className="h-8 w-8 sm:h-10 sm:w-10"
                    />
                  ) : (
                    // UPDATED: Removed 'size' prop, using responsive classes
                    <Icon
                      strokeWidth={1.5}
                      className="h-8 w-8 sm:h-10 sm:w-10"
                    />
                  )}
                </div>
                {/* UPDATED with responsive text size */}
                <span className="text-xs sm:text-sm font-medium text-center">
                  {type.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
