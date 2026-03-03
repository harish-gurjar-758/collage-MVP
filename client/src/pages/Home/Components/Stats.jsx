export default function Stats() {
    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 text-center gap-8">
                <div>
                    <h3 className="text-4xl font-bold text-blue-600">5000+</h3>
                    <p>Students</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-blue-600">120+</h3>
                    <p>Faculty</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-blue-600">50+</h3>
                    <p>Programs</p>
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-blue-600">25+</h3>
                    <p>Awards</p>
                </div>
            </div>
        </section>
    );
}