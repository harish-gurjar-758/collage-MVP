import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getAllNoticeApi } from "../../../Apis/Apis";
import imagePlaceholder from "../../../assets/imagePlaceholder.png";
import { GiClosedDoors } from "react-icons/gi";
import { Button } from "@mui/material";

export default function NewsEvents() {
    const [notices, setNotices] = useState([]);
    const [selectedNotice, setSelectedNotice] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const getNotices = async () => {
            try {
                const res = await getAllNoticeApi();
                setNotices(res?.data || []);
            } catch (error) {
                console.log(error);
            }
        };

        getNotices();
    }, []);

    const handleReadMore = (notice) => {
        setSelectedNotice(notice);
        setOpenModal(true);
        document.body.style.overflow = "hidden";
    };

    const handleClose = () => {
        setOpenModal(false);
        setSelectedNotice(null);
        document.body.style.overflow = "auto";
    };

    // ✅ Helper Function to Check Urgent Status
    const isUrgent = (status) => {
        if (!status) return false;

        const value = status.toLowerCase().trim();

        return (
            value === "urgent" ||
            value === "uresent" ||
            value === "urjent"
        );
    };

    // ✅ Countdown Function
    const getDateInfo = (dueDate) => {
        if (!dueDate) return null;

        const today = new Date();
        const due = new Date(dueDate);

        const diffTime = due.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        return {
            formatted: due.toLocaleDateString(),
            diffDays,
        };
    };

    return (
        <>
            {/* ================= FULL SCREEN MODAL ================= */}
            {openModal && selectedNotice && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="bg-white w-full max-w-4xl rounded-xl shadow-2xl relative overflow-y-auto max-h-[90vh]">

                        <Button
                            variant="contained"
                            color="error"
                            onClick={handleClose}
                            className="!absolute top-4 right-4 !min-w-0 !p-2"
                        >
                            <GiClosedDoors />
                        </Button>

                        <div className="p-6 md:p-10">
                            <img
                                src={selectedNotice.image || imagePlaceholder}
                                alt={selectedNotice.title}
                                className="w-full h-60 md:h-96 object-cover rounded-lg mb-6"
                            />

                            <h1 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4">
                                {selectedNotice.title}
                            </h1>

                            {/* 🔴 Show URGENT badge only if urgent */}
                            {isUrgent(selectedNotice.status) && (
                                <span className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full animate-pulse mr-3">
                                    🚨 URGENT
                                </span>
                            )}

                            {/* 📅 Always Show Due Date If Available */}
                            {selectedNotice.dueDate && (() => {
                                const dateInfo = getDateInfo(selectedNotice.dueDate);
                                if (!dateInfo) return null;

                                return (
                                    <div className="mt-3 text-sm">
                                        <p className="text-gray-700">
                                            <span className="font-semibold">Due Date:</span>{" "}
                                            {dateInfo.formatted}
                                        </p>

                                        {dateInfo.diffDays > 0 ? (
                                            <p className={`${isUrgent(selectedNotice.status) ? "text-red-600" : "text-blue-600"} font-medium`}>
                                                {dateInfo.diffDays} day{dateInfo.diffDays > 1 && "s"} remaining
                                            </p>
                                        ) : dateInfo.diffDays === 0 ? (
                                            <p className="text-orange-600 font-bold">
                                                Deadline is Today!
                                            </p>
                                        ) : (
                                            <p className="text-gray-500 font-medium">
                                                Expired
                                            </p>
                                        )}
                                    </div>
                                );
                            })()}

                            <p className="text-gray-700 leading-7 text-sm md:text-base">
                                {selectedNotice.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* ================= MAIN SECTION ================= */}
            <section className="w-screen py-20 bg-white">
                <div className="w-screen max-w-6xl mx-auto px-6">

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
                        {notices.map((news) => (
                            <SwiperSlide key={news._id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
                                >
                                    <img
                                        src={news.image || imagePlaceholder}
                                        alt={news.title}
                                        className="h-52 w-full object-cover"
                                    />

                                    <div className="p-5">
                                        <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                                            {news.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm leading-6">
                                            {news.description}
                                        </p>

                                        <button
                                            onClick={() => handleReadMore(news)}
                                            className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            Read More →
                                        </button>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}