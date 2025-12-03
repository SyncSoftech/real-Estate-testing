import { useRouter } from 'next/router';
import Image from 'next/image';

export default function TeamMemberProfile() {
  const router = useRouter();
  const { id } = router.query;

  // This would typically come from an API or data file
  
  const teamMembers = [
     {
      id: 'Sabahat Mazhar',
      name: "Sabahat Mazhar",
      bio:"As the Supply Chain Operations Manager at Ginjo Construction, Sabahat optimises supply chain processes to ensure the efficient flow of materials, resources, and information for seamless project execution. With an MBA in Supply Chain Management and a Master’s in International Logistics, Materials, and Supply Chain Management from the University of Essex, she brings expertise in strategic, planning, procurement, and operational efficiency to drive business performance. Sabahat has a passion for solving complex supply chain challenges, improving workflows, and delivering cost-effective solutions. Her experience spans end-to-end supply chain management, ensuring projects are completed on time and within budget. As a Graduate Member of CILT, she is committed to continuous professional development and staying ahead of industry trends. Sabahat is also Ginjo’s Focal Point for the UK Green Building Council (UKGBC), where she works to advance sustainability initiatives and green building practices. Outside of work, she enjoys retail therapy and exploring new places, always seeking fresh experiences and inspiration.",
      role: "Operations Manager",
      image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/sabahat-1.jpg',
    },
    
    {
      id: 'Mrunali Ghumare',
      name: "Mrunali Ghumare",
      bio:"Mrunali is a skilled Junior Quantity Surveyor at Ginjo, supporting our commercial delivery teams with cost management, contract administration, and risk assessment across projects. With a background in civil engineering and quantity surveying, Mrunali has contributed to major infrastructure schemes, including the record-setting 39.69 km bitumen laying project and the ₹4.56 billion National Highway programme in India. Educated at Heriot-Watt University and Savitribai Phule University, she brings both technical capability and hands-on project experience. Her additional experience in the UK hospitality sector has strengthened her adaptability, cross-cultural communication, and problem-solving skills, ensuring she delivers value-driven solutions with efficiency and attention to detail. Mrunali is passionate about professional development and continuous learning, always looking to enhance her skills and support Ginjo’s commitment to commercial excellence. Outside of work, she enjoys exploring London, experimenting in the kitchen, and embracing different cultures.",
      role: "Jr. Quantity Surveyor",
      image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/fe54640e-78e5-4aff-90f8-2cb87b24433a-e1761904596669.jpg',
    },
    {
      id: 'Owais Khatib',
      name: "Owais Khatib",
      bio:"Owais is a Graduate Quantity Surveyor at Ginjo, supporting our commercial teams with cost planning, contract administration, and value management across residential and infrastructure projects. He holds an MSc in Quantity Surveying from Nottingham Trent University and a Bachelor of Architecture from the Narsee Monjee Institute of Management Studies. With this dual background in architecture and surveying, Owais brings both design awareness and commercial insight to his role. Before joining Ginjo, he worked on a range of projects including high-rise residential developments and bespoke bungalows, gaining valuable experience in project delivery and cost management. Uniquely, Owais also pursued a professional career in football, where he developed discipline, teamwork, and resilience, qualities he now applies to his career in construction. Dedicated to continuous growth, Owais is passionate about enhancing his technical expertise and contributing to Ginjo’s commitment to delivering commercially sound, client-focused outcomes. Outside of work, he enjoys exploring new places, staying active, and bringing a competitive edge to everything he does",
      role: "Graduate Quantity Surveyor",
      image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Untitled-design-1.jpg',
    },
    // {
    //   id: 'Jonathan Maisey',
    //   name: "Jonathan Maisey",
    //   role: "Quantity Surveyor",
    //   image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/Image-23-2-e1762605184760.jpg',
    // },
    {
      id: 'Tehreem Rubab',
      name: "Tehreem Rubab",
      role: "Marketing Assistant",
      image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/Image-14-scaled-e1762605149872.jpg',
    },
    {
      id: 'Ellen Tilles',
      name: "Ellen Tilles",
      quote:'Commercial problems do not scare me. Unlabelled spreadsheets do. Luckily I can fix both.',
      role: "Marketing Assistant",
      bio:`I am a Construction Commercial and Claims Manager with more than twelve years of experience supporting large and complex projects across the UK and Europe. My background spans commercial management, contract negotiation, procurement, forensic quantum analysis and claims management, with a strong focus on ensuring that projects remain commercially protected, contractually compliant and financially controlled.

I began my career in project accounting, where I developed a deep understanding of cost structures, reporting mechanisms and financial governance. This foundation shaped the way I work today. Accuracy, commercial clarity and disciplined reporting remain central to my approach. As my career progressed, I moved into procurement, subcontract management and commercial leadership roles across major contractors and specialist engineering organisations. These positions strengthened my understanding of how commercial decisions influence delivery and how early intervention prevents disputes and protects margin.

Over the years, I have managed commercial teams, governed frameworks, led tender and estimating functions and overseen multimillion pound subcontract negotiations. I have supported both contractors and client organisations with commercial strategy, change management, claims preparation and dispute resolution under JCT and NEC forms. My academic and professional training is diverse, with qualifications spanning civil engineering, financial management, commercial and construction law, expert witness practice and international languages. This mix allows me to approach commercial issues from multiple perspectives and communicate confidently with stakeholders at every level.

I continue to work closely with project teams to strengthen commercial governance, improve reporting accuracy and support the successful resolution of complex claims. My focus remains consistent. To bring structure, clarity and dependable expertise to every commercial environment I work in and to support organisations with guidance that is informed, practical and rooted in both experience and evidence.
`,
highlight: [
  {
    year: "2025 – Present",
    role: `Senior Commercial and Claims Manager, Ginjo Construction
Joined Ginjo in 2025, bringing extensive experience in commercial management, claims, procurement and dispute resolution. Supports clients with structured commercial governance, claims preparation, contract strategy and advisory services across NEC, JCT and FIDIC environments.
`,
  },
  {
    year: "2024 – 2025",
    role: `Senior Commercial Manager, Octavius
Led commercial oversight on the SID E and P Framework, delivering estimates, tender reviews, change control management and monthly CVRs.
`,
  },
  {
    year: "2018 – 2024",
    role: `Head of Commercial and Estimating, AM1 Projects
Directed all commercial activity from tender through completion. Strengthened project margins, led bid submissions and managed subcontractor negotiations and performance.
`,
  },
  {
    year: "2018",
    role: `Senior Commercial Manager, Enable Infrastructure
Provided commercial governance across major Southeast frameworks, ensuring compliance, subcontract agreement management and financial control.
`,
  },
  {
    year: "2016 – 2018",
    role: `Commercial and Procurement Manager, LB Foster Europe
Managed procurement and estimating functions, improved commercial reporting and developed supplier frameworks for stronger financial governance.

`,
  },
  {
    year: "2015 – 2016",
    role: `Senior Subcontract Buyer, NG Bailey
Oversaw procurement of high value subcontract packages and supported preconstruction commercial processes and negotiation.

`,
  },
  {
    year: "2013 – 2015",
    role: `Subcontract Buyer, VVB Engineering
Procured subcontract packages and materials for UK engineering projects. Supported estimating teams and monitored supplier performance.
`,
  },
  {
    year: "2008 – 2013",
    role:  `Project Accountant, NBM Projects
Managed financial reporting, performance analysis and project accounting across multiple construction programmes.`,
  },
]
,
      image: '/team/ellen.jpg',
    },
    {
      id: 'Jonathan Maisey',
      quote:'Give me a contract, a spreadsheet and a complicated variation and I am in my element.',
      name: "Jonathan Maisey",
      role: "Senior Quantity Surveyor",
      bio:`I am a Senior Quantity Surveyor with more than ten years of experience delivering commercial management, cost control and contract administration on major infrastructure and building projects across the UK and internationally. After completing my degree in Quantity Surveying and qualifying as a Chartered Surveyor, I built a strong technical foundation that continues to shape the structured and analytical approach I bring to every project.

My career has centred on complex NEC, FIDIC and JCT environments where clarity, evidence and early intervention are essential. I have delivered commercial strategy, managed variations and claims, led procurement exercises and guided risk management on multi million pound programmes in both domestic and international settings. This range of experience has strengthened my understanding of how commercial standards vary across regions and how to protect client value in different delivery cultures.

Since joining Ginjo in 2025, I have taken responsibility for commercial management on high value energy and industrial programmes. I have implemented digital cost dashboards that improve forecasting accuracy and mentored junior surveyors to strengthen consistency within our commercial processes. My focus is to deliver clear and defensible commercial positions and to support clients with structured, practical guidance rooted in both contract knowledge and real project experience.
`,
      highlight: [
  {
    year: "2025 – Present",
    role: `Senior Quantity Surveyor, Ginjo Construction
Leading commercial management on major programmes, administering NEC4 contracts, negotiating compensation events, improving forecasting through digital reporting and mentoring the QS team.

`,
  },
  {
    year: "2015 – 2020",
    role: `Quantity Surveyor, Arcadia Engineering
Managed FIDIC Red Book projects, delivered accurate valuations, led cost risk workshops and negotiated high value variations and subcontract agreements.
`,
  },
  {
    year: "2012 – 2015",
    role: `Assistant Quantity Surveyor, BuildTech Solutions
Supported JCT Design and Build projects, contributed to procurement savings, handled valuations and assisted in final account close out.
`,
 },
  
],
      image: 'https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/11/Image-23-2-e1762605184760.jpg',
    },
    {
      id: 'EVE CHIN',
      quote:'I like making things clear. If the numbers or the contract story do not make sense, I will keep working until they do.',
      name: "EVE CHIN",
      role: "Quantity Surveyor Cost Assurance and Verification Analyst",
      highlight: [
  {
    year: "2025 – Present",
    role: `Quantity Surveyor, Ginjo Construction
Supporting commercial management across UK infrastructure and rail programmes with a focus on NEC processes, cost assurance and structured reporting.

`,
  },
  {
    year: "2024 – 2025",
    role: `Cost Assurance and Verification Analyst, Turner and Townsend
Delivered defined cost audits and contractual compliance reviews for the Thames Tideway Tunnel programme, including subcontract, people cost and asset management verification.

`,
  },
  {
    year: "2021 – 2023",
    role: `Quantity Surveyor, J. Murphy and Sons
Commercial lead on multiple Network Rail CP6 earthworks and structures packages. Managed NEC3 change processes, valuations, forecasting and subcontract accounts.

`,
 },
  {
    year: "2020 – 2021",
    role: `Assistant Quantity Surveyor, J. Murphy and Sons
Supported NEC3 processes, subcontract administration, change management and commercial reporting across CP6 earthworks portfolios.`,
 },
  {
    year: "2018 – 2020",
    role: `Graduate Quantity Surveyor, J. Murphy and Sons
Worked across CP6 and London Overground Access For All schemes, assisting with valuations, tendering and subcontract packages.`,
 },
  {
    year: "2016",
    role: `Placement Quantity Surveyor, J. Murphy and Sons
Assisted with tender procurement, re measurement, RFIs and commercial meetings.`,
 },
  {
    year: "2015",
    role: `Quantity Survey Summer Trainee, Globinaco (Malaysia)
Gained experience in site based measurement, subcontract claim reviews and project cost minimisation.`,
 },
  
],
      image: '/team/eve.jpg',
    },
    {
      id: 'MANU NAIR',
      quote:"I like solving commercial problems before they become commercial dramas.",
      name: "MANU NAIR",
      role: "Senior Quantity Surveyor Commercial Lead",
      highlight: [
  {
    year: "Jan 2026 – Present",
    role: "Senior Quantity Surveyor, Ginjo Construction — Supporting commercial leadership across major infrastructure and rail programmes. Responsibilities include NEC administration, subcontract management, change control and structured commercial reporting.",
  },
  {
    year: "2024 – Present",
    role: "Project Commercial Lead, FC Civils Solutions (Ferrovial Group) — Full commercial responsibility for the Edgcote Viaduct works on HS2, leading NEC3 subcontract administration, change and claim assessments, procurement, commercial reporting and strategic planning.",
  },
  {
    year: "2022 – 2024",
    role: "Senior Quantity Surveyor, John Sisk and Sons — Commercial lead on the Arlesey Relief Road and associated structures, plus oversight of station entrance and bridge schemes. Managed procurement, valuations, forecasting and NEC4 change control.",
  },
  {
    year: "2018 – 2022",
    role: "Quantity Surveyor, VolkerFitzpatrick — Delivered commercial management on rail station enhancements and CP5 earthworks schemes, including NEC3 administration, valuations and change processes.",
  },
  {
    year: "2013 – 2018",
    role: "Quantity Surveyor, Dutco Balfour Beatty, Dubai — Managed commercial delivery across major infrastructure, bridge and roadwork programmes for RTA and Emaar.",
  },
  {
    year: "2008 – 2012",
    role: "Early Career and Studies — Completed B.Tech in Civil Engineering followed by MSc in Quantity Surveying at Heriot Watt University.",
  }
]
,
      image: '/team/manu.jpg',
    },
    {
      id: 'JUAN CHAUX',
      quote:"Great estimates are not guesses. They are stories told with data, logic and commercial discipline.",
      name: "JUAN CHAUX",
      role: "Head of Estimating EPC, Nuclear and Critical Infrastructure Specialist",
      highlight: [
  {
    year: "January 2026 – Present",
    role: "Head of Estimating, Ginjo Construction — Leading estimating strategy across EPC, nuclear, infrastructure and international projects. Developing pricing models, governance processes and competitive bid frameworks.",
  },
  {
    year: "2023 – Present",
    role: "Head of Estimating, Amentum — Responsible for estimating across nuclear, defence, decommissioning and energy sectors. Developed estimating policy, approved all bids and led a team of more than twenty-five estimators nationally and internationally.",
  },
  {
    year: "2020 – 2023",
    role: "Senior Lead Estimator, Costain Group — Led a large estimating team on EDF’s nuclear framework, managing workload, compliance and strategic pricing for major programmes.",
  },
  {
    year: "2019 – 2020",
    role: "Senior Estimator, SPIE Facilities Services — Prepared costings for MEP, HVAC and fire systems. Managed suppliers, pricing risk and multi-sector bid submissions.",
  },
  {
    year: "2017 – 2019",
    role: "Hard Services Estimator, ISS UK — Delivered multimillion-pound FM bids, analysed asset needs and negotiated subcontract packages for major service contracts.",
  },
  {
    year: "2016 – 2017",
    role: "Senior Estimator & Lead Project Manager, Bouygues E&S — Managed bids up to £500m across energy, highways and LED infrastructure. Developed detailed cost models and advised on pricing risk.",
  },
  {
    year: "2016",
    role: "FM Hard Services Consultant, Imtech Inviron — Supported major FM contract wins through labour loading, asset coding and rapid-turnaround cost solutions.",
  },
  {
    year: "2014 – 2016",
    role: "Senior Estimator, Amey — Produced large-scale pricing models and advised on commercial, TUPE and risk requirements for complex bids.",
  },
  {
    year: "2012 – 2014",
    role: "Business Consultant, BJ Contractors — Provided commercial and estimating consultancy to specialist carpentry contractors.",
  },
  {
    year: "2006 – 2012",
    role: "Commercial Manager & Senior QS, LJ Construction — Led commercial operations for one of the largest carpentry contractors in the Midlands.",
  }
]
,
      image: '/team/juan.jpg',
    },
    
  ];


  const member = teamMembers.find(m => m.id === id);

  if (!member) {
    return <div>Loading...</div>;
  }

  return (
    <main className="lg:mx-10 bg-white min-h-screen">

          <header className="bg-[#bac6c7] -mb-20 text-white rounded-b-2xl pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">{member.name}</h1>
          <p className="max-w-3xl mt-4 text-sm md:text-base leading-relaxed text-white/90">
            {member.role}
          </p>
        </div>
      </header>
      <div className="-mt-10 py-16">
        <div className="bg-white rounded-t-2xl -mt-10 p-8 ">
         
<section className="w-full bg-white">
      {/* hidden registration of uploaded asset (some environments need this) */}
      <img src={member.image} alt="registered" className="hidden" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT: beige quote panel */}
          <div className="bg-[#f2efe8] p-10 md:p-16 lg:p-20 rounded-tr-3xl rounded-br-3xl flex items-center">
            <div className="max-w-xl">
              {/* large quote marks */}
              <div className="text-7xl md:text-8xl font-bold text-[#2b2b2b] leading-none mb-6">“</div>

              {/* quote text */}
              <blockquote className="text-lg md:text-xl text-[#0f1724] leading-relaxed">
                {member.quote}
              </blockquote>
            </div>
          </div>

          {/* RIGHT: portrait image */}
          <div className="w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>


        </div>
      </div>
       <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">

        {/* LEFT SIDE — TEXT */}
        <div>
          <h2 className="text-2xl font-bold leading-snug text-[#1a1a1a] mb-6">
           {member.name}
          </h2>

          <p className="text-[17px] leading-7 text-gray-700 mb-4">
           {member.bio}
          </p>

          {/* <p className="text-[17px] leading-7 text-gray-700 mb-4">
            I contribute to a number of industry groups and currently act as an
            industry advisory to the Construction Leadership Council. In recognition
            for my expertise and understanding of the global construction industry,
            I've twice been named Building magazine’s CEO of the year.
          </p>

          <p className="text-[17px] leading-7 text-gray-700 mb-4">
            I became Managing Director of our UK <span className="underline cursor-pointer">cost management</span> business in 2000
            and given responsibility in 2005 for driving our international business.
            I was appointed CEO in 2008, which was combined with the Chairman's role
            in 2015.
          </p>

          <p className="text-[17px] leading-7 text-gray-700">
            During my period as CEO, our business has grown significantly, and we
            now employ over 22,000 people across more than 60 countries.
          </p> */}
        </div>

        {/* RIGHT SIDE — CAREER HIGHLIGHTS */}
        {/* <div>
          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">
            Career highlights
          </h3>

          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <span className="w-3 h-3 bg-blue-600 rounded-full mt-2"></span>
              <div>
                <p className="font-semibold text-gray-900">Appointed Chairman and CEO</p>
                <p className="text-gray-700 text-[16px]">2015</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-3 h-3 bg-blue-600 rounded-full mt-2"></span>
              <div>
                <p className="font-semibold text-gray-900">Appointed CEO</p>
                <p className="text-gray-700 text-[16px]">2008</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-3 h-3 bg-blue-600 rounded-full mt-2"></span>
              <div>
                <p className="font-semibold text-gray-900">
                  Appointed to the Executive Board
                </p>
                <p className="text-gray-700 text-[16px]">2002</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-3 h-3 bg-blue-600 rounded-full mt-2"></span>
              <div>
                <p className="font-semibold text-gray-900">
                  Appointed MD of UK Cost Management
                </p>
                <p className="text-gray-700 text-[16px]">2000</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="w-3 h-3 bg-blue-600 rounded-full mt-2"></span>
              <div>
                <p className="font-semibold text-gray-900">
                  Joined Turner & Townsend after graduating
                </p>
                <p className="text-gray-700 text-[16px]">1989</p>
              </div>
            </li>
          </ul>
        </div> */}
        <div>
  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">
    Career highlights
  </h3>

  <ul className="space-y-6">
    {member.highlight?.map((item, idx) => (
      <li key={idx} className="flex items-start gap-3">
        <span className="w-3 h-3 bg-blue-600 rounded-full mt-2"></span>
        <div>
          <p className="font-semibold text-gray-900">{item.role}</p>
          <p className="text-gray-700 text-[16px]">{item.year}</p>
        </div>
      </li>
    ))}
  </ul>
</div>


      </div>
    </section>





     <section className="w-full bg-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[#0f172a] mb-6">
          {member.name}
        </h2>

        <div className="text-left">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0f172a]">
            {member.name}
          </h3>

          <p className="whitespace-pre-line text-sm md:text-base text-gray-600 mt-2 mb-4">
            {member.title}
          </p>

          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <a
              href={member.email}
              className="inline-flex items-center text-sm md:text-base font-medium text-[#0b5ea6] hover:underline"
              aria-label={`Email ${member.email}`}
            >
              {/* mail icon */}
              <svg className="w-5 h-5 mr-2 flex-none" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 7.5v9A2.5 2.5 0 0 0 5.5 19h13A2.5 2.5 0 0 0 21 16.5v-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 7.5l-9 6-9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Email
            </a>

            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm md:text-base font-medium text-[#0b5ea6] hover:underline"
              aria-label={`${member.name} on LinkedIn`}
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
