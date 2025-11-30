"use client";

import { useEffect, useMemo, useState } from "react";

/**
 * ProjectsSection.js
 *
 * - Tailwind CSS required.
 * - Uses the same uploaded image for every card:
 *   /mnt/data/02cae41e-0479-42cc-9c44-06e6f19dbfca.png
 *
 * - Features:
 *   * Top blue banner with title + description
 *   * Breadcrumb
 *   * Search input with button
 *   * Filter select controls (Sector / Capability / Country)
 *   * Grid of cards (image + beige content area + rounded corners)
 *   * Pagination controls (prev/next + page numbers)
 *
 * You can plug real data easily by replacing the SAMPLE_PROJECTS array.
 */

const HERO_IMG = "/mnt/data/f6b7e1c9-31a8-49b6-ae87-5f8c8cc2c9f3.png";
const CARD_A = "/mnt/data/92a6fb0c-2ca6-4399-9db7-8b98d701cd66.png";
const CARD_B = "/mnt/data/0b6f4349-096e-4d6b-887a-d054a2f3bc33.png";
const CARD_C = "/mnt/data/ff03fd51-f444-4f38-a582-0fa6bc7b10d7.png";

const FEATURE_CARDS = [
  {
    id: 1,
    title: "What we do",
    desc: "Driving performance at every stage of our clients’ projects and programmes.",
    image: CARD_A,
  },
  {
    id: 2,
    title: "Our story",
    desc: "How we've transformed to create global impact.",
    image: CARD_B,
  },
  {
    id: 3,
    title: "Our purpose and values",
    desc: "What drives us.",
    image: CARD_C,
  },
  {
    id: 4,
    title: "Corporate responsibility",
    desc: "Making a lasting difference, together.",
    image: CARD_A,
  },
  {
    id: 5,
    title: "Our people",
    desc: "A talented team of experts, delivering impactful projects.",
    image: CARD_B,
  },
  {
    id: 6,
    title: "Annual review",
    desc: "Explore our performance and projects.",
    image: CARD_C,
  },
];

const OUTCOMES = [
  { id: 1, title: "Battersea Power Station, UK", image: CARD_A },
  { id: 2, title: "The Elizabeth Line, UK", image: CARD_B },
  { id: 3, title: "DolWin epsilon, Singapore, Norway and Germany", image: CARD_C },
  { id: 4, title: "Shell Real Estate decarbonisation, global", image: CARD_A },
];

export default function About() {
 

  

 

  return (<>
    <main className=" lg:mx-10 bg-white">
      {/* Top blue banner */}
      <header className="bg-[#163c72] -mb-20 text-white rounded-b-2xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">About Us</h1>
          <p className="max-w-3xl mt-4 text-sm md:text-base leading-relaxed text-white/90">
            We are involved in many of the world's most impactful construction
            projects and programmes. See where our work has helped to transform
            communities.
          </p>
        </div>
      </header>

      {/* Content area */}
      <div className=" bg-white rounded-t-2xl mt-10 mx-auto px-6 py-8">


 <main className="min-h-screen bg-white text-[#0f1724]">
      {/* Breadcrumb + top heading & copy */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <nav className="text-sm text-[#0f4b7f] mb-6">
          <a className="hover:underline" href="#">Home</a>
          <span className="mx-3">›</span>
          <span>About us</span>
        </nav>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight font-bold mb-6">
          We transform together
        </h1>

        <div className="space-y-4 text-lg leading-relaxed text-gray-800 max-w-4xl">
          <p>
            Transformation is about rethinking what's possible and delivering projects that shape a better future.
          </p>
          <p>
            Great projects don't just happen. They're built on bold ideas, collaboration and a <a href="#" className="text-[#0f4b7f] underline">shared purpose</a>.
          </p>
          <p>
            By working closely with our clients and partners, we deliver projects and programmes that drive businesses forward, help improve people's lives and safeguard the planet.
          </p>
          <p>
            Our expertise spans real estate, infrastructure, energy and natural resources – the segments that define how we live, work and connect. From delivering resilient cities to advancing clean energy, we approach every challenge with the same goal – to make a meaningful and lasting impact.
          </p>
          <p>
            With over 22,000 experts across more than 60 countries, we bring unmatched talent and insight to every project, combining deep local knowledge with a global perspective.
          </p>
        </div>
      </div>

      {/* Video-style hero */}
      <section className="w-full px-0">
         

          <div className="bg-transparent flex items-end lg:items-center">
            <div className="p-8 md:p-12 lg:p-16  mx-auto w-full">
              <div className="relative rounded-2xl overflow-hidden">
                {/* large image area with dark gradient bottom */}
                <div className="relative">
                  <img src={HERO_IMG} alt="video hero" className="w-full h-64 md:h-80 lg:h-[420px] object-cover rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl" />
                </div>

                {/* play circle */}
                <button
                  className="absolute left-6 bottom-6 w-14 h-14 rounded-full flex items-center justify-center bg-[#0ea5e9] border-4 border-white shadow-lg"
                  aria-label="Play video"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 6v12l10-6L7 6z" fill="white" />
                  </svg>
                </button>

                {/* meta */}
                <div className="absolute left-6 bottom-6 md:left-6 md:bottom-6 text-white" style={{ transform: "translateY(10px)" }}>
                  <div className="font-serif text-xl md:text-2xl font-bold">About us</div>
                  <div className="text-sm mt-2 flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="inline-block">
                      <path d="M12 1v11" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <path d="M21 21H3" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span>01:34</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Feature cards grid (6 cards) */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURE_CARDS.map((c) => (
            <article key={c.id} className="rounded-2xl overflow-hidden shadow-sm border border-transparent hover:shadow-md transition">
              <div className="h-40 overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
              </div>

              <div className="bg-[#f2ebe3] p-5 rounded-b-2xl">
                <h3 className="font-serif text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-gray-700">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Outcomes grid (2x2) with right column offset (mt-10 on lg screens) */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-6">
          <div className="text-sm uppercase tracking-wide text-gray-600">Outcomes</div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3">A testament to innovation</h2>
          <p className="text-gray-700 mt-3 max-w-2xl">Discover how we turn challenge into opportunity and complexity into success for our clients across the world.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {OUTCOMES.map((o, i) => {
            // Add a small top margin for the right column items (index 1 and 3)
            const rightColumn = i % 2 === 1; // true for second and fourth items
            return (
              <article
                key={o.id}
                className={`relative rounded-xl overflow-hidden group ${rightColumn ? "lg:mt-10" : ""}`}
              >
                <img src={o.image} alt={o.title} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl" />
                <div className="absolute left-4 bottom-4 right-4">
                  <h3 className="text-white font-serif text-lg font-semibold leading-tight">{o.title}</h3>
                  <div className="mt-3 flex justify-end">
                    <button className="w-9 h-9 rounded-full border border-white/70 bg-transparent flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5l8 7-8 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50">Explore all projects</button>
        </div>
      </section>
    </main>

        </div>
        
<div className="w-full bg-white">

      {/* Join our team banner */}
      <section className="w-full bg-[#163c72] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
            Join our team
          </h2>

          <p className="text-sm md:text-base max-w-2xl text-white/90 mb-6">
            Work on some of the most exciting projects and programmes happening around the world.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-[#163c72] px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:brightness-95 transition">
              Explore current opportunities
            </button>

            <button className="border border-white text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition">
              Discover our Q&A career journeys
            </button>
          </div>
        </div>
      </section>

      {/* Get in touch */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
          Get in touch
        </h3>

        <div className="max-w-xl text-sm text-gray-800">
          <div className="mb-3 font-medium">Contact us</div>

          <ul className="space-y-3">
            <li>
              <a
                className="inline-flex items-center gap-3 text-[#0f4b7f] hover:underline"
                href="mailto:careers@example.com"
              >
                {/* envelope icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-none">
                  <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7" stroke="#0f4b7f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 8.5l9 6 9-6" stroke="#0f4b7f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <span className="text-sm font-medium">Email</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* ensure uploaded asset is registered by environment (hidden) */}
      <img
        src="/mnt/data/5f71424f-8e8f-48b4-8aeb-04a09f977f10.png"
        alt="uploaded-asset"
        className="hidden"
      />
    </div>
       
      
    </main>


    </>

  );
}
