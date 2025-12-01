// // pages/case-studies/[id].js
// import Link from "next/link";
// import { useRouter } from "next/router";

// const IMAGE_URL = "/mnt/data/02cae41e-0479-42cc-9c44-06e6f19dbfca.png";

// const DATA = {
//   pageTitle: "Case Studies",
//   intro:
//     "At Ginjo Construction, we believe results speak louder than promises. This page features a selection of construction case studies from across the UK and Europe, showcasing how we support clients with quantity surveying, procurement strategy, and contract risk management. Each case study highlights real commercial results achieved across sectors like aviation, biotech, residential and infrastructure.",
//   caseStudies: [
//     {
//     id: 1,
//     title: "Fujifilm Diosynth Biotechnologies – Copenhagen, Denmark",
//     client: "Fluor",
//     value: "£2.0 billion",
//     minutes: 5,
//     linkLabel: "See Case Study",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/R0A0033_copy_small_0-2048x1365-1-1536x1024.jpg",
//     description:
//       "Ginjo provided procurement and contract management services on behalf of Fluor for the construction of a major biotechnology facility. Our expertise supported strategic delivery and risk mitigation at scale.",

//     // ➤ NEW FULL DETAILS
//     details: {
//       overview: `
// We worked alongside the team at Fluor to deliver procurement and contract management support for the construction of a state-of-the-art biotechnology facility in Copenhagen. The project benefited from immediate commercial integration and governance at scale.
//       `,
//       implementation: "August 2023",
//       lead: {
//         name: "Daniel Ginn",
//         role: "Project Lead, Procurement Strategy",
//         image: "daniel-ginn.jpg", // replace if needed
//       },
//       challenge: `
// Managing procurement on a multinational scale.

// Fujifilm Diosynth Biotechnologies required a trusted partner to oversee procurement and contract management across a £2 billion European life sciences facility. Fluor, acting as EPCM contractor, needed expert commercial support to manage supplier selection, mitigate contract risk, and maintain alignment with local compliance and delivery expectations.

// Faced with challenges including cross-border coordination, shifting market rates, and complex contractual structures, Fluor turned to Ginjo to embed dedicated commercial support with the capability to advise, manage, and scale quickly.
//       `,
//       solution: `
// Ginjo stepped in as an embedded procurement and contract management partner. We integrated directly into Fluor’s delivery model, managing supplier prequalification, bid evaluations, and contract finalisation.

// Our team structured commercial processes for transparency, governed risk at contract level, and supported value-based procurement, with real-time contract administration and structured variation control.
//       `,
//       result: [
//         "Commercial governance fully aligned with EPCM delivery",
//         "Risk-reduced procurement decisions across high-value packages",
//         "Improved cost transparency through structured dashboards",
//         "Faster mobilisation of suppliers across multiple EU jurisdictions",
//       ],
//     },
//   },

//   {
//     id: 2,
//     title: "HS2 Phase 1 - London, United Kingdom",
//     client: "HS2",
//     value: "Multi-Billion",
//     minutes: 6,
//     linkLabel: "See Case Study",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/HS2-VL-23575-543A8693-BBVS-HS2-OOC-Station-260421-www.johnzammit.co_.uk-Absolute-Photography-Ltd-1536x1024.jpg",
//     description:
//       "As a commercial consultancy within the Engineering Delivery Partner Framework, Ginjo played a key role in managing costs and contract performance for one of the UK’s most complex infrastructure programmes.",

//     // ➤ NEW FULL DETAILS
//     details: {
//       overview: `
// We provided Commercial Management Services on the Engineering Delivery Partner Framework overseeing £60m of spend across the Financial Year 2020/21. The JV partners were Jacobs, Atkins and SENER.
//       `,
//       implementation: "August 2022",
//       lead: {
//         name: "Daniel Ginn",
//         role: "Commercial Manager, HS2 Limited",
//         image: "daniel-ginn.jpg",
//       },
//       challenge: `
// HS2 Phase 1 presented a highly complex infrastructure delivery environment governed by NEC contracts and involving multiple stakeholder interfaces.

// The client required support in managing cost risk, programme exposure, and compensation event workflows in accordance with public-sector governance standards.

// Ginjo was engaged to strengthen the programme’s commercial controls and assurance framework.
//       `,
//       solution: `
// Ginjo deployed commercial consultants to work alongside HS2’s in-house team. We strengthened cost tracking, improved notice management, and enabled accurate assessments for compensation events.

// We implemented dashboards aligned to internal governance cycles and introduced structured peer-review workflows for commercial submissions.
//       `,
//       result: [
//         "Strengthened governance for NEC4 contracts",
//         "Improved commercial accuracy across compensation event assessments",
//         "Reduced exposure to untracked cost escalation",
//         "Trusted input at board-level decision-making meetings",
//       ],
//     },
//   },

//   {
//     id: 3,
//     title: "STEGRA EPC Project - Stockholm, Sweden",
//     client: "ÅF RY Industry AB",
//     value: "£3.5 billion",
//     minutes: 7,
//     linkLabel: "See Case Study",
//     image:
//       "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/1757596750436.jpg",
//     description:
//       "Ginjo supported AFRY with commercial oversight and design coordination on a large-scale engineering and manufacturing facility, including cost strategies and international collaboration.",

//     // ➤ NEW FULL DETAILS
//     details: {
//       overview: `
// We worked alongside AFRY Industry AB to support commercial and design coordination on the delivery of a £3.5bn advanced manufacturing EPC project for STEGRA in Sweden.
//       `,
//       implementation: "March 2023",
//       leads: [
//         {
//           name: "Daniel Ginn",
//           role: "Project Lead, Procurement Strategy",
//           image: "daniel-ginn.jpg",
//         },
//         {
//           name: "Adersh Raj",
//           role: "Commercial Manager",
//           image: "adersh-raj.jpg",
//         },
//       ],
//       challenge: `
// The STEGRA EPC project involved complex design packages, process plant coordination, and engineering integration across multiple contractors.

// With evolving design requirements and high-value contracts, AFRY needed rigorous commercial control to avoid budget drift and ensure structured variation management.
//       `,
//       solution: `
// Ginjo embedded into AFRY’s delivery team to track change events, structure variation workflows, and support contractor evaluations.

// We analysed the commercial impact of engineering changes in real-time and maintained transparent cost control using live dashboards and audit-ready templates.
//       `,
//       result: [
//         "Reduction in variation approval times",
//         "Improved integration between commercial and design teams",
//         "Real-time tracking of scope changes",
//         "Audit-ready commercial reporting strengthened client confidence",
//       ],
//     },
//   },


//     {
//       id: 4,
//       title: "Carmelita House – Richmond, United Kingdom",
//       client: "Storm Building / ÅF RY Industry AB",
//       value: "£2.8 million",
//       description:
//         "Ginjo provided full commercial management consultancy, including preparation of Bills of Quantities, to support project delivery and cost transparency for this residential redevelopment.",
//       linkLabel: "See Case Study",
//       minutes: 4,
//       image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/0_9F1A2263JPG-1.webp',
//     },
//     {
//       id: 5,
//       title: "Heathrow T5 - EV Charging Infrastructure",
//       client: "Heathrow",
//       value: "Confidential",
//       description:
//         "Ginjo supported British Airways in the commercial planning and tender stage of their EV infrastructure rollout at Terminal 5, providing risk-managed pricing strategies and a tailored variation control system aligned to Heathrow’s governance requirements.",
//       linkLabel: "See Case Study",
//       minutes: 3,
//       image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/airport-blog-square-e1762607470488.png',
//     },
//     {
//       id: 6,
//       title: "Electrical Upgrade - Legacy Office Blocks, UK",
//       client: "Confidential",
//       value: "Confidential",
//       description:
//         "An electrical subcontractor carrying out phased upgrades in older office buildings faced frequent design shifts and slow payments. Ginjo provided contract guidance, payment workflows, and structured variation submissions. This reduced valuation disputes, shortened the payment cycle by 21 days, and helped the subcontractor build stronger relationships with their main contractor for future work.",
//       linkLabel: "See Case Study",
//       minutes: 4,
//       image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/Fusebox-Upgrade.jpg',
//     },
//     {
//       id: 7,
//       title: "HVAC Ducting – Central London Commercial Scheme",
//       client: "HVAC Subcontractor",
//       value: "£1.6M (est.)",
//       description:
//         "With ongoing layout revisions, our variation memory tool and resource-linked claims process ensured 87% of changes were approved on first submission – safeguarding cash flow and preventing scope creep.",
//       linkLabel: "See Case Study",
//       minutes: 3,
//       image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/etc-venues-3-1.jpg',
//     },
//     {
//       id: 8,
//       title: "Passive Fire Protection - Essex Housing Block",
//       client: "Confidential",
//       value: "Confidential",
//       description:
//         "We implemented a structured variation process with dashboard-based reporting, enabling fast approvals, better documentation, and a 92% variation recovery rate, helping the subcontractor maintain profitability and credibility with the client.",
//       linkLabel: "See Case Study",
//       minutes: 3,
//       image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/EH04032402.jpg',
//     },
//     {
//       id: 9,
//       title: "Groundworks - Midlands Mixed-Use Scheme",
//       client: "Groundworks Subcontractor",
//       value: "£1.2M (est.)",
//       description:
//         "A Midlands-based groundworks firm engaged Ginjo after early signs of commercial exposure on a fast-moving mixed-use development. With structured evidence and daily site logs, all costed variations were submitted on time, and their final account was approved in full with no deductions.",
//       linkLabel: "See Case Study",
//       minutes: 4,
//       image: 'https://www.constructionenquirer.com/wp-content/uploads/Vista-south-bank-1200x828.jpg',
//     },
//   ],
// };

// export default function CaseStudyPage({ caseStudy, related = [] }) {
//   const router = useRouter();
//   if (router.isFallback) {
//     return (
//       <div className="p-12 text-center">
//         <p className="text-lg">Loading case study…</p>
//       </div>
//     );
//   }

//   if (!caseStudy) {
//     return (
//       <main className="mx-10 py-12">
//         <p>Case study not found.</p>
//         <Link href="/case-studies">
//           <span className="text-[#163c72] underline">Back to case studies</span>
//         </Link>
//       </main>
//     );
//   }

//   return (
//     <>
//       <main className="mx-10 bg-white">
//         <header className="bg-[#163c72] -mb-12 text-white rounded-b-2xl overflow-hidden">
//           <div className="max-w-7xl mx-auto px-6 py-16">
//             <h1 className="text-4xl md:text-5xl font-serif font-bold">
//               {DATA.pageTitle}
//             </h1>
//             <p className="max-w-3xl mt-4 text-sm md:text-base leading-relaxed text-white/90">
//               Case study — {caseStudy.title}
//             </p>
//           </div>
//         </header>

//         <div className="bg-white rounded-t-2xl mx-auto px-6 py-8">
//           <nav className="text-sm text-gray-600 mb-6">
//             <Link href="/">
//               <span className="hover:underline text-[#0f4b7f]">Home</span>
//             </Link>
//             <span className="mx-2">›</span>
//             <Link href="/case-studies">
//               <span className="hover:underline text-[#0f4b7f]">Case Studies</span>
//             </Link>
//             <span className="mx-2">›</span>
//             <span className="text-gray-700">{caseStudy.title}</span>
//           </nav>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Main content */}
//             <article className="lg:col-span-2 bg-[#f2ebe3] rounded-2xl overflow-hidden p-6 md:p-8">
//               <div className="relative h-64 overflow-hidden rounded-lg mb-6">
//                 <img
//                   src={caseStudy.image || IMAGE_URL}
//                   alt={caseStudy.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <h2 className="font-serif text-3xl font-bold mb-4">{caseStudy.title}</h2>

//               <p className="text-gray-700 mb-4 leading-relaxed">{caseStudy.description}</p>

//               <div className="flex flex-wrap gap-4 mb-6">
//                 {caseStudy.client && (
//                   <div className="text-sm text-gray-600">
//                     <strong>Client:</strong> {caseStudy.client}
//                   </div>
//                 )}
//                 {caseStudy.value && (
//                   <div className="text-sm text-gray-600">
//                     <strong>Value:</strong> {caseStudy.value}
//                   </div>
//                 )}
//                 <div className="text-sm text-gray-600">
//                   <strong>Time to read:</strong> {caseStudy.minutes ?? 3} minutes
//                 </div>
//               </div>

//               {/* Example section — you can replace with full case study content */}
//               <section className="mb-6">
//                 <h3 className="font-semibold mb-2">Overview</h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   This page is a template for a full case study. Replace this paragraph with the full project narrative,
//                   outcomes, and any images, PDFs or downloadable assets you wish to include.
//                 </p>
//               </section>

//               <section className="mb-6">
//                 <h3 className="font-semibold mb-2">Key outcomes</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li>Commercial management and variation control</li>
//                   <li>Risk mitigation and procurement support</li>
//                   <li>Improved payment workflows and dispute reduction</li>
//                 </ul>
//               </section>

//               <div className="mt-8 flex gap-3">
//                 <Link href="/case-studies">
//                   <span className="text-sm text-[#163c72] underline">Back to case studies</span>
//                 </Link>
//                 <a
//                   href="#"
//                   className="bg-black text-white px-4 py-2 rounded-md text-sm hover:opacity-90"
//                 >
//                   Download PDF
//                 </a>
//               </div>
//             </article>

//             {/* Right column — quick facts & related */}
//             <aside className="bg-white rounded-2xl p-6 border shadow-sm">
//               <div className="mb-6">
//                 <h4 className="text-sm text-gray-500">Quick facts</h4>
//                 <div className="mt-3 text-sm text-gray-700">
//                   <div className="mb-2">
//                     <strong>Client:</strong> {caseStudy.client ?? "—"}
//                   </div>
//                   <div className="mb-2">
//                     <strong>Project value:</strong> {caseStudy.value ?? "—"}
//                   </div>
//                   <div>
//                     <strong>Read time:</strong> {caseStudy.minutes ?? 3} minutes
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <h4 className="text-sm text-gray-500 mb-3">Related case studies</h4>
//                 <div className="flex flex-col gap-3">
//                   {related.length > 0 ? (
//                     related.map((r) => (
//                       <Link href={`/case-studies/${r.id}`} key={r.id}>
//                         <span className="text-sm text-[#0f1724] underline">{r.title}</span>
//                       </Link>
//                     ))
//                   ) : (
//                     <p className="text-sm text-gray-600">No related case studies</p>
//                   )}
//                 </div>
//               </div>
//             </aside>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

// /**
//  * Generate paths for each caseStudy by id.
//  * If you prefer runtime rendering, change fallback to 'blocking' or remove SSG.
//  */
// export async function getStaticPaths() {
//   const paths = DATA.caseStudies.map((c) => ({
//     params: { id: String(c.id) },
//   }));

//   return {
//     paths,
//     fallback: false, // set to true or 'blocking' if you want to support new items at runtime
//   };
// }

// export async function getStaticProps({ params }) {
//   const id = Number(params.id);
//   const caseStudy = DATA.caseStudies.find((c) => c.id === id) || null;

//   // Simple related list: other studies (limit 3)
//   const related = DATA.caseStudies.filter((c) => c.id !== id).slice(0, 3);

//   return {
//     props: {
//       caseStudy,
//       related,
//     },
//   };
// }
// pages/case-studies/[id].js
import Link from "next/link";
import { useRouter } from "next/router";

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
    minutes: 5,
    linkLabel: "See Case Study",
    image:
      "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/R0A0033_copy_small_0-2048x1365-1-1536x1024.jpg",
    description:
      "Ginjo provided procurement and contract management services on behalf of Fluor for the construction of a major biotechnology facility. Our expertise supported strategic delivery and risk mitigation at scale.",

    // ➤ NEW FULL DETAILS
    details: {
      overview: `
We worked alongside the team at Fluor to deliver procurement and contract management support for the construction of a state-of-the-art biotechnology facility in Copenhagen. The project benefited from immediate commercial integration and governance at scale.
      `,
      implementation: "August 2023",
      lead: {
        name: "Daniel Ginn",
        role: "Project Lead, Procurement Strategy",
        image: "daniel-ginn.jpg", // replace if needed
      },
      challenge: `
Managing procurement on a multinational scale.

Fujifilm Diosynth Biotechnologies required a trusted partner to oversee procurement and contract management across a £2 billion European life sciences facility. Fluor, acting as EPCM contractor, needed expert commercial support to manage supplier selection, mitigate contract risk, and maintain alignment with local compliance and delivery expectations.

Faced with challenges including cross-border coordination, shifting market rates, and complex contractual structures, Fluor turned to Ginjo to embed dedicated commercial support with the capability to advise, manage, and scale quickly.
      `,
      solution: `
Ginjo stepped in as an embedded procurement and contract management partner. We integrated directly into Fluor’s delivery model, managing supplier prequalification, bid evaluations, and contract finalisation.

Our team structured commercial processes for transparency, governed risk at contract level, and supported value-based procurement, with real-time contract administration and structured variation control.
      `,
      result: [
        "Commercial governance fully aligned with EPCM delivery",
        "Risk-reduced procurement decisions across high-value packages",
        "Improved cost transparency through structured dashboards",
        "Faster mobilisation of suppliers across multiple EU jurisdictions",
      ],
    },
  },

  {
    id: 2,
    title: "HS2 Phase 1 - London, United Kingdom",
    client: "HS2",
    value: "Multi-Billion",
    minutes: 6,
    linkLabel: "See Case Study",
    image:
      "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/HS2-VL-23575-543A8693-BBVS-HS2-OOC-Station-260421-www.johnzammit.co_.uk-Absolute-Photography-Ltd-1536x1024.jpg",
    description:
      "As a commercial consultancy within the Engineering Delivery Partner Framework, Ginjo played a key role in managing costs and contract performance for one of the UK’s most complex infrastructure programmes.",

    // ➤ NEW FULL DETAILS
    details: {
      overview: `
We provided Commercial Management Services on the Engineering Delivery Partner Framework overseeing £60m of spend across the Financial Year 2020/21. The JV partners were Jacobs, Atkins and SENER.
      `,
      implementation: "August 2022",
      lead: {
        name: "Daniel Ginn",
        role: "Commercial Manager, HS2 Limited",
        image: "daniel-ginn.jpg",
      },
      challenge: `
HS2 Phase 1 presented a highly complex infrastructure delivery environment governed by NEC contracts and involving multiple stakeholder interfaces.

The client required support in managing cost risk, programme exposure, and compensation event workflows in accordance with public-sector governance standards.

Ginjo was engaged to strengthen the programme’s commercial controls and assurance framework.
      `,
      solution: `
Ginjo deployed commercial consultants to work alongside HS2’s in-house team. We strengthened cost tracking, improved notice management, and enabled accurate assessments for compensation events.

We implemented dashboards aligned to internal governance cycles and introduced structured peer-review workflows for commercial submissions.
      `,
      result: [
        "Strengthened governance for NEC4 contracts",
        "Improved commercial accuracy across compensation event assessments",
        "Reduced exposure to untracked cost escalation",
        "Trusted input at board-level decision-making meetings",
      ],
    },
  },

  {
    id: 3,
    title: "STEGRA EPC Project - Stockholm, Sweden",
    client: "ÅF RY Industry AB",
    value: "£3.5 billion",
    minutes: 7,
    linkLabel: "See Case Study",
    image:
      "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/1757596750436.jpg",
    description:
      "Ginjo supported AFRY with commercial oversight and design coordination on a large-scale engineering and manufacturing facility, including cost strategies and international collaboration.",

    // ➤ NEW FULL DETAILS
    details: {
      overview: `
We worked alongside AFRY Industry AB to support commercial and design coordination on the delivery of a £3.5bn advanced manufacturing EPC project for STEGRA in Sweden.
      `,
      implementation: "March 2023",
      leads: [
        {
          name: "Daniel Ginn",
          role: "Project Lead, Procurement Strategy",
          image: "daniel-ginn.jpg",
        },
        {
          name: "Adersh Raj",
          role: "Commercial Manager",
          image: "adersh-raj.jpg",
        },
      ],
      challenge: `
The STEGRA EPC project involved complex design packages, process plant coordination, and engineering integration across multiple contractors.

With evolving design requirements and high-value contracts, AFRY needed rigorous commercial control to avoid budget drift and ensure structured variation management.
      `,
      solution: `
Ginjo embedded into AFRY’s delivery team to track change events, structure variation workflows, and support contractor evaluations.

We analysed the commercial impact of engineering changes in real-time and maintained transparent cost control using live dashboards and audit-ready templates.
      `,
      result: [
        "Reduction in variation approval times",
        "Improved integration between commercial and design teams",
        "Real-time tracking of scope changes",
        "Audit-ready commercial reporting strengthened client confidence",
      ],
    },
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
      image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/0_9F1A2263JPG-1.webp',
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
      image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/airport-blog-square-e1762607470488.png',
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
      image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/Fusebox-Upgrade.jpg',
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
      image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/etc-venues-3-1.jpg',
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
      image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/EH04032402.jpg',
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
      image: 'https://www.constructionenquirer.com/wp-content/uploads/Vista-south-bank-1200x828.jpg',
    },
  ],
};

export default function CaseStudyPage({ caseStudy, related = [] }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className="p-12 text-center">
        <p className="text-lg">Loading case study…</p>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <main className="mx-10 py-12">
        <p>Case study not found.</p>
        <Link href="/case-studies">
          <span className="text-[#163c72] underline">Back to case studies</span>
        </Link>
      </main>
    );
  }

  const d = caseStudy.details || {};

  // helper to render lead(s)
  const renderLeads = () => {
    if (d.leads && Array.isArray(d.leads)) {
      return d.leads.map((l, i) => (
        <div key={i} className="flex items-start gap-3 mb-3">
          {l.image ? (
            <img src={l.image} alt={l.name} className="w-12 h-12 rounded-full object-cover" />
          ) : null}
          <div>
            <div className="text-sm font-medium">{l.name}</div>
            <div className="text-xs text-gray-500">{l.role}</div>
          </div>
        </div>
      ));
    }
    if (d.lead) {
      const l = d.lead;
      return (
        <div className="flex items-start gap-3 mb-3">
          {l.image ? (
            <img src={l.image} alt={l.name} className="w-12 h-12 rounded-full object-cover" />
          ) : null}
          <div>
            <div className="text-sm font-medium">{l.name}</div>
            <div className="text-xs text-gray-500">{l.role}</div>
          </div>
        </div>
      );
    }
    return <div className="text-sm text-gray-600">—</div>;
  };

  return (
    <>
      <main className="lg:mx-10 bg-white">
        <header className=" -mb-20 py-20 bg-cover bg-center bg-no-repeat  text-white rounded-b-2xl overflow-hidden"style={{
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
      url('https://www.turnerandtownsend.com/media/vxyftgqu/_h3a0079_2560-x-1440px.webp?width=1280&height=512&v=1dadc4c4e844f10')
    `
    
  }}>
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold">{DATA.pageTitle}</h1>
            <p className="max-w-3xl mt-4 text-sm md:text-base leading-relaxed text-white/90">
              Case study — {caseStudy.title}
            </p>
          </div>
        </header>

        <div className="bg-white rounded-t-2xl mx-auto px-6 py-8">
          <nav className="text-sm text-gray-600 mb-6">
            <Link href="/">
              <span className="hover:underline text-[#0f4b7f]">Home</span>
            </Link>
            <span className="mx-2">›</span>
            <Link href="/case-studies">
              <span className="hover:underline text-[#0f4b7f]">Case Studies</span>
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-700">{caseStudy.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <article className="lg:col-span-2 bg-[#bac6c7] rounded-2xl overflow-hidden p-6 md:p-8">
              <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                <img
                  src={caseStudy.image || IMAGE_URL}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-serif text-3xl font-bold mb-4">{caseStudy.title}</h2>

              <p className="text-gray-700 mb-4 leading-relaxed">{caseStudy.description}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                {caseStudy.client && (
                  <div className="text-sm text-gray-600">
                    <strong>Client:</strong> {caseStudy.client}
                  </div>
                )}
                {caseStudy.value && (
                  <div className="text-sm text-gray-600">
                    <strong>Value:</strong> {caseStudy.value}
                  </div>
                )}
                <div className="text-sm text-gray-600">
                  <strong>Time to read:</strong> {caseStudy.minutes ?? 3} minutes
                </div>
              </div>

              {/* Render real details if present */}
              {d.overview && (
                <section className="mb-6">
                  <h3 className="font-semibold mb-2">Overview</h3>
                  <div className="prose max-w-none text-gray-700">
                    {/* overview might contain newlines; render simply */}
                    <p>{d.overview.trim()}</p>
                  </div>
                </section>
              )}

              {d.implementation && (
                <section className="mb-6">
                  <h3 className="font-semibold mb-2">Implementation</h3>
                  <p className="text-gray-700">{d.implementation}</p>
                </section>
              )}

              {/* Leads / Team */}
              <section className="mb-6">
                <h3 className="font-semibold mb-2">Project lead(s)</h3>
                <div className="text-gray-700">{renderLeads()}</div>
              </section>

              {d.challenge && (
                <section className="mb-6">
                  <h3 className="font-semibold mb-2">Challenge</h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{d.challenge.trim()}</p>
                </section>
              )}

              {d.solution && (
                <section className="mb-6">
                  <h3 className="font-semibold mb-2">Solution</h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{d.solution.trim()}</p>
                </section>
              )}

              {d.result && (
                <section className="mb-6">
                  <h3 className="font-semibold mb-2">Result</h3>
                  {Array.isArray(d.result) ? (
                    <ul className="list-disc list-inside text-gray-700">
                      {d.result.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700">{String(d.result)}</p>
                  )}
                </section>
              )}

              {/* Fallback if no details at all */}
              {!d.overview && !d.challenge && !d.solution && !d.result && (
                <section className="mb-6">
                  <h3 className="font-semibold mb-2">Overview</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This page is a template for a full case study. Replace this paragraph with the full project narrative,
                    outcomes, and any images, PDFs or downloadable assets you wish to include.
                  </p>
                </section>
              )}

              <div className="mt-8 flex gap-3">
                <Link href="/case-studies">
                  <span className="text-sm text-[#163c72] underline">Back to case studies</span>
                </Link>
                <a
                  href="#"
                  className="bg-black text-white px-4 py-2 rounded-md text-sm hover:opacity-90"
                >
                  Download PDF
                </a>
              </div>
            </article>

            {/* Right column — quick facts & related */}
            <aside className="bg-[#bac6c7] rounded-2xl p-6 border shadow-sm">
              <div className="mb-6">
                <h4 className="text-sm text-gray-500">Quick facts</h4>
                <div className="mt-3 text-sm text-gray-700">
                  <div className="mb-2">
                    <strong>Client:</strong> {caseStudy.client ?? "—"}
                  </div>
                  <div className="mb-2">
                    <strong>Project value:</strong> {caseStudy.value ?? "—"}
                  </div>
                  <div>
                    <strong>Read time:</strong> {caseStudy.minutes ?? 3} minutes
                  </div>
                  {d.implementation && (
                    <div className="mt-3">
                      <strong>Implementation:</strong>
                      <div className="text-sm text-gray-600">{d.implementation}</div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-sm text-gray-500 mb-3">Related case studies</h4>
                <div className="flex flex-col gap-3">
                  {related.length > 0 ? (
                    related.map((r) => (
                      <Link href={`/case-studies/${r.id}`} key={r.id}>
                        <span className="text-sm text-[#0f1724] underline">{r.title}</span>
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-gray-600">No related case studies</p>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

/**
 * Generate paths for each caseStudy by id.
 * If you prefer runtime rendering, change fallback to 'blocking' or remove SSG.
 */
export async function getStaticPaths() {
  const paths = DATA.caseStudies.map((c) => ({
    params: { id: String(c.id) },
  }));

  return {
    paths,
    fallback: false, // set to true or 'blocking' if you want to support new items at runtime
  };
}

export async function getStaticProps({ params }) {
  const id = Number(params.id);
  const caseStudy = DATA.caseStudies.find((c) => c.id === id) || null;

  // Simple related list: other studies (limit 3)
  const related = DATA.caseStudies.filter((c) => c.id !== id).slice(0, 3);

  return {
    props: {
      caseStudy,
      related,
    },
  };
}