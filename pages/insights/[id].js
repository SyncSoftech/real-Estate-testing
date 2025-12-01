// pages/insights/[id].js
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

// Sample data - in a real app, this would come from an API or database
const INSIGHTS = [
  {
  id: 1,
  title: "Why Forecasts Miss the Mark (and How to Improve Them)",
  image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg",
  date: "November 24, 2025",
  author: "Rishi",
  category: "Commercial Management",
  content: `
    <h3>The Mirage of Certainty</h3>
    <p>Forecasts are meant to give clarity. Instead, many only provide false comfort. By the time actuals are compared against forecasts, the damage is already done.</p>

    <h3>Where Does It Go Wrong?</h3>
    <ul>
      <li>Forecasts built on outdated assumptions, not live data.</li>
      <li>Variations and prelim overruns excluded until it’s too late.</li>
      <li>Cash flow models not aligned with programme changes.</li>
      <li>Reports updated monthly instead of weekly, hiding risks.</li>
    </ul>

    <h3>The Root Cause</h3>
    <p>Forecasting often becomes a compliance exercise – numbers updated to satisfy reporting, rather than to guide decision-making. Without integration to real-time commercial and delivery data, forecasts are already out of date when they're published.</p>

    <p><strong>Real-world example:</strong><br/>
    On a £75m project, forecasts consistently showed a £1.2m profit. At final account, the job closed at break-even. Why? Variations worth £950k were never built into live forecasts.</p>

    <h3>How to Improve Forecasting</h3>
    <ul>
      <li>Update forecasts weekly, linked to live data.</li>
      <li>Integrate cost, programme, and procurement changes.</li>
      <li>Stress-test assumptions against market benchmarks.</li>
      <li>Present forecasts as decision tools, not just reports.</li>
    </ul>

    <h3>Final Thought</h3>
    <p>Forecasts don’t fail because the numbers are wrong – they fail because they’re stale. Strong forecasting means seeing risk before it hits, not after.</p>

    <p>#Forecasting #CommercialManagement #ConstructionFinance #RiskManagement #GinjoConstruction #QSInsights</p>
  `,
  related: [
    { id: 2, title: "Why Value Engineering Fails (and What to Do Instead)" },
    { id: 3, title: "Cost Planning • Forecasting • Risk Management" }
  ]
},

  {
  id: 2,
  title: "Why Value Engineering Fails (and What to Do Instead)",
  image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg",
  date: "November 17, 2025",
  author: "Rishi",
  category: "Value Delivery",
  content: `
    <h3>The False Saving</h3>
    <p>Value engineering is meant to protect budgets. Too often, it becomes a box-ticking exercise that strips out quality without actually reducing cost.</p>

    <h3>Where Does It Go Wrong?</h3>
    <ul>
      <li>Swapping materials for cheaper alternatives that don’t perform.</li>
      <li>Cutting scope without analysing lifecycle impact.</li>
      <li>Making late-stage changes that drive up prelims and rework.</li>
      <li>Focusing on short-term savings instead of long-term value.</li>
    </ul>

    <h3>The Root Cause</h3>
    <p>Most value engineering exercises are rushed, reactive, and driven purely by cost pressure. Without proper analysis and collaboration, VE becomes cost-cutting, not value creation.</p>

    <p><strong>Real-world example:</strong><br/>
      On a £30m healthcare project, cheaper flooring was selected to “save” £120k.
      Within two years, replacement works cost the client £450k – turning a short-term saving into a long-term loss.
    </p>

    <h3>How to Get It Right</h3>
    <ul>
      <li>Involve all stakeholders early in VE workshops.</li>
      <li>Balance capital cost against lifecycle and maintenance.</li>
      <li>Assess programme impact before approving changes.</li>
      <li>Benchmark options against industry data, not assumptions.</li>
    </ul>

    <h3>Final Thought</h3>
    <p>True value engineering reduces cost without reducing quality. Anything less is just cutting corners – and those corners cost more in the end.</p>

    <p>#ValueEngineering #CommercialManagement #ConstructionFinance #RiskManagement #GinjoConstruction #QSInsights</p>
  `,
  related: [
    { id: 4, title: "Why Procurement Delays Derail Projects" },
    { id: 1, title: "Why Forecasts Miss the Mark (and How to Improve Them)" }
  ]
},
{
  id: 3,
  title: "Why Procurement Delays Derail Projects",
  image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg",
  date: "November 10, 2025",
  author: "Rishi",
  category: "Procurement & Cost Control",
  content: `
    <h3>The Bottleneck Effect</h3>
    <p>
      Projects rarely grind to a halt because of a single catastrophic event. 
      More often, they stumble because procurement runs late – and once it does, 
      the entire programme feels the knock-on effect.
    </p>

    <h3>Where Does It Go Wrong?</h3>
    <ul>
      <li>Tender documents issued later than planned.</li>
      <li>Bid evaluations rushed, missing key risks.</li>
      <li>Long-lead items not identified early enough.</li>
      <li>Contract negotiations dragging on without clear timelines.</li>
    </ul>

    <h3>The Root Cause</h3>
    <p>
      Procurement is often underestimated as an administrative step. 
      In reality, it sets the rhythm for everything else. 
      When procurement slips, design freezes, mobilisation stalls, and delivery teams are left waiting – burning cash and time.
    </p>

    <p><strong>Real-world example:</strong><br/>
      On a £90m project, HVAC equipment procurement was delayed by eight weeks. 
      The delay meant late design coordination, missed commissioning windows, 
      and an additional £1.8m in preliminaries.
    </p>

    <h3>Fast and Smart Procurement</h3>
    <ul>
      <li>Map procurement timelines against the programme from day one.</li>
      <li>Flag and fast-track long-lead items.</li>
      <li>Run structured evaluations to prevent rework later.</li>
      <li>Treat contract negotiation as time-critical, not open-ended.</li>
    </ul>

    <h3>Final Thought</h3>
    <p>
      Procurement isn’t paperwork. It’s the foundation of delivery. 
      Strong procurement discipline protects programmes, margins, and client confidence.
    </p>

    <p>#Procurement #ConstructionFinance #CommercialManagement #ProgrammeControl #GinjoConstruction #QSInsights</p>
  `,
  related: [
    { id: 5, title: "Why Cost Plans Fail (and How to Fix Them)" },
    { id: 2, title: "Why Value Engineering Fails (and What to Do Instead)" }
  ]
},
{
  id: 4,
  title: "Why Final Accounts Drag On (and Drain Profit)",
  image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg",
  date: "October 6, 2025",
  author: "Rishi",
  category: "Commercial Management",
  content: `
    <h3>The Never-Ending Closeout</h3>
    <p>
      Projects don’t always fail during delivery. Sometimes, the damage is done 
      at the finish line, when final accounts drag on for months – or even years. 
      By then, margins are tied up in disputes, cash flow is frozen, and teams 
      have already moved on to new projects.
    </p>

    <h3>Where Does It Go Wrong?</h3>
    <ul>
      <li>Incomplete records from the delivery phase.</li>
      <li>Variations not fully captured or agreed during the job.</li>
      <li>Claims submitted without proper substantiation.</li>
      <li>Clients holding back payment leverage to settle disputes cheaply.</li>
    </ul>

    <h3>The Root Cause</h3>
    <p>
      Final accounts aren’t painful because they’re complex. They’re painful because 
      commercial discipline during delivery was weak. The data isn’t there, the evidence 
      is patchy, and negotiations drag because neither side trusts the numbers.
    </p>

    <p><strong>Real-world example:</strong><br/>
      On a £120m project, the contractor took 18 months to close the final account. 
      £4m in claims were eventually written off – not because they weren’t valid, but 
      because the records to support them simply didn’t exist.
    </p>

    <h3>Proactive Beats Reactive</h3>
    <ul>
      <li>Keep final account logs updated in real time, not after completion.</li>
      <li>Agree variations progressively, not in bulk at the end.</li>
      <li>Audit records throughout delivery so nothing is missing when it matters.</li>
      <li>Treat closeout as a parallel process, not an afterthought.</li>
    </ul>

    <h3>Final Thought</h3>
    <p>
      Final accounts don’t need to drag on. With the right systems, they can be closed 
      quickly, fairly, and profitably. The longer they take, the more profit you lose.
    </p>

    <p>#FinalAccounts #CommercialManagement #ConstructionFinance #DisputeAvoidance #GinjoConstruction #QSInsights</p>
  `,
  related: [
    { id: 6, title: "The Hidden Cost of Poor Supplier Selection" },
    { id: 7, title: "The Overlooked Risk in Payment Terms" }
  ]
}



  // Add more insights as needed
];

function stripTags(html = "") {
  return html.replace(/<\/?[^>]+(>|$)/g, "").replace(/\s+/g, " ").trim();
}

export default function InsightDetail({ insight }) {
  if (!insight) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Insight not found</h1>
          <Link href="/insights" className="text-blue-600 hover:underline">
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  const excerpt = stripTags(insight.content).substring(0, 160) + "...";
  const authorImage = insight.authorImage || "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/1576680123433-1-300x300.jpeg";
  const authorTitle = insight.authorTitle || "Senior Consultant";
  const publishedDate = insight.date || insight.publishedDate || "";

  return (
    <>
      <Head>
        <title>{insight.title} | Insights</title>
        <meta name="description" content={excerpt} />
      </Head>

      <main className="lg:mx-10 bg-white">
        {/* Header */}
        <header className=" -mb-20 py-20 bg-cover bg-center bg-no-repeat  text-white rounded-b-2xl overflow-hidden"style={{
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
      url('https://www.turnerandtownsend.com/media/vxyftgqu/_h3a0079_2560-x-1440px.webp?width=1280&height=512&v=1dadc4c4e844f10')
    `
    
  }}>
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Insights</h1>
            <p className="max-w-3xl mt-4 text-sm md:text-base leading-relaxed text-white/90">
              Expert analysis and thought leadership on the latest trends in real estate and construction.
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="bg-white mt-10 rounded-t-2xl mx-auto px-6 py-8">
          <section className="w-full bg-white text-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
              {/* LEFT SIDEBAR */}
              <aside className="space-y-8">
                {/* Author Card */}
                <div className="border p-6 rounded-md shadow-sm">
                  <img
                    src={authorImage}
                    alt={insight.author}
                    className="w-28 h-28 rounded-full object-cover mx-auto"
                  />

                  <h3 className="mt-4 text-center text-lg font-semibold">{insight.author}</h3>
                  <p className="text-center text-gray-600 text-sm">{authorTitle}</p>

                  {/* <div className="flex justify-center gap-3 mt-4">
                    {/* <span className="w-8 h-8 rounded-full border flex items-center justify-center">in</span>
                    <span className="w-8 h-8 rounded-full border flex items-center justify-center">@</span> 
                  </div> */}

                  <p className="text-center text-gray-500 text-xs mt-6">
                    Published date<br />
                    <span className="font-medium text-gray-700">{publishedDate}</span>
                  </p>
                </div>

                {/* Jump To */}
                <div className="border p-6 rounded-md shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-4">Jump to</h4>

                  <ul className="space-y-3 text-sm text-blue-700">
                    <li><a href="#digital-first">Digital-first project management consultancy</a></li>
                    <li><a href="#reframing">Reframing project management</a></li>
                    <li><a href="#four-gaps">The four strategic gaps to address</a></li>
                    <li><a href="#bim">BIM as a decision engine</a></li>
                    <li><a href="#turning-digital">Turning digital intent into project certainty</a></li>
                  </ul>
                </div>
              </aside>

              {/* MAIN ARTICLE */}
              <article className="space-y-10">
                <p className="text-gray-500 text-sm"> 6 minutes</p>

                <h1 id="digital-first" className="text-3xl font-bold leading-snug">{insight.title}</h1>
                <p className="text-sm text-gray-500">{insight.date} · {insight.category} · By {insight.author}</p>

                {/* Render HTML content with __html */}
                <div
                  className="prose max-w-none text-lg text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: insight.content }}
                />

                {/* Related */}
                <div className="pt-8 border-t">
                  <h4 className="font-semibold mb-3">Related</h4>
                  <ul className="space-y-2">
                    {insight.related?.map((r) => (
                      <li key={r.id}>
                        <Link href={`/insights/${r.id}`} className="text-blue-600 hover:underline">
                          {r.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

// Build-time paths
export async function getStaticPaths() {
  const paths = INSIGHTS.map((insight) => ({
    params: { id: insight.id.toString() }
  }));

  return { paths, fallback: false };
}

// Build-time props
export async function getStaticProps({ params }) {
  const insight = INSIGHTS.find((i) => i.id === parseInt(params.id, 10)) || null;

  return {
    props: {
      insight
    }
  };
}