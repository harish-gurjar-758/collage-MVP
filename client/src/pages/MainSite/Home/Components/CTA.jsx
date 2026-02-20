import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="bg-indigo-600 py-16 text-white text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold mb-4">
                    Admissions Open for 2026 Batch
                </h2>
                <p className="mb-6">
                    Join Collage MVP and shape your future with industry-ready education.
                </p>
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                    Apply Now
                </button>
            </motion.div>
        </section>
    );
}