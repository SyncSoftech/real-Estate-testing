import Head from 'next/head';
import Link from 'next/link';
export default function WhatWeDo() {
  return (
    <>
      <Head>
        <title>What We Do - Ginjo</title>
        <meta name="description" content="Ginjo provides commercial leadership and digital capability that strengthens construction delivery from concept through to completion." />
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">What We Do</h1>
            <p className="text-xl max-w-3xl">
              Commercial leadership and digital capability for construction projects worldwide
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
            <span>What We Do</span>
          </nav>
        </div>

        {/* Main Content */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="prose lg:prose-xl text-gray-700">
            <p className="text-xl leading-relaxed mb-6">
              Ginjo provides commercial leadership and digital capability that strengthens construction delivery from concept through to completion. We support clients by making complex projects clearer, more predictable and more commercially secure. Our services are designed to ensure that successful delivery is not left to chance. We give our clients the information, the structure and the expertise they need to stay in control.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-6 text-[#0f4b7f]">Our Services</h2>
            
            <h3 className="font-serif text-2xl font-semibold mt-8 mb-4 text-[#163c72]">Commercial Services</h3>
            <p>
              Our commercial services sit at the core of what we do. We support full procurement lifecycles, including contractor prequalification and sourcing. We guide clients on contract selection for NEC, FIDIC, JCT or bespoke arrangements. We prepare tender documents, evaluate proposals, lead commercial negotiations and support final award recommendations. With new regulations including the Procurement Act 2024, we ensure every procurement process remains compliant and supported by strong governance.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-4 text-[#163c72]">Contract Management</h3>
            <p>
              During delivery, our contract management services protect project value. We manage budgets, administer contracts and provide quantity surveying services that ensure accurate valuation and responsible change control. We handle variations, compensation events and claims including extension of time, delay, disruption, acceleration, standby and loss of productivity. As projects draw to a close, we manage final account settlement and ensure all obligations have been completed properly.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-4 text-[#163c72]">Project Management</h3>
            <p>
              We offer experienced project management support that strengthens delivery teams when pressure increases. We define commercial strategy during pre construction, establish realistic budgets and develop detailed programmes. We take ownership of stakeholder communication and ensure the right people have the right information at the right time. Our involvement gives project leaders confidence that activity is aligned with the contract and that commercial exposure is controlled.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-4 text-[#163c72]">Subcontractor Support</h3>
            <p>
              Subcontractors are a vital part of every project. We help them succeed through cost planning, procurement support and accurate Material Take Offs. We assist with contract administration, applications for payment, variation submissions and commercial reporting. Subcontractors choose Ginjo because we understand the pressures they face and provide the commercial structure needed to protect payment, performance and reputation.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-4 text-[#163c72]">EPCM Project Support</h3>
            <p>
              We also support major EPCM projects where coordination is critical and commercial impact can be significant. Our experience includes large scale industrial and data centre environments where commercial oversight must be meticulous and systems must keep pace with rapid delivery. We work with client side leadership to provide transparent reporting and commercial controls that prevent drift and support confident decision making at every milestone.
            </p>

            <h3 className="font-serif text-2xl font-semibold mt-8 mb-4 text-[#163c72]">Audit & Advisory</h3>
            <p>
              Our audit and advisory services provide clients with independent insight. We review internal commercial functions, consolidate portfolio reporting and recommend profitability improvements. We help define meaningful key performance indicators and commercial objectives that align with the organisation's long term strategy.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-6 text-[#0f4b7f]">Digital Solutions</h2>
            <p>
              Our digital solutions strengthen everything we do. We build customized SharePoint systems that bring project data into one place and reduce fragmentation. We automate workflows to eliminate manual errors and speed up approvals. We create real time Power BI dashboards that show progress, risk and commercial position clearly to all stakeholders. Technology is used with purpose, always supporting better performance and stronger governance.
            </p>

            <div className="bg-custom-yellow p-6 rounded-xl border border-custom-grey mt-12">
              <h3 className="font-serif text-2xl font-semibold mb-4">Our Approach</h3>
              <p className="mb-4">
                No two clients are the same. No two projects are the same. Ginjo adapts to what is needed. Some clients want embedded commercial support for the full project life. Others need short targeted interventions to establish clarity or resolve a challenge. Whatever the requirement, our working style remains the same. We act with ownership, we protect value and we provide solutions that make a measurable difference.
              </p>
              <p>
                Our role is to simplify complexity and turn uncertainty into informed action. We help our clients deliver projects that stay on programme, stay within budget and meet their commercial objectives with confidence. With Ginjo, clarity is not something you hope for. It is something you can rely on.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#bac6c7] text-white py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Ready to transform your project delivery?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's discuss how Ginjo can bring commercial clarity and digital capability to your next project.
            </p>
           <Link href="/contact"> <button className="bg-white text-[#163c72] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
              Contact Us
            </button></Link>
          </div>
        </section>
      </main>
    </>
  );
}
