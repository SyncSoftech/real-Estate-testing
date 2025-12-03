
import { useState, useMemo } from "react";
import Link from "next/link";

/**
 * JobsList
 * - client component implementing: search, discipline/location filters, reset, results count, table with blue header, pagination
 *
 * Drop into /components and import on a page.
 */

export default function Careers() {

    
const jobs = [
  { id: 1, title: "Senior Cost Manager - Data Centre", discipline: "Real estate", country: "Australia", city: "Sydney" },
  { id: 2, title: "Cost Manager", discipline: "Real estate", country: "Australia", city: "Sydney" },
  { id: 3, title: "Senior Cost Manager - Education", discipline: "Real estate", country: "Australia", city: "Sydney" },
  { id: 4, title: "Integration Project Manager", discipline: "Real estate", country: "Australia", city: "Melbourne" },
  { id: 5, title: "Commercial Manager", discipline: "Real estate", country: "Australia", city: "Melbourne" },
  { id: 6, title: "Programme Director", discipline: "Real estate", country: "Hong Kong SAR", city: "Hong Kong" },
  { id: 7, title: "Inspector Técnico de Obra – Proyectos...", discipline: "Energy and natural resources", country: "Chile", city: "Antofagasta" },
  // ... add more to emulate large dataset
];

const unique = (arr, key) => Array.from(new Set(arr.map((x) => x[key]))).sort();

   const [query, setQuery] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [location, setLocation] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 15;

  const disciplines = useMemo(() => unique(jobs, "discipline"), [jobs]);
  const locations = useMemo(() => unique(jobs, "country"), [jobs]);

  // Filtering
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobs.filter((j) => {
      if (discipline && j.discipline !== discipline) return false;
      if (location && j.country !== location) return false;
      if (!q) return true;
      return (
        j.title.toLowerCase().includes(q) ||
        j.discipline.toLowerCase().includes(q) ||
        j.country.toLowerCase().includes(q) ||
        j.city.toLowerCase().includes(q)
      );
    });
  }, [jobs, query, discipline, location]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const start = (page - 1) * perPage;
  const pageSlice = filtered.slice(start, start + perPage);

  function resetFilters() {
    setQuery("");
    setDiscipline("");
    setLocation("");
    setPage(1);
  }

  function go(n) {
    setPage(Math.min(Math.max(1, n), totalPages));
  }
  return (
    <main className="lg:mx-10 bg-white min-h-screen">

          <header className="bg-[#bac6c7] -mb-20 text-Black rounded-b-2xl pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Careers</h1>
          <p className="max-w-3xl mt-4 text-sm md:text-base leading-relaxed text-Black/90">
            We are always on the lookout for talented individuals to join our team. If you have a passion for real estate and a desire to make a difference, we encourage you to apply for a position.
          </p>
        </div>
      </header>
      <div className=" bg-white rounded-t-2xl mx-auto px-6 py-8">
<section className="max-w-5xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 flex items-center gap-1 mb-6">
        <a href="#" className="hover:underline">Home</a>
        <span>›</span>
        <a href="#" className="hover:underline">Careers</a>
        <span>›</span>
        <span className="text-gray-700">Current opportunities</span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Available positions
      </h1>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-4">
        Please note that selecting a link will take you to a third-party website.
        Choose <span className="font-semibold">discipline</span> or 
        <span className="font-semibold"> location</span> or 
        <span className="font-semibold"> search</span> to see jobs more relevant to you.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Log in to your Turner & Townsend careers portal 
        <a href="#" className="text-blue-600 underline ml-1">here</a> 
        to access your account, track any applications and apply for new roles.
      </p>
    </section>

      </div>
      <section className="max-w-6xl mx-auto px-6 py-8 bg-[#f3efe8]">
      {/* Search row */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <label className="sr-only">Search jobs</label>
        <input
          value={query}
          onChange={(e) => { setQuery(e.target.value); setPage(1); }}
          placeholder="Search"
          className="flex-1 border border-neutral-300 rounded-md px-4 py-3 shadow-sm"
        />
        <button
          onClick={() => go(1)}
          className="mt-1 md:mt-0 bg-neutral-800 text-white px-4 py-3 rounded-md flex items-center gap-2"
        >
          <span>Search jobs</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10.5 18A7.5 7.5 0 1 1 10.5 3a7.5 7.5 0 0 1 0 15z"/></svg>
        </button>
      </div>

      <hr className="border-neutral-400 mb-6" />

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <div className="text-sm font-semibold mr-2">FILTER BY</div>

        {/* Discipline dropdown (simple) */}
        <div>
          <select
            value={discipline}
            onChange={(e) => { setDiscipline(e.target.value); setPage(1); }}
            className="px-4 py-2 border rounded-md bg-white"
            aria-label="Filter by discipline"
          >
            <option value="">Discipline</option>
            {disciplines.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>

        {/* Location */}
        <div>
          <select
            value={location}
            onChange={(e) => { setLocation(e.target.value); setPage(1); }}
            className="px-4 py-2 border rounded-md bg-white"
            aria-label="Filter by location"
          >
            <option value="">Location</option>
            {locations.map((l) => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>

        <button onClick={resetFilters} className="text-sm underline ml-2">Reset filters</button>
      </div>

      {/* Showing X of Y */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-medium">
          Showing {start + 1} - {Math.min(start + perPage, total)} of {total} live jobs
        </div>

        {/* Pagination small */}
        <div className="flex items-center gap-2">
          <button onClick={() => go(page - 1)} className="p-2 border rounded">‹</button>

          {/* show first 4 pages like screenshot */}
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const p = i + 1;
            return (
              <button
                key={p}
                onClick={() => go(p)}
                className={`px-3 py-1 border rounded ${page === p ? "bg-[#092c57] text-white" : ""}`}
              >
                {p}
              </button>
            );
          })}

          {totalPages > 5 && <span className="px-2">...</span>}

          <button onClick={() => go(page + 1)} className="p-2 border rounded">›</button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-md">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="bg-[#123f74] text-white">
              <th className="text-left py-4 px-6 rounded-tl-md">Job title</th>
              <th className="text-left py-4 px-6">Discipline</th>
              <th className="text-left py-4 px-6">Country</th>
              <th className="text-left py-4 px-6 rounded-tr-md">City</th>
            </tr>
          </thead>

          <tbody>
            {pageSlice.length === 0 ? (
              <tr className="bg-white">
                <td colSpan="4" className="p-6 text-center text-neutral-600">No jobs found</td>
              </tr>
            ) : (
              pageSlice.map((j) => (
                <tr key={j.id} className="bg-transparent border-b border-neutral-300">
                  <td className="py-4 px-6 border-t">
                    <Link href={`/careers/${j.id}`} className="text-blue-600 hover:underline">
                      {j.title}
                    </Link>
                  </td>
                  <td className="py-5 px-6 text-neutral-700">{j.discipline}</td>
                  <td className="py-5 px-6 text-neutral-700">{j.country}</td>
                  <td className="py-5 px-6 text-neutral-700">{j.city}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* bottom pagination (repeat) */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-neutral-700">Page {page} of {totalPages}</div>
        <div className="flex items-center gap-2">
          <button onClick={() => go(page - 1)} className="p-2 border rounded">Prev</button>
          <button onClick={() => go(page + 1)} className="p-2 border rounded">Next</button>
        </div>
      </div>
    </section>


    <section className="max-w-5xl mx-auto px-6 py-10 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Notice to third party agencies
      </h2>

      <p className="text-gray-800 leading-relaxed">
        It is strictly against our policy for candidates to pay any fee in relation
        to the recruitment process. No recruitment agency working with us will ever
        ask candidates to pay a fee at any time. Any unsolicited resumes or CVs
        submitted through our website or to personal e-mail accounts are considered
        our property and are not subject to payment of agency fees. To be an
        authorised recruitment agency or search firm, a formal written agreement
        must be in place and the agency must be invited by our recruitment team to
        submit candidates for review.
      </p>
    </section>
      </main>
  )}