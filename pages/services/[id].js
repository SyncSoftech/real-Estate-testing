// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Head from "next/head";

// /* -------------------------
//    Data (CAPABILITIES)
//    ------------------------- */
// const CAPABILITIES = [
//   /* ... same capability objects as before ... */
//   {
//     title: "Variation Management",
//     desc: "At Ginjo, we bring order to the change process, ensuring every modification works for your project – not against it.",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/graph-business-financial-investment-risk-word-1536x1121.jpg",
//     content: {
//       description:
//         "Our Variation Management service helps you maintain control over project changes, ensuring every modification is tracked, approved, and implemented efficiently.",
//       benefits: [
//         "Streamlined change order process",
//         "Reduced project delays and cost overruns",
//         "Improved communication between stakeholders",
//         "Comprehensive documentation and reporting",
//       ],
//     },
//   },
//   {
//     title: "Tendering & Procurement",
//     desc: "Reduced our bid prep time by 3 weeks while increasing scoring compliance. Procurement Director, Residential Developer",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-10-31-at-8.09.26-PM-1536x1152.jpeg",
//     content: {
//       description:
//         "Our Tendering & Procurement service ensures you get the best value while maintaining quality and compliance throughout the procurement process.",
//       benefits: [
//         "Comprehensive bid preparation",
//         "Vendor qualification and selection",
//         "Contract negotiation and management",
//         "Risk assessment and mitigation",
//       ],
//     },
//   },
//   {
//     title: "Quantity Surveying & Commercial Management",
//     desc: "Ginjo's quantity surveying and commercial management services protect your margins from tender to final account. ",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/site-engineer-construction-site-1536x1025.jpg",
//     content: {
//       description:
//         "Professional quantity surveying services that ensure cost efficiency and financial control throughout your construction project.",
//       benefits: [
//         "Accurate cost planning and estimation",
//         "Cost control and value engineering",
//         "Interim valuations and payment applications",
//         "Final account preparation and agreement",
//       ],
//     },
//   },
//   {
//     title: "Estimating BOQs & MTOs",
//     desc: "We combine human expertise with tech-enabled tools to deliver fast, accurate outputs – while always maintaining professional judgment and scope understanding.",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/close-up-pens-calculator-plans-1536x1024.jpg",
//     content: {
//       description:
//         "Accurate and detailed Bill of Quantities (BOQ) and Material Take-Offs (MTO) to support your project's financial planning and procurement.",
//       benefits: [
//         "Detailed quantity take-offs",
//         "Material and labor cost estimation",
//         "Value engineering options",
//         "Bid preparation support",
//       ],
//     },
//   },
//   {
//     title: "NEC, JCT, FIDIC, Bespoke Contract Experts",
//     desc: "Ginjo's NEC contract experts simplify JCT and FIDIC compliance through tailored audits, consulting, and procedural guidance...",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/two-men-shaking-hands-1536x1025.jpg",
//     content: {
//       description:
//         "Expert guidance on all major construction contract forms including NEC, JCT, and FIDIC to protect your interests and ensure compliance.",
//       benefits: [
//         "Contract drafting and review",
//         "Dispute resolution and claims management",
//         "Contract administration training",
//         "Compliance and risk assessment",
//       ],
//     },
//   },
//   {
//     title: "Smart Commercial Systems",
//     desc: "Smart Commercial Systems Built for Commercial Professionals At Ginjo, our systems are designed and built by Rishi Rao, a commercial leader with two...",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/ChatGPT-Image-May-18-2025-08_34_58-AM.png",
//     content: {
//       description:
//         "Custom-built commercial management systems designed to streamline your operations and improve project outcomes.",
//       benefits: [
//         "Custom software solutions",
//         "Process automation",
//         "Data analytics and reporting",
//         "Integration with existing systems",
//       ],
//     },
//   },
//   {
//     title: "Project Management",
//     desc: "As part of Ginjo Construction's premium end-to-end commercial services, our Project Management offering is led by our Founder Daniel Ginn MRICS, a Chartered RICS Project Manager with extensive EPC experience at Fluor and AFRY.",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-10-31-at-8.09.26-PM-3-1536x1152.jpeg",
//     content: {
//       description:
//         "End-to-end project management services that deliver your project on time, within budget, and to the highest quality standards.",
//       benefits: [
//         "Project planning and scheduling",
//         "Stakeholder management",
//         "Risk management",
//         "Quality assurance and control",
//       ],
//     },
//   },
// ];

// /* -------------------------
//    Helper: Slugify titles
//    ------------------------- */
// function toSlug(text = "") {
//   return text
//     .toString()
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/^-+|-+$/g, "");
// }

// /* -------------------------
//    Component
//    ------------------------- */
// export default function ServiceDetail() {
//   const router = useRouter();
//   const { id } = router.query || {};

//   // Keep hooks at top-level and in a stable order
//   const [service, setService] = useState(null);
//   const [idx, setIdx] = useState(0); // moved here so hooks order is stable

//   useEffect(() => {
//     if (!id) return;
//     const found = CAPABILITIES.find((c) => toSlug(c.title) === String(id).toLowerCase());
//     setService(found || null);
//   }, [id]);

//   // slides depend on service — safe to compute here (may be empty until service is set)
//   const slides = service
//     ? [
//         {
//           id: 1,
//           label: "OUTCOMES",
//           title: "World Expo 2025 Osaka,\nAustralia Pavilion, Japan",
//           description: "Delivering a global platform to showcase the best of Australia to the world.",
//           image: service.image,
//         },
//       ]
//     : [];

//   // make sure total is never 0 to avoid modulo by zero — if no slides, total = 1 (controls will be harmless)
//   const total = slides.length > 0 ? slides.length : 1;

//   const prev = () => setIdx((i) => (i - 1 + total) % total);
//   const next = () => setIdx((i) => (i + 1) % total);

//   // Loader while service isn't found/resolved
//   if (!service) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
//       </div>
//     );
//   }

//   // Insights and card image (same as before)
//   const CARD_IMAGE = "/mnt/data/fd073204-4981-43f3-8f68-8e237203236b.png";

//   const INSIGHTS = [
//     {
//       id: 1,
//       title: "Navigating procurement of complex labs",
//       description:
//         "These facilities support cutting-edge science but must do so in a way that meets safety, regulatory and biosecurity standards.",
//       minutes: 7,
//       date: "04 Nov 25",
//       image: CARD_IMAGE,
//     },
//     {
//       id: 2,
//       title: "Can agile programme management unlock US airports?",
//       description:
//         "Air passenger numbers have grown since COVID, igniting new plans for airport development across the US – as traditional development is not effective.",
//       minutes: 6,
//       date: "24 Sept 25",
//       image: CARD_IMAGE,
//     },
//     {
//       id: 3,
//       title: "China’s construction market",
//       description: "China’s construction market is in transition, but its cost and supply chain advantage remain intact.",
//       minutes: 6,
//       date: "28 Aug 25",
//       image: CARD_IMAGE,
//     },
//     {
//       id: 4,
//       title: "The way forward for Japan's construction industry",
//       description: "Japan has re-entered the global spotlight as one of the most expensive construction markets, with five cities in the world’s top 15.",
//       minutes: 7,
//       date: "13 Aug 25",
//       image: CARD_IMAGE,
//     },
//   ];

//   const slide = slides[idx % total] || slides[0] || { label: "", title: "", description: "" };

//   return (
//     <>
//       <Head>
//         <title>{service.title} | Ginjo Services</title>
//         <meta name="description" content={service.desc} />
//       </Head>

//       {/* ... the rest of your JSX unchanged — hero, service content, related services, insights, etc. ... */}
//       {/* For brevity I'll show the hero and slides area — paste your previous JSX for the rest */}

//       {/* Hero Section */}
//       <section className="w-full bg-white">
//         <div className="w-full overflow-hidden">
//           <div className="grid grid-cols-1 lg:grid-cols-2">
//             {/* Left Content */}
//             <div className="bg-[#f2efe8] p-8 md:p-14 lg:p-20 xl:p-28 rounded-tr-3xl rounded-br-3xl lg:rounded-br-none lg:rounded-tl-3xl">
//               <div className="max-w-2xl">
//                 <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-[#1f2937]">
//                   {service.title}
//                 </h1>
//                 <p className="mt-6 text-base md:text-lg text-[#374151] ">
//                   {service.desc}
//                 </p>
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className="w-full h-[360px] md:h-[420px] lg:h-auto overflow-hidden">
//               <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Slide / Outcomes (Left text + controls) */}
//       <section className="w-full bg-[#0f172a] text-white py-12">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-8">
//           <div className="w-full lg:w-1/2">
//             <div className="text-white max-w-xl">
//               <div className="text-sm tracking-wide font-medium mb-4 opacity-90">{slide.label}</div>

//               <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-pre-line">
//                 {slide.title}
//               </h1>

//               <p className="mt-6 text-sm md:text-base max-w-xl  text-white/90">{slide.description}</p>
//             </div>
//           </div>

//           <div className="w-full lg:w-1/2 flex items-center justify-end">
//             <div className="flex items-center gap-4">
//               <button aria-label="Previous slide" onClick={prev} className="w-12 h-12 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//                   <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>

//               <div className="text-white text-sm">{(idx % total) + 1} / {total}</div>

//               <button aria-label="Next slide" onClick={next} className="w-12 h-12 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//                   <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Insights grid */}
//       <section className="w-full bg-white py-12 lg:py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10">Procurement and supply chain insights</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {INSIGHTS.map((item) => (
//               <article key={item.id} className="rounded-xl overflow-hidden bg-white shadow-sm border border-transparent hover:shadow-md transition">
//                 <img src={item.image} alt={item.title} className="w-full h-40 md:h-44 object-cover rounded-t-xl" />

//                 <div className="bg-[#f2ebe3] p-5 rounded-b-xl">
//                   <h3 className="font-serif font-semibold text-lg leading-tight mb-3">{item.title}</h3>

//                   <p className="text-gray-700 text-sm  mb-5">{item.description}</p>

//                   <div className="flex items-center justify-start gap-6 text-xs text-gray-700 mt-auto">
//                     <div className="flex items-center gap-2">
//                       <svg width="14" height="14" viewBox="0 0 24 24">
//                         <path d="M12 1v11M21 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                       </svg>
//                       {item.minutes} minutes
//                     </div>

//                     <div className="font-medium">{item.date}</div>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>

//           <div className="flex justify-end mt-10">
//             <button className="px-5 py-3 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition">
//               View all related insights
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Expert witnesses + contact block */}
//       <div className="w-full bg-white">
//         {/* Expert witness hero */}
//         <section className="max-w-7xl mx-auto px-6 py-8">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our expert witnesses</h2>

//           <div className="relative rounded-2xl overflow-hidden border border-gray-200">
//             <img src="/mnt/data/13820750-c936-4854-8415-0103451a35ec.png" alt="Expert witness hero" className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-transparent" />

//             <div className="absolute inset-0 flex items-end">
//               <div className="p-6 md:p-10 lg:p-12 max-w-2xl">
//                 <div className="text-sm tracking-wide text-white/90 mb-2">Meet our</div>
//                 <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight mb-4">Meet our quantum and delay specialists</h3>
//                 <p className="text-white/90 max-w-xl">We provide project advisory and expert witness services for any matters in dispute.</p>
//               </div>
//             </div>

//             <div className="absolute right-6 bottom-6 flex items-center gap-4">
//               <button aria-label="Previous" className="w-11 h-11 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//                   <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>

//               <div className="text-white/90 text-sm">1/1</div>

//               <button aria-label="Next" className="w-11 h-11 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//                   <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Contact */}
//         <section className="max-w-7xl mx-auto px-6 pb-12">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Get in touch</h2>

//           <div className="max-w-xl">
//             <div className="font-serif text-xl font-semibold">Gareth Poole</div>
//             <div className="text-sm text-gray-700 mb-4">Director</div>

//             <ul className="space-y-3">
//               <li>
//                 <a href="mailto:info@example.com" className="inline-flex items-center gap-3 text-[#0f4b7f] hover:underline">
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-none">
//                     <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7" stroke="#0f4b7f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                     <path d="M3 8.5l9 6 9-6" stroke="#0f4b7f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                   <span className="text-sm font-medium">Email</span>
//                 </a>
//               </li>

//               <li>
//                 <a href="tel:+4401212623605" className="inline-flex items-center gap-3 text-[#0f4b7f] hover:underline">
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-none">
//                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12 1.05.42 2.07.9 3.02a2 2 0 0 1-.45 2.11L9.91 11.09a13.05 13.05 0 0 0 6 6l1.24-1.24a2 2 0 0 1 2.11-.45c.95.48 1.97.78 3.02.9A2 2 0 0 1 22 16.92z" stroke="#0f4b7f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>

//                   <span className="text-sm font-medium">+44 0121 262 3605</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </section>

//         {/* Hidden asset so build system registers it */}
//         <img src="/mnt/data/4aea0afe-b729-43bf-b90a-9f3dfd188e31.png" alt="asset" className="hidden" />
//       </div>
//     </>
//   );
// }




// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Head from "next/head";

// /* -------------------------
//    Data (CAPABILITIES)
//    ------------------------- */
// const CAPABILITIES = [
//   {
//     title: "Variation Management",
//     desc: "Variations don't have to mean chaos or cost overruns. At Ginjo, we bring order to the change process, ensuring every modification works for your project – not against it.",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/graph-business-financial-investment-risk-word-1536x1121.jpg",
//     content: {
//       description:
//         "Our Variation Management service helps you maintain control over the entire variation lifecycle — tracking, valuing, negotiating and documenting every change so your project stays on track.",
//       highlights: [
//         "Tracking changes in real-time",
//         "Valuing impacts accurately",
//         "Negotiating fair outcomes",
//         "Documenting everything properly",
//       ],
//       additional: `We go beyond basic administration. Using proven methods and smart technology, we spot variations others miss by auditing subcontracts and designs, forecast how changes will affect your timeline and budget, and prepare bulletproof documentation that stands up to scrutiny.`,
//       benefits: [
//         "Fewer disputes about changes",
//         "Better cost control",
//         "More time to focus on building",
//       ],
//       bullets: ["Variation Management", "Claims Resolution", "Risk Recovery"],
//       valueProp: `Controlling Change, Protecting Margins — We implement rigorous systems to track, value and negotiate variations, ensuring full compliance with contractual mechanisms, real-time impact analysis on cost and programme, and transparent documentation to prevent disputes.`,
//       people: [
//         { name: "Adersh Rajagopalan MRICS MAIQS MSc", role: "Associate Director", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//         { name: "Rishi Rao", role: "Head of Business Operations", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//       ],
//     },
//   },
//   {
//     title: "Tendering & Procurement",
//     desc: "Ginjo's specialists help contractors and developers win more work at better margins through strategic bid development, end-to-end tender management, and optimised supplier negotiations.",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-10-31-at-8.09.26-PM-1536x1152.jpeg",
//     content: {
//       description:
//         "Our proven approach combines NEC/JCT contract expertise with market insights to strengthen submissions, reduce risks, and improve win rates. Whether you're preparing PQQs, finalising bids, or negotiating subcontracts, we provide hands-on support and construction procurement strategies your team needs to succeed.",
//       testimonial: `"Reduced our bid prep time by 3 weeks while increasing scoring compliance." — Procurement Director, Residential Developer`,
//       features: [
//         "Bid Strategy Development",
//         "Tender Management",
//         "Supplier Negotiations",
//       ],
//       analytics: `Streamline Your Bidding Process with Data-Driven Insights — Our team leverages live procurement dashboards and construction market analytics to identify pricing sweet spots and reduce bid risks. From NEC4 tender compliance to JCT subcontractor packages, we ensure your submissions are competitively positioned, fully compliant, and profit-protected, giving you the edge in competitive tenders.`,
//       results: [
//         "Increased win rates by up to 42% (average) in scoped engagements",
//         "Reduced bid preparation time by up to 3 weeks",
//         "Improved scoring compliance and procurement positioning",
//       ],
//       people: [
//         { name: "Adersh Rajagopalan MRICS MAIQS MSc", role: "Associate Director", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//         { name: "Rishi Rao", role: "Head of Business Operations", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//       ],
//     },
//   },
//   {
//     title: "Quantity Surveying & Commercial Management",
//     desc: "Ginjo's quantity surveying and commercial management services protect your margins from tender to final account.",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/site-engineer-construction-site-1536x1025.jpg",
//     content: {
//       description:
//         "Our RICS-accredited specialists deliver accurate cost forecasting, NEC/JCT-compliant valuations and interim applications, and dispute-resistant documentation to protect your project's commercial position.",
//       highlights: [
//         "Accurate cost forecasting with live dashboards",
//         "NEC/JCT-compliant valuations and applications",
//         "Dispute-resistant documentation",
//         "Risk-managed subcontractor packages",
//       ],
//       testimonial: `"Reduced our cost variances by 18% through Ginjo's monthly cost reconciliation." — Commercial Manager, Top-10 Contractor`,
//       additional: `We don't just price – we plan. From early-stage estimates to detailed BoQs and procurement support, our team ensures your cost forecasts are realistic, defensible, and built for client trust. For tender, live project, or cost audit scenarios we keep commercial clarity at the centre.`,
//       services: ["Cost Planning & Control", "Contractual & Claim Support", "Subcontract Management"],
//       people: [
//         { name: "Adersh Rajagopalan MRICS MAIQS MSc", role: "Associate Director", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//         { name: "Rishi Rao", role: "Head of Business Operations", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//       ],
//     },
//   },
//   {
//     title: "Estimating BOQs & MTOs",
//     desc: "We combine human expertise with tech-enabled tools to deliver fast, accurate outputs – while always maintaining professional judgment and scope understanding.",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/close-up-pens-calculator-plans-1536x1024.jpg",
//     content: {
//       description:
//         "Detailed, reliable estimating services that give contractors and clients confidence to price, plan and proceed with clarity. From early cost guidance to tender-ready BOQs and precise MTOs, we deliver the commercial foundation your project needs.",
//       services: ["Pre-Contract Estimate", "Bill of Quantities (BOQs)", "Material Take offs (MTOs)"],
//       benefits: [
//         "Early clarity leading to stronger decisions",
//         "Budget estimating and benchmarking",
//         "Trade package estimates and value engineering",
//       ],
//       approach: `We combine human expertise with tech-enabled tools to deliver fast, accurate outputs while maintaining professional judgment and scope understanding.`,
//       people: [
//         { name: "Adersh Rajagopalan MRICS MAIQS MSc", role: "Associate Director", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//         { name: "Rishi Rao", role: "Head of Business Operations", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//       ],
//     },
//   },
//   {
//     title: "NEC, JCT, FIDIC, Bespoke Contract Experts",
//     desc: "Ginjo's NEC contract experts simplify JCT and FIDIC compliance through tailored audits, consulting, and procedural guidance...",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/two-men-shaking-hands-1536x1025.jpg",
//     content: {
//       description:
//         "Practical contract solutions for real-world projects: drafting, review, change management, dispute resolution and targeted training to keep your contracts working for you.",
//       services: [
//         "Contract drafting & review",
//         "Risk management",
//         "Change management (variations & compensation events)",
//         "Dispute resolution",
//         "Training & workshops",
//       ],
//       audits: `Contract Audits: Ensure Compliance — Our audits verify early warnings, compensation events and variation orders are properly documented and managed under NEC, JCT and FIDIC. We provide a clear picture of contractual health and highlight risks before they escalate.`,
//       people: [
//         { name: "Adersh Rajagopalan MRICS MAIQS MSc", role: "Associate Director", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//         { name: "Rishi Rao", role: "Head of Business Operations", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//       ],
//     },
//   },
//   {
//     title: "Smart Commercial Systems",
//     desc: "Smart Commercial Systems Built for Commercial Professionals At Ginjo, our systems are designed and built by Rishi Rao, a commercial leader with two...",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/ChatGPT-Image-May-18-2025-08_34_58-AM.png",
//     content: {
//       description:
//         "Custom-built commercial management systems designed to streamline your operations and improve project outcomes. Built by commercial people, not IT contractors.",
//       deliverables: [
//         "Live Commercial Dashboards",
//         "SharePoint Workspaces",
//         "Power Automate Workflows",
//         "Dynamic Reporting (Power BI)",
//         "Integrated Templates & Approvals",
//       ],
//       philosophy: `We're quantity surveyors, project leads, and procurement strategists first and system builders second — we challenge, simplify and strengthen processes before we automate them.`,
//       people: [
//         { name: "Rishi Rao", role: "Head of Business Operations", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//       ],
//     },
//   },
//   {
//     title: "Project Management",
//     desc: "As part of Ginjo Construction's premium end-to-end commercial services, our Project Management offering is led by our Founder Daniel Ginn MRICS, a Chartered RICS Project Manager with extensive EPC experience at Fluor and AFRY.",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-10-31-at-8.09.26-PM-3-1536x1152.jpeg",
//     content: {
//       description:
//         "End-to-end project management services that deliver your project on time, within budget, and to the highest quality standards. Data-driven oversight for early issue resolution and ethical risk allocation.",
//       approach: [
//         "Project set-up & mobilisation",
//         "Execution & monitoring",
//         "Control phase (reviews & corrective actions)",
//         "Close-out & lessons learned",
//       ],
//       specialist: `Chartered RICS Expertise: Daniel Ginn brings rigorous, standardised methodologies from leading complex megaprojects at Fluor and AFRY. EPC megaproject focus with tailored controls for billion-pound infrastructure, energy and industrial programmes.`,
//       people: [{ name: "Daniel Ginn", role: "Director", image: "/mnt/data/daniel-ginn.png" }],
//     },
//   },
// ];

// /* -------------------------
//    Helper: Slugify titles
//    ------------------------- */
// function toSlug(text = "") {
//   return text
//     .toString()
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/^-+|-+$/g, "");
// }

// /* -------------------------
//    Component
//    ------------------------- */
// export default function ServiceDetail() {
//   const router = useRouter();
//   const { id } = router.query || {};

//   // Keep hooks at top-level and in a stable order
//   const [service, setService] = useState(null);
//   const [idx, setIdx] = useState(0);

//   useEffect(() => {
//     if (!id) return;
//     const found = CAPABILITIES.find((c) => toSlug(c.title) === String(id).toLowerCase());
//     setService(found || null);
//   }, [id]);

//   // slides depend on service — safe to compute here (may be empty until service is set)
//   const slides = service
//     ? [
//         {
//           id: 1,
//           label: "OUTCOMES",
//           title: "World Expo 2025 Osaka,\nAustralia Pavilion, Japan",
//           description: "Delivering a global platform to showcase the best of Australia to the world.",
//           image: service.image,
//         },
//       ]
//     : [];

//   // make sure total is never 0 to avoid modulo by zero — if no slides, total = 1 (controls will be harmless)
//   const total = slides.length > 0 ? slides.length : 1;

//   const prev = () => setIdx((i) => (i - 1 + total) % total);
//   const next = () => setIdx((i) => (i + 1) % total);

//   // Loader while service isn't found/resolved
//   if (!service) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
//       </div>
//     );
//   }

//   // Insights and card image (same as before)
//   const CARD_IMAGE = "/mnt/data/fd073204-4981-43f3-8f68-8e237203236b.png";

//   const INSIGHTS = [
//     {
//       id: 1,
//       title: "Navigating procurement of complex labs",
//       description:
//         "These facilities support cutting-edge science but must do so in a way that meets safety, regulatory and biosecurity standards.",
//       minutes: 7,
//       date: "04 Nov 25",
//       image: CARD_IMAGE,
//     },
//     {
//       id: 2,
//       title: "Can agile programme management unlock US airports?",
//       description:
//         "Air passenger numbers have grown since COVID, igniting new plans for airport development across the US – as traditional development is not effective.",
//       minutes: 6,
//       date: "24 Sept 25",
//       image: CARD_IMAGE,
//     },
//     {
//       id: 3,
//       title: "China's construction market",
//       description: "China's construction market is in transition, but its cost and supply chain advantage remain intact.",
//       minutes: 6,
//       date: "28 Aug 25",
//       image: CARD_IMAGE,
//     },
//     {
//       id: 4,
//       title: "The way forward for Japan's construction industry",
//       description: "Japan has re-entered the global spotlight as one of the most expensive construction markets, with five cities in the world's top 15.",
//       minutes: 7,
//       date: "13 Aug 25",
//       image: CARD_IMAGE,
//     },
//   ];

//   const slide = slides[idx % total] || slides[0] || { label: "", title: "", description: "" };

//   return (
//     <>
//       <Head>
//         <title>{service.title} | Ginjo Services</title>
//         <meta name="description" content={service.desc} />
//       </Head>

//       {/* Hero Section */}
//       <section className="w-full bg-white">
//         <div className="w-full overflow-hidden">
//           <div className="grid grid-cols-1 lg:grid-cols-2">
//             {/* Left Content */}
//             <div className="bg-[#f2efe8] p-8 md:p-14 lg:p-20 xl:p-28 rounded-tr-3xl rounded-br-3xl lg:rounded-br-none lg:rounded-tl-3xl">
//               <div className="max-w-2xl">
//                 <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-[#1f2937]">
//                   {service.title}
//                 </h1>
//                 <p className="mt-6 text-base md:text-lg text-[#374151] ">
//                   {service.desc}
//                 </p>
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className="w-full h-[360px] md:h-[420px] lg:h-auto overflow-hidden">
//               <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

// {/* -- Service details (renders CAPABILITIES content) -- */}
// <section className="w-full bg-white py-12">
//   <div className="max-w-7xl mx-auto px-6">
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//       {/* Main copy */}
//       <div className="lg:col-span-2">
//         {/* Content description */}
//         {service.content?.description && (
//           <p className="text-gray-700 text-base md:text-lg  mb-6">
//             {service.content.description}
//           </p>
//         )}

//         {/* Highlights (if any) */}
//         {service.content?.highlights?.length > 0 && (
//           <div className="mb-6">
//             <h4 className="font-serif text-lg font-semibold mb-3">How we help</h4>
//             <ul className="list-disc pl-5 text-gray-700 space-y-2">
//               {service.content.highlights.map((h, i) => (
//                 <li key={i} className="">{h}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Value proposition / extra text */}
//         {service.content?.valueProp && (
//           <div className="mb-6 bg-[#f2efe8] p-5 rounded-lg border border-transparent">
//             <div className="font-semibold mb-2">Controlling Change, Protecting Margins</div>
//             <p className="text-sm text-gray-700 ">{service.content.valueProp}</p>
//           </div>
//         )}

//         {/* Additional paragraph */}
//         {service.content?.additional && (
//           <p className="text-gray-700 text-sm  mb-4">{service.content.additional}</p>
//         )}

//         {/* Benefits / bullets */}
//         {service.content?.benefits?.length > 0 && (
//           <div className="mt-4">
//             <h5 className="font-medium mb-2">What this means for you</h5>
//             <div className="flex flex-wrap gap-3">
//               {service.content.benefits.map((b, i) => (
//                 <span key={i} className="text-xs font-medium px-3 py-1 rounded-md bg-[#f7f7f7] border">{b}</span>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Sidebar: quick bullets + people */}
//       <aside className="lg:col-span-1">
//         {/* Bullets */}
//         {service.content?.bullets?.length > 0 && (
//           <div className="mb-6 p-5 bg-[#f2ebe3] rounded-xl">
//             <h6 className="font-medium mb-3">Services</h6>
//             <ul className="text-sm space-y-2">
//               {service.content.bullets.map((b, i) => (
//                 <li key={i} className="">• {b}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* People */}
//         {service.content?.people?.length > 0 && (
//           <div className="p-5 rounded-xl border">
//             <div className="font-medium mb-3">Market Specialist</div>
//             <div className="space-y-3">
//               {service.content.people.map((p, i) => (
//                 <div key={i} className="flex items-center gap-3">
//                   <img
//                     src={p.image || "/mnt/data/default-profile.png"}
//                     alt={p.name}
//                     className="w-11 h-11 rounded-full object-cover"
//                     onError={(e)=>{ e.currentTarget.src = '/mnt/data/default-profile.png'; }}
//                   />
//                   <div>
//                     <div className="text-sm font-semibold">{p.name}</div>
//                     <div className="text-xs text-gray-600">{p.role}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </aside>
//     </div>
//   </div>
// </section>


//       {/* Slide / Outcomes (Left text + controls) */}
//       <section className="w-full bg-[#0f172a] text-white py-12">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-8">
//           <div className="w-full lg:w-1/2">
//             <div className="text-white max-w-xl">
//               <div className="text-sm tracking-wide font-medium mb-4 opacity-90">{slide.label}</div>

//               <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-pre-line">
//                 {slide.title}
//               </h1>

//               <p className="mt-6 text-sm md:text-base max-w-xl  text-white/90">{slide.description}</p>
//             </div>
//           </div>

//           <div className="w-full lg:w-1/2 flex items-center justify-end">
//             <div className="flex items-center gap-4">
//               <button aria-label="Previous slide" onClick={prev} className="w-12 h-12 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//                   <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>

//               <div className="text-white text-sm">{(idx % total) + 1} / {total}</div>

//               <button aria-label="Next slide" onClick={next} className="w-12 h-12 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//                   <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Insights grid */}
//       <section className="w-full bg-white py-12 lg:py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10">Procurement and supply chain insights</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {INSIGHTS.map((item) => (
//               <article key={item.id} className="rounded-xl overflow-hidden bg-white shadow-sm border border-transparent hover:shadow-md transition">
//                 <img src={item.image} alt={item.title} className="w-full h-40 md:h-44 object-cover rounded-t-xl" />

//                 <div className="bg-[#f2ebe3] p-5 rounded-b-xl">
//                   <h3 className="font-serif font-semibold text-lg leading-tight mb-3">{item.title}</h3>

//                   <p className="text-gray-700 text-sm  mb-5">{item.description}</p>

//                   <div className="flex items-center justify-start gap-6 text-xs text-gray-700 mt-auto">
//                     <div className="flex items-center gap-2">
//                       <svg width="14" height="14" viewBox="0 0 24 24">
//                         <path d="M12 1v11M21 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                       </svg>
//                       {item.minutes} minutes
//                     </div>

//                     <div className="font-medium">{item.date}</div>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>

//           <div className="flex justify-end mt-10">
//             <button className="px-5 py-3 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition">
//               View all related insights
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Expert witnesses + contact block */}
//       <div className="w-full bg-white">
//         {/* Expert witness hero */}
//         <section className="max-w-7xl mx-auto px-6 py-8">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our expert witnesses</h2>

//           <div className="relative rounded-2xl overflow-hidden border border-gray-200">
//             <img src="/mnt/data/13820750-c936-4854-8415-0103451a35ec.png" alt="Expert witness hero" className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-transparent" />

//             <div className="absolute inset-0 flex items-end">
//               <div className="p-6 md:p-10 lg:p-12 max-w-2xl">
//                 <div className="text-sm tracking-wide text-white/90 mb-2">Meet our</div>
//                 <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight mb-4">Meet our quantum and delay specialists</h3>
//                 <p className="text-white/90 max-w-xl">We provide project advisory and expert witness services for any matters in dispute.</p>
//               </div>
//             </div>

//             <div className="absolute right-6 bottom-6 flex items-center gap-4">
//               <button aria-label="Previous" className="w-11 h-11 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//                   <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>

//               <div className="text-white/90 text-sm">1/1</div>

//               <button aria-label="Next" className="w-11 h-11 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//                   <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Contact */}
//         <section className="max-w-7xl mx-auto px-6 pb-12">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Get in touch</h2>

//           <div className="max-w-xl">
//             <div className="font-serif text-xl font-semibold">Gareth Poole</div>
//             <div className="text-sm text-gray-700 mb-4">Director</div>

//             <ul className="space-y-3">
//               <li>
//                 <a href="mailto:info@example.com" className="inline-flex items-center gap-3 text-[#0f4b7f] hover:underline">
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-none">
//                     <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7" stroke="#0f4b7f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                     <path d="M3 8.5l9 6 9-6" stroke="#0f4b7f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                   <span className="text-sm font-medium">Email</span>
//                 </a>
//               </li>

//               <li>
//                 <a href="tel:+4401212623605" className="inline-flex items-center gap-3 text-[#0f4b7f] hover:underline">
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-none">
//                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12 1.05.42 2.07.9 3.02a2 2 0 0 1-.45 2.11L9.91 11.09a13.05 13.05 0 0 0 6 6l1.24-1.24a2 2 0 0 1 2.11-.45c.95.48 1.97.78 3.02.9A2 2 0 0 1 22 16.92z" stroke="#0f4b7f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>

//                   <span className="text-sm font-medium">+44 0121 262 3605</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </section>

//         {/* Hidden asset so build system registers it */}
//         <img src="/mnt/data/4aea0afe-b729-43bf-b90a-9f3dfd188e31.png" alt="asset" className="hidden" />
//       </div>
//     </>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Head from "next/head";

// /* -------------------------
//    Data (CAPABILITIES) - expanded with bullet details
//    ------------------------- */
// const CAPABILITIES = [
//   {
//     title: "Variation Management",
//     desc: "Variations don't have to mean chaos or cost overruns. At Ginjo, we bring order to the change process, ensuring every modification works for your project – not against it.",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/graph-business-financial-investment-risk-word-1536x1121.jpg",
//     content: {
//       description:
//         "Our Variation Management service helps you maintain control over the entire variation lifecycle — tracking, valuing, negotiating and documenting every change so your project stays on track.",
//       highlights: [
//         "Tracking changes in real-time",
//         "Valuing impacts accurately",
//         "Negotiating fair outcomes",
//         "Documenting everything properly",
//       ],
//       additional: `We go beyond basic administration. Using proven methods and smart technology, we spot variations others miss by auditing subcontracts and designs, forecast how changes will affect your timeline and budget, and prepare bulletproof documentation that stands up to scrutiny.`,
//       benefits: [
//         "Fewer disputes about changes",
//         "Better cost control",
//         "More time to focus on building",
//       ],
//       bullets: ["Variation Management", "Claims Resolution", "Risk Recovery"],
//       // New: detailed point-wise information for each bullet
//       bulletsDetails: {
//         "Variation Management": {
//           heading: "Controlling Change, Protecting Margins",
//           text: `We implement rigorous systems to track, value and negotiate variations, ensuring:\n* Full compliance with contractual mechanisms (NEC compensation events, JCT instructions)\n* Real-time impact analysis on cost and programme\n* Transparent documentation to prevent disputes`,
//         },
//         "Claims Resolution": {
//           heading: "From Dispute to Resolution",
//           text: `Our claims experts build bulletproof cases using:\n* Forensic delay analysis (Time Impact/Windows methods)\n* RICS-compliant loss & expense calculations\n* Mediation strategies to avoid arbitration\nCase Example: Secured 100% settlement for 14-week HS2 delay claim without adjudication through meticulous EOT preparation.`,
//         },
//         "Risk Recovery": {
//           heading: "Reclaiming What’s Yours",
//           text: `We proactively hunt for recoverable costs through:\n* Subcontractor default audits\n* Insurance policy reviews\n* Latent defect cost tracking\nCase Example: Recovered £1.2M for European project by uncovering MEP design errors and fast-tracking PI insurance claims.`,
//         },
//       },
//       valueProp: `Controlling Change, Protecting Margins — We implement rigorous systems to track, value and negotiate variations, ensuring full compliance with contractual mechanisms, real-time impact analysis on cost and programme, and transparent documentation to prevent disputes.`,
//       people: [
//         { name: "Adersh Rajagopalan MRICS MAIQS MSc", role: "Associate Director", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//         { name: "Rishi Rao", role: "Head of Business Operations", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//       ],
//     },
//   },
//   {
//     title: "Tendering & Procurement",
//     desc: "Ginjo's specialists help contractors and developers win more work at better margins through strategic bid development, end-to-end tender management, and optimised supplier negotiations.",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-10-31-at-8.09.26-PM-1536x1152.jpeg",
//     content: {
//       description:
//         "Our proven approach combines NEC/JCT contract expertise with market insights to strengthen submissions, reduce risks, and improve win rates. Whether you're preparing PQQs, finalising bids, or negotiating subcontracts, we provide hands-on support and construction procurement strategies your team needs to succeed.",
//       testimonial: `"Reduced our bid prep time by 3 weeks while increasing scoring compliance." — Procurement Director, Residential Developer`,
//       features: [
//         "Bid Strategy Development",
//         "Tender Management",
//         "Supplier Negotiations",
//       ],
//       // New: detailed features explanation point-wise
//       featuresDetails: {
//         "Bid Strategy Development": {
//           heading: "Positioning You for Success",
//           text: `We craft tailored bid strategies that:\n* Analyse client requirements and scoring criteria\n* Benchmark against competitor strengths\n* Balance risk with realistic pricing\nResult: Increased win rates by upto 35% for Tier 2 contractors through targeted positioning.`,
//         },
//         "Tender Management": {
//           heading: "From PQQ to Submission",
//           text: `Our end-to-end process ensures:\n* Compliance with all documentation requirements\n* Cross-team coordination under one timeline\n* Quality-controlled final submissions\nExample: Secured £8M school project by restructuring deliverable timelines.`,
//         },
//         "Supplier Negotiations": {
//           heading: "Securing Optimal Terms",
//           text: `We optimise agreements through:\n* Market testing and price benchmarking\n* Balanced risk allocation in contracts\n* Performance-based KPIs for suppliers\nSaved 9% on MEP packages for a hospital project through structured negotiations.`,
//         },
//       },
//       analytics: `Streamline Your Bidding Process with Data-Driven Insights — Our team leverages live procurement dashboards and construction market analytics to identify pricing sweet spots and reduce bid risks. From NEC4 tender compliance to JCT subcontractor packages, we ensure your submissions are competitively positioned, fully compliant, and profit-protected, giving you the edge in competitive tenders.`,
//       results: [
//         "Increased win rates by up to 42% (average) in scoped engagements",
//         "Reduced bid preparation time by up to 3 weeks",
//         "Improved scoring compliance and procurement positioning",
//       ],
//       people: [
//         { name: "Adersh Rajagopalan MRICS MAIQS MSc", role: "Associate Director", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//         { name: "Rishi Rao", role: "Head of Business Operations", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//       ],
//     },
//   },
//   {
//     title: "Quantity Surveying & Commercial Management",
//     desc: "Ginjo's quantity surveying and commercial management services protect your margins from tender to final account.",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/site-engineer-construction-site-1536x1025.jpg",
//     content: {
//       description:
//         "Our RICS-accredited specialists deliver accurate cost forecasting, NEC/JCT-compliant valuations and interim applications, and dispute-resistant documentation to protect your project's commercial position.",
//       highlights: [
//         "Accurate cost forecasting with live dashboards",
//         "NEC/JCT-compliant valuations and applications",
//         "Dispute-resistant documentation",
//         "Risk-managed subcontractor packages",
//       ],
//       testimonial: `"Reduced our cost variances by 18% through Ginjo's monthly cost reconciliation." — Commercial Manager, Top-10 Contractor`,
//       additional: `We don't just price – we plan. From early-stage estimates to detailed BoQs and procurement support, our team ensures your cost forecasts are realistic, defensible, and built for client trust. For tender, live project, or cost audit scenarios we keep commercial clarity at the centre.`,
//       services: ["Cost Planning & Control", "Contractual & Claim Support", "Subcontract Management"],
//       // New: expanded services descriptions
//       servicesDetails: {
//         "Cost Planning & Control": {
//           heading: "Confidence From Day One",
//           text: `We don’t just price – we plan. From early-stage estimates to detailed BoQs and procurement support, our team ensures your cost forecasts are realistic, defensible, and built for client trust. Whether it’s for a tender, live project, or cost audit, we keep commercial clarity at the centre.\n\n* Pre-contract estimating\n* Material Take-Offs (MTOs) and BoQs\n* Live cost tracking and reporting`,
//         },
//         "Contractual & Claim Support": {
//           heading: "Avoid Disputes – or Win Them",
//           text: `Working under NEC, JCT, or bespoke frameworks, we manage contract compliance from start to finish. Our specialists help you respond to change events, protect entitlements, and prepare bulletproof claims documentation when needed – with clear records to back every decision.\n\n* Compensation events & variations\n* Delay analysis & claim preparation\n* Contract reviews and entitlement strategies`,
//         },
//         "Subcontract Management": {
//           heading: "Turn Procurement into a Performance Tool",
//           text: `We don’t just manage packages – we extract value. Our team structures payment terms, performance triggers, and risk controls that align subcontractors with project outcomes. By linking delivery to commercial performance, we help you stay on budget and ahead of risk.\n\n* Subcontractor vetting & onboarding\n* Package tracking and compliance scoring\n* Risk-linked commercial controls`,
//         },
//       },
//       people: [
//         { name: "Adersh Rajagopalan MRICS MAIQS MSc", role: "Associate Director", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//         { name: "Rishi Rao", role: "Head of Business Operations", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//       ],
//     },
//   },
//   {
//     title: "Estimating BOQs & MTOs",
//     desc: "We combine human expertise with tech-enabled tools to deliver fast, accurate outputs – while always maintaining professional judgment and scope understanding.",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/close-up-pens-calculator-plans-1536x1024.jpg",
//     content: {
//       description:
//         "Detailed, reliable estimating services that give contractors and clients confidence to price, plan and proceed with clarity. From early cost guidance to tender-ready BOQs and precise MTOs, we deliver the commercial foundation your project needs.",
//       services: ["Pre-Contract Estimate", "Bill of Quantities (BOQs)", "Material Take offs (MTOs)"],
//       // New: expanded services content for estimating
//       servicesDetails: {
//         "Pre-Contract Estimate": {
//           heading: "Early Clarity = Stronger Decisions",
//           text: `We provide cost estimates from feasibility to tender stage, tailored for both subcontractors and main contractors. Our estimates balance market realism, scope precision, and contract risk – helping you price with confidence, not guesswork.\n\n* Budget estimating and benchmarking\n* Trade package estimates\n* Value engineering support`,
//         },
//         "Bill of Quantities (BOQs)": {
//           heading: "Clear Scope, Clean Tendering",
//           text: `We prepare professionally structured BOQs that reflect scope precisely – not just spreadsheets of numbers. Whether NRM2, SMM7 or client-specific formats, we create documentation that gives you and your supply chain a common language to price, track and manage works.\n\n* BOQ production from 2D drawings or 3D models\n* Measured works schedules\n* Tender-ready formats with trade breakdowns`,
//         },
//         "Material Take offs (MTOs)": {
//           heading: "No More Guesswork in Procurement",
//           text: `Need to know exactly what materials to order – and when? Our MTOs give you precise, supplier-friendly data to streamline procurement and reduce waste. We work from PDFs, CAD, or BIM models, using cost management tools like CostX to generate accurate material quantities.\n\n* MTOs for procurement and logistics\n* Data suitable for pricing, ordering, and delivery planning\n* Fast turnaround for urgent packages`,
//         },
//       },
//       benefits: [
//         "Early clarity leading to stronger decisions",
//         "Budget estimating and benchmarking",
//         "Trade package estimates and value engineering",
//       ],
//       approach: `We combine human expertise with tech-enabled tools to deliver fast, accurate outputs while maintaining professional judgment and scope understanding.`,
//       people: [
//         { name: "Adersh Rajagopalan MRICS MAIQS MSc", role: "Associate Director", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//         { name: "Rishi Rao", role: "Head of Business Operations", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//       ],
//     },
//   },
//   {
//     title: "NEC, JCT, FIDIC, Bespoke Contract Experts",
//     desc: "Ginjo's NEC contract experts simplify JCT and FIDIC compliance through tailored audits, consulting, and procedural guidance...",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/two-men-shaking-hands-1536x1025.jpg",
//     content: {
//       description:
//         "Practical contract solutions for real-world projects: drafting, review, change management, dispute resolution and targeted training to keep your contracts working for you.",
//       services: [
//         "Contract drafting & review",
//         "Risk management",
//         "Change management (variations & compensation events)",
//         "Dispute resolution",
//         "Training & workshops",
//       ],
//       // New: expanded audit/consulting/procedures content
//       audits: `Contract Audits: Ensure Compliance — Our audits verify early warnings, compensation events and variation orders are properly documented and managed under NEC, JCT and FIDIC. We provide a clear picture of contractual health and highlight risks before they escalate.`,
//       auditsDetail: `At Ginjo, our audit services delve deep into your NEC, JCT, and FIDIC contracts to ensure every clause is adhered to and every obligation met. For NEC contracts, we verify early warning notices and compensation events are handled timely and correctly. For JCT we assess the issuance and management of variation orders. Result: clear contractual health reports highlighting compliance gaps and mitigation steps.`,
//       consulting: `Consulting Services: Expert Consulting for Construction Contracts — We advise on contract selection, administration and risk mitigation tailored to your project.`,
//       consultingDetail: `Not sure which contract suits your project? Struggling with administration? We advise on NEC, JCT & FIDIC selection, risk management, and best practices – tailored to your needs. We help with: \n* Choosing the right contract\n* Administering complex clauses\n* Mitigating risks before they escalate`,
//       procedures: `Procedures: Streamlined FIDIC & NEC Procedures — Clear steps = fewer errors. We implement structured procedures for notices, change management and payments.`,
//       proceduresDetail: `Clear steps = fewer errors. We implement structured procedures for:\n\n* Notices & communications (NEC early warnings, JCT variations)\n* Change management (compensation events, variations)\n* Payments & dispute resolution\n\nResult: Faster decisions, better compliance, fewer disputes.`,
//       people: [
//         { name: "Adersh Rajagopalan MRICS MAIQS MSc", role: "Associate Director", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//         { name: "Rishi Rao", role: "Head of Business Operations", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//       ],
//     },
//   },
//   {
//     title: "Smart Commercial Systems",
//     desc: "Smart Commercial Systems Built for Commercial Professionals At Ginjo, our systems are designed and built by Rishi Rao, a commercial leader with two...",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/ChatGPT-Image-May-18-2025-08_34_58-AM.png",
//     content: {
//       description:
//         "Custom-built commercial management systems designed to streamline your operations and improve project outcomes. Built by commercial people, not IT contractors.",
//       deliverables: [
//         "Live Commercial Dashboards",
//         "SharePoint Workspaces",
//         "Power Automate Workflows",
//         "Dynamic Reporting (Power BI)",
//         "Integrated Templates & Approvals",
//       ],
//       philosophy: `We're quantity surveyors, project leads, and procurement strategists first and system builders second — we challenge, simplify and strengthen processes before we automate them.`,
//       people: [
//         { name: "Rishi Rao", role: "Head of Business Operations", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
//       ],
//     },
//   },
//   {
//     title: "Project Management",
//     desc: "As part of Ginjo Construction's premium end-to-end commercial services, our Project Management offering is led by our Founder Daniel Ginn MRICS, a Chartered RICS Project Manager with extensive EPC experience at Fluor and AFRY.",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-10-31-at-8.09.26-PM-3-1536x1152.jpeg",
//     content: {
//       description:
//         "End-to-end project management services that deliver your project on time, within budget, and to the highest quality standards. Data-driven oversight for early issue resolution and ethical risk allocation.",
//       approach: [
//         "Project set-up & mobilisation",
//         "Execution & monitoring",
//         "Control phase (reviews & corrective actions)",
//         "Close-out & lessons learned",
//       ],
//       specialist: `Chartered RICS Expertise: Daniel Ginn brings rigorous, standardised methodologies from leading complex megaprojects at Fluor and AFRY. EPC megaproject focus with tailored controls for billion-pound infrastructure, energy and industrial programmes.`,
//       people: [{ name: "Daniel Ginn", role: "Director", image: "/mnt/data/daniel-ginn.png" }],
//     },
//   },
// ];

// /* -------------------------
//    Helper: Slugify titles
//    ------------------------- */
// function toSlug(text = "") {
//   return text
//     .toString()
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/^-+|-+$/g, "");
// }

// /* -------------------------
//    Component
//    ------------------------- */
// export default function ServiceDetail() {
//   const router = useRouter();
//   const { id } = router.query || {};

//   // Keep hooks at top-level and in a stable order
//   const [service, setService] = useState(null);
//   const [idx, setIdx] = useState(0);

//   useEffect(() => {
//     if (!id) return;
//     const found = CAPABILITIES.find((c) => toSlug(c.title) === String(id).toLowerCase());
//     setService(found || null);
//   }, [id]);

//   // slides depend on service — safe to compute here (may be empty until service is set)
//   const slides = service
//     ? [
//         {
//           id: 1,
//           label: "OUTCOMES",
//           title: "World Expo 2025 Osaka,\nAustralia Pavilion, Japan",
//           description: "Delivering a global platform to showcase the best of Australia to the world.",
//           image: service.image,
//         },
//       ]
//     : [];

//   // make sure total is never 0 to avoid modulo by zero — if no slides, total = 1 (controls will be harmless)
//   const total = slides.length > 0 ? slides.length : 1;

//   const prev = () => setIdx((i) => (i - 1 + total) % total);
//   const next = () => setIdx((i) => (i + 1) % total);

//   // Loader while service isn't found/resolved
//   if (!service) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
//       </div>
//     );
//   }

//   // Insights and card image (same as before)
//   const CARD_IMAGE = "/mnt/data/fd073204-4981-43f3-8f68-8e237203236b.png";

//   const INSIGHTS = [
//     {
//       id: 1,
//       title: "Navigating procurement of complex labs",
//       description:
//         "These facilities support cutting-edge science but must do so in a way that meets safety, regulatory and biosecurity standards.",
//       minutes: 7,
//       date: "04 Nov 25",
//       image: CARD_IMAGE,
//     },
//     {
//       id: 2,
//       title: "Can agile programme management unlock US airports?",
//       description:
//         "Air passenger numbers have grown since COVID, igniting new plans for airport development across the US – as traditional development is not effective.",
//       minutes: 6,
//       date: "24 Sept 25",
//       image: CARD_IMAGE,
//     },
//     {
//       id: 3,
//       title: "China's construction market",
//       description: "China's construction market is in transition, but its cost and supply chain advantage remain intact.",
//       minutes: 6,
//       date: "28 Aug 25",
//       image: CARD_IMAGE,
//     },
//     {
//       id: 4,
//       title: "The way forward for Japan's construction industry",
//       description: "Japan has re-entered the global spotlight as one of the most expensive construction markets, with five cities in the world's top 15.",
//       minutes: 7,
//       date: "13 Aug 25",
//       image: CARD_IMAGE,
//     },
//   ];

//   const slide = slides[idx % total] || slides[0] || { label: "", title: "", description: "" };

//   return (
//     <>
//       <Head>
//         <title>{service.title} | Ginjo Services</title>
//         <meta name="description" content={service.desc} />
//       </Head>

//       {/* Hero Section */}
//       <section className="w-full bg-white">
//         <div className="w-full overflow-hidden">
//           <div className="grid grid-cols-1 lg:grid-cols-2">
//             {/* Left Content */}
//             <div className="bg-[#f2efe8] p-8 md:p-14 lg:p-20 xl:p-28 rounded-tr-3xl rounded-br-3xl lg:rounded-br-none lg:rounded-tl-3xl">
//               <div className="max-w-2xl">
//                 <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-[#1f2937]">
//                   {service.title}
//                 </h1>
//                 <p className="mt-6 text-base md:text-lg text-[#374151] ">
//                   {service.desc}
//                 </p>
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className="w-full h-[360px] md:h-[420px] lg:h-auto overflow-hidden">
//               <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

// {/* -- Service details (renders CAPABILITIES content) -- */}
// <section className="w-full bg-white py-12">
//   <div className="max-w-7xl mx-auto px-6">
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//       {/* Main copy */}
//       <div className="lg:col-span-2">
//         {/* Content description */}
//         {service.content?.description && (
//           <p className="text-gray-700 text-base md:text-lg  mb-6">
//             {service.content.description}
//           </p>
//         )}

//         {/* Highlights (if any) */}
//         {service.content?.highlights?.length > 0 && (
//           <div className="mb-6">
//             <h4 className="font-serif text-lg font-semibold mb-3">How we help</h4>
//             <ul className="list-disc pl-5 text-gray-700 space-y-2">
//               {service.content.highlights.map((h, i) => (
//                 <li key={i} className="">{h}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Value proposition / extra text */}
//         {service.content?.valueProp && (
//           <div className="mb-6 bg-[#f2efe8] p-5 rounded-lg border border-transparent">
//             <div className="font-semibold mb-2">Controlling Change, Protecting Margins</div>
//             <p className="text-sm text-gray-700 ">{service.content.valueProp}</p>
//           </div>
//         )}

//         {/* Additional paragraph */}
//         {service.content?.additional && (
//           <p className="text-gray-700 text-sm  mb-4">{service.content.additional}</p>
//         )}

//         {/* Benefits / bullets */}
//         {service.content?.benefits?.length > 0 && (
//           <div className="mt-4">
//             <h5 className="font-medium mb-2">What this means for you</h5>
//             <div className="flex flex-wrap gap-3">
//               {service.content.benefits.map((b, i) => (
//                 <span key={i} className="text-xs font-medium px-3 py-1 rounded-md bg-[#f7f7f7] border">{b}</span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* If bullet details exist, render them */}
//         {service.content?.bulletsDetails && (
//           <div className="mt-6">
//             <h4 className="font-serif text-lg font-semibold mb-3">Key specialisms</h4>
//             <div className="space-y-4">
//               {Object.entries(service.content.bulletsDetails).map(([key, detail]) => (
//                 <div key={key} className="p-4 rounded-lg bg-[#faf9f7] border">
//                   <div className="font-semibold mb-2">{detail.heading}</div>
//                   <pre className="text-sm text-gray-700  whitespace-pre-wrap">{detail.text}</pre>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Sidebar: quick bullets + people */}
//       <aside className="lg:col-span-1">
//         {/* Bullets */}
//         {service.content?.bullets?.length > 0 && (
//           <div className="mb-6 p-5 bg-[#f2ebe3] rounded-xl">
//             <h6 className="font-medium mb-3">Services</h6>
//             <ul className="text-sm space-y-2">
//               {service.content.bullets.map((b, i) => (
//                 <li key={i} className="">• {b}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* People */}
//         {service.content?.people?.length > 0 && (
//           <div className="p-5 rounded-xl border">
//             <div className="font-medium mb-3">Market Specialist</div>
//             <div className="space-y-3">
//               {service.content.people.map((p, i) => (
//                 <div key={i} className="flex items-center gap-3">
//                   <img
//                     src={p.image || "/mnt/data/default-profile.png"}
//                     alt={p.name}
//                     className="w-11 h-11 rounded-full object-cover"
//                     onError={(e)=>{ e.currentTarget.src = '/mnt/data/default-profile.png'; }}
//                   />
//                   <div>
//                     <div className="text-sm font-semibold">{p.name}</div>
//                     <div className="text-xs text-gray-600">{p.role}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </aside>
//     </div>
//   </div>
// </section>


//       {/* Slide / Outcomes (Left text + controls) */}
//       <section className="w-full bg-[#0f172a] text-white py-12">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-8">
//           <div className="w-full lg:w-1/2">
//             <div className="text-white max-w-xl">
//               <div className="text-sm tracking-wide font-medium mb-4 opacity-90">{slide.label}</div>

//               <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-pre-line">
//                 {slide.title}
//               </h1>

//               <p className="mt-6 text-sm md:text-base max-w-xl  text-white/90">{slide.description}</p>
//             </div>
//           </div>

//           <div className="w-full lg:w-1/2 flex items-center justify-end">
//             <div className="flex items-center gap-4">
//               <button aria-label="Previous slide" onClick={prev} className="w-12 h-12 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//                   <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>

//               <div className="text-white text-sm">{(idx % total) + 1} / {total}</div>

//               <button aria-label="Next slide" onClick={next} className="w-12 h-12 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//                   <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Insights grid */}
//       <section className="w-full bg-white py-12 lg:py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10">Procurement and supply chain insights</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {INSIGHTS.map((item) => (
//               <article key={item.id} className="rounded-xl overflow-hidden bg-white shadow-sm border border-transparent hover:shadow-md transition">
//                 <img src={item.image} alt={item.title} className="w-full h-40 md:h-44 object-cover rounded-t-xl" />

//                 <div className="bg-[#f2ebe3] p-5 rounded-b-xl">
//                   <h3 className="font-serif font-semibold text-lg leading-tight mb-3">{item.title}</h3>

//                   <p className="text-gray-700 text-sm  mb-5">{item.description}</p>

//                   <div className="flex items-center justify-start gap-6 text-xs text-gray-700 mt-auto">
//                     <div className="flex items-center gap-2">
//                       <svg width="14" height="14" viewBox="0 0 24 24">
//                         <path d="M12 1v11M21 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                       </svg>
//                       {item.minutes} minutes
//                     </div>

//                     <div className="font-medium">{item.date}</div>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>

//           <div className="flex justify-end mt-10">
//             <button className="px-5 py-3 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition">
//               View all related insights
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Expert witnesses + contact block */}
//       <div className="w-full bg-white">
//         {/* Expert witness hero */}
//         <section className="max-w-7xl mx-auto px-6 py-8">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our expert witnesses</h2>

//           <div className="relative rounded-2xl overflow-hidden border border-gray-200">
//             <img src="/mnt/data/13820750-c936-4854-8415-0103451a35ec.png" alt="Expert witness hero" className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-transparent" />

//             <div className="absolute inset-0 flex items-end">
//               <div className="p-6 md:p-10 lg:p-12 max-w-2xl">
//                 <div className="text-sm tracking-wide text-white/90 mb-2">Meet our</div>
//                 <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight mb-4">Meet our quantum and delay specialists</h3>
//                 <p className="text-white/90 max-w-xl">We provide project advisory and expert witness services for any matters in dispute.</p>
//               </div>
//             </div>

//             <div className="absolute right-6 bottom-6 flex items-center gap-4">
//               <button aria-label="Previous" className="w-11 h-11 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//                   <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>

//               <div className="text-white/90 text-sm">1/1</div>

//               <button aria-label="Next" className="w-11 h-11 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//                   <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Contact */}
//         <section className="max-w-7xl mx-auto px-6 pb-12">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Get in touch</h2>

//           <div className="max-w-xl">
//             <div className="font-serif text-xl font-semibold">Gareth Poole</div>
//             <div className="text-sm text-gray-700 mb-4">Director</div>

//             <ul className="space-y-3">
//               <li>
//                 <a href="mailto:info@example.com" className="inline-flex items-center gap-3 text-[#0f4b7f] hover:underline">
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-none">
//                     <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7" stroke="#0f4b7f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                     <path d="M3 8.5l9 6 9-6" stroke="#0f4b7f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                   <span className="text-sm font-medium">Email</span>
//                 </a>
//               </li>

//               <li>
//                 <a href="tel:+4401212623605" className="inline-flex items-center gap-3 text-[#0f4b7f] hover:underline">
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-none">
//                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12 1.05.42 2.07.9 3.02a2 2 0 0 1-.45 2.11L9.91 11.09a13.05 13.05 0 0 0 6 6l1.24-1.24a2 2 0 0 1 2.11-.45c.95.48 1.97.78 3.02.9A2 2 0 0 1 22 16.92z" stroke="#0f4b7f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>

//                   <span className="text-sm font-medium">+44 0121 262 3605</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </section>

//         {/* Hidden asset so build system registers it */}
//         <img src="/mnt/data/4aea0afe-b729-43bf-b90a-9f3dfd188e31.png" alt="asset" className="hidden" />
//       </div>
//     </>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
/* -------------------------
   Data (CAPABILITIES) - existing
   ------------------------- */
const CAPABILITIES = [
  {
    title: "Variation Management",
    desc: "Variations don't have to mean chaos or cost overruns. At Ginjo, we bring order to the change process, ensuring every modification works for your project – not against it.",
    image:
      "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/graph-business-financial-investment-risk-word-1536x1121.jpg",
    content: {
      description:
        "Our Variation Management service helps you maintain control over the entire variation lifecycle — tracking, valuing, negotiating and documenting every change so your project stays on track.",
      highlights: [
        "Tracking changes in real-time",
        "Valuing impacts accurately",
        "Negotiating fair outcomes",
        "Documenting everything properly",
      ],
      additional: `We go beyond basic administration. Using proven methods and smart technology, we spot variations others miss by auditing subcontracts and designs, forecast how changes will affect your timeline and budget, and prepare bulletproof documentation that stands up to scrutiny.`,
      benefits: [
        "Fewer disputes about changes",
        "Better cost control",
        "More time to focus on building",
      ],
      bullets: ["Variation Management", "Claims Resolution", "Risk Recovery"],
      // New: detailed point-wise information for each bullet
      bulletsDetails: {
        "Variation Management": {
          heading: "Controlling Change, Protecting Margins",
          text: `We implement rigorous systems to track, value and negotiate variations, ensuring:\n* Full compliance with contractual mechanisms (NEC compensation events, JCT instructions)\n* Real-time impact analysis on cost and programme\n* Transparent documentation to prevent disputes`,
        },
        "Claims Resolution": {
          heading: "From Dispute to Resolution",
          text: `Our claims experts build bulletproof cases using:\n* Forensic delay analysis (Time Impact/Windows methods)\n* RICS-compliant loss & expense calculations\n* Mediation strategies to avoid arbitration\nCase Example: Secured 100% settlement for 14-week HS2 delay claim without adjudication through meticulous EOT preparation.`,
        },
        "Risk Recovery": {
          heading: "Reclaiming What’s Yours",
          text: `We proactively hunt for recoverable costs through:\n* Subcontractor default audits\n* Insurance policy reviews\n* Latent defect cost tracking\nCase Example: Recovered £1.2M for European project by uncovering MEP design errors and fast-tracking PI insurance claims.`,
        },
      },
      valueProp: `Controlling Change, Protecting Margins — We implement rigorous systems to track, value and negotiate variations, ensuring full compliance with contractual mechanisms, real-time impact analysis on cost and programme, and transparent documentation to prevent disputes.`,
      people: [
        { name: "Adersh Rajagopalan MRICS MAIQS MSc", role: "Associate Director", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
        { name: "Rishi Rao", role: "Head of Business Operations", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Image-5-scaled-e1761411869601.jpg" },
      ],
    },
  },
  {
    title: "Tendering & Procurement",
    desc: "Ginjo's specialists help contractors and developers win more work at better margins through strategic bid development, end-to-end tender management, and optimised supplier negotiations.",
    image:
      "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-10-31-at-8.09.26-PM-1536x1152.jpeg",
    content: {
      description:
        "Our proven approach combines NEC/JCT contract expertise with market insights to strengthen submissions, reduce risks, and improve win rates. Whether you're preparing PQQs, finalising bids, or negotiating subcontracts, we provide hands-on support and construction procurement strategies your team needs to succeed.",
      testimonial: `"Reduced our bid prep time by 3 weeks while increasing scoring compliance." — Procurement Director, Residential Developer`,
      features: [
        "Bid Strategy Development",
        "Tender Management",
        "Supplier Negotiations",
      ],
      // New: detailed features explanation point-wise
      featuresDetails: {
        "Bid Strategy Development": {
          heading: "Positioning You for Success",
          text: `We craft tailored bid strategies that:\n* Analyse client requirements and scoring criteria\n* Benchmark against competitor strengths\n* Balance risk with realistic pricing\nResult: Increased win rates by upto 35% for Tier 2 contractors through targeted positioning.`,
        },
        "Tender Management": {
          heading: "From PQQ to Submission",
          text: `Our end-to-end process ensures:\n* Compliance with all documentation requirements\n* Cross-team coordination under one timeline\n* Quality-controlled final submissions\nExample: Secured £8M school project by restructuring deliverable timelines.`,
        },
        "Supplier Negotiations": {
          heading: "Securing Optimal Terms",
          text: `We optimise agreements through:\n* Market testing and price benchmarking\n* Balanced risk allocation in contracts\n* Performance-based KPIs for suppliers\nSaved 9% on MEP packages for a hospital project through structured negotiations.`,
        },
      },
      analytics: `Streamline Your Bidding Process with Data-Driven Insights — Our team leverages live procurement dashboards and construction market analytics to identify pricing sweet spots and reduce bid risks. From NEC4 tender compliance to JCT subcontractor packages, we ensure your submissions are competitively positioned, fully compliant, and profit-protected, giving you the edge in competitive tenders.`,
      results: [
        "Increased win rates by up to 42% (average) in scoped engagements",
        "Reduced bid preparation time by up to 3 weeks",
        "Improved scoring compliance and procurement positioning",
      ],
      people: [
        { name: "Adersh Rajagopalan MRICS MAIQS MSc", role: "Associate Director", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
        { name: "Rishi Rao", role: "Head of Business Operations", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Image-5-scaled-e1761411869601.jpg" },
      ],
    },
  },
  {
    title: "Quantity Surveying & Commercial Management",
    desc: "Ginjo's quantity surveying and commercial management services protect your margins from tender to final account.",
    image:
      "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/site-engineer-construction-site-1536x1025.jpg",
    content: {
      description:
        "Our RICS-accredited specialists deliver accurate cost forecasting, NEC/JCT-compliant valuations and interim applications, and dispute-resistant documentation to protect your project's commercial position.",
      highlights: [
        "Accurate cost forecasting with live dashboards",
        "NEC/JCT-compliant valuations and applications",
        "Dispute-resistant documentation",
        "Risk-managed subcontractor packages",
      ],
      testimonial: `"Reduced our cost variances by 18% through Ginjo's monthly cost reconciliation." — Commercial Manager, Top-10 Contractor`,
      additional: `We don't just price – we plan. From early-stage estimates to detailed BoQs and procurement support, our team ensures your cost forecasts are realistic, defensible, and built for client trust. For tender, live project, or cost audit scenarios we keep commercial clarity at the centre.`,
      services: ["Cost Planning & Control", "Contractual & Claim Support", "Subcontract Management"],
      // New: expanded services descriptions
      servicesDetails: {
        "Cost Planning & Control": {
          heading: "Confidence From Day One",
          text: `We don’t just price – we plan. From early-stage estimates to detailed BoQs and procurement support, our team ensures your cost forecasts are realistic, defensible, and built for client trust. Whether it’s for a tender, live project, or cost audit, we keep commercial clarity at the centre.\n\n* Pre-contract estimating\n* Material Take-Offs (MTOs) and BoQs\n* Live cost tracking and reporting`,
        },
        "Contractual & Claim Support": {
          heading: "Avoid Disputes – or Win Them",
          text: `Working under NEC, JCT, or bespoke frameworks, we manage contract compliance from start to finish. Our specialists help you respond to change events, protect entitlements, and prepare bulletproof claims documentation when needed – with clear records to back every decision.\n\n* Compensation events & variations\n* Delay analysis & claim preparation\n* Contract reviews and entitlement strategies`,
        },
        "Subcontract Management": {
          heading: "Turn Procurement into a Performance Tool",
          text: `We don’t just manage packages – we extract value. Our team structures payment terms, performance triggers, and risk controls that align subcontractors with project outcomes. By linking delivery to commercial performance, we help you stay on budget and ahead of risk.\n\n* Subcontractor vetting & onboarding\n* Package tracking and compliance scoring\n* Risk-linked commercial controls`,
        },
      },
      people: [
        { name: "Adersh Rajagopalan MRICS MAIQS MSc", role: "Associate Director", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
        { name: "Rishi Rao", role: "Head of Business Operations", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Image-5-scaled-e1761411869601.jpg" },
      ],
    },
  },
  {
    title: "Estimating BOQs & MTOs",
    desc: "We combine human expertise with tech-enabled tools to deliver fast, accurate outputs – while always maintaining professional judgment and scope understanding.",
    image:
      "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/close-up-pens-calculator-plans-1536x1024.jpg",
    content: {
      description:
        "Detailed, reliable estimating services that give contractors and clients confidence to price, plan and proceed with clarity. From early cost guidance to tender-ready BOQs and precise MTOs, we deliver the commercial foundation your project needs.",
      services: ["Pre-Contract Estimate", "Bill of Quantities (BOQs)", "Material Take offs (MTOs)"],
      // New: expanded services content for estimating
      servicesDetails: {
        "Pre-Contract Estimate": {
          heading: "Early Clarity = Stronger Decisions",
          text: `We provide cost estimates from feasibility to tender stage, tailored for both subcontractors and main contractors. Our estimates balance market realism, scope precision, and contract risk – helping you price with confidence, not guesswork.\n\n* Budget estimating and benchmarking\n* Trade package estimates\n* Value engineering support`,
        },
        "Bill of Quantities (BOQs)": {
          heading: "Clear Scope, Clean Tendering",
          text: `We prepare professionally structured BOQs that reflect scope precisely – not just spreadsheets of numbers. Whether NRM2, SMM7 or client-specific formats, we create documentation that gives you and your supply chain a common language to price, track and manage works.\n\n* BOQ production from 2D drawings or 3D models\n* Measured works schedules\n* Tender-ready formats with trade breakdowns`,
        },
        "Material Take offs (MTOs)": {
          heading: "No More Guesswork in Procurement",
          text: `Need to know exactly what materials to order – and when? Our MTOs give you precise, supplier-friendly data to streamline procurement and reduce waste. We work from PDFs, CAD, or BIM models, using cost management tools like CostX to generate accurate material quantities.\n\n* MTOs for procurement and logistics\n* Data suitable for pricing, ordering, and delivery planning\n* Fast turnaround for urgent packages`,
        },
      },
      benefits: [
        "Early clarity leading to stronger decisions",
        "Budget estimating and benchmarking",
        "Trade package estimates and value engineering",
      ],
      approach: `We combine human expertise with tech-enabled tools to deliver fast, accurate outputs while maintaining professional judgment and scope understanding.`,
      people: [
        { name: "Adersh Rajagopalan MRICS MAIQS MSc", role: "Associate Director", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
        { name: "Rishi Rao", role: "Head of Business Operations", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Image-5-scaled-e1761411869601.jpg" },
      ],
    },
  },
  {
    title: "NEC, JCT, FIDIC, Bespoke Contract Experts",
    desc: "Ginjo's NEC contract experts simplify JCT and FIDIC compliance through tailored audits, consulting, and procedural guidance...",
    image:
      "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/two-men-shaking-hands-1536x1025.jpg",
    content: {
      description:
        "Practical contract solutions for real-world projects: drafting, review, change management, dispute resolution and targeted training to keep your contracts working for you.",
      services: [
        "Contract drafting & review",
        "Risk management",
        "Change management (variations & compensation events)",
        "Dispute resolution",
        "Training & workshops",
      ],
      // New: expanded audit/consulting/procedures content
      audits: `Contract Audits: Ensure Compliance — Our audits verify early warnings, compensation events and variation orders are properly documented and managed under NEC, JCT and FIDIC. We provide a clear picture of contractual health and highlight risks before they escalate.`,
      auditsDetail: `At Ginjo, our audit services delve deep into your NEC, JCT, and FIDIC contracts to ensure every clause is adhered to and every obligation met. For NEC contracts, we verify early warning notices and compensation events are handled timely and correctly. For JCT we assess the issuance and management of variation orders. Result: clear contractual health reports highlighting compliance gaps and mitigation steps.`,
      consulting: `Consulting Services: Expert Consulting for Construction Contracts — We advise on contract selection, administration and risk mitigation tailored to your project.`,
      consultingDetail: `Not sure which contract suits your project? Struggling with administration? We advise on NEC, JCT & FIDIC selection, risk management, and best practices – tailored to your needs. We help with: \n* Choosing the right contract\n* Administering complex clauses\n* Mitigating risks before they escalate`,
      procedures: `Procedures: Streamlined FIDIC & NEC Procedures — Clear steps = fewer errors. We implement structured procedures for notices, change management and payments.`,
      proceduresDetail: `Clear steps = fewer errors. We implement structured procedures for:\n\n* Notices & communications (NEC early warnings, JCT variations)\n* Change management (compensation events, variations)\n* Payments & dispute resolution\n\nResult: Faster decisions, better compliance, fewer disputes.`,
      people: [
        { name: "Adersh Rajagopalan MRICS MAIQS MSc", role: "Associate Director", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
        { name: "Rishi Rao", role: "Head of Business Operations", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Image-5-scaled-e1761411869601.jpg" },
      ],
    },
  },
  {
    title: "Smart Commercial Systems",
    desc: "Smart Commercial Systems Built for Commercial Professionals At Ginjo, our systems are designed and built by Rishi Rao, a commercial leader with two...",
    image:
      "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/ChatGPT-Image-May-18-2025-08_34_58-AM.png",
    content: {
      description:
        "Custom-built commercial management systems designed to streamline your operations and improve project outcomes. Built by commercial people, not IT contractors.",
      deliverables: [
        "Live Commercial Dashboards",
        "SharePoint Workspaces",
        "Power Automate Workflows",
        "Dynamic Reporting (Power BI)",
        "Integrated Templates & Approvals",
      ],
      philosophy: `We're quantity surveyors, project leads, and procurement strategists first and system builders second — we challenge, simplify and strengthen processes before we automate them.`,
      people: [
        { name: "Rishi Rao", role: "Head of Business Operations", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Image-5-scaled-e1761411869601.jpg" },
      ],
    },
  },
  {
    title: "Project Management",
    desc: "As part of Ginjo Construction's premium end-to-end commercial services, our Project Management offering is led by our Founder Daniel Ginn MRICS, a Chartered RICS Project Manager with extensive EPC experience at Fluor and AFRY.",
    image:
      "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-10-31-at-8.09.26-PM-3-1536x1152.jpeg",
    content: {
      description:
        "End-to-end project management services that deliver your project on time, within budget, and to the highest quality standards. Data-driven oversight for early issue resolution and ethical risk allocation.",
      approach: [
        "Project set-up & mobilisation",
        "Execution & monitoring",
        "Control phase (reviews & corrective actions)",
        "Close-out & lessons learned",
      ],
      specialist: `Chartered RICS Expertise: Daniel Ginn brings rigorous, standardised methodologies from leading complex megaprojects at Fluor and AFRY. EPC megaproject focus with tailored controls for billion-pound infrastructure, energy and industrial programmes.`,
      people: [{ name: "Daniel Ginn", role: "Director", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Daniel-Ginn-Website-scaled-e1761411935637.jpg" }],
    },
  },
  {
  title: "Claims, Disputes and Commercial Advisory",
  desc: "Protecting entitlement, strengthening your position and resolving issues with clarity and confidence.",
  image:
    "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/graph-business-financial-investment-risk-word-1536x1121.jpg",

  content: {
    description:
      "Claims and disputes often arise when projects move quickly or commercial decisions are not recorded correctly. Ginjo provides the structure, evidence and commercial strength needed to understand your true position, present entitlements clearly and resolve issues before they escalate.",

    highlights: [
      "Early identification of entitlement and risk",
      "Evidence-based claim preparation and defence",
      "Clear delay, change and cost analysis",
      "Strong commercial and negotiation support",
    ],

    additional: `Our team works across the UK and internationally, with deep experience in FIDIC, NEC and JCT environments. Whether supporting live projects, retrospective analysis or formal dispute proceedings, we focus on accurate records, clear narratives and commercially sound reasoning.`,

    benefits: [
      "Strengthens your commercial position with structured, defensible documentation",
      "Reduces unnecessary exposure by identifying issues early",
      "Provides clarity and confidence through commercially sound advisory support",
    ],

    bullets: [
      "Early Identification and Strategy",
      "Claim Preparation and Defence",
      "Change, Delay and Cost Analysis",
    ],

    bulletsDetails: {
      "Early Identification and Strategy": {
        heading: "Proactive assessment to minimise risk",
        text: `We review contracts, communications and technical detail to understand potential entitlement or contentious issues early. This helps prevent disputes and ensures your position is protected from the outset.`,
      },

      "Claim Preparation and Defence": {
        heading: "Structured, evidence-led submissions",
        text: `We prepare clear, contract-compliant claims that set out entitlement, events, causation and cost. For responses, we assess validity, identify weaknesses and develop balanced, defensible positions.`,
      },

      "Change, Delay and Cost Analysis": {
        heading: "Realistic commercial and programme impact",
        text: `We analyse delay, disruption, resourcing and cost implications to provide clients with a factual understanding of commercial consequences and the options available to them.`,
      },
    },

    valueProp:
      "With Ginjo involved, every claim, response or negotiation is supported by disciplined documentation, commercial clarity and a position that can be confidently defended.",

   people: [
     { name: "Rishi Rao", role: "Head of Business Operations", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Image-5-scaled-e1761411869601.jpg" },
        { name: "Adersh Rajagopalan MRICS MAIQS MSc", role: "Associate Director", image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg" },
      ],
  },
}

];

/* -------------------------
   Helper: Slugify titles
   ------------------------- */
function toSlug(text = "") {
  return text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* -------------------------
   Component
   ------------------------- */
export default function ServiceDetail() {
  const router = useRouter();
  const { id } = router.query || {};

  // Keep hooks at top-level and in a stable order
  const [service, setService] = useState(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!id) return;
    const found = CAPABILITIES.find((c) => toSlug(c.title) === String(id).toLowerCase());
    setService(found || null);
  }, [id]);

  // normalisation helpers (robust reads from varying keys)
  const getContentField = (keys) => {
    if (!service?.content) return undefined;
    for (const k of keys) {
      const v = service.content[k];
      if (v !== undefined && v !== null) return v;
    }
    return undefined;
  };

  const highlightsList = getContentField(["highlights", "features", "services", "results"]) || [];
  const benefitsList = getContentField(["benefits", "results"]) || [];
  const additionalText = getContentField(["additional", "analytics", "testimonial", "valueProp", "approach"]) || "";
  const valuePropText = getContentField(["valueProp", "valueprop", "value"]) || "";
  const bullets = getContentField(["bullets", "services", "features", "deliverables"]) || [];
  const bulletsDetails = getContentField(["bulletsDetails", "featuresDetails", "servicesDetails"]) || null;

  // slides depend on service — safe to compute here (may be empty until service is set)
  const slides = service
    ? [
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
      ]
    : [];

  // make sure total is never 0 to avoid modulo by zero — if no slides, total = 1 (controls will be harmless)
  const total = slides.length > 0 ? slides.length : 1;

  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  if (!slides.length) return null;
  // Loader while service isn't found/resolved
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }

 
  const INSIGHTS = [
    
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

  const slide = slides[idx % total] || slides[0] || { label: "", title: "", description: "" };

  return (
    <>
      <Head>
        <title>{service.title} | Ginjo Services</title>
        <meta name="description" content={service.desc} />
      </Head>

      {/* Hero Section */}
      <section className="w-full bg-white">
        <div className="w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content */}
            <div className="bg-[#bac6c7] p-8 md:p-14 lg:p-20 xl:p-28 rounded-tr-3xl rounded-br-3xl lg:rounded-br-none lg:rounded-tl-3xl">
              <div className="max-w-2xl">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-[#1f2937]">
                  {service.title}
                </h1>
                <p className="mt-6 text-base md:text-lg text-[#374151] ">
                  {service.desc}
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full h-[360px] md:h-[420px] lg:h-auto overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* -- Service details (renders CAPABILITIES content) -- */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Main copy */}
            <div className="lg:col-span-2">
              {/* Content description */}
              {service.content?.description && (
                <p className="text-gray-700 text-base md:text-lg  mb-6">
                  {service.content.description}
                </p>
              )}

              {/* Highlights (if any) */}
              {highlightsList && highlightsList.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-serif text-lg font-semibold mb-3">How we help</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    {highlightsList.map((h, i) => (
                      <li key={i} className="">{h}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Value proposition / extra text */}
              {valuePropText && (
                <div className="mb-6 bg-[#bac6c7] p-5 rounded-lg border border-transparent">
                  <div className="font-semibold mb-2">Controlling Change, Protecting Margins</div>
                  <p className="text-sm text-gray-700 ">{valuePropText}</p>
                </div>
              )}

              {/* Additional paragraph */}
              {additionalText && (
                <p className="text-gray-700 text-sm  mb-4">{additionalText}</p>
              )}

              {/* Benefits / bullets */}
              {benefitsList && benefitsList.length > 0 && (
                <div className="mt-4">
                  <h5 className="font-medium mb-2">What this means for you</h5>
                  <div className="flex flex-wrap gap-3">
                    {benefitsList.map((b, i) => (
                      <span key={i} className="text-xs font-medium px-3 py-1 rounded-md bg-[#bac6c7] border">{b}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* If bullet details exist, render them */}
              {bulletsDetails && (
                <div className="mt-6">
                  <h4 className=" text-lg font-semibold mb-3">Key specialisms</h4>
                  <div className="space-y-4">
                    {Object.entries(bulletsDetails).map(([key, detail]) => (
                      <div key={key} className="p-4 rounded-lg bg-[#bac6c7] border">
                        <div className="font-semibold  font-serif mb-2">{detail.heading || key}</div>
                        <pre className="text-sm font-serif text-gray-700  whitespace-pre-wrap">
                          {detail.text || detail}
                        </pre>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar: quick bullets + people */}
            <aside className="lg:col-span-1">
              {/* Bullets */}
              {bullets && bullets.length > 0 && (
                <div className="mb-6 p-5 bg-[#bac6c7] rounded-xl">
                  <h6 className="font-medium mb-3">Services</h6>
                  <ul className="text-sm space-y-2">
                    {bullets.map((b, i) => (
                      <li key={i} className="">• {b}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* People */}
              {service.content?.people?.length > 0 && (
                <div className="p-5 rounded-xl border">
                  <div className="font-medium mb-3">Market Specialist</div>
                  <div className="space-y-3">
                    {service.content.people.map((p, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-11 h-11 rounded-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "";
                          }}
                        />
                        <div>
                          <div className="text-sm font-semibold">{p.name}</div>
                          <div className="text-xs text-gray-600">{p.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>


      {/* Slide / Outcomes (Left text + controls) */}
      {/* <section className="w-full bg-[#0f172a] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-8">
          <div className="w-full lg:w-1/2">
            <div className="text-white max-w-xl">
              <div className="text-sm tracking-wide font-medium mb-4 opacity-90">{slide.label}</div>

              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-pre-line">
                {slide.title}
              </h1>

              <p className="mt-6 text-sm md:text-base max-w-xl  text-white/90">{slide.description}</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-end">
            <div className="flex items-center gap-4">
              <button aria-label="Previous slide" onClick={prev} className="w-12 h-12 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="text-white text-sm">{(idx % total) + 1} / {total}</div>

              <button aria-label="Next slide" onClick={next} className="w-12 h-12 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Insights grid */}
      <section className="w-full bg-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10">Explore our insights</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSIGHTS.map((item) => (
              <article key={item.id} className="rounded-xl overflow-hidden bg-white shadow-sm border border-transparent hover:shadow-md transition">
                <img src={item.image} alt={item.title} className="w-full h-40 md:h-44 object-cover rounded-t-xl" />

                <Link href={`/insights/${item.id}`}> <div className="bg-[#bac6c7] h-full p-5 rounded-b-xl">
                  <h3 className="font-serif font-semibold text-lg leading-tight mb-3">{item.title}</h3>

                  <p className="text-gray-700 text-sm  mb-5">{item.description}</p>

                  <div className="flex items-center justify-start gap-6 text-xs text-gray-700 mt-auto">
                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24">
                        <path d="M12 1v11M21 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      {item.minutes} minutes
                    </div>

                    <div className="font-medium">{item.date}</div>
                  </div>
                </div>
                  </Link>
              </article>
            ))}
          </div>

          <div className="flex justify-end mt-10">
            <button className="px-5 py-3 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition">
              View all related insights
            </button>
          </div>
        </div>
      </section>

      {/* Expert witnesses + contact block */}
      <div className="w-full bg-white">
        {/* Expert witness hero */}
         
    <section className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
        Our expert witnesses
      </h2>

      <div className="relative rounded-2xl overflow-hidden border border-gray-200">
        {/* IMAGE */}
        <div className="relative">
          <img
            src={slides[index].img}
            alt={slides[index].title}
            className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover transition-all duration-700"
          />

          {/* GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>

        {/* TEXT CONTENT */}
       <Link href={'/caseStudies'}> <div className="absolute inset-0 flex items-end">
          <div className="p-6 md:p-10 lg:p-12 max-w-2xl">
            <div className="text-sm tracking-wide text-white/90 mb-2">
              {slides[index].tag}
            </div>

            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight mb-4">
              {slides[index].title}
            </h3>

            <p className="text-white/90 max-w-xl">{slides[index].desc}</p>
          </div>
        </div>
</Link>
        {/* CONTROLS */}
        <div className="absolute right-6 bottom-6 flex items-center gap-4">
          {/* Prev */}
          <button
            aria-label="Previous"
            onClick={prev}
            className="w-11 h-11 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Slide Count */}
          <div className="text-white/90 text-sm">
            {index + 1}/{slides.length}
          </div>

          {/* Next */}
          <button
            aria-label="Next"
            onClick={next}
            className="w-11 h-11 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>

        {/* Contact */}
        <section className="max-w-7xl mx-auto px-6 pb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Get in touch</h2>

          <div className="max-w-xl">
            <div className="font-serif text-xl font-semibold">Honest Commercial Support. Real Project Results.</div>
           

            <ul className="space-y-3">
              <li>
                <Link href={'mailto:sales@ginjo.co.uk'} className="inline-flex items-center gap-3 text-[#0f4b7f] hover:underline">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-none">
                    <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7" stroke="#0f4b7f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 8.5l9 6 9-6" stroke="#0f4b7f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm font-medium">Email</span>
                </Link>
              </li>

              <li>
                <Link href={'tel:+44 07730748210'} className="inline-flex items-center gap-3 text-[#0f4b7f] hover:underline">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12 1.05.42 2.07.9 3.02a2 2 0 0 1-.45 2.11L9.91 11.09a13.05 13.05 0 0 0 6 6l1.24-1.24a2 2 0 0 1 2.11-.45c.95.48 1.97.78 3.02.9A2 2 0 0 1 22 16.92z" stroke="#0f4b7f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                   <span className="text-sm font-medium">+44 07730748210</span> 
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Hidden asset so build system registers it */}
        <img src="/mnt/data/4aea0afe-b729-43bf-b90a-9f3dfd188e31.png" alt="asset" className="hidden" />
      </div>
    </>
  );
}
