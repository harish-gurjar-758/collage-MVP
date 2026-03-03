import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Download, CalendarDays, AlertTriangle } from "lucide-react";
import { getAllNoticeApi, getAllNoticeCategoryApi } from "../../../../Apis/Apis";

export default function Notices() {
    const [notices, setNotices] = useState([]);
    const [noticeCategory, setNoticeCategory] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");

    /* =========================
       FILTER LOGIC FIXED
    ========================= */
    const filteredNotices = notices.filter((notice) => {

        const categoryName =
            typeof notice.category === "object"
                ? notice.category?.noticeCategory
                : notice.category;

        const matchesCategory =
            activeCategory === "All" || categoryName === activeCategory;

        const matchesSearch = notice.title
            ?.toLowerCase()
            .includes(search.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    /* =========================
       GET CATEGORIES
    ========================= */
    const getNoticecategorys = async () => {
        try {
            const res = await getAllNoticeCategoryApi();
            setNoticeCategory(res?.data || []);
        } catch (error) {
            console.log(error);
        }
    };

    /* =========================
       GET NOTICES
    ========================= */
    const getNotices = async () => {
        try {
            const res = await getAllNoticeApi();
            setNotices(res?.data || []);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getNoticecategorys();
        getNotices();
    }, []);

    return (
        <section className="w-full py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl font-bold text-gray-800">
                        📢 Latest Notices
                    </h2>
                    <p className="text-gray-600 mt-3">
                        Stay updated with academic announcements, exams, placements and
                        events.
                    </p>
                </motion.div>

                {/* Search + Filters */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

                    {/* Search */}
                    <div className="relative w-full md:w-1/3">
                        <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search notices..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-3">

                        {/* All Button */}
                        <button
                            onClick={() => setActiveCategory("All")}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeCategory === "All"
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-white border hover:bg-blue-50"
                                }`}
                        >
                            All
                        </button>

                        {noticeCategory.map((cat) => (
                            <button
                                key={cat._id}
                                onClick={() => setActiveCategory(cat.noticeCategory)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeCategory === cat.noticeCategory
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-white border hover:bg-blue-50"
                                    }`}
                            >
                                {cat.noticeCategory}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Notices Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredNotices.map((notice) => {

                        const categoryName =
                            typeof notice.category === "object"
                                ? notice.category?.noticeCategory
                                : notice.category;

                        return (
                            <motion.div
                                key={notice._id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                            >

                                {/* Urgent Badge */}
                                {notice.status === "Urgent" && (
                                    <div className="flex items-center gap-2 text-red-600 mb-2">
                                        <AlertTriangle size={18} />
                                        <span className="text-sm font-semibold">Urgent</span>
                                    </div>
                                )}

                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {notice.title}
                                </h3>

                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <CalendarDays size={16} className="mr-2" />
                                    {notice.dueDate
                                        ? new Date(notice.dueDate).toLocaleDateString()
                                        : ""}
                                </div>

                                <p className="text-gray-600 text-sm mb-4">
                                    {notice.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                                        {categoryName}
                                    </span>

                                    {notice.banner && (
                                        <a
                                            href={notice.banner}
                                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
                                            download
                                        >
                                            <Download size={16} />
                                            Download
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Empty State */}
                {filteredNotices.length === 0 && (
                    <div className="text-center text-gray-500 mt-10">
                        No notices found.
                    </div>
                )}
            </div>
        </section>
    );
}