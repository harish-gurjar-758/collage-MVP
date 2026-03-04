import { useState } from "react";
import {
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from "@mui/material";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

/* ============================= */
/* 1️⃣ DEPARTMENT ARRAY (OUTSIDE) */
/* ============================= */

const departments = ["BCA", "B.Tech", "MCA", "M.Tech", "PHD"];

/* ============================= */
/* 2️⃣ SUBJECT DATA (OUTSIDE)     */
/* ============================= */

const timetableData = {
    BCA: {
        Monday: ["Data Structures", "AI", "DBMS", "Maths", "Web Dev Lab"],
        Tuesday: ["OS", "AI", "DBMS", "Cloud", "Programming Lab"],
        Wednesday: ["Networking", "Maths", "AI", "Mini Project", "DBMS Lab"],
        Thursday: ["Data Structures", "Cloud", "Web Dev", "AI Lab", "Sports"],
        Friday: ["DBMS", "OS", "Networking Lab", "Project", "Seminar"],
        Saturday: ["Revision", "Mock Test", "Workshop", "Lab", "Activity"]
    },
    "B.Tech": {
        Monday: ["Physics", "Engineering Maths", "C Programming", "Electronics Lab", "Workshop"],
        Tuesday: ["Mechanics", "C Programming", "Physics Lab", "Maths", "Seminar"],
        Wednesday: ["Electronics", "Maths", "Programming Lab", "Project", "Sports"],
        Thursday: ["Mechanics", "Physics", "Workshop Lab", "Maths", "Activity"],
        Friday: ["Electronics", "C Programming", "Lab", "Project", "Seminar"],
        Saturday: ["Test", "Revision", "Workshop", "Lab", "Activity"]
    },
    MCA: {
        Monday: ["Advanced Java", "AI", "ML", "Cloud Lab", "Project"],
        Tuesday: ["Big Data", "ML", "AI Lab", "Research", "Seminar"],
        Wednesday: ["Cyber Security", "ML", "Project Lab", "Cloud", "Activity"],
        Thursday: ["AI", "Big Data Lab", "Research", "Seminar", "Sports"],
        Friday: ["Cyber Security Lab", "Project", "Workshop", "Cloud", "Revision"],
        Saturday: ["Test", "Presentation", "Lab", "Project", "Activity"]
    },
    "M.Tech": {
        Monday: ["Advanced AI", "Deep Learning", "Research Lab", "Seminar", "Project"],
        Tuesday: ["Data Mining", "AI Lab", "Cloud Research", "Workshop", "Activity"],
        Wednesday: ["Deep Learning Lab", "Project", "Research", "Seminar", "Sports"],
        Thursday: ["Data Mining Lab", "AI", "Research", "Workshop", "Activity"],
        Friday: ["Project", "Thesis Work", "Lab", "Seminar", "Revision"],
        Saturday: ["Presentation", "Test", "Research", "Lab", "Activity"]
    },
    PHD: {
        Monday: ["Research Work", "Paper Writing", "Seminar", "Thesis", "Lab"],
        Tuesday: ["Literature Review", "Research", "Workshop", "Thesis", "Discussion"],
        Wednesday: ["Paper Presentation", "Research Lab", "Analysis", "Seminar", "Activity"],
        Thursday: ["Thesis Work", "Research", "Workshop", "Seminar", "Sports"],
        Friday: ["Paper Writing", "Research", "Lab", "Discussion", "Revision"],
        Saturday: ["Conference Prep", "Research", "Thesis", "Lab", "Activity"]
    }
};

/* ============================= */
/* 3️⃣ TIME PERIOD ARRAY          */
/* ============================= */

const timePeriods = [
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 1:00",
    "2:00 - 3:00"
];

/* ============================= */
/* 4️⃣ MAIN COMPONENT             */
/* ============================= */

export default function TimeTable() {

    const [selectedDept, setSelectedDept] = useState("BCA");

    const handleDownload = () => {
        window.open(`/api/download-timetable/${selectedDept}`, "_blank");
    };

    return (
        <section className="py-16 bg-gray-50 px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">
                Weekly Time Table
            </h2>

            {/* ================= Department Selector ================= */}
            <div className="max-w-6xl mx-auto mb-6 flex flex-col md:flex-row gap-4 items-center">

                <FormControl fullWidth>
                    <InputLabel>Select Department</InputLabel>
                    <Select
                        value={selectedDept}
                        label="Select Department"
                        onChange={(e) => setSelectedDept(e.target.value)}
                    >
                        {departments.map((dept) => (
                            <MenuItem key={dept} value={dept}>
                                {dept}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* Download Button */}
                <Button
                    variant="contained"
                    color="success"
                    startIcon={<DownloadIcon />}
                    onClick={handleDownload}
                    className="whitespace-nowrap"
                >
                    Download PDF
                </Button>
            </div>

            {/* ================= Timetable Table ================= */}
            <div className="overflow-x-auto max-w-6xl mx-auto">
                <table className="w-full border border-gray-300">

                    {/* Table Head */}
                    <thead className="bg-indigo-600 text-white">
                        <tr>
                            <th className="p-3 border">Day</th>
                            {timePeriods.map((time, index) => (
                                <th key={index} className="border p-3">
                                    {time}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {Object.keys(timetableData[selectedDept]).map((day) => (
                            <tr key={day} className="text-center border">
                                <td className="p-3 border font-semibold bg-gray-100">
                                    {day}
                                </td>

                                {timetableData[selectedDept][day].map(
                                    (subject, index) => (
                                        <td key={index} className="border p-3">
                                            {subject}
                                        </td>
                                    )
                                )}
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </section>
    );
}