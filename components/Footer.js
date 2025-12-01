"use client";

export default function Footer() {
  return (
    <footer className="bg-[#bac6c7] text-[#0f1724]">
      {/* hidden uploaded file (environment may transform to a URL) */}
      <img
        src="/mnt/data/1b4af3ed-a25a-4bb3-911b-d5f9abcb4f80.png"
        alt="uploaded-asset"
        className="hidden"
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Heading + column group */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-semibold mb-6">
              GINJO
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <ul className="space-y-3">
                <li className="text-sm"><a className="hover:underline" href="#">Insights</a></li>
                <li className="text-sm"><a className="hover:underline" href="#">Our people</a></li>
                <li className="text-sm"><a className="hover:underline" href="#">Locations</a></li>
                <li className="text-sm"><a className="hover:underline" href="#">Outcomes</a></li>
              </ul>

              <ul className="space-y-3">
                <li className="text-sm"><a className="hover:underline" href="#">Sectors</a></li>
                <li className="text-sm"><a className="hover:underline" href="#">Solutions</a></li>
                <li className="text-sm"><a className="hover:underline" href="#">Careers</a></li>
                <li className="text-sm"><a className="hover:underline" href="#">About us</a></li>
              </ul>

              <ul className="space-y-3">
                <li className="text-sm"><a className="hover:underline" href="#">Newsroom</a></li>
                <li className="text-sm"><a className="hover:underline" href="#">Log into the Hive</a></li>
              </ul>
            </div>
          </div>

          {/* Column 2 - Follow us */}
          <div className="flex flex-col justify-start">
            <h3 className="text-2xl font-serif font-semibold mb-6">Follow us</h3>

            <div className="flex items-center gap-4">
              {/* LinkedIn icon */}
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-current text-[#0f1724]">
                  <path d="M4 4h4v16H4z" fill="#0f1724"></path>
                  <path d="M8 8c0-1.105.895-2 2-2s2 .895 2 2v12" stroke="#0f1724" strokeWidth="0" />
                  <rect x="14" y="8" width="4" height="12" rx="1" fill="#0f1724"></rect>
                </svg>
              </a>

              {/* Instagram-like rounded square */}
              <a href="#" aria-label="Instagram" className="w-8 h-8 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-current text-[#0f1724]">
                  <rect x="3" y="3" width="18" height="18" rx="4" stroke="#0f1724" strokeWidth="1.5"></rect>
                  <circle cx="12" cy="12" r="3" stroke="#0f1724" strokeWidth="1.5"></circle>
                  <circle cx="17.5" cy="6.5" r="0.75" fill="#0f1724"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* bottom row: copyright and small policy links */}
        <div className="mt-8 border-t border-[#e6ddd4] pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs text-[#0f1724]">
            © {new Date().getFullYear()} GINJO
          </div>

          <div className="ml-auto">
            <nav className="text-xs flex flex-wrap gap-4 text-[#0f1724]">
              <a className="hover:underline" href="#">Privacy policy</a>
              <span className="opacity-70">·</span>
              <a className="hover:underline" href="#">Cookie policy</a>
              <span className="opacity-70">·</span>
              <a className="hover:underline" href="#">T&amp;Cs</a>
              <span className="opacity-70">·</span>
              <a className="hover:underline" href="#">Modern slavery act</a>
              <span className="opacity-70">·</span>
              <a className="hover:underline" href="#">Policies</a>
              <span className="opacity-70">·</span>
              <a className="hover:underline" href="#">Sitemap</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
