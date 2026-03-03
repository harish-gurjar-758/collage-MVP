import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section className="relative w-full h-screen overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2070&auto=format&fit=crop"
                    alt="College Building"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
                <div className="max-w-4xl text-white">

                    <motion.h1
                        initial={{ opacity: 0, y: -60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
                    >
                        Empowering Minds <br /> Building Future Leaders
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="mt-6 text-lg sm:text-xl text-gray-200"
                    >
                        Experience world-class education, innovative research,
                        and industry-driven programs at Collage MVP.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                        className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <button
                            onClick={() => navigate("/admissions")}
                            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-full text-white font-semibold shadow-lg hover:scale-105"
                        >
                            Get Started
                        </button>

                        <button
                            onClick={() => navigate("/about-college")}
                            className="px-8 py-3 border border-white hover:bg-white hover:text-black transition rounded-full font-semibold hover:scale-105"
                        >
                            Learn More
                        </button>
                    </motion.div>
                </div>
            </div>
            {/* Bottom Wave Decoration */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                <svg className="relative block w-full h-[100px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0V46.29c47.74,22,103.26,29,158,17,70.36-15,136.33-58,207-74,73.84-16.66,149.37-4,221,21,69.6,24.4,138.33,54,212,63,71.66,8.75,144.74-5.4,215-23.46,66.46-17.16,130.9-40.7,187-62.93V0Z"
                        opacity=".25"
                        fill="#ffffff"
                    ></path>
                </svg>
            </div>
        </section>
    );
}