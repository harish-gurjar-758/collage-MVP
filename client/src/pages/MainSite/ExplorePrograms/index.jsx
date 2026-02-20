import { motion } from "framer-motion";

export default function ExplorePrograms() {
  const programs = [
    {
      title: "Artificial Intelligence & Data Science",
      desc: "Advanced AI, ML, Deep Learning, Big Data & real-world industry projects.",
    },
    {
      title: "Cyber Security & Ethical Hacking",
      desc: "Network security, penetration testing, blockchain security & forensics.",
    },
    {
      title: "Cloud Computing & DevOps",
      desc: "AWS, Azure, Kubernetes, Docker & scalable cloud architecture.",
    },
    {
      title: "Full Stack Software Engineering",
      desc: "MERN stack, system design, APIs & production deployment.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-blue-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center text-gray-900 mb-16"
        >
          Future-Ready Academic Programs
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {programs.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold text-indigo-600 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-7">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Industry Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 bg-indigo-600 text-white rounded-3xl p-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Industry-Integrated Learning Model
          </h2>
          <p className="max-w-3xl mx-auto leading-8">
            Live internships, startup incubation, global certifications,
            mentorship from CTOs & real-world capstone projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}