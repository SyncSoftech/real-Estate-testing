import Head from 'next/head';

export default function PurposeAndValues() {
  return (
    <>
      <Head>
        <title>Our Purpose & Values - Ginjo</title>
        <meta name="description" content="Discover the core purpose and values that drive Ginjo's commitment to commercial excellence in construction." />
      </Head>

      <main className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-cover bg-center h-96 flex items-center" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
            url('https://www.turnerandtownsend.com/media/vxyftgqu/_h3a0079_2560-x-1440px.webp')
          `
        }}>
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Purpose & Values</h1>
            <p className="text-xl max-w-3xl">
              The foundation of how we work and why we do what we do
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="text-sm text-[#0f4b7f] mb-6">
            <a className="hover:underline" href="/">Home</a>
            <span className="mx-3">›</span>
            <a className="hover:underline" href="/about">About</a>
            <span className="mx-3">›</span>
            <span>Purpose & Values</span>
          </nav>
        </div>

        {/* Main Content */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <div className="prose lg:prose-xl text-gray-700">
            <h2 className="font-serif text-3xl font-bold mb-6 text-[#0f4b7f]">Our Purpose</h2>
            <p className="text-xl leading-relaxed mb-8">
              Ginjo's purpose is simple. We protect value and create clarity in construction. Commercial leadership influences every element of a project. It shapes how decisions are made, how risk is managed and how money is controlled. We exist to ensure our clients can build boldly while staying commercially secure.
            </p>
            
            <p className="mb-8">
              When we join a project, we take ownership of its success. We analyse the commercial picture, provide clear direction and reinforce delivery with strong processes and the right expertise. We do not just report issues. We prevent them. We do not wait for information. We bring it forward with accurate analysis and informed recommendations.
            </p>

            <div className="bg-custom-yellow p-6 rounded-xl border border-custom-grey my-12">
              <p className="text-lg">
                Commercial strength should sit at the heart of every construction project. Whether working on a complex data centre, a major infrastructure programme or a residential development, we protect every pound and remove uncertainty. Our digital tools amplify this approach. Automated workflows and real time reporting support faster decisions, stronger compliance and fewer surprises.
              </p>
              <p className="text-lg mt-4 font-medium">
                Our purpose is to give clients confidence. Confidence that they have the right people, the right information and the right controls to deliver successfully.
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-16 mb-8 text-[#0f4b7f]">Our Values</h2>
            
            <div className="space-y-12">
              <div className="border-b border-gray-200 pb-8">
                <h3 className="font-serif text-2xl font-semibold mb-4 text-[#163c72]">Accountability that drives results</h3>
                <p>
                  Trust is earned through consistency. We take responsibility for our work, our advice and the outcomes we influence. When we commit to something, we deliver it. We communicate clearly and always act in the best interests of the project. We stand behind every decision we make and every forecast we provide.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-8">
                <h3 className="font-serif text-2xl font-semibold mb-4 text-[#163c72]">Excellence without excuses</h3>
                <p>
                  Our standards are high. We combine commercial experience with measured judgement to ensure projects avoid unnecessary cost and wasted effort. We continuously improve by applying lessons learned and challenging ourselves to do better on every task. Our mindset is simple. We do it properly or not at all.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-8">
                <h3 className="font-serif text-2xl font-semibold mb-4 text-[#163c72]">Innovation with purpose</h3>
                <p>
                  Technology is most powerful when it solves real problems. We introduce tools that remove manual effort and improve accuracy for everyone involved. SharePoint solutions, automated workflows and intuitive dashboards help teams access the information they need and act on it quickly. We focus on improvements that create immediate and meaningful benefits.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-8">
                <h3 className="font-serif text-2xl font-semibold mb-4 text-[#163c72]">Collaboration that builds trust</h3>
                <p>
                  Successful delivery depends on strong relationships. We integrate into client teams and work closely with subcontractors, consultants and delivery partners. We listen. We understand pressures and goals. We support, guide and challenge where needed. Our collaborative approach keeps delivery aligned and prevents conflict before it begins.
                </p>
              </div>

              <div className="pb-8">
                <h3 className="font-serif text-2xl font-semibold mb-4 text-[#163c72]">Integrity above all else</h3>
                <p>
                  Reputation matters. We are honest in our assessments and upfront in our communication. We refuse to cut corners or hide risks. Profit is never placed above principles. Every action we take must protect our clients, our people and the projects we are trusted to deliver.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl my-12 border border-gray-200">
              <h2 className="font-serif text-2xl font-semibold mb-4">Our Commitment</h2>
              <p className="mb-4">
                Construction is evolving and expectations are higher than ever. Projects need accurate reporting, robust controls and fast access to reliable information. Ginjo is committed to helping clients meet those demands.
              </p>
              <p className="mb-4">
                We provide the commercial firepower and the digital capability that strengthen oversight and improve outcomes. We stand for projects that are well planned, well governed and well delivered. Projects where value is protected and progress is proven. Projects that everyone involved can be proud of.
              </p>
              <p className="font-medium">
                We are committed to delivering excellence through expertise. Every project. Every client. Every time.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#bac6c7] text-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Experience the Ginjo Difference</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Partner with a team that puts commercial excellence and integrity at the heart of every project.
            </p>
            <button className="bg-white text-[#163c72] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
              Get in Touch
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
