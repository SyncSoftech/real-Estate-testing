"use client";

import { useState, useEffect, useRef } from "react";

/**
 * PeopleStoriesCarousel.js
 *
 * - Uses Tailwind CSS classes; tweak spacing/typography tokens if needed.
 * - Uses your uploaded image file path as src (your environment will transform the local path to a URL).
 * - Autoplay + manual nav + keyboard left/right support.
 */

const STORIES = [
  {
    id: 1,
    name: "Daniel Ginn",
    role: "Director",
    quote:
      "Daniel has steered Ginjo’s growth by focusing on what matters – helping clients protect margin, recover value, and deliver stronger project outcome Daniel is an accomplished Senior Contracts and Procurement Professional with extensive experience across diverse sectors in the construction industry. His career spans high-profile international projects across Europe.. ",
    image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Daniel-Ginn-Website-scaled-e1761411935637.jpg",
    jobsText: "265 jobs in 42 locations",
  },
  {
    id: 2,
    name: "Rishi Rao",
    role: "Associate Director – Operations",
    quote:
      "Rishi plays a key role in Ginjo’s growth by building strategic partnerships with subcontractors, opening doors to new opportunities, and driving business development initiatives that benefit both our clients and trusted network. Rishi is a highly driven, solutions-focused leader with nearly 25 years of experience bridging construction operations and technology... ",
    image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Image-5-scaled-e1761411869601.jpg",
    jobsText: "320 jobs in 30 locations",
  },
  {
    id: 3,
    name: "Adersh Rajagopalan",
    role: "Associate Director",
    quote:
      "Known for his calm, structured approach, Adersh is the go-to person when complex contractual issues or disputes arise. He has a gift for translating dense legal clauses into commercially sound strategies that protect clients’ interests without fuelling conflict. As Associate Director at Ginjo, Adersh leads end-to-end commercial management from procurement planning and contract negotiation...",
    image: "/leaders/Adersh.jpg",
    jobsText: "180 jobs in 22 locations",
  },
  {
    id: 4,
    name: "Sabahat Mazhar",
    role: "Operations Manager",
    quote:
      "As the Supply Chain Operations Manager at Ginjo Construction, Sabahat optimises supply chain processes to ensure the efficient flow of materials, resources, and information for seamless project execution. With an MBA in Supply Chain Management and a Master’s in International Logistics, Materials, and Supply Chain Management from the University of Essex...",
    image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/sabahat-1.jpg",
    jobsText: "180 jobs in 22 locations",
  },
  {
    id: 5,
    name: "Mrunali Ghumare",
    role: "Jr. Quantity Surveyor",
    quote:
      "Mrunali is a skilled Junior Quantity Surveyor at Ginjo, supporting our commercial delivery teams with cost management, contract administration, and risk assessment across projects. With a background in civil engineering and quantity surveying, Mrunali has contributed to major infrastructure schemes...  ",
    image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/fe54640e-78e5-4aff-90f8-2cb87b24433a-e1761904596669.jpg",
    jobsText: "180 jobs in 22 locations",
  },
  // Add more story objects as needed
];

export default function PeopleStoriesCarousel() {
  const [index, setIndex] = useState(0);
  const total = STORIES.length;
  const autoplayRef = useRef(null);

  useEffect(() => {
    // autoplay every 6s
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 6000);

    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      clearInterval(autoplayRef.current);
      window.removeEventListener("keydown", onKey);
    };
  }, [total]);

  const prev = () => {
    clearInterval(autoplayRef.current);
    setIndex((i) => (i - 1 + total) % total);
  };

  const next = () => {
    clearInterval(autoplayRef.current);
    setIndex((i) => (i + 1) % total);
  };

  const story = STORIES[index];

  return (
    <section className="w-full bg-white ">
      <div className="  grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
        {/* LEFT: image */}
        <div className="relative overflow-hidden">
          <img
            src={story.image}
            alt={`${story.name} portrait`}
            className="w-full h-full object-cover"
            style={{ maxHeight: 520 }}
          />
        </div>

        {/* RIGHT: card */}
        <div className="relative max-h-[620px] bg-[#bac6c7] lg:-ml-10 p-10 md:p-16 flex flex-col justify-between rounded-tl-3xl rounded-bl-3xl border-l-4 border-custom-grey">
          {/* top badge (jobs pill) */}
         
         

          {/* quote block */}
          <div className="">
            {/* big quote marks */}
            <div className="text-6xl md:text-7xl font-bold text-[#333] leading-none mb-4">“</div>

            <blockquote className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed max-w-[640px]">
              {story.quote}
            </blockquote>

            <div className="">
              <div className="text-lg font-semibold text-[#0f1724]">
                {story.name}
              </div>
              <div className="text-sm text-gray-600 mt-1">{story.role}</div>
            </div>
          </div>

          {/* navigation / controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center bg-[#bac6c7] hover:shadow"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="text-sm text-gray-700">
                {index + 1} / {total}
              </div>

              <button
                onClick={next}
                aria-label="Next"
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center bg-[#bac6c7] hover:shadow"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div>
              <button
                className="px-6 py-3 border border-gray-700 rounded-md bg-[#bac6c7] hover:bg-gray-100 text-sm font-medium"
                onClick={() => {
                  // navigate to stories listing - replace with your route
                  window.location.href = "/ourPeople";
                }}
              >
                Explore our people stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
