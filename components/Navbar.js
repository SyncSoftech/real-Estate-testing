// // Navbar.js
// // Turner & Townsend style navbar (React + Tailwind)

// "use client";
// import React, { useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(null);

//   const nav = [
//     { key: "sectors", label: "Sectors" },
//     { key: "services", label: "Services" },
//     { key: "projects", label: "Projects" },
//     { key: "insights", label: "Insights" },
//     { key: "about", label: "About" },
//     { key: "careers", label: "Careers" },
//     { key: "locations", label: "Locations" }
//   ];

//   const logo = "/mnt/data/0e695bb8-0b15-49a5-82bb-a4d6550c264b.png";
//   const card1 = "/mnt/data/bc9b389b-f825-42c5-8150-a0ef04e08f0f.png";
//   const card2 = "/mnt/data/3b64aa62-1dcf-428d-9dc9-eaa46ec867f6.png";
//   const card3 = "/mnt/data/e61348f6-3075-46a2-b8d1-0dc8d13d30f9.png";

//   return (
//     <header className="bg-[#efe9e0] border-b border-[#ebe4dd] w-full z-50 sticky top-0">
//       <div className="max-w-[1300px] mx-auto px-8">
//         <div className="flex items-center justify-between h-24">
//           {/* Logo */}
//           <div className="flex items-center">
//             <img src={logo} alt="Turner & Townsend" className="h-12 w-auto" />
//           </div>

//           {/* Navigation */}
//           <nav className="flex-1">
//             <ul className="flex items-center justify-center gap-10 text-[#1f1b18] text-[17px] font-medium">
//               {nav.map((item) => (
//                 <li
//                   key={item.key}
//                   className="relative group cursor-pointer"
//                   onMouseEnter={() => setOpen(item.key)}
//                   onMouseLeave={() => setOpen(null)}
//                 >
//                   <div className="flex items-center gap-1">
//                     {item.label}
//                     {(item.key !== "projects" && item.key !== "insights" && item.key !== "locations") && (
//                       <span className="text-sm">▾</span>
//                     )}
//                   </div>

//                   {/* Mega Menu */}
//                   {(item.key === "sectors" || item.key === "services" || item.key === "about" || item.key === "careers") && (
//                     <div
//                       className="absolute left-1/2 -translate-x-1/2 top-10 w-[950px] bg-transparent opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200"
//                     >
//                       <div className="flex bg-[#f5f0ea] shadow-xl p-10 rounded-xl border border-[#e0d7cf]">
//                         {/* Left Side */}
//                         <div className="w-1/2 pr-10">
//                           <h2 className="text-4xl font-serif text-[#1f1b18] mb-6">{item.label}</h2>
//                           <p className="text-sm max-w-[300px] leading-6 text-[#1f1b18]">
//                             We drive transparency, predictability and performance on complex
//                             projects and programmes, achieving successful outcomes and return
//                             on investment.
//                           </p>

//                           <div className="mt-8 grid grid-cols-2 gap-y-4 text-[#1f1b18] text-base font-medium">
//                             <div className="space-y-3">
//                               <p>Clean energy</p>
//                               <p>Data centres</p>
//                               <p>Education</p>
//                               <p>Industrials</p>
//                             </div>
//                             <div className="space-y-3">
//                               <p>Healthcare</p>
//                               <p>Retail</p>
//                               <p>Utilities</p>
//                               <p>Transport</p>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Right Side Cards */}
//                         <div className="w-1/2 pl-10 border-l border-[#bfb6ae] flex flex-col gap-6">
//                           {[card1, card2, card3].map((src, index) => (
//                             <a
//                               key={index}
//                               className="relative block rounded-xl overflow-hidden h-28 shadow-lg"
//                             >
//                               <img
//                                 src={src}
//                                 alt="Project Card"
//                                 className="absolute inset-0 h-full w-full object-cover"
//                               />
//                               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

//                               <div className="absolute left-6 bottom-4 text-white font-semibold text-lg">
//                                 Project {index + 1}
//                                 <p className="text-sm mt-1 font-normal">Short description text…</p>
//                               </div>
//                             </a>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* Search Icon */}
//           <button className="text-2xl border-2 border-[#1f1b18] rounded-full w-10 h-10 flex items-center justify-center">🔍</button>
//         </div>
//       </div>

//       <style jsx>{`
//         .font-serif {
//           font-family: Georgia, 'Times New Roman', serif;
//         }
//       `}</style>
//     </header>
//   );
// }

// Navbar.js
// Turner & Townsend style responsive navbar (React + Tailwind)

// "use client";
// import React, { useState } from "react";

// export default function Navbar() {
//   const [openMega, setOpenMega] = useState(null); // which mega to show on desktop
//   const [mobileOpen, setMobileOpen] = useState(false); // mobile full menu
//   const [mobilePanel, setMobilePanel] = useState(null); // which panel inside mobile menu (eg: 'sectors')

//   const nav = [
//     { key: "sectors", label: "Sectors" },
//     { key: "services", label: "Services" },
//     { key: "projects", label: "Projects" },
//     { key: "insights", label: "Insights" },
//     { key: "about", label: "About" },
//     { key: "careers", label: "Careers" },
//     { key: "locations", label: "Locations" }
//   ];

//   // image paths provided in the workspace
//   const logo = "/mnt/data/0e695bb8-0b15-49a5-82bb-a4d6550c264b.png";

//   const desktopCards = [
//     "/mnt/data/bc9b389b-f825-42c5-8150-a0ef04e08f0f.png",
//     "/mnt/data/3b64aa62-1dcf-428d-9dc9-eaa46ec867f6.png",
//     "/mnt/data/e61348f6-3075-46a2-b8d1-0dc8d13d30f9.png",
//   ];

//   // mobile menu right-column cards
//   const mobileCards = [
//     "/mnt/data/32e36222-2d76-4b76-ac30-09986011e19f.png",
//     "/mnt/data/cbe18801-7459-4648-843a-eec46cb3bdbb.png",
//     "/mnt/data/1217cb71-a76b-46b4-a042-336082f2a9f0.png",
//     "/mnt/data/ab5c1495-3f08-4c52-b263-36dbc931ce95.png",
//   ];

//   return (
//     <header className="bg-[#efe9e0] border-b border-[#ebe4dd] w-full z-50">
//       <div className="max-w-[1300px] mx-auto px-6">
//         <div className="flex items-center justify-between h-24">

//           {/* left: logo */}
//           <div className="flex items-center gap-4">
//             <img src={logo} alt="Turner & Townsend" className="h-12 w-auto" />
//           </div>

//           {/* center: desktop nav */}
//           <nav className="hidden md:block flex-1">
//             <ul className="flex items-center justify-center gap-10 text-[#1f1b18] text-[17px] font-medium">
//               {nav.map((item) => (
//                 <li
//                   key={item.key}
//                   className="relative group"
//                   onMouseEnter={() => setOpenMega(item.key)}
//                   onMouseLeave={() => setOpenMega(null)}
//                 >
//                   <button className="flex items-center gap-2 py-2" aria-haspopup={item.key !== 'projects' ? 'menu' : undefined}>
//                     <span>{item.label}</span>
//                     {(item.key !== 'projects' && item.key !== 'insights' && item.key !== 'locations') && (
//                       <span className="text-sm">▾</span>
//                     )}
//                   </button>

//                   {/* desktop mega menu for selected sections */}
//                   {(item.key === 'sectors' || item.key === 'services' || item.key === 'about' || item.key === 'careers') && (
//                     <div
//                       className={`absolute left-1/2 -translate-x-1/2 top-14 w-[950px] transition-all duration-200 ${openMega === item.key ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
//                       aria-hidden={openMega === item.key ? 'false' : 'true'}
//                     >
//                       <div className="flex bg-[#f5f0ea] p-10 rounded-xl border border-[#e0d7cf] shadow-sm">
//                         <div className="w-1/2 pr-10">
//                           <h3 className="text-4xl font-serif text-[#1f1b18] mb-4">{item.label}</h3>
//                           <p className="text-sm leading-6 font-medium max-w-[320px] text-[#1f1b18]">
//                             We drive transparency, predictability and performance on complex projects and programmes,
//                             achieving successful outcomes and return on investment.
//                           </p>

//                           <div className="mt-8 grid grid-cols-3 gap-x-8 gap-y-4 text-[#1f1b18] text-base">
//                             <div className="space-y-3">
//                               <p className="font-medium">Clean energy</p>
//                               <p className="font-medium">Conventional and low carbon energy</p>
//                               <p className="font-medium">Data centres</p>
//                               <p className="font-medium">Education</p>
//                             </div>
//                             <div className="space-y-3">
//                               <p className="font-medium">Industrials</p>
//                               <p className="font-medium">Mining</p>
//                               <p className="font-medium">Sports, leisure and hospitality</p>
//                               <p className="font-medium">Transport</p>
//                             </div>
//                             <div className="space-y-3">
//                               <p className="font-medium">Corporate occupier</p>
//                               <p className="font-medium">Defence and security</p>
//                               <p className="font-medium">Healthcare</p>
//                               <p className="font-medium">Retail</p>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="w-1/2 pl-8 border-l border-[#bfb6ae] flex flex-col gap-6">
//                           {desktopCards.map((src, i) => (
//                             <a key={i} href="#" className="relative block rounded-xl overflow-hidden h-28">
//                               <img src={src} alt={`card-${i}`} className="absolute inset-0 w-full h-full object-cover" />
//                               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                               <div className="absolute left-6 bottom-4 text-white font-bold text-lg">Example project {i + 1}
//                                 <div className="text-sm font-medium mt-1">Supporting description…</div>
//                               </div>
//                             </a>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* right: search + mobile hamburger */}
//           <div className="flex items-center gap-4">
//             <button aria-label="Search" className="text-2xl border-2 border-[#1f1b18] rounded-full w-10 h-10 flex items-center justify-center">🔍</button>

//             {/* mobile hamburger */}
//             <button
//               className="md:hidden flex items-center justify-center w-10 h-10"
//               aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
//               onClick={() => { setMobileOpen((s) => !s); setMobilePanel(null); }}
//             >
//               {mobileOpen ? (
//                 <span className="text-2xl">✕</span>
//               ) : (
//                 <span className="text-2xl">☰</span>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile full-screen menu */}
//       <div className={`fixed inset-0 z-40 md:hidden transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
//         <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)}></div>

//         <aside className="relative w-full max-w-[420px] h-full bg-[#efe9e0] border-r border-[#e6ded5] overflow-auto">
//           <div className="p-4 flex items-center justify-between">
//             <img src={logo} alt="Turner & Townsend" className="h-10" />
//             <div className="flex items-center gap-3">
//               <button aria-label="Search" className="text-2xl">🔍</button>
//               <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="text-2xl">✕</button>
//             </div>
//           </div>

//           {/* top list of primary nav items */}
//           {!mobilePanel && (
//             <div className="px-6 py-4">
//               <ul className="divide-y divide-[#bfb6ae]">
//                 {nav.map((n) => (
//                   <li key={n.key} className="py-6 flex items-center justify-between">
//                     <button className="text-lg text-[#1f1b18] text-left w-full" onClick={() => {
//                       // open panel for items that have mega content, otherwise close menu
//                       if (['sectors','services','about','careers'].includes(n.key)) setMobilePanel(n.key);
//                       else setMobileOpen(false);
//                     }}>{n.label}</button>
//                     <button className="ml-4 text-xl">→</button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* mobile panel (e.g., Sectors details) */}
//           {mobilePanel && (
//             <div className="px-6 py-4">
//               <button className="text-sm text-blue-600 mb-4 flex items-center gap-2" onClick={() => setMobilePanel(null)}>← Back</button>

//               <h3 className="text-3xl font-serif mb-3">{mobilePanel.charAt(0).toUpperCase() + mobilePanel.slice(1)}</h3>
//               <p className="text-sm leading-6 text-[#1f1b18] max-w-[320px] mb-6">
//                 We drive transparency, predictability and performance on complex projects and programmes, achieving successful outcomes and return on investment.
//               </p>

//               <ul className="space-y-4">
//                 {[
//                   'Clean energy','Conventional and low carbon energy','Data centres','Education','Industrials','Mining','Sports, leisure and hospitality','Transport','Commercial development','Corporate occupier','Defence and security','Healthcare','Life sciences','Retail','Transmission and distribution','Utilities'
//                 ].map((t, i) => (
//                   <li key={i} className="py-3 border-b border-[#bfb6ae]">{t}</li>
//                 ))}
//               </ul>

//               <div className="mt-6 space-y-4">
//                 {mobileCards.map((src, i) => (
//                   <a key={i} href="#" className="block rounded-xl overflow-hidden h-36 relative">
//                     <img src={src} alt={`mobile-card-${i}`} className="absolute inset-0 w-full h-full object-cover" />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                     <div className="absolute left-6 bottom-4 text-white font-semibold text-lg">Card {i+1}
//                       <div className="text-sm font-normal mt-1">Brief description...</div>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           )}
//         </aside>
//       </div>

//       <style jsx>{`
//         .font-serif { font-family: Georgia, 'Times New Roman', serif; }
//       `}</style>
//     </header>
//   );
// }

// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [openMega, setOpenMega] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobilePanel, setMobilePanel] = useState(null);

//   const nav = [
//     { key: "services", label: "Services", link: "/services" },
//     { key: "case-studies", label: "Case Studies", link: "/caseStudies" },
//     { key: "insights", label: "Insights", link: "/insights" },
//     { key: "about", label: "About", link: "/about" },
//     { key: "careers", label: "Careers", link: "/careers" },
//     { key: "gallery", label: "Gallery", link: "/gallery" },
//     { key: "contact", label: "Contact", link: "/contact" },
//     { key: "ourPeople", label: "Our People", link: "/ourPeople" }
//   ];

//   const logo = "/mnt/data/0e695bb8-0b15-49a5-82bb-a4d6550c264b.png";

//   const desktopCards = [
//     {
//     id:1,
//     title:"Fujifilm Diosynth Biotechnologies – Copenhagen, Denmark",
//     image:"https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/R0A0033_copy_small_0-2048x1365-1-1536x1024.jpg",
//   },
//     {
//     id:2,
//     title:"HS2 Phase 1 - London, United Kingdom",
//     image:"https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/HS2-VL-23575-543A8693-BBVS-HS2-OOC-Station-260421-www.johnzammit.co_.uk-Absolute-Photography-Ltd-1536x1024.jpg",
//   },
//     { 
//     id:3,
//     title:"STEGRA EPC Project - Stockholm, Sweden",
//     image:"https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/HS2-VL-23575-543A8693-BBVS-HS2-OOC-Station-260421-www.johnzammit.co_.uk-Absolute-Photography-Ltd-1536x1024.jpg",
//   },
//   ];

//   const mobileCards = [
//      {
//     id:1,
//     title:"Fujifilm Diosynth Biotechnologies – Copenhagen, Denmark",
//     image:"https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/R0A0033_copy_small_0-2048x1365-1-1536x1024.jpg",
//   },
//     {
//     id:2,
//     title:"HS2 Phase 1 - London, United Kingdom",
//     image:"https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/HS2-VL-23575-543A8693-BBVS-HS2-OOC-Station-260421-www.johnzammit.co_.uk-Absolute-Photography-Ltd-1536x1024.jpg",
//   },
//     { 
//     id:3,
//     title:"STEGRA EPC Project - Stockholm, Sweden",
//     image:"https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/HS2-VL-23575-543A8693-BBVS-HS2-OOC-Station-260421-www.johnzammit.co_.uk-Absolute-Photography-Ltd-1536x1024.jpg",
//   },
//     {
//     id:4,
//     title:"Carmelita House – Richmond, United Kingdom",
//     image:"https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/0_9F1A2263JPG-1.webp",
//   },
//   ];

//   return (
//     <>
//       <header className="bg-[#efe9e0] border-b border-[#ebe4dd] 2z-50">
//         <div className=" px-6">
//           <div className="flex items-center justify-between h-24">
//             {/* left: logo */}
//             <div className="flex items-center gap-4">
//               <img src='/LOGO.jpg' alt="Turner & Townsend" className="h-12 w-auto" />
//             </div>

//             {/* center: desktop nav */}
//             <nav className="hidden md:block flex-1">
//               <ul className="flex items-center justify-center gap-10 text-[#1f1b18] text-[17px] font-medium">
//                 {nav.map((item) => (
//                   <li
//                     key={item.key}
//                     className="relative group"
//                     onMouseEnter={() => setOpenMega(item.key)}
//                     onMouseLeave={() => setOpenMega(null)}
//                   >
//                     <Link href={item.link}>
//                       <button
//                         className="flex items-center gap-2 py-2"
//                         aria-haspopup={
//                           item.key !== "projects" ? "menu" : undefined
//                         }
//                       >
//                         <span>{item.label}</span>
//                         {item.key == "services" && (
//                           <span className="text-sm">▾</span>
//                         )}
//                       </button>
//                     </Link>

//                     {/* Only show mega dropdown for "services" */}
//                     {item.key === "services" && (
//                       <div
//                         className={`absolute left-1/2 z-50 -translate-x-1/2 top-14 w-[50rem] transition-all duration-200 ${
//                           openMega === item.key
//                             ? "opacity-100 pointer-events-auto"
//                             : "opacity-0 pointer-events-none"
//                         }`}
//                         aria-hidden={openMega === item.key ? "false" : "true"}
//                         style={{ boxSizing: "border-box" }}
//                       >
//                         <div className="flex bg-[#efe9e0] p-10 rounded-xl -mt-5 shadow-sm">
//                           <div className="w-1/2 pr-10">
//                             <Link href={item.link}>
//                               <h3 className="text-4xl font-serif text-[#1f1b18] mb-4">
//                                 {item.label}
//                               </h3>
//                             </Link>
//                             <p className="text-sm leading-6 font-medium max-w-[320px] text-[#1f1b18]">
//                               We drive transparency, predictability and
//                               performance on complex projects and programmes,
//                               achieving successful outcomes and return on
//                               investment.
//                             </p>

//                             <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 text-[#1f1b18] text-base">
//                               <div className="space-y-3">
//                                 <Link
//                                   href={`/services/${"Variation Management"
//                                     .toLowerCase()
//                                     .replace(/[^a-z0-9]+/g, "-")
//                                     .replace(/^-+|-+$/g, "")}`}
//                                 >
//                                   {" "}
//                                   <p className="font-medium m-2">
//                                     Variation Management
//                                   </p>
//                                 </Link>
//                                 <Link
//                                   href={`/services/${"Tendering & Procurement"
//                                     .toLowerCase()
//                                     .replace(/[^a-z0-9]+/g, "-")
//                                     .replace(/^-+|-+$/g, "")}`}
//                                 >
//                                   {" "}
//                                   <p className="font-medium m-2">
//                                     Tendering & Procurement
//                                   </p>
//                                 </Link>
//                                 <Link
//                                   href={`/services/${"Quantity Surveying & Commercial Management"
//                                     .toLowerCase()
//                                     .replace(/[^a-z0-9]+/g, "-")
//                                     .replace(/^-+|-+$/g, "")}`}
//                                 >
//                                   {" "}
//                                   <p className="font-medium m-2">
//                                     Quantity Surveying & Commercial Management
//                                   </p>
//                                 </Link>
//                                 <Link
//                                   href={`/services/${"Estimating BOQs & MTOs"
//                                     .toLowerCase()
//                                     .replace(/[^a-z0-9]+/g, "-")
//                                     .replace(/^-+|-+$/g, "")}`}
//                                 >
//                                   {" "}
//                                   <p className="font-medium m-2">
//                                     Estimating BOQs & MTOs
//                                   </p>
//                                 </Link>
//                               </div>
//                               <div className="space-y-3 ">
//                                 <Link
//                                   href={`/services/${"NEC, JCT, FIDIC, Bespoke Contract Experts"
//                                     .toLowerCase()
//                                     .replace(/[^a-z0-9]+/g, "-")
//                                     .replace(/^-+|-+$/g, "")}`}
//                                 >
//                                   {" "}
//                                   <p className="font-medium m-2">
//                                     NEC, JCT, FIDIC, Bespoke Contract Experts
//                                   </p>
//                                 </Link>
//                                 <Link
//                                   href={`/services/${"Smart Commercial Systems"
//                                     .toLowerCase()
//                                     .replace(/[^a-z0-9]+/g, "-")
//                                     .replace(/^-+|-+$/g, "")}`}
//                                 >
//                                   {" "}
//                                   <p className="font-medium m-2">
//                                     Smart Commercial Systems
//                                   </p>
//                                 </Link>
//                                 <Link
//                                   href={`/services/${"Project Management"
//                                     .toLowerCase()
//                                     .replace(/[^a-z0-9]+/g, "-")
//                                     .replace(/^-+|-+$/g, "")}`}
//                                 >
//                                   {" "}
//                                   <p className="font-medium m-2">
//                                     Project Management
//                                   </p>
//                                 </Link>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="w-1/2 pl-8 border-l border-[#bfb6ae] flex flex-col gap-6">
//                             {desktopCards.map((src, i) => (
//                               <Link
//                                 key={i}
//                                 href={`/case-studies/${i+1}`}
//                                 className="relative block rounded-xl overflow-hidden h-28"
//                               >
//                                 <img
//                                   src={desktopCards[i].image}
//                                   alt={`card-${i}`}
//                                   className="absolute inset-0 w-full h-full object-cover"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                                 <div className="absolute left-6 bottom-4 text-white font-bold text-lg">
//                                   {desktopCards[i].title}
//                                   <div className="text-sm font-medium mt-1">
//                                     Supporting description…
//                                   </div>
//                                 </div>
//                               </Link>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </nav>

//             {/* right: search + mobile hamburger */}
//             <div className="flex items-center gap-4">
//               <button
//                 aria-label="Search"
//                 className="text-2xl border-2 border-[#1f1b18] rounded-full w-10 h-10 flex items-center justify-center"
//               >
//                 🔍
//               </button>

//               <button
//                 className="md:hidden flex items-center justify-center w-10 h-10"
//                 aria-label={mobileOpen ? "Close menu" : "Open menu"}
//                 onClick={() => {
//                   setMobileOpen((s) => !s);
//                   setMobilePanel(null);
//                 }}
//               >
//                 {mobileOpen ? (
//                   <span className="text-2xl">✕</span>
//                 ) : (
//                   <span className="text-2xl">☰</span>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile full-screen menu - TOP SIDE */}
//         <div
//           className={`fixed inset-x-0 top-0 z-40 md:hidden transform ${
//             mobileOpen ? "translate-y-0" : "-translate-y-full"
//           } transition-transform duration-300 h-full bg-[#efe9e0]`}
//         >
//           <div
//             className="absolute inset-0 bg-black/40"
//             onClick={() => setMobileOpen(false)}
//           ></div>

//           <aside className="relative w-full h-full bg-[#efe9e0] border-b border-[#e6ded5] overflow-auto">
//             <div className="p-4 flex items-center justify-end sticky top-0 bg-[#efe9e0] border-b border-[#e6ded5]">
//               <button
//                 aria-label="Close menu"
//                 onClick={() => setMobileOpen(false)}
//                 className="text-2xl"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* top list of primary nav items */}
//             {!mobilePanel && (
//               <div className="px-6 py-4">
//                 <ul className="divide-y divide-[#bfb6ae]">
//                   {nav.map((n) => (
//                     <li
//                       key={n.key}
//                       className="py-6 flex items-center justify-between"
//                     >
//                       <button
//                         className="text-lg text-[#1f1b18] text-left w-full"
//                         onClick={() => {
//                           // only open a mobile panel for "services"
//                           if (["services"].includes(n.key))
//                             setMobilePanel(n.key);
//                           else setMobileOpen(false);
//                         }}
//                       >
//                         {n.label}
//                       </button>
//                       <button className="ml-4 text-xl">→</button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* mobile panel (e.g., Services details) */}
//             {mobilePanel && (
//               <div className="px-6 py-4">
//                 <button
//                   className="text-sm text-blue-600 mb-4  flex items-center gap-2"
//                   onClick={() => setMobilePanel(null)}
//                 >
//                   ← Back
//                 </button>

//                 <h3 className="text-3xl font-serif mb-3">
//                   {mobilePanel.charAt(0).toUpperCase() + mobilePanel.slice(1)}
//                 </h3>
//                 <p className="text-sm leading-6 text-[#1f1b18] max-w-[320px] mb-6">
//                   We drive transparency, predictability and performance on
//                   complex projects and programmes, achieving successful outcomes
//                   and return on investment.
//                 </p>

//                 <ul className="space-y-4">
//                   {[
//                     'Variation Management',
//                     'Tendering & Procurement',
//                     'Quantity Surveying & Commercial Management',
//                     'Estimating BOQs & MTOs',
//                     'NEC, JCT, FIDIC, Bespoke Contract Experts',
//                     'Smart Commercial Systems',
//                     'Project Management'

//                   ].map((t, i) => (
//                     <li key={i} className="py-3 border-b border-[#bfb6ae]">
//                      <Link
//                                   href={`/services/${t
//                                     .toLowerCase()
//                                     .replace(/[^a-z0-9]+/g, "-")
//                                     .replace(/^-+|-+$/g, "")}`}
//                                 >{t}</Link>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="mt-6 space-y-4">
//                   {mobileCards.map((src, i) => (
//                     <Link
//                       key={i}
//                       href={`/case-studies/${i+1}`}
//                       className="block rounded-xl overflow-hidden h-36 relative"
//                     >
//                       <img
//                         src={mobileCards[i].image}
//                         alt={`mobile-card-${i}`}
//                         className="absolute inset-0 w-full h-full object-cover"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                       <div className="absolute left-6 bottom-4 text-white font-semibold text-lg">
//                        {mobileCards[i].title}
//                         <div className="text-sm font-normal mt-1">
//                           Brief description...
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </aside>
//         </div>

//         <style jsx>{`
//           .font-serif {
//             font-family: Georgia, "Times New Roman", serif;
//           }
//         `}</style>
//       </header>
//     </>
//   );
// }


"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CiCircleChevRight ,CiSearch } from "react-icons/ci";

export default function Navbar() {
  const [openMega, setOpenMega] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePanel, setMobilePanel] = useState(null);

  const nav = [
    {key:"home",label:"Home",link:"/"},
    { key: "services", label: "Services", link: "/services" },
    { key: "case-studies", label: "Case Studies", link: "/caseStudies" },
    { key: "insights", label: "Insights", link: "/insights" },
    { key: "about", label: "About", link: "/about" },
    { key: "ourPeople", label: "Our People", link: "/ourPeople" },
    { key: "careers", label: "Careers", link: "/careers" },
    { key: "gallery", label: "Gallery", link: "/gallery" },
    { key: "contact", label: "Contact", link: "/contact" }
  ];

  const logo = "/mnt/data/0e695bb8-0b15-49a5-82bb-a4d6550c264b.png";

  const desktopCards = [
    {
      id:1,
      title:"Fujifilm Diosynth Biotechnologies – Copenhagen, Denmark",
      image:"https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/R0A0033_copy_small_0-2048x1365-1-1536x1024.jpg",
    },
    {
      id:2,
      title:"HS2 Phase 1 - London, United Kingdom",
      image:"https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/HS2-VL-23575-543A8693-BBVS-HS2-OOC-Station-260421-www.johnzammit.co_.uk-Absolute-Photography-Ltd-1536x1024.jpg",
    },
    { 
      id:3,
      title:"STEGRA EPC Project - Stockholm, Sweden",
      image:"https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/HS2-VL-23575-543A8693-BBVS-HS2-OOC-Station-260421-www.johnzammit.co_.uk-Absolute-Photography-Ltd-1536x1024.jpg",
    },
  ];

  const mobileCards = [
    {
      id:1,
      title:"Fujifilm Diosynth Biotechnologies – Copenhagen, Denmark",
      image:"https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/R0A0033_copy_small_0-2048x1365-1-1536x1024.jpg",
    },
    {
      id:2,
      title:"HS2 Phase 1 - London, United Kingdom",
      image:"https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/HS2-VL-23575-543A8693-BBVS-HS2-OOC-Station-260421-www.johnzammit.co_.uk-Absolute-Photography-Ltd-1536x1024.jpg",
    },
    { 
      id:3,
      title:"STEGRA EPC Project - Stockholm, Sweden",
      image:"https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/HS2-VL-23575-543A8693-BBVS-HS2-OOC-Station-260421-www.johnzammit.co_.uk-Absolute-Photography-Ltd-1536x1024.jpg",
    },
    {
      id:4,
      title:"Carmelita House – Richmond, United Kingdom",
      image:"https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/0_9F1A2263JPG-1.webp",
    },
  ];

  return (
    <>
      <header className="bg-[#748c8d]  z-50 fixed top-0 left-0 w-full">
        <div className=" px-6">
          <div className="flex items-center justify-between h-24">
            {/* left: logo */}
            <div className="flex items-center gap-4">
             <Link href='/'> <img src='/logo.png' alt="Gingo" className="h-12 w-auto" /></Link>
            </div>

            {/* center: desktop nav */}
            <nav className="hidden md:block flex-1">
              <ul className="flex items-center justify-center gap-10 text-white text-[17px] font-medium">
                {nav.map((item) => (
                  <li
                    key={item.key}
                    className="relative group"
                    onMouseEnter={() => setOpenMega(item.key)}
                    onMouseLeave={() => setOpenMega(null)}
                  >
                    <Link href={item.link}>
                      <button
                        className="flex items-center gap-2 py-2"
                        aria-haspopup={
                          item.key !== "projects" ? "menu" : undefined
                        }
                      >
                        <span>{item.label}</span>
                        {item.key == "services" && (
                          <span className="text-sm">▾</span>
                        )}
                      </button>
                    </Link>

                    {/* Only show mega dropdown for "services" */}
                    {item.key === "services" && (
                      <div
                        className={`absolute left-1/2 z-50 -translate-x-1/2 top-14 w-[50rem] transition-all duration-200 ${
                          openMega === item.key
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                        }`}
                        aria-hidden={openMega === item.key ? "false" : "true"}
                        style={{ boxSizing: "border-box" }}
                      >
                        <div className="flex bg-[#efe9e0] p-10 rounded-xl -mt-5 shadow-sm">
                          <div className="w-1/2 pr-10">
                            <Link href={item.link} >
                              <h3 className="text-4xl flex font-serif text-[#1f1b18] mb-4">
                                {item.label} <CiCircleChevRight className='text-4xl pt-2' />
                              </h3>
                            </Link>
                            <p className="text-sm leading-6 font-medium max-w-[320px] text-[#1f1b18]">
                              We drive transparency, predictability and
                              performance on complex projects and programmes,
                              achieving successful outcomes and return on
                              investment.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 text-[#1f1b18] text-base">
                              <div className="space-y-3">
                                <Link
                                  href={`/services/${"Variation Management"
                                    .toLowerCase()
                                    .replace(/[^a-z0-9]+/g, "-")
                                    .replace(/^-+|-+$/g, "")}`}
                                >
                                  {" "}
                                  <p className="font-medium m-2">
                                   <span>•</span> Variation Management
                                  </p>
                                </Link>
                                <Link
                                  href={`/services/${"Tendering & Procurement"
                                    .toLowerCase()
                                    .replace(/[^a-z0-9]+/g, "-")
                                    .replace(/^-+|-+$/g, "")}`}
                                >
                                  {" "}
                                  <p className="font-medium m-2">
                                   <span>•</span> Tendering & Procurement
                                  </p>
                                </Link>
                                <Link
                                  href={`/services/${"Quantity Surveying & Commercial Management"
                                    .toLowerCase()
                                    .replace(/[^a-z0-9]+/g, "-")
                                    .replace(/^-+|-+$/g, "")}`}
                                >
                                  {" "}
                                  <p className="font-medium m-2">
                                   <span>•</span> Quantity Surveying & Commercial Management
                                  </p>
                                </Link>
                                <Link
                                  href={`/services/${"Estimating BOQs & MTOs"
                                    .toLowerCase()
                                    .replace(/[^a-z0-9]+/g, "-")
                                    .replace(/^-+|-+$/g, "")}`}
                                >
                                  {" "}
                                  <p className="font-medium m-2">
                                   <span>•</span> Estimating BOQs & MTOs
                                  </p>
                                </Link>
                              </div>
                              <div className="space-y-3 ">
                                <Link
                                  href={`/services/${"NEC, JCT, FIDIC, Bespoke Contract Experts"
                                    .toLowerCase()
                                    .replace(/[^a-z0-9]+/g, "-")
                                    .replace(/^-+|-+$/g, "")}`}
                                >
                                  {" "}
                                  <p className="font-medium m-2">
                                   <span>•</span> NEC, JCT, FIDIC, Bespoke Contract Experts
                                  </p>
                                </Link>
                                <Link
                                  href={`/services/${"Smart Commercial Systems"
                                    .toLowerCase()
                                    .replace(/[^a-z0-9]+/g, "-")
                                    .replace(/^-+|-+$/g, "")}`}
                                >
                                  {" "}
                                  <p className="font-medium m-2">
                                    <span>•</span> Smart Commercial Systems
                                  </p>
                                </Link>
                                <Link
                                  href={`/services/${"Project Management"
                                    .toLowerCase()
                                    .replace(/[^a-z0-9]+/g, "-")
                                    .replace(/^-+|-+$/g, "")}`}
                                >
                                  {" "}
                                  <p className="font-medium m-2">
                                   <span>•</span> Project Management
                                  </p>
                                </Link>
                                <Link
                                  href={`/services/${"CLAIMS, DISPUTES AND COMMERCIAL ADVISORY"
                                    .toLowerCase()
                                    .replace(/[^a-z0-9]+/g, "-")
                                    .replace(/^-+|-+$/g, "")}`}
                                >
                                  {" "}
                                  <p className="font-medium m-2">
                                   <span>•</span> Claims, Disputes and Commercial Advisory
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div className="w-1/2 pl-8 border-l border-[#bfb6ae] flex flex-col gap-6">
                            {desktopCards.map((src, i) => (
                              <Link
                                key={i}
                                href={`/case-studies/${i+1}`}
                                className="relative block rounded-xl overflow-hidden h-28"
                              >
                                <img
                                  src={desktopCards[i].image}
                                  alt={`card-${i}`}
                                  className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute left-6 bottom-4 text-white font-bold text-lg">
                                  {desktopCards[i].title}
                                  <div className="text-sm font-medium mt-1">
                                    Supporting description…
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* right: search + mobile hamburger */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className="text-2xl rounded-full w-10 h-10 flex items-center justify-center"
              >
                <CiSearch className="text-4xl"/>
              </button>

              <button
                className="md:hidden flex items-center justify-center w-10 h-10"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => {
                  setMobileOpen((s) => !s);
                  setMobilePanel(null);
                }}
              >
                {mobileOpen ? (
                  <span className="text-2xl">✕</span>
                ) : (
                  <span className="text-2xl">☰</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile full-screen menu - TOP SIDE */}
        <div
          className={`fixed inset-x-0 top-0 z-40 md:hidden transform ${
            mobileOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-300 h-full bg-[#bac6c7]`}
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          ></div>

          <aside className="relative w-full h-full bg-[#bac6c7] border-b border-[#e6ded5] overflow-auto">
            <div className="p-4 flex items-center justify-end sticky top-0 bg-[#bac6c7] border-b border-[#e6ded5]">
              <button
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="text-2xl"
              >
                ✕
              </button>
            </div>

            {/* top list of primary nav items */}
            {!mobilePanel && (
              <div className="px-6 py-4">
                <ul className="divide-y divide-[#bfb6ae]">
                  {nav.map((n) => (
                    <li
                      key={n.key}
                      className="py-6 flex items-center justify-between"
                    >
                      {/* If the item is "services", open the panel.
                          Otherwise render a Link that navigates & closes the menu */}
                      {n.key === "services" ? (
                        <>
                          <button
                            className="text-lg text-[#1f1b18] text-left w-full"
                            onClick={() => {
                              setMobilePanel(n.key);
                            }}
                          >
                            {n.label}
                          </button>
                          <button className="ml-4 text-xl">→</button>
                        </>
                      ) : (
                        <Link
                          href={n.link}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-between w-full"
                        >
                          <span className="text-lg text-[#1f1b18] text-left">
                            {n.label}
                          </span>
                          <span className="ml-4 text-xl">→</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* mobile panel (e.g., Services details) */}
            {mobilePanel && (
              <div className="px-6 py-4">
                <button
                  className="text-sm text-blue-600 mb-4  flex items-center gap-2"
                  onClick={() => setMobilePanel(null)}
                >
                  ← Back
                </button>

                <h3 className="text-3xl flex font-serif mb-3">
                  {mobilePanel.charAt(0).toUpperCase() + mobilePanel.slice(1)} <CiCircleChevRight className='text-4xl pl-2' />
                </h3>
                <p className="text-sm leading-6 text-[#1f1b18] max-w-[320px] mb-6">
                  We drive transparency, predictability and performance on
                  complex projects and programmes, achieving successful outcomes
                  and return on investment.
                </p>

                <ul className="space-y-4">
                  {[
                    'Variation Management',
                    'Tendering & Procurement',
                    'Quantity Surveying & Commercial Management',
                    'Estimating BOQs & MTOs',
                    'NEC, JCT, FIDIC, Bespoke Contract Experts',
                    'Smart Commercial Systems',
                    'Project Management'
                  ].map((t, i) => (
                    <li key={i} className="py-3 border-b border-[#bfb6ae]">
                      <Link
                        href={`/services/${t
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, "-")
                          .replace(/^-+|-+$/g, "")}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {t}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-4">
                  {mobileCards.map((src, i) => (
                    <Link
                      key={i}
                      href={`/case-studies/${i+1}`}
                      className="block rounded-xl overflow-hidden h-36 relative"
                      onClick={() => setMobileOpen(false)}
                    >
                      <img
                        src={mobileCards[i].image}
                        alt={`mobile-card-${i}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute left-6 bottom-4 text-white font-semibold text-lg">
                        {mobileCards[i].title}
                        <div className="text-sm font-normal mt-1">
                          Brief description...
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        <style jsx>{`
          .font-serif {
            font-family: Georgia, "Times New Roman", serif;
          }
        `}</style>
      </header>
    </>
  );
}
