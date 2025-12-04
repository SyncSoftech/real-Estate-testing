// File: pages/careers/[id].js
import { useRouter } from 'next/router';
import Link from 'next/link';

// Sample job data - in a real app, this would come from an API or database
const jobs = [
  {
    id: 1,
    title: "Senior Quantity Surveyor – Heathrow Airport (Aviation Programme)",
    country: "United Kingdom",
    city: "London (Heathrow)",
    contractType: "Full-time",
    experience: "Senior",
    about:
      "We are seeking a Senior Quantity Surveyor to support a major aviation programme at Heathrow Airport. Work within a high-performance commercial team delivering cost certainty, change control, and contract compliance across airside and landside projects.",
    whatYouDo: [
      "Lead commercial management across live construction packages (JCT & NEC).",
      "Manage cost reporting, forecasting, and value tracking for multiple workstreams.",
      "Drive rigorous variation and change control, ensuring risks are captured and priced.",
      "Support procurement, tender analysis, and contract award recommendations.",
      "Maintain strong relationships with Heathrow’s commercial and engineering teams.",
      "Provide early warnings, commercial advice, and contractual interpretation guidance.",
    ],
    whatYouBring: [
      "Experience delivering commercial management on aviation or complex infrastructure projects.",
      "Strong command of NEC3/NEC4 and JCT contract forms.",
      "Ability to work in high-security, stakeholder-intensive environments.",
      "Excellent communication and negotiation skills.",
      "RICS qualification (or working toward it) is desirable.",
    ],
  },

  {
    id: 2,
    title: "Commercial Manager – UK Rail Programme (CP6/CP7)",
    country: "United Kingdom",
    city: "Birmingham or London",
    contractType: "Full-time",
    experience: "Manager",
    about:
      "We are hiring a Commercial Manager to support major UK rail works including station upgrades, civils packages, signalling interfaces, and multi-disciplinary enhancements.",
    whatYouDo: [
      "Oversee commercial performance across multi-disciplinary rail projects under NEC.",
      "Lead contract administration, compensation events, and programme-driven valuations.",
      "Develop commercial strategies to maximise value and minimise risk.",
      "Manage monthly reporting, forecasts, and cost control.",
      "Support procurement, supply chain evaluation, and award processes.",
      "Act as a key commercial advisor to engineering and delivery teams.",
    ],
    whatYouBring: [
      "Experience in UK rail (NR, HS2, TOC, DfT, or major frameworks).",
      "Strong understanding of NEC contract mechanisms and programme requirements.",
      "Skilled in negotiation, stakeholder engagement, and commercial governance.",
      "Track record delivering cost management on complex infrastructure schemes.",
      "Degree in Quantity Surveying or Commercial Management.",
    ],
  },

  {
    id: 3,
    title: "MEP Quantity Surveyor – EPC Project",
    country: "Sweden",
    city: "Stockholm",
    contractType: "Full-time",
    experience: "Intermediate–Senior",
    about:
      "Seeking an MEP Quantity Surveyor for a major EPC programme in Stockholm. Support cost control, change management, and subcontract administration across mechanical, electrical, and piping systems.",
    whatYouDo: [
      "Manage commercial tasks for MEP packages across procurement and delivery.",
      "Perform detailed quantity take-offs (MTOs), valuations, and progress assessments.",
      "Lead change control and maintain variation logs with complete audit trails.",
      "Support subcontract negotiation, tender analysis, and contract execution.",
      "Collaborate with engineering and installation teams on forecasting.",
      "Provide regular reporting to EPC leadership and client stakeholders.",
    ],
    whatYouBring: [
      "Experience in MEP cost management on EPC, data centre, or industrial projects.",
      "Knowledge of FIDIC, NEC, or EPC contractual structures.",
      "Competency in MTO development and progress measurement.",
      "Ability to work in a fast-paced, high-coordination environment.",
      "Relevant QS or Engineering degree.",
    ],
  },

  {
    id: 4,
    title: "Senior Quantity Surveyor – Industrial/Data Centre Programme",
    country: "Finland",
    city: "Helsinki",
    contractType: "Full-time",
    experience: "Senior",
    about:
      "We are recruiting a Senior QS for a high-value industrial and data-centre construction programme in Finland. Full cost management oversight, change analysis, and contract governance.",
    whatYouDo: [
      "Lead commercial operations across core & shell, civils, and services packages.",
      "Implement robust cost tracking systems for high-spec industrial works.",
      "Manage variations, claims, and commercial risk registers.",
      "Contribute to procurement strategies and negotiate subcontract agreements.",
      "Provide commercial governance throughout construction and commissioning.",
      "Interface with international stakeholders to ensure alignment on obligations.",
    ],
    whatYouBring: [
      "Experience on data-centre, semiconductor, or complex industrial builds.",
      "Strong understanding of EPCM, FIDIC Red/Yellow Book, and international contracts.",
      "Excellent cost analysis and reporting capabilities.",
      "Ability to work internationally and adapt to local regulations.",
      "Degree qualified with strong commercial leadership experience.",
    ],
  },

  {
    id: 5,
    title: "Commercial Manager – Pharmaceutical & Biotech Programme",
    country: "Denmark",
    city: "Copenhagen",
    contractType: "Full-time",
    experience: "Manager",
    about:
      "Commercial Manager required for a complex pharmaceutical/biotech construction programme in Denmark. Requires strong cost control and contractual governance.",
    whatYouDo: [
      "Manage commercial performance across cleanrooms, MEP systems, and process installations.",
      "Oversee cost reporting, budget alignment, and forecasting.",
      "Lead change management and claims preparation under FIDIC or EPCM contracts.",
      "Support procurement and negotiate with international supply chains.",
      "Maintain strong communication with client-side commercial and project teams.",
      "Provide guidance on payment applications, variations, and contractual positions.",
    ],
    whatYouBring: [
      "Background in pharmaceutical, biotech, or life-science construction.",
      "Knowledge of FIDIC, EPC, or EPCM contract environments.",
      "Strong analytical and contractual interpretation skills.",
      "Comfortable working in regulated, multinational environments.",
      "Degree in QS, Commercial Management, or Engineering.",
    ],
  },
];

export default function JobDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  // Find the job with the matching ID
  const job = jobs.find(job => job.id === parseInt(id));

  // If job not found, show loading or 404
  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Job not found</h1>
          <Link href="/careers" className="text-blue-600 hover:underline">
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className=" min-h-screen mx-10">
  {/* Header */}
  <header className="bg-[#bac6c7] -mb-20 text-Black rounded-b-2xl pb-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-serif font-bold">Careers</h1>
      <p className="max-w-3xl mt-4 text-sm md:text-base leading-relaxed text-Black/90">
        We are always on the lookout for talented individuals to join our team.
      </p>
    </div>
  </header>

  {/* Breadcrumb */}
  <div className="bg-white rounded-t-2xl mx-auto px-6 py-8">
    <nav className="text-sm text-gray-500 flex items-center gap-1">
      <Link href="/" className="hover:underline">Home</Link>
      <span>›</span>
      <Link href="/careers" className="hover:underline">Careers</Link>
      <span>›</span>
      <span className="text-gray-700">{job.title}</span>
    </nav>
  </div>

  {/* Job Details */}
  <div className="max-w-4xl mx-auto px-6 py-8">
    <div className="bg-[#bac6c7] rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{job.title}</h1>

      {/* Location + About */}
      <div className="flex flex-col text-gray-600 mb-6">
        <span className="font-medium">{job.city}, {job.country}</span>
        <p className="mt-2 text-[15px]">{job.about}</p>
      </div>

      <div className="prose max-w-none">
        {/* Responsibilities */}
        {job.whatYouDo && job.whatYouDo.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mt-6 mb-3">What You’ll Do</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              {job.whatYouDo.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {/* Requirements */}
        {job.whatYouBring && job.whatYouBring.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mt-6 mb-3">What You’ll Bring</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              {job.whatYouBring.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {/* Buttons */}
        <div className="mt-8 pt-6 border-t border-gray-600">
          <button className=" px-6 py-3 rounded-md border-2 transition-colors">
            Apply Now
          </button>
          <Link 
            href="/careers" 
            className="ml-4 px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Back to Careers
          </Link>
        </div>
      </div>
    </div>
  </div>
</main>

  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on jobs
  const paths = jobs.map((job) => ({
    params: { id: job.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the job `id`.
  // If the route is like /jobs/1, then params.id is 1
  const job = jobs.find(job => job.id === parseInt(params.id));

  // Pass job data to the page via props
  return { props: { job } };
}