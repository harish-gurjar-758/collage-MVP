import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";


const newsData = [
    {
        title: "Annual Tech Fest 2026",
        desc: "Collage MVP is organizing its Annual Tech Fest with national-level competitions and hackathons.",
        image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070",
    },
    {
        title: "AI & Machine Learning Workshop",
        desc: "Special workshop on AI/ML conducted by industry experts for final year students.",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070",
    },
];


export default function NewsEvents() {
    return (
        <section className="py-20 bg-white">
            {/* <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                    </div>
                </div>
            </section> */}
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">
                    Latest News & Updates
                </h2>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{ delay: 3000 }}
                    spaceBetween={30}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {newsData.map((news, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition"
                            > <img
                                    src={news.image}
                                    alt={news.title}
                                    className="rounded-t-xl h-60 w-full object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                                        {news.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-6">
                                        {news.desc}
                                    </p>
                                    <button className="mt-4 text-blue-600">
                                        Read More →
                                    </button>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section >
    );
}