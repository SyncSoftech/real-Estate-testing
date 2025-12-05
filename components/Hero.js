"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
const verbs = ["Project Recover Lost Value", "Contractors protect values", "Subcontractors get paid faster."];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const items = [
    { label: "Year of Experience", value: "24+" },
    { label: "Clients Satisfaction", value: "46k+" },
    { label: "Project Completed", value: "83k+" },
    // { label: "nationalities", value: "115" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % verbs.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);


  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const bg = "/mnt/data/c322b258-6381-4769-836e-e798dfa5c315.png";

  return (<>
    <section className="relative pt-5 overflow-hidden z-10 bg-[#bac6c7]">
      
      <div className="text-center px-4 sm:px-8 md:px-12 lg:ml-20 py-2 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start ">

          {/* left large headline */}
          <div className=" ">
            <h1 className="font-serif text-3xl  lg:text-7xl  tracking-tight text-left text-[#123e6a]">
              <div className="block ">
                <span className='font-light text-3xl lg:text-7xl  '>We help</span>
              <div className="block h-16 sm:h-20 md:h-24 relative">
                <div className="absolute inset-0 flex items-center">
                  {verbs.map((verb, i) => (
                    <span
                      key={verb}
                      className={`
                        absolute text-white 
                         sm:left-48 md:left-72 lg:left-64 
                        top-2 sm:-top-16 md:-top-15 lg:-top-[3rem] 
                        text-2xl sm:text-3xl md:text-4xl lg:text-[4rem] 
                        w-64 sm:w-80 md:w-[40rem] lg:w-[60rem] 
                        font-serif transition-all duration-700 ease-out
                        ${i === index 
                          ? 'opacity-100 translate-y-0' 
                          : i === (index - 1 + verbs.length) % verbs.length
                          ? 'opacity-0 -translate-y-full'
                          : 'opacity-0 translate-y-full'
                        }
                      `}
                    >
                      {verb}
                    </span>
                  ))}
                </div>
              </div>
              </div>
            </h1>
          </div>
        </div>
      </div>
      <p className=' text-lg sm:text-xl md:text-2xl lg:-mt-24 lg:text-3xl mx-4 sm:mx-8 md:mx-12 lg:mx-36 mb-2'>
        Proven industry experience. Real-world results
      </p>
<Link
  href="/services"
  className="flex max-w-fit px-5 ml-5 lg:-mt-5 lg:mx-36 sm:mb-10 lg:mb-1 items-start justify-start mb-5  py-3 border border-black text-black bg-transparent
             tracking-wide text-[17px] hover:bg-white/10 transition-all duration-200"
>
  Discover Our Services
  <span className="text-2xl leading-none">›</span>
</Link>

      <style jsx>{`
        .font-serif { font-family: Georgia, 'Times New Roman', serif; }
        @media (max-width: 768px) {
          h1 { font-size: 56px !important; line-height: 0.95 !important; }
        }
      `}</style>
    </section>
    <section className="relative lg:p-10 bg-[#bac6c7] ">
  <div className="relative"> {/* wrapper must be positioned */}
    {/* use an explicit height or let the image determine the height */}
  
    <div className="relative w-full h-[40rem] overflow-hidden">

      {/* IMAGE (fade out) */}
      <img
        src="/img1.png"
        alt="Hero"
        className={`
          absolute inset-0 w-full h-[30rem] object-cover 
          transition-opacity duration-1000
          ${showVideo ? "opacity-0" : "opacity-100"}
        `}
      />

      {/* VIDEO (fade in) */}
      <video
        src="https://videos.pexels.com/video-files/4665000/4665000-uhd_2560_1440_30fps.mp4"
        autoPlay
        muted
        loop
        playsInline
        className={`
          absolute inset-0 w-full h-[30rem] object-cover
          transition-opacity duration-1000
          ${showVideo ? "opacity-100" : "opacity-0"}
        `}
      />

    </div>

    {/* overlay pinned to bottom of wrapper — no margin that pushes it upward */}
    <div className=" " />
    <div className=" absolute  bottom-0 z-9 w-full grid grid-cols-1 lg:grid-cols-3 bg-[#bac6c7] rounded-t-3xl p-10 z-10  gap-6">
        {items.map((it) => (
          <div key={it.label} className="bg-[#bac6c7]  rounded-lg ">
            <div className="text-5xl mb-5  text-center font-bold">{it.value}</div>
            <div className="mt-1 text-xl text-center uppercase tracking-wide text-slate-700">{it.label}</div>
          </div>
        ))}
      </div>
  </div>
</section>

    </>
  );
}
