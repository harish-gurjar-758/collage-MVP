import { motion } from "framer-motion";
import {
    FaLaptopCode,
    FaRobot,
    FaCogs,
    FaMicrochip,
    FaFlask,
} from "react-icons/fa";

const departments1 = [
    {
        name: "BCA",
        desc: "Bachelor of Computer Applications focuses on software development, programming, and modern IT technologies.",
        icon: <FaLaptopCode />,
    },
    {
        name: "MCA",
        desc: "Master of Computer Applications prepares students for advanced software engineering and AI-based careers.",
        icon: <FaRobot />,
    },
    {
        name: "B.Tech",
        desc: "Bachelor of Technology offers specializations in CSE, Mechanical, Civil, and Electrical Engineering.",
        icon: <FaCogs />,
    },
    {
        name: "M.Tech",
        desc: "Master of Technology provides research-oriented advanced technical education and innovation exposure.",
        icon: <FaMicrochip />,
    },
    {
        name: "PhD",
        desc: "Doctoral research programs focused on innovation, academic excellence, and industry-level solutions.",
        icon: <FaFlask />,
    },
];

export default function Departments() {
    return (
        <section className="bg-slate-50 py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">
                    Our Departments
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {departments1.map((dept, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 cursor-pointer group text-center"
                        >
                            {/* Animated Icon */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    delay: index * 0.2,
                                }}
                                whileHover={{ rotate: 10, scale: 1.2 }}
                                className="text-5xl text-indigo-600 mb-4 flex justify-center"
                            >
                                {dept.icon}
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-indigo-600 mb-3 group-hover:text-indigo-800 transition">
                                {dept.name}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-6">
                                {dept.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}