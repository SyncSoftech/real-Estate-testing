"use client";

import { useEffect, useState } from "react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState("");
  const [lightboxAlt, setLightboxAlt] = useState("");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "datacenters", label: "Data Centers" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "energy", label: "Energy" },
    { id: "realestate", label: "Real Estate" },
    { id: "technology", label: "Technology" },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "datacenters",
      
      
      image: "https://www.turnerandtownsend.com/media/3gfjltrq/istock-2203229031.webp?width=1440&height=930&v=1dc5247e6d1b150",
      
      location: "Lagos, Nigeria",
    },
    {
      id: 2,
      category: "infrastructure",
      
      
      image: "https://www.turnerandtownsend.com/media/abvdr3fg/masterplan_figure_04.webp?width=1440&height=930&v=1dc4e3d79e821e0",
      
      location: "Dubai, UAE",
    },
    {
      id: 3,
      category: "realestate",
      
      
      image: "https://www.turnerandtownsend.com/media/3gacmmny/jumeirah_marsa_al_arab_kinugawa_adult_pool_marsa_views.webp?width=1440&height=930&v=1dc4ca0f7392cf0",
      
      location: "Singapore",
    },
    {
      id: 4,
      category: "energy",
      
      
      image: "https://www.turnerandtownsend.com/media/irtl2pje/external-venue-shot-by-nick-flynn.webp?width=1440&height=930&v=1dc3f3a59c46b10",
      
      location: "Texas, USA",
    },
    {
      id: 5,
      category: "technology",
      
      
      image: "https://www.turnerandtownsend.com/media/pqnnlpan/rdc-site-image-016-10042025-1.webp?width=1440&height=930&v=1dc41d1924359d0",
      
      location: "Bangalore, India",
    },
    {
      id: 6,
      category: "datacenters",
      
      
      image: "https://www.turnerandtownsend.com/media/3gfjltrq/istock-2203229031.webp?width=1440&height=930&v=1dc5247e6d1b150",
      
      location: "London, UK",
    },
    {
      id: 7,
      category: "infrastructure",
      
      
      image: "https://www.turnerandtownsend.com/media/abvdr3fg/masterplan_figure_04.webp?width=1440&height=930&v=1dc4e3d79e821e0",
      
      location: "Tokyo, Japan",
    },
    {
      id: 8,
      category: "energy",
      
      
      image: "https://www.turnerandtownsend.com/media/irtl2pje/external-venue-shot-by-nick-flynn.webp?width=1440&height=930&v=1dc3f3a59c46b10",
      
      location: "Sydney, Australia",
    },
  ];

  // Filter items
  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIdx = currentPage * itemsPerPage;
  const displayedItems = filteredItems.slice(startIdx, startIdx + itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    if (lightboxOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  const openLightbox = (src, alt) => {
    setLightboxSrc(src);
    setLightboxAlt(alt || "Project image");
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section className="bg-[#efe9e0] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header (kept visually but you can remove if desired) */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-serif text-[#123e6a] mb-4">Our Gallery</h2>
          <p className="text-lg text-[#123e6a] max-w-2xl">
            Explore our portfolio of transformative projects across sectors and geographies.
          </p>
        </div>

        {/* Search Bar (kept so filtering still works) */}
        <div className="mb-8 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects by title, description, or location..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(0);
              }}
              className="w-full pl-4 pr-4 py-3 bg-white border border-[#d4ccc4] rounded-lg text-[#123e6a] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#08a3e0]"
            />
          </div>
        </div>

        {/* Category Filter (kept for filtering but won't affect layout) */}
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setCurrentPage(0);
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#08a3e0] text-white"
                  : "bg-white text-[#123e6a] border border-[#d4ccc4] hover:border-[#08a3e0]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid - only image + location overlay */}
        {displayedItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {displayedItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  {/* Image (click opens lightbox) */}
                  <div className="relative h-64 overflow-hidden" onClick={() => openLightbox(item.image, item.title)}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* subtle gradient so location text is readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

                    {/* Location overlay - only this text remains */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <p className="text-sm font-medium drop-shadow-md bg-black/30 px-3 py-1 rounded">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination (kept) */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={handlePrevPage}
                  className="p-3 bg-white border border-[#d4ccc4] rounded-full hover:bg-[#08a3e0] hover:text-white hover:border-[#08a3e0] transition-all"
                >
                  Prev
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPage(idx)}
                      className={`w-10 h-10 rounded-full font-semibold transition-all ${
                        currentPage === idx
                          ? "bg-[#08a3e0] text-white"
                          : "bg-white text-[#123e6a] border border-[#d4ccc4] hover:border-[#08a3e0]"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleNextPage}
                  className="p-3 bg-white border border-[#d4ccc4] rounded-full hover:bg-[#08a3e0] hover:text-white hover:border-[#08a3e0] transition-all"
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-[#123e6a]">No projects found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Lightbox modal (keeps layout intact when opened)
          This is a fixed overlay that sits above the page without changing the underlying layout. */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div className="max-w-5xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-60 bg-black/40 text-white px-3 py-1 rounded"
            >
              Close
            </button>
            <img src={lightboxSrc} alt={lightboxAlt} className="w-full h-auto object-contain rounded" />
          </div>
        </div>
      )}
    </section>
  );
}
