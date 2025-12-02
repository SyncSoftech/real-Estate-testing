"use client";

import Link from "next/link";

export default function CareersSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        
        {/* LEFT CONTENT */}
        <div>
          {/* <p className="text-lg tracking-widest font-medium text-gray-700">
            CAREERS
          </p> */}

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-4">
            Work with us
          </h1>

          <p className="text-xl text-gray-700 mt-8 leading-relaxed">
            If you're looking to take your career to the next level, 
            there's room for you here. Apply today and experience 
            the buzz of a business that never stands still.
          </p>

          <button className="mt-10 border border-black rounded-md px-8 py-4 text-lg font-medium hover:bg-black hover:text-white transition">
            Explore current opportunities
          </button>
        </div>

        {/* RIGHT CARDS */}
        <div className="space-y-8">
          
          {/* CARD 1 */}
          <div className="bg-[#bac6c7] p-10 rounded-xl relative">
            <h2 className="text-4xl font-bold">What we do</h2>
            {/* <p className="text-xl mt-6 font-medium">
              1132 jobs in 52 locations
            </p> */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2">
             <Link href="/about/what-we-do"> <div className="w-10 h-10 border border-black rounded-full flex items-center justify-center">
               <span  className="text-2xl">›</span>
              </div></Link>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#bac6c7] p-10 rounded-xl relative">
            <h2 className="text-4xl font-bold">Our Story</h2>
            {/* <p className="text-xl mt-6 font-medium">
              605 jobs in 16 locations
            </p> */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2">
             <Link href="/about/our-story" className="text-2xl"> <div className="w-10 h-10 border border-black rounded-full flex items-center justify-center">
                <span  className="text-2xl">›</span>
              </div></Link>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#bac6c7]  p-10 rounded-xl relative">
            <h2 className="text-3xl   font-bold">
              Our Purpose & Values
            </h2>
            {/* <p className="text-xl mt-6 font-medium">
              402 jobs in 11 locations
            </p> */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2">
              <Link href="/about/purpose-values"><div className="w-10 h-10 border border-black rounded-full flex items-center justify-center">
                <span  className="text-2xl">›</span>
              </div></Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
