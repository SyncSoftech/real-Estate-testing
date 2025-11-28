// pages/case-studies/[id].js
import Link from "next/link";
import { useRouter } from "next/router";

const IMAGE_URL = "/mnt/data/02cae41e-0479-42cc-9c44-06e6f19dbfca.png";

const DATA = {
  pageTitle: "Case Studies",
  caseStudies: [
    {
      id: 1,
      title: "Fujifilm Diosynth Biotechnologies – Copenhagen, Denmark",
      client: "Fluor",
      value: "£2.0 billion",
      description:
        "Ginjo provided procurement and contract management services on behalf of Fluor for the construction of a major biotechnology facility. Our expertise supported strategic delivery and risk mitigation at scale.",
      linkLabel: "See Case Study",
      minutes: 5,
      image: IMAGE_URL,
    },
    {
      id: 2,
      title: "HS2 Phase 1 - London, United Kingdom",
      client: "HS2",
      value: "Multi-Billion",
      description:
        "As a commercial consultancy within the Engineering Delivery Partner Framework, Ginjo played a key role in managing costs and contract performance for one of the UK’s most complex infrastructure programmes.",
      linkLabel: "See Case Study",
      minutes: 6,
      image: IMAGE_URL,
    },
    {
      id: 3,
      title: "STEGRA EPC Project - Stockholm, Sweden",
      client: "ÅF RY Industry AB",
      value: "£3.5 billion",
      description:
        "Ginjo supported AFRY with commercial oversight and design coordination on a large-scale engineering and manufacturing facility. This included end-to-end cost strategies and international collaboration.",
      linkLabel: "See Case Study",
      minutes: 7,
      image: IMAGE_URL,
    },
    {
      id: 4,
      title: "Carmelita House – Richmond, United Kingdom",
      client: "Storm Building / ÅF RY Industry AB",
      value: "£2.8 million",
      description:
        "Ginjo provided full commercial management consultancy, including preparation of Bills of Quantities, to support project delivery and cost transparency for this residential redevelopment.",
      linkLabel: "See Case Study",
      minutes: 4,
      image: IMAGE_URL,
    },
    {
      id: 5,
      title: "Heathrow T5 - EV Charging Infrastructure",
      client: "Heathrow",
      value: "Confidential",
      description:
        "Ginjo supported British Airways in the commercial planning and tender stage of their EV infrastructure rollout at Terminal 5, providing risk-managed pricing strategies and a tailored variation control system aligned to Heathrow’s governance requirements.",
      linkLabel: "See Case Study",
      minutes: 3,
      image: IMAGE_URL,
    },
    {
      id: 6,
      title: "Electrical Upgrade - Legacy Office Blocks, UK",
      client: "Confidential",
      value: "Confidential",
      description:
        "An electrical subcontractor carrying out phased upgrades in older office buildings faced frequent design shifts and slow payments. Ginjo provided contract guidance, payment workflows, and structured variation submissions. This reduced valuation disputes, shortened the payment cycle by 21 days, and helped the subcontractor build stronger relationships with their main contractor for future work.",
      linkLabel: "See Case Study",
      minutes: 4,
      image: IMAGE_URL,
    },
    {
      id: 7,
      title: "HVAC Ducting – Central London Commercial Scheme",
      client: "HVAC Subcontractor",
      value: "£1.6M (est.)",
      description:
        "With ongoing layout revisions, our variation memory tool and resource-linked claims process ensured 87% of changes were approved on first submission – safeguarding cash flow and preventing scope creep.",
      linkLabel: "See Case Study",
      minutes: 3,
      image: IMAGE_URL,
    },
    {
      id: 8,
      title: "Passive Fire Protection - Essex Housing Block",
      client: "Confidential",
      value: "Confidential",
      description:
        "We implemented a structured variation process with dashboard-based reporting, enabling fast approvals, better documentation, and a 92% variation recovery rate, helping the subcontractor maintain profitability and credibility with the client.",
      linkLabel: "See Case Study",
      minutes: 3,
      image: IMAGE_URL,
    },
    {
      id: 9,
      title: "Groundworks - Midlands Mixed-Use Scheme",
      client: "Groundworks Subcontractor",
      value: "£1.2M (est.)",
      description:
        "A Midlands-based groundworks firm engaged Ginjo after early signs of commercial exposure on a fast-moving mixed-use development. With structured evidence and daily site logs, all costed variations were submitted on time, and their final account was approved in full with no deductions.",
      linkLabel: "See Case Study",
      minutes: 4,
      image: IMAGE_URL,
    },
  ],
};

export default function CaseStudyPage({ caseStudy, related = [] }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className="p-12 text-center">
        <p className="text-lg">Loading case study…</p>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <main className="mx-10 py-12">
        <p>Case study not found.</p>
        <Link href="/case-studies">
          <span className="text-[#163c72] underline">Back to case studies</span>
        </Link>
      </main>
    );
  }

  return (
    <>
      <main className="mx-10 bg-white">
        <header className="bg-[#163c72] -mb-12 text-white rounded-b-2xl overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold">
              {DATA.pageTitle}
            </h1>
            <p className="max-w-3xl mt-4 text-sm md:text-base leading-relaxed text-white/90">
              Case study — {caseStudy.title}
            </p>
          </div>
        </header>

        <div className="bg-white rounded-t-2xl mx-auto px-6 py-8">
          <nav className="text-sm text-gray-600 mb-6">
            <Link href="/">
              <span className="hover:underline text-[#0f4b7f]">Home</span>
            </Link>
            <span className="mx-2">›</span>
            <Link href="/case-studies">
              <span className="hover:underline text-[#0f4b7f]">Case Studies</span>
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-700">{caseStudy.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <article className="lg:col-span-2 bg-[#f2ebe3] rounded-2xl overflow-hidden p-6 md:p-8">
              <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                <img
                  src={caseStudy.image || IMAGE_URL}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-serif text-3xl font-bold mb-4">{caseStudy.title}</h2>

              <p className="text-gray-700 mb-4 leading-relaxed">{caseStudy.description}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                {caseStudy.client && (
                  <div className="text-sm text-gray-600">
                    <strong>Client:</strong> {caseStudy.client}
                  </div>
                )}
                {caseStudy.value && (
                  <div className="text-sm text-gray-600">
                    <strong>Value:</strong> {caseStudy.value}
                  </div>
                )}
                <div className="text-sm text-gray-600">
                  <strong>Time to read:</strong> {caseStudy.minutes ?? 3} minutes
                </div>
              </div>

              {/* Example section — you can replace with full case study content */}
              <section className="mb-6">
                <h3 className="font-semibold mb-2">Overview</h3>
                <p className="text-gray-700 leading-relaxed">
                  This page is a template for a full case study. Replace this paragraph with the full project narrative,
                  outcomes, and any images, PDFs or downloadable assets you wish to include.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="font-semibold mb-2">Key outcomes</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Commercial management and variation control</li>
                  <li>Risk mitigation and procurement support</li>
                  <li>Improved payment workflows and dispute reduction</li>
                </ul>
              </section>

              <div className="mt-8 flex gap-3">
                <Link href="/case-studies">
                  <span className="text-sm text-[#163c72] underline">Back to case studies</span>
                </Link>
                <a
                  href="#"
                  className="bg-black text-white px-4 py-2 rounded-md text-sm hover:opacity-90"
                >
                  Download PDF
                </a>
              </div>
            </article>

            {/* Right column — quick facts & related */}
            <aside className="bg-white rounded-2xl p-6 border shadow-sm">
              <div className="mb-6">
                <h4 className="text-sm text-gray-500">Quick facts</h4>
                <div className="mt-3 text-sm text-gray-700">
                  <div className="mb-2">
                    <strong>Client:</strong> {caseStudy.client ?? "—"}
                  </div>
                  <div className="mb-2">
                    <strong>Project value:</strong> {caseStudy.value ?? "—"}
                  </div>
                  <div>
                    <strong>Read time:</strong> {caseStudy.minutes ?? 3} minutes
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm text-gray-500 mb-3">Related case studies</h4>
                <div className="flex flex-col gap-3">
                  {related.length > 0 ? (
                    related.map((r) => (
                      <Link href={`/case-studies/${r.id}`} key={r.id}>
                        <span className="text-sm text-[#0f1724] underline">{r.title}</span>
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-gray-600">No related case studies</p>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

/**
 * Generate paths for each caseStudy by id.
 * If you prefer runtime rendering, change fallback to 'blocking' or remove SSG.
 */
export async function getStaticPaths() {
  const paths = DATA.caseStudies.map((c) => ({
    params: { id: String(c.id) },
  }));

  return {
    paths,
    fallback: false, // set to true or 'blocking' if you want to support new items at runtime
  };
}

export async function getStaticProps({ params }) {
  const id = Number(params.id);
  const caseStudy = DATA.caseStudies.find((c) => c.id === id) || null;

  // Simple related list: other studies (limit 3)
  const related = DATA.caseStudies.filter((c) => c.id !== id).slice(0, 3);

  return {
    props: {
      caseStudy,
      related,
    },
  };
}
