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
            {member.bio}
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
                We are committed to a green, inclusive and productive world ensuring our people,
                communities and environment are at the heart of every decision we make.
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
            I've been CEO of Turner & Townsend since 2008. During that period,
            I've driven the diversification of the business globally and built
            its reputation as an industry leader in delivering complex
            programmes around the world.
          </h2>

          <p className="text-[17px] leading-7 text-gray-700 mb-4">
            After graduating with a degree in construction economics and qualifying
            as a chartered quantity surveyor, I joined the business in 1989. I’ve
            in-depth experience of the set-up, procurement and delivery of some of
            the industry’s most complex major programmes, across real estate,
            infrastructure, energy and natural resources.
          </p>

          <p className="text-[17px] leading-7 text-gray-700 mb-4">
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
          </p>
        </div>

        {/* RIGHT SIDE — CAREER HIGHLIGHTS */}
        <div>
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
