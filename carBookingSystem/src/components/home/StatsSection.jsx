import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              
                <div
                    ref={ref}
                    className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4"
                >
                 
                    <div>
                        <h2 className="text-6xl font-extrabold text-gray-900 tracking-tight">
                            {inView ? (
                                <CountUp start={0} end={1500} duration={3} separator="," />
                            ) : (
                                "0"
                            )}
                            <span className="text-blue-900 ml-1">+</span>
                        </h2>
                        <p className="mt-1 text-sm font-semibold text-gray-500 tracking-wide uppercase">
                            Total Cars
                        </p>
                    </div>

                 
                    <div>
                        <h2 className="text-6xl font-extrabold text-gray-900 tracking-tight">
                        {inView ? (
                            <CountUp start={0} end={5000} duration={3} separator="," />
                        ) : (
                            "0"
                        )}
                        <span className="text-blue-900 ml-1">k+</span>
                        </h2>
                        <p className="mt-1 text-sm font-semibold text-gray-500 tracking-wide uppercase">
                            Happy Customers
                        </p>
                    </div>

                    <div>
                        <h2 className="text-6xl font-extrabold text-gray-900 tracking-tight">
                        {inView ? (
                            <CountUp start={0} end={120} duration={3} separator="," />
                        ) : (
                            "0"
                        )}
                        <span className="text-blue-900 ml-1">+</span>
                        </h2>
                        <p className="mt-1 text-sm font-semibold text-gray-500 tracking-wide uppercase">
                            Dealer's
                        </p>
                    </div>

                    <div>
                        <h2 className="text-6xl font-extrabold text-gray-900 tracking-tight">
                        {inView ? (
                            <CountUp start={0} end={3} duration={3} separator="," />
                        ) : (
                            "0"
                        )}
                        <span className="text-blue-900 ml-1">+</span>
                        </h2>
                        <p className="mt-1 text-sm font-semibold text-gray-500 tracking-wide uppercase">
                            Years
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
