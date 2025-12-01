// "use client";

// import { useEffect, useMemo, useState } from "react";

// /**
//  * ProjectsSection.js
//  *
//  * - Tailwind CSS required.
//  * - Uses the same uploaded image for every card:
//  *   /mnt/data/02cae41e-0479-42cc-9c44-06e6f19dbfca.png
//  *
//  * - Features:
//  *   * Top blue banner with title + description
//  *   * Breadcrumb
//  *   * Search input with button
//  *   * Filter select controls (Sector / Capability / Country)
//  *   * Grid of cards (image + beige content area + rounded corners)
//  *   * Pagination controls (prev/next + page numbers)
//  *
//  * You can plug real data easily by replacing the SAMPLE_PROJECTS array.
//  */

// const IMAGE_URL = "/mnt/data/02cae41e-0479-42cc-9c44-06e6f19dbfca.png";

// const SAMPLE_PROJECTS = Array.from({ length: 24 }).map((_, i) => ({
//   id: i + 1,
//   title:
//     i % 4 === 0
//       ? "Braunschweig Municipal Hospital Programme, Germany"
//       : i % 4 === 1
//       ? "AENA, Brazil"
//       : i % 4 === 2
//       ? "Khazna Data Centers, UAE"
//       : "World Expo 2025 Osaka, Australia Pavilion, Japan",
//   description:
//     i % 4 === 0
//       ? "Increasing capacity and improving productivity at Braunschweig Municipal Hospital's brownfield major investment programme."
//       : i % 4 === 1
//       ? "Supporting Aena to modernise and expand 11 airports across Brazil."
//       : i % 4 === 2
//       ? "Supporting Khazna's mission to expand world-class data capacity across the Middle East."
//       : "Delivering a global platform to showcase the best of Australia to the world.",
//   minutes: (i % 5) + 2,
//   image: IMAGE_URL,
// }));

// export default function ProjectsSection() {
//   const [query, setQuery] = useState("");
//   const [sector, setSector] = useState("");
//   const [capability, setCapability] = useState("");
//   const [country, setCountry] = useState("");
//   const [page, setPage] = useState(1);
//   const perPage = 12;

//   // filter + search logic (simple)
//   const filtered = useMemo(() => {
//     let arr = SAMPLE_PROJECTS.slice();

//     // naive example filters (not connected to actual values)
//     if (sector) arr = arr.filter((_, i) => (i % 3).toString() === sector);
//     if (capability) arr = arr.filter((_, i) => (i % 4).toString() === capability);
//     if (country) arr = arr.filter((_, i) => (i % 5).toString() === country);

//     if (query && query.trim().length > 0) {
//       const q = query.trim().toLowerCase();
//       arr = arr.filter(
//         (p) =>
//           p.title.toLowerCase().includes(q) ||
//           p.description.toLowerCase().includes(q)
//       );
//     }

//     return arr;
//   }, [query, sector, capability, country]);

//   const total = filtered.length;
//   const totalPages = Math.max(1, Math.ceil(total / perPage));
//   useEffect(() => {
//     if (page > totalPages) setPage(1);
//   }, [totalPages, page]);

//   const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

//   const resetFilters = () => {
//     setSector("");
//     setCapability("");
//     setCountry("");
//     setQuery("");
//     setPage(1);
//   };

//   return (<>
//     <main className=" mx-10 bg-white">
//       {/* Top blue banner */}
//       <header className="bg-[#163c72] -mb-20 text-white rounded-b-2xl overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 py-16">
//           <h1 className="text-4xl md:text-5xl font-serif font-bold">Projects</h1>
//           <p className="max-w-3xl mt-4 text-sm md:text-base leading-relaxed text-white/90">
//             We are involved in many of the world's most impactful construction
//             projects and programmes. See where our work has helped to transform
//             communities.
//           </p>
//         </div>
//       </header>

//       {/* Content area */}
//       <div className=" bg-white rounded-t-2xl mx-auto px-6 py-8">
//         {/* Breadcrumb */}
//         <div className="text-sm text-gray-600 mb-6">
//           <nav className="flex items-center gap-2">
//             <a href="#" className="hover:underline text-[#0f4b7f]">
//               Home
//             </a>
//             <span>›</span>
//             <span className="text-gray-700">Outcomes</span>
//           </nav>
//         </div>

//         {/* Search */}
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Search
//           </label>

//           <div className="flex gap-4">
//             <input
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="Search"
//               className="flex-1 border rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#163c72] focus:border-transparent"
//             />
//             <button
//               onClick={() => setPage(1)}
//               className="bg-[#111827] text-white px-4 py-3 rounded-md text-sm flex items-center gap-2"
//             >
//               Search
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//                 <path
//                   d="M21 21l-4.35-4.35"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <circle
//                   cx="11"
//                   cy="11"
//                   r="6"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         <hr className="mb-6" />

//         {/* Filters */}
//         <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
//           <div className="flex items-center gap-4">
//             <div className="text-sm font-semibold text-gray-700">FILTER BY</div>

//             <select
//               value={sector}
//               onChange={(e) => {
//                 setSector(e.target.value);
//                 setPage(1);
//               }}
//               className="border rounded-md px-4 py-2 text-sm outline-none"
//             >
//               <option value="">Sector</option>
//               <option value="0">Sector 0</option>
//               <option value="1">Sector 1</option>
//               <option value="2">Sector 2</option>
//             </select>

//             <select
//               value={capability}
//               onChange={(e) => {
//                 setCapability(e.target.value);
//                 setPage(1);
//               }}
//               className="border rounded-md px-4 py-2 text-sm outline-none"
//             >
//               <option value="">Capability</option>
//               <option value="0">Capability 0</option>
//               <option value="1">Capability 1</option>
//               <option value="2">Capability 2</option>
//               <option value="3">Capability 3</option>
//             </select>

//             <select
//               value={country}
//               onChange={(e) => {
//                 setCountry(e.target.value);
//                 setPage(1);
//               }}
//               className="border rounded-md px-4 py-2 text-sm outline-none"
//             >
//               <option value="">Country</option>
//               <option value="0">Country 0</option>
//               <option value="1">Country 1</option>
//               <option value="2">Country 2</option>
//             </select>

//             <button
//               onClick={resetFilters}
//               className="text-sm text-[#163c72] underline ml-4"
//             >
//               Reset filters
//             </button>
//           </div>

//           <div className="text-sm text-gray-700">
//             Showing {Math.min((page - 1) * perPage + 1, total)}-
//             {Math.min(page * perPage, total)} of {total} results
//           </div>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {pageItems.map((p) => (
//             <article
//               key={p.id}
//               className="bg-white rounded-2xl shadow-sm overflow-hidden border border-transparent hover:shadow-md transition"
//             >
//               <div className="relative h-40 overflow-hidden">
//                 <img
//                   src={p.image}
//                   alt={p.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <div className="bg-[#f2ebe3] p-4 md:p-5 rounded-b-2xl">
//                 <h3 className="font-serif text-lg md:text-lg font-semibold leading-tight mb-2">
//                   {p.title}
//                 </h3>

//                 <p className="text-sm text-gray-700 mb-4 leading-relaxed">
//                   {p.description}
//                 </p>

//                 <div className="flex items-center justify-between text-xs text-gray-600">
//                   <div className="flex items-center gap-2">
//                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
//                       <path
//                         d="M12 1v11"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M21 21H3"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                     <span>{p.minutes} minutes</span>
//                   </div>

//                   <a
//                     href="#"
//                     className="text-[#0f1724] text-sm underline"
//                     aria-label={`Read ${p.title}`}
//                   >
//                     Read
//                   </a>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="mt-8 flex items-center justify-center gap-3">
//           <button
//             onClick={() => setPage((s) => Math.max(1, s - 1))}
//             className="w-10 h-10 rounded-md border flex items-center justify-center"
//             aria-label="Previous page"
//           >
//             ‹
//           </button>

//           {/* page numbers: show first 1..n with compact logic */}
//           {Array.from({ length: totalPages }).map((_, i) => {
//             const pnum = i + 1;
//             // show first 3, last 3 and around current
//             const show =
//               totalPages <= 7 ||
//               pnum <= 2 ||
//               pnum > totalPages - 2 ||
//               Math.abs(pnum - page) <= 1;
//             if (!show) {
//               // insert ellipsis only once for each gap (handled by returning null here)
//               return (
//                 <span key={`gap-${i}`} className="px-2 text-gray-500">
//                   {i === 2 || (i === page + 1 && totalPages > 7) ? "…" : null}
//                 </span>
//               );
//             }
//             return (
//               <button
//                 key={pnum}
//                 onClick={() => setPage(pnum)}
//                 className={`w-10 h-10 rounded-md border flex items-center justify-center ${
//                   page === pnum ? "bg-[#163c72] text-white" : "bg-white"
//                 }`}
//                 aria-current={page === pnum ? "page" : undefined}
//               >
//                 {pnum}
//               </button>
//             );
//           })}

//           <button
//             onClick={() => setPage((s) => Math.min(totalPages, s + 1))}
//             className="w-10 h-10 rounded-md border flex items-center justify-center"
//             aria-label="Next page"
//           >
//             ›
//           </button>
//         </div>
//       </div>

//     </main>
// <section className="w-full bg-[#f2eee7] mb-5">
//       <div className="max-w-[2000px] mx-auto grid grid-cols-1 lg:grid-cols-2">

//         {/* LEFT IMAGE (full height) */}
//         <div className="w-full h-[420px] lg:h-[500px] xl:h-[520px] overflow-hidden">
//           <img
//             src="/mnt/data/d5d94ccf-a25e-4bf8-8ca8-59278f73d11b.png"
//             alt="Client story image"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* RIGHT CONTENT BOX */}
//         <div className="bg-[#f2eee7] flex items-center">
//           <div className="p-10 lg:p-16 xl:p-20 max-w-xl">

//             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
//               Client stories
//             </h2>

//             <p className="text-gray-700 text-base leading-relaxed mb-8">
//               Our clients are at the heart of everything we do.
//               Together, we work across the world’s most impactful
//               major projects and programmes.
//             </p>

//             <button className="bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-black/80 transition">
//               View our client stories
//             </button>

//           </div>
//         </div>
//       </div>
//     </section>
//     </>

//   );
// }

"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

/**
 * ProjectsSection.js — updated
 *
 * - Uses a single DATA object (DATA.caseStudies) instead of SAMPLE_PROJECTS.
 * - Removed the "Braunschweig Municipal Hospital Programme" entry.
 * - Added the Case Studies content you provided as structured objects.
 * - Keeps all UI, search, filter, pagination behavior unchanged.
 */

const IMAGE_URL = "/mnt/data/02cae41e-0479-42cc-9c44-06e6f19dbfca.png";

const DATA = {
  pageTitle: "Case Studies",
  intro:
    "At Ginjo Construction, we believe results speak louder than promises. This page features a selection of construction case studies from across the UK and Europe, showcasing how we support clients with quantity surveying, procurement strategy, and contract risk management. Each case study highlights real commercial results achieved across sectors like aviation, biotech, residential and infrastructure.",
  caseStudies: [
    {
      id: 1,
      title: "Fujifilm Diosynth Biotechnologies – Copenhagen, Denmark",
      client: "Fluor",
      value: "£2.0 billion",
      description:
        "Ginjo provided procurement and contract management services on behalf of Fluor for the construction of a major biotechnology facility. Our expertise supported strategic delivery and risk mitigation at scale.",
      linkLabel: "See Case Study",
      minutes: 5,
      image:
        "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/R0A0033_copy_small_0-2048x1365-1-1536x1024.jpg",
    },
    {
      id: 2,
      title: "HS2 Phase 1 - London, United Kingdom",
      client: "HS2",
      value: "Multi-Billion",
      description:
        "As a commercial consultancy within the Engineering Delivery Partner Framework, Ginjo played a key role in managing costs and contract performance for one of the UK’s most complex infrastructure programmes.",
      linkLabel: "See Case Study",
      minutes: 6,
      image:
        "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/HS2-VL-23575-543A8693-BBVS-HS2-OOC-Station-260421-www.johnzammit.co_.uk-Absolute-Photography-Ltd-1536x1024.jpg",
    },
    {
      id: 3,
      title: "STEGRA EPC Project - Stockholm, Sweden",
      client: "ÅF RY Industry AB",
      value: "£3.5 billion",
      description:
        "Ginjo supported AFRY with commercial oversight and design coordination on a large-scale engineering and manufacturing facility. This included end-to-end cost strategies and international collaboration.",
      linkLabel: "See Case Study",
      minutes: 7,
      image:
        "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/1757596750436.jpg",
    },
    {
      id: 4,
      title: "Carmelita House – Richmond, United Kingdom",
      client: "Storm Building / ÅF RY Industry AB",
      value: "£2.8 million",
      description:
        "Ginjo provided full commercial management consultancy, including preparation of Bills of Quantities, to support project delivery and cost transparency for this residential redevelopment.",
      linkLabel: "See Case Study",
      minutes: 4,
      image:
        "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/0_9F1A2263JPG-1.webp",
    },
    {
      id: 5,
      title: "Heathrow T5 - EV Charging Infrastructure",
      client: "Heathrow",
      value: "Confidential",
      description:
        "Ginjo supported British Airways in the commercial planning and tender stage of their EV infrastructure rollout at Terminal 5, providing risk-managed pricing strategies and a tailored variation control system aligned to Heathrow’s governance requirements.",
      linkLabel: "See Case Study",
      minutes: 3,
      image:
        "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/airport-blog-square-e1762607470488.png",
    },
    {
      id: 6,
      title: "Electrical Upgrade - Legacy Office Blocks, UK",
      client: "Confidential",
      value: "Confidential",
      description:
        "An electrical subcontractor carrying out phased upgrades in older office buildings faced frequent design shifts and slow payments. Ginjo provided contract guidance, payment workflows, and structured variation submissions. This reduced valuation disputes, shortened the payment cycle by 21 days, and helped the subcontractor build stronger relationships with their main contractor for future work.",
      linkLabel: "See Case Study",
      minutes: 4,
      image:
        "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/Fusebox-Upgrade.jpg",
    },
    {
      id: 7,
      title: "HVAC Ducting – Central London Commercial Scheme",
      client: "HVAC Subcontractor",
      value: "£1.6M (est.)",
      description:
        "With ongoing layout revisions, our variation memory tool and resource-linked claims process ensured 87% of changes were approved on first submission – safeguarding cash flow and preventing scope creep.",
      linkLabel: "See Case Study",
      minutes: 3,
      image:
        "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/etc-venues-3-1.jpg",
    },
    {
      id: 8,
      title: "Passive Fire Protection - Essex Housing Block",
      client: "Confidential",
      value: "Confidential",
      description:
        "We implemented a structured variation process with dashboard-based reporting, enabling fast approvals, better documentation, and a 92% variation recovery rate, helping the subcontractor maintain profitability and credibility with the client.",
      linkLabel: "See Case Study",
      minutes: 3,
      image:
        "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/EH04032402.jpg",
    },
    {
      id: 9,
      title: "Groundworks - Midlands Mixed-Use Scheme",
      client: "Groundworks Subcontractor",
      value: "£1.2M (est.)",
      description:
        "A Midlands-based groundworks firm engaged Ginjo after early signs of commercial exposure on a fast-moving mixed-use development. With structured evidence and daily site logs, all costed variations were submitted on time, and their final account was approved in full with no deductions.",
      linkLabel: "See Case Study",
      minutes: 4,
      image:
        "https://www.constructionenquirer.com/wp-content/uploads/Vista-south-bank-1200x828.jpg",
    },
  ],
};

export default function ProjectsSection() {
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState("");
  const [capability, setCapability] = useState("");
  const [country, setCountry] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 12;

  // use the case studies array
  const SAMPLE_PROJECTS = DATA.caseStudies;

  // filter + search logic (simple)
  const filtered = useMemo(() => {
    let arr = SAMPLE_PROJECTS.slice();

    // naive example filters (not connected to actual values)
    if (sector) arr = arr.filter((_, i) => (i % 3).toString() === sector);
    if (capability)
      arr = arr.filter((_, i) => (i % 4).toString() === capability);
    if (country) arr = arr.filter((_, i) => (i % 5).toString() === country);

    if (query && query.trim().length > 0) {
      const q = query.trim().toLowerCase();
      arr = arr.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          (p.description && p.description.toLowerCase().includes(q)) ||
          (p.client && p.client.toLowerCase().includes(q))
      );
    }

    return arr;
  }, [query, sector, capability, country, SAMPLE_PROJECTS]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  const resetFilters = () => {
    setSector("");
    setCapability("");
    setCountry("");
    setQuery("");
    setPage(1);
  };

  return (
    <>
      <main className=" lg:mx-10  bg-white">
        {/* Top blue banner */}
        <header className=" -mb-20 py-20 bg-cover bg-center bg-no-repeat  text-white rounded-b-2xl overflow-hidden"style={{
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
      url('https://www.turnerandtownsend.com/media/vxyftgqu/_h3a0079_2560-x-1440px.webp?width=1280&height=512&v=1dadc4c4e844f10')
    `
    
  }}>
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              {DATA.pageTitle}
            </h1>
            <p className="max-w-3xl mt-4 text-sm md:text-base leading-relaxed text-white/90">
              {DATA.intro}
            </p>
          </div>
        </header>

        {/* Content area */}
        <div className=" bg-white rounded-t-2xl mt-10 mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-600 mb-6">
            <nav className="flex items-center gap-2">
              <a href="#" className="hover:underline text-[#0f4b7f]">
                Home
              </a>
              <span>›</span>
              <span className="text-gray-700">Case Studies</span>
            </nav>
          </div>

          {/* Search */}
          {/* Search */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search
            </label>

            {/* Stack on xs, row on sm+ */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="w-full sm:flex-1 border rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#163c72] focus:border-transparent"
              />

              <button
                onClick={() => setPage(1)}
                className="w-full sm:w-auto bg-[#111827] text-white px-4 py-3 rounded-md text-sm flex items-center justify-center gap-2"
              >
                <span>Search</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M21 21l-4.35-4.35"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="11"
                    cy="11"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <hr className="mb-6" />

          {/* Filters */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-6">
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3">
              <div className="text-sm font-semibold text-gray-700 mr-2">
                FILTER BY
              </div>

              {/* selects stacked on xs, inline on md+ */}
              <select
                value={sector}
                onChange={(e) => {
                  setSector(e.target.value);
                  setPage(1);
                }}
                className="w-full sm:w-auto min-w-[160px] border rounded-md px-4 py-2 text-sm outline-none"
              >
                <option value="">Sector</option>
                <option value="0">Sector 0</option>
                <option value="1">Sector 1</option>
                <option value="2">Sector 2</option>
              </select>

              <select
                value={capability}
                onChange={(e) => {
                  setCapability(e.target.value);
                  setPage(1);
                }}
                className="w-full sm:w-auto min-w-[160px] border rounded-md px-4 py-2 text-sm outline-none"
              >
                <option value="">Capability</option>
                <option value="0">Capability 0</option>
                <option value="1">Capability 1</option>
                <option value="2">Capability 2</option>
                <option value="3">Capability 3</option>
              </select>

              <select
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                  setPage(1);
                }}
                className="w-full sm:w-auto min-w-[160px] border rounded-md px-4 py-2 text-sm outline-none"
              >
                <option value="">Country</option>
                <option value="0">Country 0</option>
                <option value="1">Country 1</option>
                <option value="2">Country 2</option>
              </select>

              <button
                onClick={resetFilters}
                className="text-sm text-[#163c72] underline ml-0 sm:ml-4"
              >
                Reset filters
              </button>
            </div>

            {/* Results count: stays on its own row on small screens, aligns to right on large */}
            <div className="text-sm text-gray-700 self-center lg:self-auto">
              Showing {Math.min((page - 1) * perPage + 1, total)}-
              {Math.min(page * perPage, total)} of {total} results
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageItems.map((p) => (
              <article
                key={p.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-transparent hover:shadow-md transition flex flex-col h-full"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-[#bac6c7] p-4 md:p-5 rounded-b-2xl flex flex-col flex-grow">
                  <h3 className="font-serif text-lg md:text-lg font-semibold leading-tight mb-2">
                    {p.title}
                  </h3>

                  <p className="text-sm text-gray-700 mb-2 leading-relaxed line-clamp-1">
                    {p.description}
                  </p>

                  {p.client && (
                    <p className="text-xs text-gray-600 mb-3">
                      <strong>Client:</strong> {p.client}{" "}
                      {p.value && (
                        <>
                          &nbsp;•&nbsp; <strong>Value:</strong> {p.value}
                        </>
                      )}
                    </p>
                  )}

                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 1v11"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 21H3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{p.minutes ?? 3} minutes</span>
                    </div>

                    <Link
                      href={`/case-studies/${p.id}`}
                      className="text-[#0f1724] text-sm underline"
                    >
                      {p.linkLabel ?? "Read"}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => setPage((s) => Math.max(1, s - 1))}
              className="w-10 h-10 rounded-md border flex items-center justify-center"
              aria-label="Previous page"
            >
              ‹
            </button>

            {/* page numbers: show first 1..n with compact logic */}
            {Array.from({ length: totalPages }).map((_, i) => {
              const pnum = i + 1;
              // show first 3, last 3 and around current
              const show =
                totalPages <= 7 ||
                pnum <= 2 ||
                pnum > totalPages - 2 ||
                Math.abs(pnum - page) <= 1;
              if (!show) {
                return (
                  <span key={`gap-${i}`} className="px-2 text-gray-500">
                    {i === 2 || (i === page + 1 && totalPages > 7) ? "…" : null}
                  </span>
                );
              }
              return (
                <button
                  key={pnum}
                  onClick={() => setPage(pnum)}
                  className={`w-10 h-10 rounded-md border flex items-center justify-center ${
                    page === pnum ? "bg-[#163c72] text-white" : "bg-white"
                  }`}
                  aria-current={page === pnum ? "page" : undefined}
                >
                  {pnum}
                </button>
              );
            })}

            <button
              onClick={() => setPage((s) => Math.min(totalPages, s + 1))}
              className="w-10 h-10 rounded-md border flex items-center justify-center"
              aria-label="Next page"
            >
              ›
            </button>
          </div>
        </div>
      </main>

      <section className="w-full bg-[#bac6c7] mb-5">
        <div className="max-w-[2000px] mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT IMAGE (full height) */}
          <div className="w-full h-[420px] lg:h-[500px] xl:h-[520px] overflow-hidden">
            <img
              src="https://www.turnerandtownsend.com/media/wrulpler/3.webp?width=1600&height=800&v=1db8f77b3e76c50"
              alt="Client story image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT BOX */}
          <div className="bg-[#bac6c7] flex items-center">
            <div className="p-10 lg:p-16 xl:p-20 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Our stories
              </h2>

              <p className="text-gray-700 text-base leading-relaxed mb-8">
                Our clients are at the heart of everything we do. Together, we
                work across the world’s most impactful major projects and
                programmes.
              </p>

            <Link href="/about/our-story">  <button className="bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-black/80 transition">
                View our client stories
              </button></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
