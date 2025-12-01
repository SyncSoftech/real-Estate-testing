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

// const IMAGE = "/mnt/data/e71d4eeb-30b8-4b87-94f0-f0b84377bd08.png";

// const PUBLICATIONS = [
//   { id: 1, title: "Annual review", image: IMAGE },
//   { id: 2, title: "Data centre construction cost index 2025-2026", image: IMAGE },
//   { id: 3, title: "Global construction market intelligence 2025", image: IMAGE },
//   { id: 4, title: "Global office fit-out cost guide 2025", image: IMAGE },
// ];



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

// export default function insights() {
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
//           <h1 className="text-4xl md:text-5xl font-serif font-bold">Insights</h1>
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

//  <section className="w-full bg-white py-10">
//       <div className="  mx-10 px-4">
//         <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">
//           Explore our publications
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {PUBLICATIONS.map((pub) => (
//             <article
//               key={pub.id}
//               className="relative rounded-xl min-h-[30rem] overflow-hidden group shadow-sm"
//             >
//               <img
//                 src={pub.image}
//                 alt={pub.title}
//                 className="w-full h-56 sm:h-48 md:h-56 object-cover"
//               />

//               {/* dark gradient overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>

//               {/* bottom content */}
//               <div className="absolute left-4 bottom-4 right-4 flex items-center justify-between">
//                 <h3 className="text-white font-serif text-lg leading-tight max-w-[80%]">
//                   {pub.title}
//                 </h3>

//                 <button
//                   aria-label={`Open ${pub.title}`}
//                   className="w-9 h-9 rounded-full border border-white/60 bg-black/20 flex items-center justify-center"
//                 >
//                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
//                     <path d="M8 5l8 7-8 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </button>
//               </div>
//             </article>
//           ))}
//         </div>

//         <div className="mt-6 flex justify-end">
//           <button className="text-sm px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
//             View all publications
//           </button>
//         </div>
//       </div>
//     </section>

//     </>

//   );
// }


// Update the imports at the top
import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';

// Replace the SAMPLE_PROJECTS with the actual publications data
const PUBLICATIONS = [
  { 
    id: 1, 
    title: "Why Forecasts Miss the Mark (and How to Improve Them)", 
    image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/ChatGPT-Image-Sep-2-2025-12_30_26-PM.png",
    description: "The Mirage of Certainty Forecasts are meant to give clarity. Instead, many only provide false comfort...",
    date: "November 24, 2025",
    category: "Commercial Management"
  },
  { 
    id: 2, 
    title: "Why Value Engineering Fails (and What to Do Instead)", 
    image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/ChatGPT-Image-Sep-2-2025-11_01_55-AM.png",
    description: "The False Saving Value engineering is meant to protect budgets. Too often, it becomes a box-ticking exercise that strips out quality without actually reducing cost.",
    date: "November 17, 2025 ",
    category: "Value Delivery "
  },
  { 
    id: 3, 
    title: "Why Procurement Delays Derail Projects", 
    image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/09/ChatGPT-Image-Sep-2-2025-10_00_01-AM.png",
    description: "In-depth analysis of global construction market trends and forecasts.",
    date: "November 10, 2025",
    category: "Procurement & Cost Control"
  },
  { 
    id: 4, 
    title: "Why Final Accounts Drag On (and Drain Profit)", 
    image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/ChatGPT-Image-Sep-1-2025-02_58_55-PM.png",
    description: "Comprehensive guide to office fit-out costs across major global cities.",
    date: "October 6, 2025",
    category: "Commercial Management"
  }
];

// Update the component to use PUBLICATIONS instead of SAMPLE_PROJECTS
export default function Insights() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 8;

  // Filter logic
  const filtered = useMemo(() => {
    let arr = [...PUBLICATIONS];

    if (category) {
      arr = arr.filter(pub => 
        pub.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (query && query.trim().length > 0) {
      const q = query.trim().toLowerCase();
      arr = arr.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    return arr;
  }, [query, category]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  const resetFilters = () => {
    setCategory("");
    setQuery("");
    setPage(1);
  };

  // Get unique categories for the filter
  const categories = useMemo(() => {
    const cats = new Set(PUBLICATIONS.map(pub => pub.category));
    return Array.from(cats).sort();
  }, []);

  return (
    <main className="lg:mx-10 bg-white">
      {/* Header */}
      <header className=" -mb-20 py-20 bg-cover bg-center bg-no-repeat  text-white rounded-b-2xl overflow-hidden"style={{
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
      url('https://www.turnerandtownsend.com/media/vxyftgqu/_h3a0079_2560-x-1440px.webp?width=1280&height=512&v=1dadc4c4e844f10')
    `
    
  }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Insights</h1>
          <p className="max-w-3xl mt-4 text-sm md:text-base leading-relaxed text-white/90">
            Expert analysis and thought leadership on the latest trends in real estate and construction.
          </p>
        </div>
      </header>

      {/* Content area */}
      <div className="bg-white rounded-t-2xl  mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          <nav className="flex items-center gap-2">
            <Link href="/" className="hover:underline text-[#0f4b7f]">Home</Link>
            <span>›</span>
            <span className="text-gray-700">Insights</span>
          </nav>
        </div>

        {/* Search and Filters */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <div className="flex-1">
              <label htmlFor="search" className="sr-only">Search insights</label>
              <div className="relative">
                <input
                  id="search"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search insights..."
                  className="w-full border rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#163c72] focus:border-transparent"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              <label htmlFor="category" className="sr-only">Filter by category</label>
              <select
                id="category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setPage(1);
                }}
                className="w-full border rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#163c72] focus:border-transparent"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {(query || category) && (
              <button
                onClick={resetFilters}
                className="px-4 py-3 text-sm text-gray-700 hover:text-gray-900"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Showing {pageItems.length} of {total} insights
            {(query || category) && (
              <span className="ml-2">
                (filtered by: {query && `"${query}"`} {query && category && '•'} {category})
              </span>
            )}
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {pageItems.length > 0 ? (
            pageItems.map((publication) => (
              <Link 
                key={publication.id} 
                href={`/insights/${publication.id}`}
                className="group"
              >
                <div className="bg-[#bac6c7] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={publication.image}
                      alt={publication.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex-1">
                      <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
                        {publication.category}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                        {publication.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {publication.description}
                      </p>
                    </div>
                    <div className="mt-auto pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{publication.date}</span>
                        <span className="flex items-center text-blue-600 group-hover:underline">
                          Read more
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No insights found</h3>
              <p className="mt-1 text-sm text-gray-500">
                {query || category
                  ? 'Try adjusting your search or filter to find what you\'re looking for.'
                  : 'There are currently no insights available.'}
              </p>
              {(query || category) && (
                <div className="mt-6">
                  <button
                    onClick={resetFilters}
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{(page - 1) * perPage + 1}</span> to{' '}
                  <span className="font-medium">
                    {Math.min(page * perPage, total)}
                  </span>{' '}
                  of <span className="font-medium">{total}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNum = page < 3 
                      ? i + 1 
                      : page > totalPages - 2 
                        ? totalPages - 4 + i 
                        : page - 2 + i;
                    
                    if (pageNum < 1 || pageNum > totalPages) return null;

                    return (
                      <button
                        key={i}
                        onClick={() => setPage(pageNum)}
                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                          page === pageNum
                            ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                            : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}