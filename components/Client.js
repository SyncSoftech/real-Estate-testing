import React from 'react';

export default function Client() {
  const testimonials = [
    {
      text: " “Ginjo’s commercial insight was critical for our Heathrow projects. They understand the unique pressures of working airside and landside, and how to navigate the complex stakeholder environment. Their experience saved us time, protected our margin, and ensured we met Heathrow’s demanding standards.",
      name: "Senior QS, Aviation Project",
    //   location: "LONDON, ENGLAND",
      image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Logo-Icon-Green-1.png"
    },
    {
      text: "“We brought Ginjo in during a tough programme, and they quickly became part of our team. Rishi’s LU subcontracting experience and Adersh’s client-side background brought a calm, steady influence that kept the team focused, protected our position, and helped us recover value faster.",
      name: "Project Manager, Old Street Station",
    //   role: "JOURNALIST & TELEVISION PRESENTER",
      image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Logo-Icon-Green-1.png"
    },
    {
      text: "“Ginjo doesn’t just support - they lead. Daniel’s experience commercially managing the Stegra EPC project in Sweden, overseeing a large team, brought the level of structure, focus, and commercial leadership our programme needed. Their approach gave our team the clarity and confidence to protect our position, navigate stakeholder pressures, and recover value quickly.”",
      name: "Stregra Project Director",
    //   role: "ACTOR",
      image: "https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Logo-Icon-Green-1.png"
    },
   
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="w-full bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <p className="text-center text-sm tracking-widest text-gray-500 mb-4">
          TESTIMONIALS
        </p>
        <h2 className="text-center text-5xl md:text-6xl font-light text-gray-900">
          Happy customers
        </h2>
      </div>

      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling container */}
        <div className="flex animate-scroll-left">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[450px] mx-4"
            >
              <div className="bg-[#bac6c7] rounded-3xl p-8 h-full flex flex-col justify-between min-h-[400px] border border-custom-grey">
                <div>
                  <p className="text-gray-800 text-lg leading-relaxed mb-8">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full bg-custom-grey"
                  />
                  <div>
                    <p className="font-medium text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">
                      {testimonial.role || testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}