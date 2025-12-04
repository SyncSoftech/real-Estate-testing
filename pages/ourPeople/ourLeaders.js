"use client";

import { useEffect, useMemo, useState } from "react";





export default function OurLeaders() {
 
  const leaders = [
    
    {
      id: 'Daniel Ginn',
      name: "Daniel Ginn",
      role: "Director",
      image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Daniel-Ginn-Website-scaled-e1761411935637.jpg',
    },
    {
      id: 'Rishi Rao',
      name: "Rishi Rao",
      role: "Associate Director – Operations",
      image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Image-5-scaled-e1761411869601.jpg',
    },
     {
      id: 'Adersh Rajagopalan',
      name: "Adersh Rajagopalan",
      role: "Associate Director",
      image: '/leaders/adersh.jpg',
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
    
  }}> 
   <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Our Leadership</h1>
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
          <span>Our leadership</span>
        </nav>

        {/* Intro copy */}
        <div className="space-y-4 text-gray-800 mb-8 max-w-3xl">
          <p>
            Every team has an important role to play in our success, including our leadership team.
            Here's a glimpse into who they are and how they're shaping our future.
          </p>
        </div>

        {/* Leadership cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

          {leaders.map((leader) => (
            <a 
              key={leader.id}
              href={`/ourPeople/leaders/${leader.id}`}
              className="block rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="bg-[#bac6c7] p-5 rounded-b-2xl">
                <h3 className="font-serif text-lg font-semibold">{leader.name}</h3>
                <p className="text-xs text-gray-700 mt-1">{leader.role}</p>
              </div>
            </a>
          ))}

        </div>

      </div>

      {/* Join our team banner */}
      <div className="w-full bg-[#bac6c7] text-Black">
        <div className="max-w-7xl mx-auto px-6 py-12">

          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
            Join our team
          </h2>

          <p className="text-sm md:text-base  max-w-3xl mb-6">
            Work on some of the most exciting projects and programmes happening around the world.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-[#163c72] px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:brightness-95 transition">
              Explore current opportunities
            </button>

            <button className="border border-white text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition">
              Discover our Q&A career journeys
            </button>
          </div>

        </div>
      </div>

      {/* Register uploaded image */}
      {/* <img src={IMG} alt="" className="hidden" /> */}
    </section>


</div>
</main>
</>
)}
