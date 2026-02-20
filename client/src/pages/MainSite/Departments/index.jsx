"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardActions,
    Button,
    Chip,
    Avatar,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";

const departmentsData = [
    {
        id: 1,
        name: "Computer Science & Engineering",
        short: "CSE",
        description:
            "The CSE department focuses on Artificial Intelligence, Data Science, Cyber Security, Cloud Computing and Full Stack Development with industry-integrated curriculum.",
        image:
            "https://images.unsplash.com/photo-1581090700227-4c4f50f6e0c4",
        hod: {
            name: "Dr. Anil Sharma",
            qualification: "Ph.D. in Artificial Intelligence (IIT Delhi)",
            experience: "18+ Years Academic & Research Experience",
            image:
                "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
        },
        degrees: ["B.Tech CSE", "M.Tech AI", "PhD Computer Science"],
        rankers: [
            { name: "Rahul Verma", cgpa: "9.82 CGPA" },
            { name: "Sneha Kapoor", cgpa: "9.76 CGPA" },
            { name: "Arjun Mehta", cgpa: "9.71 CGPA" },
        ],
    },
    {
        id: 2,
        name: "Electronics & Communication Engineering",
        short: "ECE",
        description:
            "ECE department offers expertise in Embedded Systems, IoT, VLSI Design, Robotics and Communication Systems with state-of-the-art laboratories.",
        image:
            "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
        hod: {
            name: "Dr. Meera Nair",
            qualification: "Ph.D. in VLSI Design (IISc Bangalore)",
            experience: "20+ Years Teaching Experience",
            image:
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
        },
        degrees: ["B.Tech ECE", "M.Tech VLSI", "PhD Electronics"],
        rankers: [
            { name: "Karan Patel", cgpa: "9.78 CGPA" },
            { name: "Pooja Singh", cgpa: "9.73 CGPA" },
            { name: "Aditya Rao", cgpa: "9.69 CGPA" },
        ],
    },
    {
        id: 3,
        name: "Mechanical Engineering",
        short: "ME",
        description:
            "Mechanical Engineering department specializes in Automotive Engineering, Thermal Systems, CAD/CAM and Industrial Automation.",
        image:
            "https://images.unsplash.com/photo-1581091215367-59ab6bafcf0c",
        hod: {
            name: "Dr. Rajesh Kulkarni",
            qualification: "Ph.D. in Thermal Engineering (IIT Bombay)",
            experience: "22+ Years Industry & Academic Experience",
            image:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        },
        degrees: ["B.Tech Mechanical", "M.Tech Thermal", "PhD Mechanical"],
        rankers: [
            { name: "Vikram Joshi", cgpa: "9.81 CGPA" },
            { name: "Neha Deshmukh", cgpa: "9.74 CGPA" },
            { name: "Rohan Iyer", cgpa: "9.70 CGPA" },
        ],
    },
];

export default function DepartmentsPage() {
    const [activeDept, setActiveDept] = useState("All");

    const filters = ["All", "CSE", "ECE", "ME"];

    const filteredDepartments =
        activeDept === "All"
            ? departmentsData
            : departmentsData.filter((dept) => dept.short === activeDept);

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* HERO */}
            <section className="relative h-[60vh] flex items-center justify-center text-white">
                <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585"
                    alt="College Campus"
                    className="absolute w-full h-full object-cover"
                />
                <div className="absolute bg-black/60 w-full h-full"></div>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-center"
                >
                    <h1 className="text-5xl font-bold mb-4">Our Departments</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        Explore our world-class academic departments designed to prepare
                        future-ready engineers and innovators.
                    </p>
                </motion.div>
            </section>

            {/* FILTERS */}
            <section className="py-10 text-center">
                {filters.map((filter) => (
                    <Button
                        key={filter}
                        variant={activeDept === filter ? "contained" : "outlined"}
                        sx={{ margin: 1 }}
                        onClick={() => setActiveDept(filter)}
                    >
                        {filter}
                    </Button>
                ))}
            </section>

            {/* DEPARTMENTS */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredDepartments.map((dept) => (
                        <motion.div
                            key={dept.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card sx={{ borderRadius: 4 }}>
                                <img
                                    src={dept.image}
                                    alt={dept.name}
                                    className="h-52 w-full object-cover"
                                />
                                <CardContent>
                                    <h2 className="text-xl font-bold mb-2">{dept.name}</h2>
                                    <p className="text-gray-600 text-sm mb-3">
                                        {dept.description}
                                    </p>

                                    {/* Degrees */}
                                    <div className="mb-3">
                                        {dept.degrees.map((degree, index) => (
                                            <Chip
                                                key={index}
                                                label={degree}
                                                icon={<SchoolIcon />}
                                                sx={{ margin: 0.5 }}
                                            />
                                        ))}
                                    </div>

                                    {/* HOD */}
                                    <div className="flex items-center gap-3 mt-4">
                                        <Avatar src={dept.hod.image} />
                                        <div>
                                            <p className="font-semibold">{dept.hod.name}</p>
                                            <p className="text-xs text-gray-500">
                                                {dept.hod.qualification}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {dept.hod.experience}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Rankers */}
                                    <div className="mt-4">
                                        <p className="font-semibold flex items-center gap-2">
                                            <EmojiEventsIcon color="warning" />
                                            Top Rankers
                                        </p>
                                        {dept.rankers.map((student, idx) => (
                                            <p key={idx} className="text-sm text-gray-600">
                                                {idx + 1}. {student.name} - {student.cgpa}
                                            </p>
                                        ))}
                                    </div>
                                </CardContent>

                                <CardActions>
                                    <Button size="small" variant="contained">
                                        View Details
                                    </Button>
                                </CardActions>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="bg-blue-900 text-white py-16 text-center">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    <div>
                        <GroupsIcon fontSize="large" />
                        <h2 className="text-3xl font-bold mt-2">5,000+</h2>
                        <p>Students Enrolled</p>
                    </div>
                    <div>
                        <SchoolIcon fontSize="large" />
                        <h2 className="text-3xl font-bold mt-2">120+</h2>
                        <p>Faculty Members</p>
                    </div>
                    <div>
                        <EmojiEventsIcon fontSize="large" />
                        <h2 className="text-3xl font-bold mt-2">95%</h2>
                        <p>Placement Rate</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Ready to Join Our Departments?
                </h2>
                <Button variant="contained" size="large">
                    Apply Now
                </Button>
            </section>
        </div>
    );
}