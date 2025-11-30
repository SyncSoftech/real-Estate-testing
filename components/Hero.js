"use client";

import React, { useEffect, useState } from 'react';

const verbs = ["work", "create", "solve", "deliver", "transform"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const items = [
    { label: "experts", value: "22k+" },
    { label: "countries", value: "62" },
    { label: "offices", value: "247" },
    { label: "nationalities", value: "115" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % verbs.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const bg = "/mnt/data/c322b258-6381-4769-836e-e798dfa5c315.png";

  return (<>
    <section className="relative overflow-hidden z-10 bg-[#efe9e0]">
      

      <div className="max-w-[1200px]  mx-auto px-6 py-2 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">

          {/* left large headline */}
          <div className="flex items-start">
            <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] tracking-tight text-left text-[#123e6a]">
              <div className="block">We</div>
              <div className="block  h-20 md:h-24  relative ">
                <div className="absolute inset-0  flex items-center">
                  {verbs.map((verb, i) => (
                    <span
                      key={verb}
                      className={`
                        absolute text-[#08a3e0]  font-serif transition-all duration-700 ease-out
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
              <div className="block text-[#123e6a]">together.</div>
            </h1>
          </div>

          {/* right description */}
          <div className="pt-8 md:pt-12">
            <p className="max-w-[520px] text-lg md:text-xl leading-8 text-[#123e6a] font-medium">
              Working in partnership makes it possible to deliver the world's most impactful projects and programmes across real estate, infrastructure, energy and natural resources.
            </p>

            <a href="#" className="inline-block mt-6 text-base font-semibold underline text-[#123e6a] hover:opacity-70 transition-opacity">
              Find out more
            </a>

          
          </div>

        </div>
      </div>




      <style jsx>{`
        .font-serif { font-family: Georgia, 'Times New Roman', serif; }
        @media (max-width: 768px) {
          h1 { font-size: 56px !important; line-height: 0.95 !important; }
        }
      `}</style>
    </section>
    <section className="relative lg:p-10 ">
  <div className="relative"> {/* wrapper must be positioned */}
    {/* use an explicit height or let the image determine the height */}
    <img
      src="https://i.vimeocdn.com/video/1940579161-fe38cf65ed9ae2cef5f747590df9ca3309e17380a9db979314a2199c4061789e-d_640x360?&r=pad&region=us"
      alt="/LOGO.jpg"
      className="w-full h-[50rem] object-cover " 
    />

    {/* overlay pinned to bottom of wrapper — no margin that pushes it upward */}
    <div className=" " />
    <div className=" absolute  bottom-0 z-9 w-full grid grid-cols-1 lg:grid-cols-4 bg-[#efe9e0] rounded-t-3xl p-10 z-10  gap-6">
        {items.map((it) => (
          <div key={it.label} className="bg-[#efe9e0]  rounded-lg ">
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
