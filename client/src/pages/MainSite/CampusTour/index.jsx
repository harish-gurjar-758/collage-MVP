import { motion } from "framer-motion";

export default function CampusTour() {
    return (
        <section className="min-h-screen bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto">

                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-center text-gray-900 mb-16"
                >
                    Experience Our Smart Campus
                </motion.h1>

                {/* Hero Image */}
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80"
                    className="rounded-3xl shadow-2xl w-full h-[500px] object-cover mb-20"
                />

                {/* Facilities Grid */}
                <div className="grid md:grid-cols-3 gap-10">

                    {[
                        "AI Innovation Lab",
                        "Smart Digital Classrooms",
                        "Advanced Robotics Center",
                        "Startup Incubation Hub",
                        "Central Research Library",
                        "High-Performance Computing Lab"
                    ].map((facility, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl shadow-lg text-center"
                        >
                            <h3 className="text-xl font-semibold text-gray-800">
                                {facility}
                            </h3>
                        </motion.div>
                    ))}

                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-24 text-center"
                >
                    <button className="px-10 py-4 bg-indigo-600 text-white rounded-full shadow-xl hover:bg-indigo-700 transition font-semibold">
                        Book Physical Visit
                    </button>
                </motion.div>

            </div>
        </section>
    );
}