"use client";

import { useEffect, useMemo, useState } from "react";





export default function OurTeam() {
 const IMG = "/mnt/data/be6442a1-683f-4b00-8e13-a5d19cd86f12.png";

  const teamMembers = [
   {
      id: 'Sabahat Mazhar',
      name: "Sabahat Mazhar",
      role: "Operations Manager",
      image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/sabahat-1.jpg',
    },
    {
      id: 'Mrunali Ghumare',
      name: "Mrunali Ghumare",
      role: "Jr. Quantity Surveyor",
      image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/fe54640e-78e5-4aff-90f8-2cb87b24433a-e1761904596669.jpg',
    },
    {
      id: 'Owais Khatib',
      name: "Owais Khatib",
      role: "Graduate Quantity Surveyor",
      image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Untitled-design-1.jpg',
    },
    {
      id: 'Jonathan Maisey',
      name: "Jonathan Maisey",
      role: "Quantity Surveyor",
      image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/Image-23-2-e1762605184760.jpg',
    },
    {
      id: 'Tehreem Rubab',
      name: "Tehreem Rubab",
      role: "Marketing Assistant",
      image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/Image-14-scaled-e1762605149872.jpg',
    },
    {
      id: 'Ellen Tilles',
      name: "Ellen Tilles",
      role: "Marketing Assistant",
      image: '/team/ellen.jpg',
    },
    
    {
      id: 'EVE CHIN',
      name: "EVE CHIN",
      role: "Quantity Surveyor Cost Assurance and Verification Analyst",
      image: '/team/eve.jpg',
    },
    {
      id: 'MANU NAIR',
      name: "MANU NAIR",
      role: "Senior Quantity Surveyor Commercial Lead",
      image: '/team/manu.jpg',
    },
    {
      id: 'JUAN CHAUX',
      name: "JUAN CHAUX",
      role: "Head of Estimating EPC, Nuclear and Critical Infrastructure Specialist",
      image: '/team/juan.jpg',
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Our Team</h1>
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
          <a className="hover:underline" href="/">Home</a>
          <span className="mx-2">›</span>
          <a className="hover:underline" href="/ourPeople">About us</a>
          <span className="mx-2">›</span>
          <span>Our Team</span>
        </nav>

        {/* Intro copy */}
        <div className="space-y-4 text-gray-800 mb-8 max-w-3xl">
          <p>
            Every team member has an important role to play in our success. Meet the talented individuals who make up our dedicated team.
          </p>
        </div>

        {/* Leadership cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

          {teamMembers.map((member) => (
            <a 
              key={member.id}
              href={`/ourPeople/team/${member.id}`}
              className="block rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="bg-[#bac6c7] p-5 rounded-b-2xl">
                <h3 className="font-serif text-lg font-semibold">{member.name}</h3>
                <p className="text-xs text-gray-700 mt-1">{member.role}</p>
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
      <img src={IMG} alt="" className="hidden" />
    </section>


</div>
</main>
</>
)}
