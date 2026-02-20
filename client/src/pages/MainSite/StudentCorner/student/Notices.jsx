"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Download, CalendarDays, AlertTriangle } from "lucide-react";

const noticesData = [
    {
        id: 1,
        title: "Mid Semester Examination Schedule Released",
        category: "Exam",
        date: "2026-02-15",
        urgent: true,
        description:
            "Mid semester examination timetable for all B.Tech branches has been published. Students are advised to download and prepare accordingly.",
        file: "/notices/mid-sem-schedule.pdf",
    },
    {
        id: 2,
        title: "Campus Placement Drive - Infosys",
        category: "Placement",
        date: "2026-02-10",
        urgent: false,
        description:
            "Infosys recruitment drive for final year CSE & IT students. Registration closes on 20th Feb 2026.",
        file: "/notices/infosys-drive.pdf",
    },
    {
        id: 3,
        title: "Annual Tech Fest 2026 Announcement",
        category: "Events",
        date: "2026-02-05",
        urgent: false,
        description:
            "Join our Annual Tech Fest with coding competitions, robotics challenges, and AI hackathons.",
        file: "/notices/techfest-2026.pdf",
    },
    {
        id: 4,
        title: "Internal Assessment Submission Deadline",
        category: "Academic",
        date: "2026-02-01",
        urgent: true,
        description:
            "Last date to submit internal assessment assignments is 25th Feb 2026.",
        file: "/notices/internal-assessment.pdf",
    },
];

const categories = ["All", "Academic", "Exam", "Placement", "Events"];

export default function Notices() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");

    const filteredNotices = noticesData.filter((notice) => {
        const matchesCategory =
            activeCategory === "All" || notice.category === activeCategory;
        const matchesSearch = notice.title
            .toLowerCase()
            .includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

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
                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeCategory === cat
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "bg-white border hover:bg-blue-50"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Notices Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredNotices.map((notice) => (
                        <motion.div
                            key={notice.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                        >
                            {/* Urgent Badge */}
                            {notice.urgent && (
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
                                {notice.date}
                            </div>

                            <p className="text-gray-600 text-sm mb-4">
                                {notice.description}
                            </p>

                            <div className="flex justify-between items-center">
                                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                                    {notice.category}
                                </span>

                                <a
                                    href={notice.file}
                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
                                    download
                                >
                                    <Download size={16} />
                                    Download
                                </a>
                            </div>
                        </motion.div>
                    ))}
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