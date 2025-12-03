// File: pages/careers/[id].js
import { useRouter } from 'next/router';
import Link from 'next/link';

// Sample job data - in a real app, this would come from an API or database
const jobs = [
  { 
    id: 1, 
    title: "Senior Cost Manager - Data Centre", 
    discipline: "Real estate", 
    country: "Australia", 
    city: "Sydney",
    description: "We are seeking an experienced Senior Cost Manager to join our Data Centre team in Sydney. The ideal candidate will have 5+ years of experience in cost management and a strong background in data center projects.",
    responsibilities: [
      "Manage cost planning and estimating for data center projects",
      "Prepare and monitor project budgets",
      "Conduct cost risk analysis and value engineering",
      "Liaise with clients and stakeholders"
    ],
    requirements: [
      "Bachelor's degree in Quantity Surveying, Construction Management, or related field",
      "5+ years of experience in cost management",
      "Experience with data center projects preferred",
      "Strong communication and leadership skills"
    ]
  },
  { 
    id: 2, 
    title: "Cost Manager", 
    discipline: "Real estate", 
    country: "Australia", 
    city: "Sydney",
    description: "We are looking for a Cost Manager to join our team in Sydney. The successful candidate will be responsible for managing all cost-related aspects of construction projects.",
    responsibilities: [
      "Prepare cost estimates and budgets",
      "Monitor project costs and report on financial performance",
      "Conduct feasibility studies",
      "Manage tender processes"
    ],
    requirements: [
      "Degree in Quantity Surveying or related field",
      "3+ years of experience in cost management",
      "Strong analytical and numerical skills",
      "Excellent communication skills"
    ]
  },
  // Add other jobs from your index.js file
  { 
    id: 3, 
    title: "Senior Cost Manager - Education", 
    discipline: "Real estate", 
    country: "Australia", 
    city: "Sydney",
    description: "Join our education sector team as a Senior Cost Manager.",
    responsibilities: [],
    requirements: []
  },
  // Add more jobs as needed
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
    <main className="bg-white min-h-screen mx-10">
      {/* Header */}
          <header className="bg-[#bac6c7] -mb-20 text-Black rounded-b-2xl pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Careers</h1>
          <p className="max-w-3xl mt-4 text-sm md:text-base leading-relaxed text-Black/90">
            We are always on the lookout for talented individuals to join our team. If you have a passion for real estate and a desire to make a difference, we encourage you to apply for a position.
          </p>
        </div>
      </header>
      <div className=" bg-white rounded-t-2xl mx-auto px-6 py-8">
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
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{job.title}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span className="mr-4">{job.city}, {job.country}</span>
            <span>{job.discipline}</span>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mt-6 mb-3">Job Description</h2>
            <p className="mb-6">{job.description}</p>

            {job.responsibilities && job.responsibilities.length > 0 && (
              <>
                <h2 className="text-xl font-semibold mt-6 mb-3">Key Responsibilities</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  {job.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {job.requirements && job.requirements.length > 0 && (
              <>
                <h2 className="text-xl font-semibold mt-6 mb-3">Requirements</h2>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  {job.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-8 pt-6 border-t border-gray-200">
              <button className="bg-[#163c72] text-white px-6 py-3 rounded-md hover:bg-[#0d2a4a] transition-colors">
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