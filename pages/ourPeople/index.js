"use client";

import { useEffect, useMemo, useState } from "react";


import Link from "next/link";


export default function OurPeople() {
 const IMG = "/mnt/data/5dab1fcd-f776-45ab-a04b-622148d293d7.png";

  const cards = [
    {
      title: "Our leadership",
      desc: "Get to know our leadership team. Introducing the people who take the business forward.",
      image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/DSC9398-2048x1363.jpg',
      href: '/ourPeople/ourLeaders',
    },
    {
      title: "Our team",
      desc: "Get to know our people. Meet the experts who are delivering great outcomes and help grow our business.",
      image: '/gallery/Denmark1.webp',
      href: '/ourPeople/ourTeam',
    },
  ];

    

  return (<>
    <main className=" lg:mx-10 bg-white">
      {/* Top blue banner */}
<header className=" -mb-20 py-20 bg-cover bg-center bg-no-repeat  text-white rounded-b-2xl overflow-hidden"style={{
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
      url('https://www.turnerandtownsend.com/media/d0lnmeqe/_h3a9854_2560-x-1440px.webp?width=1280&height=512&v=1dae812808d9a30')
    `
    
  }}>  <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Our People</h1>
          <p className="max-w-3xl mt-4 text-sm md:text-base leading-relaxed text-white/90">
            We are involved in many of the world's most impactful construction
            projects and programmes. See where our work has helped to transform
            communities.
          </p>
        </div>
      </header>

      {/* Content area */}
      <div className=" bg-white rounded-t-2xl mx-auto px-6 py-8">

 <section className="w-full bg-white text-[#0f1724]">
      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* Breadcrumb */}
        <nav className="text-sm text-[#0f4b7f] mb-4">
          <a className="hover:underline" href="#">Home</a>
          <span className="mx-2">›</span>
          <a className="hover:underline" href="#">About us</a>
          <span className="mx-2">›</span>
          <span>Our people</span>
        </nav>

        {/* Intro copy */}
        <div className="space-y-4 text-gray-800 mb-8">
          <p>
            The success of our <a href="#" className="text-[#0f4b7f] underline">projects</a> couldn't happen without our most valuable asset – our people.
          </p>
          <p>
            From the leadership team to people delivering projects, our people are at the crux of everything we've achieved.
          </p>
          <p>
            We know there is strength in knowledge and experience, which is why we always strive to put the right people in the right places – ensuring we're always delivering great projects, with the best in the field.
          </p>
        </div>

        {/* Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {cards.map((c, i) => (
            <article key={i} className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="h-[20rem] overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
              </div>

              <div className="bg-[#bac6c7] p-5 rounded-b-2xl">
               <Link href={c.href}> <h3 className="font-serif text-xl font-semibold mb-2">{c.title}</h3></Link>
                <p className="text-sm text-gray-700">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Join our team banner */}
      <div className="w-full bg-[#bac6c7] text-Black">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">Join our team</h2>
          <p className="text-sm md:text-base  max-w-3xl mb-6">
            Work on some of the most exciting projects and programmes happening around the world.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => (window.location.href = "/careers")}
              className="bg-white text-[#163c72] px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:brightness-95 transition"
            >
              Explore current opportunities
            </button>

            <button
              onClick={() => (window.location.href = "/careers/q-and-a")}
              className="border border-white text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition"
            >
              Discover our Q&A career journeys
            </button>
          </div>
        </div>
      </div>
    </section>

</div>
</main>
</>
)}
