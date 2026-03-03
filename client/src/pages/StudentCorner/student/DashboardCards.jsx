import { FaBook, FaClipboardList, FaBriefcase, FaBell } from "react-icons/fa";

export default function DashboardCards() {
    const cards = [
        { icon: <FaBook />, title: "Courses", value: "8 Active" },
        { icon: <FaClipboardList />, title: "Assignments", value: "5 Pending" },
        { icon: <FaBriefcase />, title: "Internships", value: "12 Openings" },
        { icon: <FaBell />, title: "Notices", value: "3 New" },
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
                    >
                        <div className="text-indigo-600 text-3xl mb-3">
                            {card.icon}
                        </div>
                        <h3 className="font-semibold">{card.title}</h3>
                        <p className="text-gray-500">{card.value}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}