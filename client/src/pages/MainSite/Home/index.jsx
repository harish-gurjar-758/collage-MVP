import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Departments from "./Components/Departments";
import WhyChooseUs from "./Components/WhyChooseUs";
import Stats from "./Components/Stats";
import NewsEvents from "./Components/NewsEvents";
import Testimonials from "./Components/Testimonials";
import CTA from "./Components/CTA";

export default function Home() {

    return (
        <div className="w-full overflow-hidden">

            {/* HERO SECTION */}
            <Hero />

            {/* ABOUT SECTION */}
            <About />

            {/* DEPARTMENTS SECTION */}
            <Departments />

            {/* WHY CHOOSE US SECTION*/}
            <WhyChooseUs />

            {/* STATUS SECTION */}
            <Stats />

            {/* NEW & ENENTS */}
            <NewsEvents />

            {/* TESTIMONIALS SECTION */}
            <Testimonials />

            {/* CTA SECTION */}
            <CTA />

        </div>
    );
}