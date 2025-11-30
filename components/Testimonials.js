import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [offset, setOffset] = useState(0);

  // Add your partner logos here
  const partners = [
    { name: 'astra', logo: '/testimonials/astra.webp' },
    { name: 'fluor', logo: '/testimonials/fluor.webp' },
    { name: 'free', logo: '/testimonials/free.webp' },
    { name: 'heathrow', logo: '/testimonials/heathrow.webp' },
    { name: 'HS2', logo: '/testimonials/HS2.webp' },
    { name: 'network', logo: '/testimonials/network.webp' },
    { name: 'palmarium', logo: '/testimonials/palmarium.webp' },
    { name: 'priority', logo: '/testimonials/priority.webp' },
    { name: 'storm', logo: '/testimonials/storm.webp' },
    { name: 'sotravic', logo: '/testimonials/sotravic.webp' },
    { name: 'tr', logo: '/testimonials/tr.webp' },
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  // Auto-scroll animation
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev - 1;
        // Reset when first set of logos fully scrolls out
        if (Math.abs(newOffset) >= (partners.length * 200)) {
          return 0;
        }
        return newOffset;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <section className="w-full py-2 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6  ">
        <div className="lg:flex lg:flex-row items-center justify-start  gap-8 mb-8">
         
          
          <div className="flex-1 overflow-hidden relative">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling container */}
            <div
              className="flex items-center gap-6"
              style={{
                transform: `translateX(${offset}px)`,
                transition: 'none',
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: '160px' }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-32  w-full object-contain "
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="text-gray-400 font-medium text-center">${partner.name}</div>`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;