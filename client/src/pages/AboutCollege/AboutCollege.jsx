import { motion } from "framer-motion";

export default function AboutCollege() {
    return (
        <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50">

            {/* ================= HERO HEADING ================= */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-indigo-600 mb-6">
                        About Collage MVP
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-8">
                        Collage MVP – College of Technology & Management is a premier
                        institution delivering excellence in education, research, innovation,
                        and industry-focused learning experiences.
                    </p>
                </motion.div>

                {/* ================= IMAGE + INTRO ================= */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80"
                            alt="Tech College Campus"
                            className="rounded-3xl shadow-2xl w-full h-[500px] object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-indigo-600/10 rounded-3xl"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">
                            A Leading Technology Institution
                        </h2>

                        <p className="text-gray-600 leading-8 mb-6">
                            Established with a mission to create future innovators,
                            Collage MVP provides undergraduate, postgraduate, and doctoral
                            programs designed to meet global industry standards.
                        </p>

                        <p className="text-gray-600 leading-8">
                            Our programs emphasize real-world application, research excellence,
                            leadership development, and entrepreneurship.
                        </p>
                    </motion.div>
                </div>

                {/* ================= PROGRAMS SECTION ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">
                        Programs Offered
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "BCA",
                                desc: "Focuses on programming, software development, database management, and IT systems."
                            },
                            {
                                title: "MCA",
                                desc: "Advanced software engineering, AI, machine learning, and system architecture."
                            },
                            {
                                title: "B.Tech",
                                desc: "Specializations in Computer Science, Mechanical, Civil, and Electrical Engineering."
                            },
                            {
                                title: "M.Tech",
                                desc: "Research-oriented advanced engineering programs with innovation focus."
                            },
                            {
                                title: "PhD",
                                desc: "Doctoral research programs in emerging technologies and engineering sciences."
                            }
                        ].map((program, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
                            >
                                <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                                    {program.title}
                                </h3>
                                <p className="text-gray-600 leading-7">
                                    {program.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ================= CAMPUS LIFE ================= */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

                    <motion.img
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1600&q=80"
                        alt="Campus Life"
                        className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
                    />

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">
                            Vibrant Campus & Events
                        </h2>

                        <p className="text-gray-600 leading-8 mb-6">
                            We organize national-level tech fests, hackathons, cultural
                            festivals, research symposiums, and entrepreneurship summits.
                        </p>

                        <ul className="space-y-3 text-gray-700">
                            <li>✔ Annual Tech Fest & Hackathons</li>
                            <li>✔ AI & Machine Learning Workshops</li>
                            <li>✔ Research Conferences</li>
                            <li>✔ Cultural & Sports Events</li>
                            <li>✔ Startup & Innovation Programs</li>
                        </ul>
                    </motion.div>
                </div>

                {/* ================= STATS SECTION ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-4 gap-8 text-center"
                >
                    {[
                        { number: "5000+", label: "Students" },
                        { number: "150+", label: "Faculty Members" },
                        { number: "50+", label: "Research Projects" },
                        { number: "100%", label: "Placement Support" }
                    ].map((stat, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-3xl font-bold text-indigo-600 mb-2">
                                {stat.number}
                            </h3>
                            <p className="text-gray-600">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}