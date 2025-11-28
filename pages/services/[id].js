"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

/* -------------------------
   Data (CAPABILITIES)
   ------------------------- */
const CAPABILITIES = [
  /* ... same capability objects as before ... */
  {
    title: "Variation Management",
    desc: "At Ginjo, we bring order to the change process, ensuring every modification works for your project – not against it.",
    image:
      "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/graph-business-financial-investment-risk-word-1536x1121.jpg",
    content: {
      description:
        "Our Variation Management service helps you maintain control over project changes, ensuring every modification is tracked, approved, and implemented efficiently.",
      benefits: [
        "Streamlined change order process",
        "Reduced project delays and cost overruns",
        "Improved communication between stakeholders",
        "Comprehensive documentation and reporting",
      ],
    },
  },
  {
    title: "Tendering & Procurement",
    desc: "Reduced our bid prep time by 3 weeks while increasing scoring compliance. Procurement Director, Residential Developer",
    image:
      "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-10-31-at-8.09.26-PM-1536x1152.jpeg",
    content: {
      description:
        "Our Tendering & Procurement service ensures you get the best value while maintaining quality and compliance throughout the procurement process.",
      benefits: [
        "Comprehensive bid preparation",
        "Vendor qualification and selection",
        "Contract negotiation and management",
        "Risk assessment and mitigation",
      ],
    },
  },
  {
    title: "Quantity Surveying & Commercial Management",
    desc: "Ginjo's quantity surveying and commercial management services protect your margins from tender to final account. ",
    image:
      "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/site-engineer-construction-site-1536x1025.jpg",
    content: {
      description:
        "Professional quantity surveying services that ensure cost efficiency and financial control throughout your construction project.",
      benefits: [
        "Accurate cost planning and estimation",
        "Cost control and value engineering",
        "Interim valuations and payment applications",
        "Final account preparation and agreement",
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
        "Accurate and detailed Bill of Quantities (BOQ) and Material Take-Offs (MTO) to support your project's financial planning and procurement.",
      benefits: [
        "Detailed quantity take-offs",
        "Material and labor cost estimation",
        "Value engineering options",
        "Bid preparation support",
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
        "Expert guidance on all major construction contract forms including NEC, JCT, and FIDIC to protect your interests and ensure compliance.",
      benefits: [
        "Contract drafting and review",
        "Dispute resolution and claims management",
        "Contract administration training",
        "Compliance and risk assessment",
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
        "Custom-built commercial management systems designed to streamline your operations and improve project outcomes.",
      benefits: [
        "Custom software solutions",
        "Process automation",
        "Data analytics and reporting",
        "Integration with existing systems",
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
        "End-to-end project management services that deliver your project on time, within budget, and to the highest quality standards.",
      benefits: [
        "Project planning and scheduling",
        "Stakeholder management",
        "Risk management",
        "Quality assurance and control",
      ],
    },
  },
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
  const [idx, setIdx] = useState(0); // moved here so hooks order is stable

  useEffect(() => {
    if (!id) return;
    const found = CAPABILITIES.find((c) => toSlug(c.title) === String(id).toLowerCase());
    setService(found || null);
  }, [id]);

  // slides depend on service — safe to compute here (may be empty until service is set)
  const slides = service
    ? [
        {
          id: 1,
          label: "OUTCOMES",
          title: "World Expo 2025 Osaka,\nAustralia Pavilion, Japan",
          description: "Delivering a global platform to showcase the best of Australia to the world.",
          image: service.image,
        },
      ]
    : [];

  // make sure total is never 0 to avoid modulo by zero — if no slides, total = 1 (controls will be harmless)
  const total = slides.length > 0 ? slides.length : 1;

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  // Loader while service isn't found/resolved
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }

  // Insights and card image (same as before)
  const CARD_IMAGE = "/mnt/data/fd073204-4981-43f3-8f68-8e237203236b.png";

  const INSIGHTS = [
    {
      id: 1,
      title: "Navigating procurement of complex labs",
      description:
        "These facilities support cutting-edge science but must do so in a way that meets safety, regulatory and biosecurity standards.",
      minutes: 7,
      date: "04 Nov 25",
      image: CARD_IMAGE,
    },
    {
      id: 2,
      title: "Can agile programme management unlock US airports?",
      description:
        "Air passenger numbers have grown since COVID, igniting new plans for airport development across the US – as traditional development is not effective.",
      minutes: 6,
      date: "24 Sept 25",
      image: CARD_IMAGE,
    },
    {
      id: 3,
      title: "China’s construction market",
      description: "China’s construction market is in transition, but its cost and supply chain advantage remain intact.",
      minutes: 6,
      date: "28 Aug 25",
      image: CARD_IMAGE,
    },
    {
      id: 4,
      title: "The way forward for Japan's construction industry",
      description: "Japan has re-entered the global spotlight as one of the most expensive construction markets, with five cities in the world’s top 15.",
      minutes: 7,
      date: "13 Aug 25",
      image: CARD_IMAGE,
    },
  ];

  const slide = slides[idx % total] || slides[0] || { label: "", title: "", description: "" };

  return (
    <>
      <Head>
        <title>{service.title} | Ginjo Services</title>
        <meta name="description" content={service.desc} />
      </Head>

      {/* ... the rest of your JSX unchanged — hero, service content, related services, insights, etc. ... */}
      {/* For brevity I'll show the hero and slides area — paste your previous JSX for the rest */}

      {/* Hero Section */}
      <section className="w-full bg-white">
        <div className="w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content */}
            <div className="bg-[#f2efe8] p-8 md:p-14 lg:p-20 xl:p-28 rounded-tr-3xl rounded-br-3xl lg:rounded-br-none lg:rounded-tl-3xl">
              <div className="max-w-2xl">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-[#1f2937]">
                  {service.title}
                </h1>
                <p className="mt-6 text-base md:text-lg text-[#374151] leading-relaxed">
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

      {/* Slide / Outcomes (Left text + controls) */}
      <section className="w-full bg-[#0f172a] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-8">
          <div className="w-full lg:w-1/2">
            <div className="text-white max-w-xl">
              <div className="text-sm tracking-wide font-medium mb-4 opacity-90">{slide.label}</div>

              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-pre-line">
                {slide.title}
              </h1>

              <p className="mt-6 text-sm md:text-base max-w-xl leading-relaxed text-white/90">{slide.description}</p>
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
      </section>

      {/* Insights grid */}
      <section className="w-full bg-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10">Procurement and supply chain insights</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSIGHTS.map((item) => (
              <article key={item.id} className="rounded-xl overflow-hidden bg-white shadow-sm border border-transparent hover:shadow-md transition">
                <img src={item.image} alt={item.title} className="w-full h-40 md:h-44 object-cover rounded-t-xl" />

                <div className="bg-[#f2ebe3] p-5 rounded-b-xl">
                  <h3 className="font-serif font-semibold text-lg leading-tight mb-3">{item.title}</h3>

                  <p className="text-gray-700 text-sm leading-relaxed mb-5">{item.description}</p>

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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our expert witnesses</h2>

          <div className="relative rounded-2xl overflow-hidden border border-gray-200">
            <img src="/mnt/data/13820750-c936-4854-8415-0103451a35ec.png" alt="Expert witness hero" className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-transparent" />

            <div className="absolute inset-0 flex items-end">
              <div className="p-6 md:p-10 lg:p-12 max-w-2xl">
                <div className="text-sm tracking-wide text-white/90 mb-2">Meet our</div>
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight mb-4">Meet our quantum and delay specialists</h3>
                <p className="text-white/90 max-w-xl">We provide project advisory and expert witness services for any matters in dispute.</p>
              </div>
            </div>

            <div className="absolute right-6 bottom-6 flex items-center gap-4">
              <button aria-label="Previous" className="w-11 h-11 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="text-white/90 text-sm">1/1</div>

              <button aria-label="Next" className="w-11 h-11 rounded-full border border-white/70 text-white flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="max-w-7xl mx-auto px-6 pb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Get in touch</h2>

          <div className="max-w-xl">
            <div className="font-serif text-xl font-semibold">Gareth Poole</div>
            <div className="text-sm text-gray-700 mb-4">Director</div>

            <ul className="space-y-3">
              <li>
                <a href="mailto:info@example.com" className="inline-flex items-center gap-3 text-[#0f4b7f] hover:underline">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-none">
                    <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7" stroke="#0f4b7f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 8.5l9 6 9-6" stroke="#0f4b7f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm font-medium">Email</span>
                </a>
              </li>

              <li>
                <a href="tel:+4401212623605" className="inline-flex items-center gap-3 text-[#0f4b7f] hover:underline">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12 1.05.42 2.07.9 3.02a2 2 0 0 1-.45 2.11L9.91 11.09a13.05 13.05 0 0 0 6 6l1.24-1.24a2 2 0 0 1 2.11-.45c.95.48 1.97.78 3.02.9A2 2 0 0 1 22 16.92z" stroke="#0f4b7f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  <span className="text-sm font-medium">+44 0121 262 3605</span>
                </a>
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
