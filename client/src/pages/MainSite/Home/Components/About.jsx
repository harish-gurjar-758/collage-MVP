import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function About() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    
    return (
        <>
            {/* MAIN SECTION */}
            <section className="relative py-28 bg-gradient-to-br from-indigo-50 via-white to-blue-50 overflow-hidden">

                {/* Background Blur Elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">

                    {/* IMAGE SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative group"
                    >
                        {/* Main Image */}
                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
                            alt="Tech College Campus"
                            className="rounded-3xl shadow-2xl w-full h-[520px] object-cover transition duration-700 group-hover:scale-105"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 to-transparent rounded-3xl"></div>
                    </motion.div>

                    {/* CONTENT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-8"
                    >

                        {/* Badge */}
                        <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 font-semibold rounded-full text-sm tracking-wide">
                            🚀 Premier Tech Institution
                        </span>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Shaping Future Tech Leaders
                            <span className="text-indigo-600"> Through Innovation</span>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 text-lg leading-8">
                            Collage MVP – College of Technology & Management offers BCA, MCA,
                            B.Tech, M.Tech, and PhD programs designed for industry excellence.
                            We combine practical learning, real-world projects, research innovation,
                            hackathons, and leadership development to build tomorrow’s tech pioneers.
                        </p>

                        {/* Buttons */}
                        <div className="flex gap-6 pt-6">
                            <motion.button
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate("/programs")}
                                className="px-8 py-4 bg-indigo-600 text-white rounded-full shadow-xl hover:bg-indigo-700 transition font-semibold"
                            >
                                Explore Programs
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate("/campus-tour")}
                                className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition font-semibold"
                            >
                                Campus Tour
                            </motion.button>
                        </div>

                    </motion.div>
                </div>
            </section>

            {/* FULLSCREEN MODAL */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: 80, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.8, y: 80, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white w-full max-w-5xl h-[90vh] rounded-3xl overflow-y-auto p-10 relative shadow-2xl"
                        >
                            {/* CLOSE BUTTON */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-6 right-6 text-gray-500 hover:text-red-500 text-2xl"
                            >
                                ✕
                            </button>

                            {/* CONTENT */}
                            <motion.h2
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl font-bold text-indigo-600 mb-6"
                            >
                                About Collage MVP
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-gray-700 leading-8 mb-6"
                            >
                                Established with a vision to empower future innovators,
                                Collage MVP stands as a center of excellence in higher education.
                                We offer undergraduate, postgraduate, and doctoral programs
                                designed to align with global industry standards.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="grid md:grid-cols-2 gap-8 mt-8"
                            >
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                                        🌟 Our Vision
                                    </h3>
                                    <p className="text-gray-600 leading-7">
                                        To become a globally recognized institution fostering
                                        innovation, leadership, and technological advancement.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                                        🎯 Our Mission
                                    </h3>
                                    <p className="text-gray-600 leading-7">
                                        Deliver world-class education, encourage research,
                                        and prepare students for real-world challenges through
                                        practical exposure and mentorship.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="mt-10"
                            >
                                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                                    Why Choose Us?
                                </h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li>✔ Modern Smart Classrooms & Labs</li>
                                    <li>✔ Industry Partnerships & Internships</li>
                                    <li>✔ Experienced Faculty & Research Experts</li>
                                    <li>✔ 100% Placement Assistance</li>
                                    <li>✔ Innovation & Startup Support</li>
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="mt-10"
                            >

                                {/* Glass Card Floating */}
                                <div className="grid grid-cols-3 gap-6 pt-4">
                                    <div className="bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl p-6 w-60 border border-white/40">
                                        <h4 className="text-indigo-600 font-bold text-xl">15+ Years</h4>
                                        <p className="text-gray-600 text-sm">Excellence in Tech Education</p>
                                    </div>
                                </div>

                                {/* Stats Section */}
                                <div className="grid grid-cols-3 gap-6 pt-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-indigo-600">10K+</h3>
                                        <p className="text-gray-500 text-sm">Students</p>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-indigo-600">200+</h3>
                                        <p className="text-gray-500 text-sm">Faculty</p>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-indigo-600">95%</h3>
                                        <p className="text-gray-500 text-sm">Placement Rate</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}