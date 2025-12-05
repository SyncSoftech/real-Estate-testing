// // "use client";

// // export default function Footer() {
// //   return (
// //     <footer className="bg-[#bac6c7] text-[#0f1724]">
// //       {/* hidden uploaded file (environment may transform to a URL) */}
// //       <img
// //         src="/mnt/data/1b4af3ed-a25a-4bb3-911b-d5f9abcb4f80.png"
// //         alt="uploaded-asset"
// //         className="hidden"
// //       />

// //       <div className="max-w-7xl mx-auto px-6 py-12">
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
// //           {/* Column 1 - Heading + column group */}
// //           <div className="md:col-span-2">
// //             <h3 className="text-2xl font-serif font-semibold mb-6">
// //               GINJO
// //             </h3>

// //             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
// //               <ul className="space-y-3">
// //                 <li className="text-sm"><a className="hover:underline" href="#">Insights</a></li>
// //                 <li className="text-sm"><a className="hover:underline" href="#">Our people</a></li>
// //                 <li className="text-sm"><a className="hover:underline" href="#">Locations</a></li>
// //                 <li className="text-sm"><a className="hover:underline" href="#">Outcomes</a></li>
// //               </ul>

// //               <ul className="space-y-3">
// //                 <li className="text-sm"><a className="hover:underline" href="#">Sectors</a></li>
// //                 <li className="text-sm"><a className="hover:underline" href="#">Solutions</a></li>
// //                 <li className="text-sm"><a className="hover:underline" href="#">Careers</a></li>
// //                 <li className="text-sm"><a className="hover:underline" href="#">About us</a></li>
// //               </ul>

// //               <ul className="space-y-3">
// //                 <li className="text-sm"><a className="hover:underline" href="#">Newsroom</a></li>
// //                 <li className="text-sm"><a className="hover:underline" href="#">Log into the Hive</a></li>
// //               </ul>
// //             </div>
// //           </div>

// //           {/* Column 2 - Follow us */}
// //           <div className="flex flex-col justify-start">
// //             <h3 className="text-2xl font-serif font-semibold mb-6">Follow us</h3>

// //             <div className="flex items-center gap-4">
// //               {/* LinkedIn icon */}
// //               <a href="#" aria-label="LinkedIn" className="w-8 h-8 flex items-center justify-center">
// //                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-current text-[#0f1724]">
// //                   <path d="M4 4h4v16H4z" fill="#0f1724"></path>
// //                   <path d="M8 8c0-1.105.895-2 2-2s2 .895 2 2v12" stroke="#0f1724" strokeWidth="0" />
// //                   <rect x="14" y="8" width="4" height="12" rx="1" fill="#0f1724"></rect>
// //                 </svg>
// //               </a>

// //               {/* Instagram-like rounded square */}
// //               <a href="#" aria-label="Instagram" className="w-8 h-8 flex items-center justify-center">
// //                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-current text-[#0f1724]">
// //                   <rect x="3" y="3" width="18" height="18" rx="4" stroke="#0f1724" strokeWidth="1.5"></rect>
// //                   <circle cx="12" cy="12" r="3" stroke="#0f1724" strokeWidth="1.5"></circle>
// //                   <circle cx="17.5" cy="6.5" r="0.75" fill="#0f1724"></circle>
// //                 </svg>
// //               </a>
// //             </div>
// //           </div>
// //         </div>

// //         {/* bottom row: copyright and small policy links */}
// //         <div className="mt-8 border-t border-[#e6ddd4] pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
// //           <div className="text-xs text-[#0f1724]">
// //             © {new Date().getFullYear()} GINJO
// //           </div>

// //           <div className="ml-auto">
// //             <nav className="text-xs flex flex-wrap gap-4 text-[#0f1724]">
// //               <a className="hover:underline" href="#">Privacy policy</a>
// //               <span className="opacity-70">·</span>
// //               <a className="hover:underline" href="#">Cookie policy</a>
// //               <span className="opacity-70">·</span>
// //               <a className="hover:underline" href="#">T&amp;Cs</a>
// //               <span className="opacity-70">·</span>
// //               <a className="hover:underline" href="#">Modern slavery act</a>
// //               <span className="opacity-70">·</span>
// //               <a className="hover:underline" href="#">Policies</a>
// //               <span className="opacity-70">·</span>
// //               <a className="hover:underline" href="#">Sitemap</a>
// //             </nav>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }



// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';

// const Footer = () => {
//   const mainPages = [
//     { name: 'Home', href: '/' },
//     { name: 'Services', href: '/services' },
//     { name: 'Case Studies', href: '/case-studies' },
//     { name: 'Insights', href: '/insights' },
    
   
//   ];
//   const AboutUS = [
//     { name: 'About Us', href: '/about' },
//     { name: 'Contact Us', href: '/contact' },
//     { name: 'Careers', href: '/careers' },
   
//   ];
//   const pages = [
//     { name: 'Gallery', href: '/gallery' },
//     { name: 'Our People', href: '/ourPeople' },
//     { name: 'Our Leaders', href: '/ourLeaders' },
//     { name: 'Our Team', href: '/ourTeam' },
   
//   ];
  

//   return (
//     <footer className="bg-[#708c8a]  pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-4 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          
//           {/* Logo and Description Column */}
//           <div className="lg:col-span-1">
//             {/* Logo */}
//             <div className="mb-8">
//               <Image src="/logo.png" alt="Logo" width={100} height={100} />
//             </div>

//             {/* Description */}
//             <p className="text-white text-sm leading-relaxed mb-24">
//             Ginjo is a commercial services partner that helps construction projects succeed with clarity, control and confidence. We provide expert cost management, contract support and project leadership that remove uncertainty and protect value from planning through to final account.
//             </p>

//             {/* Certification Logos */}
           
//           </div>

//           {/* Main Pages Column */}
//           <div className="lg:col-span-1">
//             <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6  ml-14">
//               Main Pages
//             </h4>
//             <ul className="space-y-4 ml-14">
//               {mainPages.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     className="text-white hover:text-white transition-colors duration-200"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Business Hours Column */}
//           <div className="lg:col-span-1">
//             <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6  ml-5">
//               Other Pages
//             </h4>
            
//             <ul className="space-y-4 ml-8">
//               {pages.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     className="text-white hover:text-white transition-colors duration-200"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="lg:col-span-1">
//             <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6  ml-5">
//               About US
//             </h4>
            
//             <ul className="space-y-4 ml-8">
//               {AboutUS.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     className="text-white hover:text-white transition-colors duration-200"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-gray-200 pt-8 text-center">
//           <p className="text-sm text-white">
//             © 2024 Ginjo Constructions. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import Link from "next/link";
import {Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function HearMeFooter() {
  return (
    <footer className="bg-[#748c8d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT - logo, description, badges, newsletter */}
          <div className="lg:col-span-7">
            <div className="flex items-start flex-col gap-6">
              <img
                src="/LOGO.jpg"
                alt="Hear Me London logo"
                className="w-44 h-auto object-contain"
              />
              <div className="flex -mt-10 lg:mt-20 ml-10 gap-10">
                
                <Link href=""><img
                src="/footer/Linkedin.png"
                alt="Hear Me London logo"
                className="w-7 h-auto object-contain"
              /></Link>
             <Link href={'https://facebook.com/about-ginjo-construction'}> <img
                src="/footer/facebook.png"
                alt="Hear Me London logo"
                className="w-7 h-auto object-contain"
              /></Link> 
               <Link href={'https://www.instagram.com/ginjoconstruction/'}> <img
                src="/footer/instagram.png"
                alt="Hear Me London logo"
                className="w-7 h-auto object-contain"
              /></Link>
              </div>
            </div>

            <p className="mt-6 text-3xl text-white max-w-xl">
              Honest Commercial Support. Real Project Results.
            </p>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <img
                src="https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/UKGBC-Black-bkg.png"
                alt="hcpc badge"
                className="w-20 h-auto object-contain"
              />
              <img
                src="https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/regulated-by-rics-logo-white-1536x934.webp"
                alt="bshaa badge"
                className="w-20 h-auto object-contain"
              />
            </div>

            {/* Newsletter */}
            <div className="mt-10 max-w-sm">
              <h4 className="text-xl flex font-semibold text-white tracking-wide">
                
<Phone /> <span className="pl-3"> +44 07730748210</span>

              </h4>
              <h4 className="text-xl flex font-semibold text-white tracking-wide">
                
<Mail  /> <span className="pl-5 text-xl">info@ginjo.co.uk</span>

              </h4>

           
            </div>
          </div>

          {/* RIGHT - links + opening times */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h5 className="text-xs text-white font-semibold uppercase tracking-wide">Main Pages</h5>
                <ul className="mt-4 space-y-3 text-sm">
                  <li><Link href="/" className="hover:underline">Home</Link></li>
                  <li><Link href="/services" className="hover:underline">Services</Link></li>
                  <li><Link href="/caseStudies" className="hover:underline">Case Studies</Link></li>
                  <li><Link href="/insights" className="hover:underline">Insights</Link></li>
                  <li><Link href="/about" className="hover:underline">About Us</Link></li>
                </ul>
              </div>

              <div>
                <h5 className="text-xs text-white font-semibold uppercase tracking-wide">Quick Links</h5>
                <ul className="mt-4 space-y-3 text-sm">
                  <li><Link href="/ourPeople" className="hover:underline">Our People</Link></li>
                  <li><Link href="/Career" className="hover:underline">Career</Link></li>
                  <li><Link href="/Gallery" className="hover:underline">Gallery</Link></li>
                  <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
                  <li><Link href="/privacyPolicy" className="hover:underline">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>

            {/* Business hours & CTA */}
            <div className="mt-8 border-t pt-6">
              <h6 className="text-xs text-white uppercase">Our Business Hours (UK Time Zone)</h6>
              <p className="mt-3 text-sm"><span className="font-semibold">Monday - Friday:</span> 9am — 6pm</p>
              <p className="text-sm"><span className="font-semibold">Sat - Sun:</span> Closed*</p>
             

              
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
           

            <p className="text-xs text-white">© GINJO, All Rights Reserved</p>
          </div>

          <div className="flex items-center gap-4 text-xs text-white">
          
            {/* <span>Created by <Link href="https://projectverse.in/" className="underline">Project verse</Link></span> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
