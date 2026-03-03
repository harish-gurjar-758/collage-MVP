export default function AcademicResources() {
    return (
        <section className="py-16 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Academic Resources</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {["Lecture Notes", "E-Books", "Video Lectures"].map((item, i) => (
                    <div
                        key={i}
                        className="p-6 border rounded-lg hover:bg-indigo-50 transition"
                    >
                        <h3 className="font-semibold mb-2">{item}</h3>
                        <button className="text-indigo-600">View Resources →</button>
                    </div>
                ))}
            </div>
        </section>
    );
}