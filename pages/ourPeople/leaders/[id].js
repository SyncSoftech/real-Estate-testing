import { useRouter } from 'next/router';
import Image from 'next/image';

export default function LeaderProfile() {
  const router = useRouter();
  const { id } = router.query;

  // This would typically come from an API or data file
  

    const leaders = [
      
   {
  id: "Daniel Ginn",
  quote:"I’m driven to cultivate an ecosystem where my passion for the built environment meets a first-class consultancy - one that injects momentum, clarity and confidence into every project we support",
  name: "Daniel Ginn",
  role: "Founder & Commercial Director",
  bio: `Daniel brings the type of experience that instantly raises the standard of every project Ginjo touches. With a background rooted in major EPCM and EPC delivery across Europe, Daniel has worked on some of the most complex mega-projects in the region - from large-scale industrial facilities to high-performance data centres and advanced manufacturing programmes.

His time commercially project-managing the Stegra EPC project in Sweden, where he led a large and diverse team under demanding client, contractor and schedule pressures, gives Ginjo clients something incredibly valuable: real, hard-earned delivery insight. Daniel understands how international contractors operate, how client organisations think, and how project decisions flow from commercial strategy to boots-on-the-ground execution.

This gives Ginjo clients a significant edge. Daniel’s guidance blends senior commercial leadership with practical, in-the-trenches delivery experience. He knows what works, what fails, and where the real risks and opportunities lie on complex EPCM programmes.

Calm, structured and technically strong, Daniel ensures that every Ginjo engagement runs with the right governance, the right behaviours, and the right level of commercial discipline. Clients consistently value his honesty, his ability to simplify complexity, and his commitment to delivering the outcomes they expect.

He remains closely involved in all major Ginjo assignments, giving clients not just a team - but a leadership presence with international EPCM insight, strong execution methods, and a genuine drive to deliver properly.`,
  image:
    "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Daniel-Ginn-Website-scaled-e1761411935637.jpg",
},

{
  id: "Rishi Rao",
  quote:"Construction is full of surprises which is why we work tirelessly to remove as many as possible. Ginjo delivers commercial and contractual leadership that cuts through noise, tightens the numbers, and keeps your project where it belongs: on track, on budget, and out of trouble. We bring the strategy, structure, and straight talk your team needs and the occasional joke to remind everyone it’s okay to breathe.",
  name: "Rishi Rao",
  role: "Associate Director – Operations",
  bio: ` Adersh brings over sixteen years of commercial and engineering experience across the UK, Dubai and wider international markets. With a background that spans major infrastructure, large-scale civil works, rail programmes and high-volume commercial operations, he brings a global standard of discipline and structure to every client engagement. His UK experience includes several years delivering commercial and project controls support across major rail and infrastructure programmes, where he developed a strong command of NEC contract administration, change management, forecasting and stakeholder engagement. 
  
  This hands-on UK rail exposure allows him to understand exactly how commercial pressures move through client organisations, delivery teams and subcontractors - and how to keep programmes commercially steady even in fast-moving environments. Before relocating to the UK, Adersh spent many years working in Dubai, where he was involved in commercial management, claims analysis, cost control and contract administration for large-scale developments and infrastructure works. 
  
  Operating within demanding FIDIC-led environments helped shape his disciplined approach to documentation, valuation, contract compliance and dispute support. This international foundation gives him the ability to see commercial issues from multiple perspectives - client, contractor and consultant - and to communicate solutions clearly and confidently. 
  
  Today, Adersh is known for being calm, reliable and analytically sharp. He provides clarity around change, strengthens commercial governance, and brings a structured mindset that allows clients to understand their true position at all times. His ability to blend UK delivery expectations with international commercial standards makes him an invaluable part of the Ginjo team, and clients consistently value the stability and consistency he brings to every assignment.`,
  image:
    "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Image-5-scaled-e1761411869601.jpg",
},

    {
  id: "Adersh Rajagopalan",
  name: "Adersh Rajagopalan",
  role: "Senior Consultant, Commercial & Project Controls",
  bio: `Adersh brings over sixteen years of commercial and engineering experience across the UK, Dubai and wider international markets. With a background that spans major infrastructure, large-scale civil works, rail programmes and high-volume commercial operations, he brings a global standard of discipline and structure to every client engagement.

His UK experience includes several years delivering commercial and project controls support across major rail and infrastructure programmes, where he developed a strong command of NEC contract administration, change management, forecasting and stakeholder engagement. This hands-on UK rail exposure allows him to understand exactly how commercial pressures move through client organisations, delivery teams and subcontractors — and how to keep programmes commercially steady even in fast-moving environments.

Before relocating to the UK, Adersh spent many years working in Dubai, where he was involved in commercial management, claims analysis, cost control and contract administration for large-scale developments and infrastructure works. Operating within demanding FIDIC-led environments helped shape his disciplined approach to documentation, valuation, contract compliance and dispute support. This international foundation gives him the ability to see commercial issues from multiple perspectives — client, contractor and consultant — and to communicate solutions clearly and confidently.

Today, Adersh is known for being calm, reliable and analytically sharp. He provides clarity around change, strengthens commercial governance, and brings a structured mindset that allows clients to understand their true position at all times. His ability to blend UK delivery expectations with international commercial standards makes him an invaluable part of the Ginjo team, and clients consistently value the stability and consistency he brings to every assignment.`,
  image: "/leaders/adersh.jpg",
}

   

    
  ];
    
    
  const leader = leaders.find(l => l.id === id);

  if (!leader) {
    return <div>Loading...</div>;
  }

  return (
     <main className="lg:mx-10 bg-white min-h-screen">

          <header className="bg-[#bac6c7] -mb-20 text-white rounded-b-2xl pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">{leader.name}</h1>
          <p className="max-w-3xl mt-4 text-sm md:text-base leading-relaxed text-white/90">
            {leader.role}
          </p>
        </div>
      </header>
      <div className="-mt-10 py-16">
        <div className="bg-white rounded-t-2xl -mt-10 p-8 ">
         
<section className="w-full bg-white">
      {/* hidden registration of uploaded asset (some environments need this) */}
      <img src={leader.image} alt="registered" className="hidden" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT: beige quote panel */}
          <div className="bg-[#bac6c7] p-10 md:p-16 lg:p-20 rounded-tr-3xl rounded-br-3xl flex items-center">
            <div className="max-w-xl">
              {/* large quote marks */}
              <div className="text-7xl md:text-8xl font-bold text-[#2b2b2b] leading-none mb-6">“</div>

              {/* quote text */}
              <blockquote className="text-lg md:text-xl text-[#0f1724] leading-relaxed">
              {leader.quote}
              </blockquote>
            </div>
          </div>

          {/* RIGHT: portrait image */}
          <div className="w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>


        </div>
      </div>
     <section className="w-full bg-white py-16">
  <div className="max-w-6xl mx-auto  gap-12 px-6">

    {/* LEFT SIDE — Leader Bio */}
    <div>
      <h2 className="text-2xl font-bold leading-snug text-[#1a1a1a] mb-6">
        {leader.name}
      </h2>

      <p className="text-[17px] leading-7 text-gray-700 whitespace-pre-line">
        {leader.bio}
      </p>
    </div>

   

  </div>
</section>






     <section className="w-full bg-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[#0f172a] mb-6">
          {leader.name}
        </h2>

        <div className="text-left">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0f172a]">
            {leader.name}
          </h3>

          <p className="whitespace-pre-line text-sm md:text-base text-gray-600 mt-2 mb-4">
            {leader.title}
          </p>

          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <a
              href={leader.email}
              className="inline-flex items-center text-sm md:text-base font-medium text-[#0b5ea6] hover:underline"
              aria-label={`Email ${leader.email}`}
            >
              {/* mail icon */}
              <svg className="w-5 h-5 mr-2 flex-none" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 7.5v9A2.5 2.5 0 0 0 5.5 19h13A2.5 2.5 0 0 0 21 16.5v-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 7.5l-9 6-9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Email
            </a>

            <a
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm md:text-base font-medium text-[#0b5ea6] hover:underline"
              aria-label={`${leader.name} on LinkedIn`}
            >
              {/* linkedin icon */}
              <svg className="w-5 h-5 mr-2 flex-none" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2.5 9h5v11h-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.5 9h4.5v1.7c.6-.9 1.8-2 3.9-2 4.2 0 5 2.8 5 6.5V20h-5v-5.1c0-1.2 0-2.7-1.6-2.7-1.6 0-1.9 1.2-1.9 2.6V20h-5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}
