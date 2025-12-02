"use client";
import { useState } from "react";

export default function ProjectCarousel() {
  const slides = [
    {
      img: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/R0A0033_copy_small_0-2048x1365-1-1536x1024.jpg",
      tag: "Outcomes",
      title: "Fujifilm Diosynth Biotechnologies – Copenhagen, Denmark",
      desc: "Ginjo provided procurement and contract....",
    },
    {
      img: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/HS2-VL-23575-543A8693-BBVS-HS2-OOC-Station-260421-www.johnzammit.co_.uk-Absolute-Photography-Ltd-1536x1024.jpg",
      tag: "Outcomes",
      title: "HS2 Phase 1 - London, United Kingdom",
      desc: "As a commercial consultancy within the Engineering Delivery ...",
    },
    {
      img: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/1757596750436.jpg",
      tag: "Outcomes",
      title: "STEGRA EPC Project - Stockholm, Sweden",
      desc: "Ginjo supported AFRY with commercial oversight and design coordination...",
    },
    {
      img: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/0_9F1A2263JPG-1.webp",
      tag: "Outcomes",
      title: "Carmelita House – Richmond, United Kingdom",
      desc: "Ginjo provided full commercial management consultancy, including preparation...",
    }
  ];

  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const next = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full h-[480px] overflow-hidden rounded-lg">

      {/* Background Image */}
      <img
        src={slides[current].img}
        className="absolute inset-0 w-full h-full object-cover duration-300"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

      {/* Text Content */}
      <div className="absolute bottom-24 left-10 text-white max-w-3xl">
        <p className="uppercase text-sm tracking-wider opacity-80 mb-1">
          {slides[current].tag}
        </p>

        <h2 className="text-4xl font-bold leading-tight">
          {slides[current].title}
        </h2>

        <p className="mt-4 text-lg font-medium opacity-90">
          {slides[current].desc}
        </p>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 right-10 flex items-center gap-4 text-white">

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="p-3 bg-black/40 hover:bg-black/60 rounded-full"
        >
          <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2">
            <path d="M15 5L8 11L15 17" />
          </svg>
        </button>

        {/* Counter */}
        <span className="text-sm font-medium">
          {current + 1} / {slides.length}
        </span>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="p-3 bg-black/40 hover:bg-black/60 rounded-full"
        >
          <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2">
            <path d="M8 5L15 11L8 17" />
          </svg>
        </button>
      </div>

      {/* See All Projects Button */}
      <div className="absolute bottom-10 left-10">
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200">
          See all projects
        </button>
      </div>

    </section>
  );
}
