import Head from 'next/head';
import Link from 'next/link';
export default function OurStory() {
  return (
    <>
      <Head>
        <title>Our Story - Ginjo</title>
        <meta name="description" content="Discover Ginjo's journey from a simple belief to becoming a leader in construction commercial management and digital solutions." />
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Story</h1>
            <p className="text-xl max-w-3xl">
              From a simple belief to a trusted partner in construction commercial management
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
            <span>Our Story</span>
          </nav>
        </div>

        {/* Main Content */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <div className="prose lg:prose-xl text-gray-700">
            <p className="text-xl leading-relaxed mb-8">
              Ginjo began with a simple belief. Construction projects succeed when commercial discipline is strong, clarity is constant and decision making is informed. We saw too many projects struggle because of unclear scope, uncontrolled change and weak financial oversight. That is why we built Ginjo to focus on commercial leadership from day one.
            </p>

            <div className="bg-custom-yellow p-6 rounded-xl border border-custom-grey my-12">
              <h2 className="font-serif text-3xl font-bold mb-6 text-[#0f4b7f]">Our Journey</h2>
              <div className="space-y-6">
                <p>
                  Our early work established us as a partner who protects value. We provided precise cost control, robust contract management and support through procurement and tendering. Clients recognized that when we were involved, risks were reduced and outcomes improved. This created long lasting relationships across construction and rail, and gave us a strong foundation for growth.
                </p>
                
                <p>
                  As the industry evolved, we saw a new challenge. Information was scattered, reporting was slow and teams lacked the real time visibility needed to make confident decisions. We knew digital tools could solve these problems. We expanded our capability, integrating SharePoint development, automated workflows and Power BI reporting into our service offering. We combined commercial expertise with digital solutions that simplify work, increase accuracy and give leaders immediate insight into project performance.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-16 mb-6 text-[#0f4b7f]">Where We Are Today</h2>
            <p className="mb-6">
              Today we support projects of every size and complexity. Residential developments, commercial buildings, data centres and major infrastructure programmes all benefit from our approach. We bring structure to uncertainty and make sure our clients stay in control, even when delivery pressures increase.
            </p>

            <p className="mb-6">
              We have grown by staying true to our purpose. Better systems. Better visibility. Better outcomes. Clients rely on us because we understand what is at stake on every project. We provide guidance when decisions are difficult. We add capability when teams are stretched. We reinforce delivery with expertise and practical solutions.
            </p>

            <div className="bg-gray-50 p-6 rounded-xl my-12 border border-gray-200">
              <h3 className="font-serif text-2xl font-semibold mb-4">Looking Ahead</h3>
              <p>
                The construction industry continues to change. Regulations shift. Technology advances. Expectations rise. At Ginjo, we treat this change as an opportunity to improve. We learn from every project. We refine our processes. We help our clients adapt and succeed in a more demanding future.
              </p>
            </div>

            <p className="text-lg">
              Our story is still being written. It is a story of progress, trust and determination. It is built on the belief that strong commercial foundations and smart digital tools can transform the way projects are delivered. We look forward to continuing this journey with the clients and partners who share our ambition for better construction.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#bac6c7] text-Black py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Become Part of Our Story</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join us in shaping the future of construction project delivery with commercial excellence and innovative digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#163c72] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                Explore Careers
              </button>
            <Link href="/contact"><button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition">
                Contact Our Team
              </button></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
