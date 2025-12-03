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
 
 
];

export default function Services() {
 

 

  return (<>
    <main className=" lg:mx-10 bg-white -mt-20">
      


        <section className="w-full bg-white py-10 md:py-14">
      
      <div className="max-w-7xl  mx-auto px-6">
        {/* Heading */}
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
          Our capabilities
        </h2>
        <p className="mb-16 font-semibold max-w-[50rem]">Turning complex challenges into clear solutions, our capabilities move your vision forward with precision, insight, and disciplined execution delivering outcomes that create clarity, momentum, and lasting impact.</p>

        {/* 3×3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {CAPABILITIES.map((item, idx) => (
    <Link
      key={idx}
      href={`/services/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`}
      className="block rounded-xl overflow-hidden  border border-gray-200 shadow-sm hover:shadow-md transition hover:-translate-y-1 relative"
    >
      <div className="relative w-full h-72  ">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover brightness-75"
        />

        {/* gradient overlay + white text */}
        <div className="absolute inset-x-0 bottom-0 p-5 z-10 bg-gradient-to-t from-black/60 via-black/30 to-transparent text-white">
          <h3 className="font-serif text-lg font-semibold mb-2">
            {item.title}
          </h3>
          <p className="text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
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


 
    

    </>

  );
}
