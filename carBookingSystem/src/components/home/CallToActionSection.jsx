import React from "react";
// Using 'CarFront' and 'BadgeDollarSign' as placeholders for your icons
import { CarFront, BadgeDollarSign, ArrowRight } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Looking For a Car */}
          <div className="group bg-[#EBF1FF] rounded-2xl p-8 flex flex-col sm:flex-row justify-between items-center gap-6  transition-all duration-300 hover:shadow-lg">
            {/* Text Content */}
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                Are You Looking
                <br />
                For a Car ?
              </h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                We are commited to providing our customers with exceptional
                service.
              </p>
              <button className="cursor-pointer bg-blue-600 text-white font-medium py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center sm:justify-start gap-2 mx-auto sm:mx-0">
                Get Started
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Image/Icon Content */}
            <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              {/* Placeholder icon from lucide-react */}
              <CarFront
                size={110}
                className="text-blue-500"
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* Card 2: Sell a Car */}
          <div className="group bg-[#FFEBFA] rounded-2xl p-8 flex flex-col sm:flex-row justify-between items-center gap-6  transition-all duration-300 hover:shadow-lg">
            {/* Text Content */}
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                Do You Want To
                <br />
                Sell a Car ?
              </h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                We are commited to providing our customers with exceptional
                service.
              </p>
              <button className="cursor-pointer bg-[#050B20] text-white font-medium py-3 px-6 rounded-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center sm:justify-start gap-2 mx-auto sm:mx-0">
                Get Started
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Image/Icon Content */}
            <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              {/* Placeholder icon from lucide-react */}
              <BadgeDollarSign
                size={110}
                className="text-pink-500"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
