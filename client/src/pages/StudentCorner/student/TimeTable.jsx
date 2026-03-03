export default function TimeTable() {
    return (
        <section className="py-16 bg-gray-50 px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">
                Weekly Time Table
            </h2>

            <div className="overflow-x-auto max-w-6xl mx-auto">
                <table className="w-full border">
                    <thead className="bg-indigo-600 text-white">
                        <tr>
                            <th className="p-3">Day</th>
                            <th>9-10</th>
                            <th>10-11</th>
                            <th>11-12</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center border">
                            <td className="p-3">Monday</td>
                            <td>Data Structures</td>
                            <td>AI</td>
                            <td>DBMS</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}