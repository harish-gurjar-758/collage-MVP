import { motion } from "framer-motion";

export default function StudentHero() {
    return (
        <section className="relative h-[60vh] flex items-center justify-center text-white">
            <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                className="absolute inset-0 w-full h-full object-cover"
                alt="Students"
            />
            <div className="absolute inset-0 bg-black/60"></div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 text-center"
            >
                <h1 className="text-5xl font-bold mb-4">Student Corner</h1>
                <p className="text-lg">
                    Access all academic resources, results, placements & more.
                </p>
            </motion.div>
        </section>
    );
}