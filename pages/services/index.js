"use client";

import { useEffect, useMemo, useState } from "react";
import Link from 'next/link';




const IMG = "/mnt/data/b560d3f2-8c7c-4780-bc4a-fa59c9775c5c.png";

const CAPABILITIES = [
  {
    title: "Variation Management",
    desc: "At Ginjo, we bring order to the change process, ensuring every modification works for your project – not against it.",
    image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/graph-business-financial-investment-risk-word-1536x1121.jpg',
  },
  {
    title: "Tendering & Procurement",
    desc: "Reduced our bid prep time by 3 weeks while increasing scoring compliance. Procurement Director, Residential Developer",
    image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-10-31-at-8.09.26-PM-1536x1152.jpeg',
  },
  {
    title: "Quantity Surveying & Commercial Management",
    desc: "Ginjo’s quantity surveying and commercial management services protect your margins from tender to final account. ",
    image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/site-engineer-construction-site-1536x1025.jpg',
  },
  {
    title: "Estimating BOQs & MTOs",
    desc: "We combine human expertise with tech-enabled tools to deliver fast, accurate outputs – while always maintaining professional judgment and scope understanding.",
    image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/close-up-pens-calculator-plans-1536x1024.jpg',
  },
  {
    title: "NEC, JCT, FIDIC, Bespoke Contract Experts",
    desc: "Ginjo’s NEC contract experts simplify JCT and FIDIC compliance through tailored audits, consulting, and procedural guidance...",
    image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/two-men-shaking-hands-1536x1025.jpg',
  },
  {
    title: "Smart Commercial Systems",
    desc: "Smart Commercial Systems Built for Commercial Professionals At Ginjo, our systems are designed and built by Rishi Rao, a commercial leader with two...",
    image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/ChatGPT-Image-May-18-2025-08_34_58-AM.png',
  },
  {
    title: "Project Management",
    desc: "As part of Ginjo Construction’s premium end-to-end commercial services, our Project Management offering is led by our Founder Daniel Ginn MRICS, a Chartered RICS Project Manager with extensive EPC experience at Fluor and AFRY.",
    image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-10-31-at-8.09.26-PM-3-1536x1152.jpeg',
  },
  {
    title: "CLAIMS, DISPUTES AND COMMERCIAL ADVISORY",
    desc: "Protecting entitlement, strengthening your position and resolving issues with clarity and confidence",
    image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-10-31-at-8.09.26-PM-3-1536x1152.jpeg',
  },
 
];

export default function Services() {
 
 const IMG = "/mnt/data/0e3f1666-3214-4252-99bf-8cb779f19844.png";

  const projects = [
    { title: "Fujifilm Diosynth Biotechnologies – Copenhagen, Denmark", image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/R0A0033_copy_small_0-2048x1365-1-1536x1024.jpg' ,link:'case-studies/1' },
    { title: "HS2 Phase 1 - London, United Kingdom", image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/HS2-VL-23575-543A8693-BBVS-HS2-OOC-Station-260421-www.johnzammit.co_.uk-Absolute-Photography-Ltd-1536x1024.jpg' ,link:'case-studies/2' },
    { title: "STEGRA EPC Project - Stockholm, Sweden", image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/1757596750436.jpg' ,link:'case-studies/3' },
  ];
 

  return (<>
    <main className=" lg:mx-10 bg-white ">
      {/* Top blue banner */}
      <header
  className="-mb-20 rounded-b-2xl  py-32 overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
      url('https://www.turnerandtownsend.com/media/vxyftgqu/_h3a0079_2560-x-1440px.webp?width=1280&height=512&v=1dadc4c4e844f10')
    `
  }}
>

        <div className="max-w-7xl mx-auto px-6 py-16 text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Services</h1>
          <p className="max-w-3xl mt-4 text-sm md:text-base leading-relaxed ">
            We are involved in many of the world's most impactful construction
            projects and programmes. See where our work has helped to transform
            communities.
          </p>
        </div>
      </header>

      {/* Content area */}
      <div className=" bg-white rounded-t-2xl mx-auto px-6 py-8">


 <main className="min-h-screen bg-white text-[#0f1724]">
      {/* Breadcrumb + top heading & copy */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <nav className="text-sm text-[#0f4b7f] mb-6">
          <a className="hover:underline" href="/">Home</a>
          <span className="mx-3">›</span>
          <span>services</span>
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

     
<section className="w-full bg-[#bac6c7] py-10 md:py-14">
      {/* Hidden image so your environment registers uploaded asset */}
      <img
        src="/mnt/data/d6ddf2b5-74ca-4920-8a64-f86b9f5ed429.png"
        alt="uploaded"
        className="hidden"
      />

      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Our programmatic approach
        </h2>

        <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-4">
          A Smarter Way to Manage Complexity and Protect Value
        </p>
        <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-4">
          Our approach is built around structure, clarity and disciplined commercial management. We help clients achieve stronger outcomes by applying real project insight, practical experience and clear decision making. By taking a consistent and programmatic approach, we make sure value is protected at every stage of a project and that performance remains steady even when pressure increases.
        </p>

        <p className="text-gray-800 text-base md:text-lg leading-relaxed">
          We use the right digital tools to keep information accurate, support productivity and give teams immediate visibility of their commercial position. Our aim is simple. Strengthen control, improve delivery and ensure every project is better managed, better protected and better prepared for the challenges ahead.
        </p>
      </div>
    </section>








    </main>

        </div>
        

        <section className="w-full bg-white py-10 md:py-14">
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
          Our capabilities
        </h2>

        {/* 3×3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAPABILITIES.map((item, idx) => (
            <Link 
              key={idx}
              href={`/services/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`}
              className="block rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md transition hover:translate-y-[-4px]"
            >
              <div className="h-36 md:h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 bg-[#bac6c7] h-full rounded-b-xl">
                <h3 className="font-serif text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>

      {/* Register uploaded image for Next runtime */}
      <img
        src="/mnt/data/b560d3f2-8c7c-4780-bc4a-fa59c9775c5c.png"
        alt="hidden"
        className="hidden"
      />
    </section>
      
    </main>


 
    <section className="w-full bg-white py-12 md:py-16">

      {/* register uploaded image */}
      <img src={IMG} alt="" className="hidden" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-4xl font-bold">
          Our projects
        </h2>

        <p className="text-gray-700 mt-2 mb-8 text-sm md:text-base">
          Find out more about the outcomes we’ve delivered for<br className="hidden md:block" /> clients.
        </p>

        {/* Cards Row */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">

          {/* Card 1 */}
          <div className="w-full sm:w-1/3">
            <div className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition h-72 md:h-80">
              <img src={projects[0].image} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute left-4 right-4 bottom-4">
              <Link href={projects[0].link}>  <h3 className="text-white font-serif text-lg md:text-xl leading-tight">{projects[0].title}</h3>
                <div className="mt-3 flex justify-end">
                  <div className="w-9 h-9 rounded-full border border-white/70 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5l8 7-8 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 (Center, lifted) */}
          <div className="w-full sm:w-1/3 sm:-mt-6">
            <div className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition h-80 md:h-96">
              <img src={projects[1].image} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute left-4 right-4 bottom-4">
                <Link href={projects[1].link}><h3 className="text-white font-serif text-lg md:text-xl leading-tight">{projects[1].title}</h3>
                <div className="mt-3 flex justify-end">
                  <div className="w-9 h-9 rounded-full border border-white/70 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5l8 7-8 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-1/3">
            <div className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition h-72 md:h-80">
              <img src={projects[2].image} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute left-4 right-4 bottom-4">
               <Link href={projects[2].link}> <h3 className="text-white font-serif text-lg md:text-xl leading-tight">{projects[2].title}</h3>
                <div className="mt-3 flex justify-end">
                  <div className="w-9 h-9 rounded-full border border-white/70 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5l8 7-8 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                    </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Button */}
        <div className="flex justify-end mt-8">
        <Link href="/caseStudies">  <button className="px-4 py-2 text-sm rounded-md border border-gray-400 hover:bg-gray-50 transition">
            See all projects
          </button></Link>
        </div>

      </div>
    </section>

    </>

  );
}
