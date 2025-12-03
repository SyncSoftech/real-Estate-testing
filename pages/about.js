"use client";

import { Link } from "lucide-react";
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
    image: 'https://www.turnerandtownsend.com/media/3hjdcisp/_h3a9156_2560-x-1440px.webp?width=1280&height=512&v=1dae81280a67960',
    link: "/about/what-we-do",
  },
  {
    id: 2,
    title: "Our story",
    desc: "How we've transformed to create global impact.",
    image:'https://www.turnerandtownsend.com/media/ynyjevlq/_h3a0051_2560-x-1440px.webp?width=1000&height=500&v=1dae81280b32390',
    link: "/about/our-story",
  },
  {
    id: 3,
    title: "Our purpose and values",
    desc: "What drives us.",
    image: 'https://www.turnerandtownsend.com/media/to1guq35/annual-review-2023-24.webp?rxy=0.5265505266673643,0.62475569310424&width=1000&height=500&v=1dae81280886a10',
    link: "/about/our-purpose-values",
  },
 
  {
    id: 4,
    title: "Our people",
    desc: "A talented team of experts, delivering impactful projects.",
    image: 'https://www.turnerandtownsend.com/media/d0lnmeqe/_h3a9854_2560-x-1440px.webp?width=1000&height=500&v=1dae812808d9a30',
    link: "/ourPeople",
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
      <header className=" -mb-20 py-20 bg-cover bg-center bg-no-repeat  text-white rounded-b-2xl overflow-hidden"style={{
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
      url('https://www.turnerandtownsend.com/media/vxyftgqu/_h3a0079_2560-x-1440px.webp?width=1280&height=512&v=1dadc4c4e844f10')
    `
    
  }}>
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
      <div className=" bg-white rounded-t-2xl mt-10 mx-auto px-10 py-8">


 <main className="min-h-screen bg-white text-[#0f1724]">
      {/* Breadcrumb + top heading & copy */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <nav className="text-sm text-[#0f4b7f] mb-6">
          <a className="hover:underline" href="#">Home</a>
          <span className="mx-3">›</span>
          <span>About us</span>
        </nav>
 {/* About Us Section */}
    <section className="max-w-6xl mx-auto px-6 py-12">
  {/* ABOUT US */}
  <div className=" rounded-2xl  shadow-sm">
    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-[#0f1724]">
      About Us
    </h2>

    <div className="prose max-w-none text-gray-800 space-y-6">
      <p className="text-lg leading-relaxed">
        Ginjo is a commercial services partner that helps construction projects succeed with clarity, control and confidence. We provide expert cost management, contract support and project leadership that remove uncertainty and protect value from planning through to final account.
      </p>

      <p className="text-lg leading-relaxed">
        Our approach is practical. We understand the real pressures felt on live projects and take responsibility for solving problems before they grow. Clients rely on us for accurate reporting, informed advice and strong commercial systems that allow delivery teams to perform at their best.
      </p>

      <p className="text-lg leading-relaxed">
        We support residential, commercial and data centre projects across the United Kingdom and Europe. We also work within major EPCM environments and provide commercial support to subcontractors who need strong backing on complex works.
      </p>

      <p className="text-lg leading-relaxed">
        Ginjo is built on integrity, accountability and collaboration. We stand by our decisions, support our clients at every stage and deliver solutions that create measurable improvement. Our goal is simple. Better commercial outcomes for every project we touch.
      </p>
    </div>
  </div>

  {/* SECOND SECTION */}
  <div className="mt-12 max-w-6xl mx-auto">
    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight font-bold mb-6">
      We transform together
    </h1>

    <div className="space-y-4 text-lg leading-relaxed text-gray-800 max-w-4xl">
      <p>
        We Transform together: We improve the way projects are delivered by bringing clarity, structure and commercial discipline to every stage of the journey. Strong outcomes do not happen by chance. They are built through clear thinking, honest collaboration and a shared commitment to doing things properly.

      </p>


      <p>
        
By working closely with our clients and partners, we help strengthen their projects, protect value and support the teams responsible for delivering them. Our work spans real estate, infrastructure, aviation, rail, energy and complex industrial programmes across the UK and internationally. In every environment, our focus remains the same. Provide practical commercial guidance, improve decision making and ensure that no opportunity or risk is ever overlooked.


      </p>

      <p>
       We combine hands on commercial experience with a deep understanding of FIDIC, NEC and JCT environments, allowing us to support complex projects with confidence and precision. Clients trust us because we stay close to the detail, work with complete honesty and bring a reliable standard of delivery that their teams can depend on.
      </p>

      
    </div>
  </div>
</section>

</div>
      {/* Video-style hero */}
     <section className="w-full px-0">
  <div className="bg-transparent flex items-end lg:items-center">
    <div className="p-8 md:p-12 lg:p-16 mx-auto w-full">
      <div className="relative rounded-2xl overflow-hidden">
        {/* VIDEO instead of image */}
        <div className="relative">
          <video
            src="https://videos.pexels.com/video-files/4665000/4665000-uhd_2560_1440_30fps.mp4"
            className="w-full h-64 md:h-80 lg:h-[420px] object-cover rounded-2xl"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl" />
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

              <div className="bg-[#bac6c7] h-full p-5 rounded-b-2xl">
                <h3 className="font-serif text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-gray-700">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Outcomes grid (2x2) with right column offset (mt-10 on lg screens) */}
      {/* <section className="max-w-6xl mx-auto px-6 pb-16">
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
      </section> */}
    </main>

        </div>
        
<div className="w-full bg-white">

      {/* Join our team banner */}
      <section className="w-full bg-[#bac6c7] text-Black">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
            Join our team
          </h2>

          <p className="text-sm md:text-base max-w-2xl  mb-6">
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
