"use client";

import Link from "next/link";

export default function HowWeHelp() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Text */}
        <p className="uppercase tracking-wider text-gray-600 text-sm font-semibold">
          Case Studies and solutions
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-2 text-[#0f172a]">
          How we can help
        </h2>

        <p className="max-w-2xl text-lg text-gray-700 mt-6 leading-relaxed">
          In fast-moving and demanding business environments, our insight,
          experience and data analysis drive world-class delivery and sustainable value.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {/* Card 1 - Case Studies */}
        <Link href="/caseStudies">  <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/R0A0033_copy_small_0-2048x1365-1-1536x1024.jpg"
              className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
              alt="Case Studies"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-8 left-8 right-10 text-white">

              <h3 className="text-3xl font-semibold mb-3">Case Studies</h3>

              <p className="text-sm leading-relaxed opacity-90">
                We drive transparency, predictability and performance on complex
                projects and programmes, achieving successful outcomes and return
                on investment.
              </p>

              {/* Arrow */}
              <div className="mt-5">
                <button className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
                  <span className="text-xl">›</span>
                </button>
              </div>

            </div>
          </div>
</Link>
          {/* Card 2 - Solutions */}
        <Link href="/services">  
        <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/graph-business-financial-investment-risk-word-1536x1121.jpg"
              className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
              alt="Solutions"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-8 left-8 right-10 text-white">

              <h3 className="text-3xl font-semibold mb-3">Solutions</h3>

              <p className="text-sm leading-relaxed opacity-90">
                We help clients deliver excellence through advisory, programme
                management, digital solutions and world-class expertise.
              </p>

              {/* Arrow */}
              <div className="mt-5">
                <button className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
                  <span className="text-xl">›</span>
                </button>
              </div>

            </div>
          </div>
</Link>
        </div>
      </div>
    </section>
  );
}
