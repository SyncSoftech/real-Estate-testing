



// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';

// const constructionStyles = `
//   :root {
//     --c-main: hsla(0, 100%, 100%, 0.75);
//     --c-secondary: hsla(200, 5%, 11%, 1);
//     --c-malabars: hsla(178, 40%, 49%, 1);
//     --c-trunk: hsla(23, 18%, 29%, 1);
//     --c-white: hsla(0, 255%, 255%, 1);
//     --bg-main: hsla(210, 3%, 15%, 1);
//     --crane-width: 260px;
//     --crane-height: 173.33px;
//     --trunk-height: 8px;
//   }

//   * {
//     box-sizing: border-box;
//   }

//   body {
//     font-size: 12px;
//     font-family: "Josefin Sans", "Roboto", sans-serif;
//     color: var(--c-main);
//     overflow-x: hidden;
//     background-color: var(--bg-main);
//     margin: 0;
//   }

//   main {
//     position: relative;
//     min-height: 100vh;
//     z-index: -10;
//     background: linear-gradient(to top, var(--c-secondary), var(--c-main));
//     display: flex;
//     flex-direction: column;
//   }

//   .advice {
//     display: flex;
//     flex: 1;
//     width: 100vw;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     z-index: 20;
//   }

//   .advice__title {
//     font-size: 3rem;
//     text-align: center;
//     margin: 0;
//     color: var(--c-secondary);
//     font-weight: bold;
//   }

//   .advice__description {
//     margin-top: 1rem;
//     font-size: 2rem;
//     text-align: center;
//     color: var(--c-secondary);
//   }

//   .city-stuff {
//     display: flex;
//     position: relative;
//     justify-content: center;
//     width: 100%;
//     min-height: 300px;
//     overflow: hidden;
//     box-shadow: inset 0 -60px 0 -30px var(--c-malabars);
//   }

//   .skyscrappers__list {
//     position: absolute;
//     width: 100%;
//     height: 86.67px;
//     bottom: 0;
//     left: 0;
//     list-style: none;
//     padding: 0;
//     margin: 0;
//   }

//   .skyscrapper__item {
//     position: absolute;
//     height: inherit;
//     bottom: 15%;
//     width: 43.33px;
//     background: linear-gradient(115deg, var(--c-malabars) 73%, rgba(0, 0, 0, 0.1) 73%, rgba(0, 0, 0, 0.1) 100%);
//   }

//   .skyscrapper__item::after {
//     content: "";
//     position: absolute;
//     width: 80%;
//     height: 80%;
//     left: 10%;
//     bottom: 10%;
//     background: repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px);
//   }

//   .skyscrapper-1 { width: 80px; height: 100px; right: 25%; bottom: 0; z-index: 10; transform: rotate(180deg); }
//   .skyscrapper-2 { width: 100px; height: 110px; right: 35%; bottom: 10%; z-index: 10; display: none; }
//   .skyscrapper-3 { width: 120px; height: 130px; right: 45%; bottom: 0; z-index: 10; display: none; }
//   .skyscrapper-4 { width: 90px; height: 120px; right: 55%; bottom: 0; z-index: 10; }
//   .skyscrapper-5 { width: 60px; right: 67%; height: 50%; z-index: 11; }

//   .tree__container {
//     position: absolute;
//     width: 100%;
//     height: 73.33px;
//     left: 0;
//     bottom: 0;
//     list-style: none;
//     padding: 0;
//     margin: 0;
//   }

//   .tree__list {
//     list-style: none;
//     padding: 0;
//     margin: 0;
//     width: 100%;
//     height: 100%;
//     position: relative;
//   }

//   .tree__item {
//     display: flex;
//     flex-direction: column;
//     position: absolute;
//     justify-content: flex-end;
//     align-items: center;
//     left: 60%;
//     list-style: none;
//     padding: 0;
//     margin: 0;
//   }

//   .tree__trunk {
//     order: 2;
//     width: 4px;
//     height: 8px;
//     border-radius: 2px;
//     background: var(--c-trunk);
//     margin-top: 8px;
//   }

//   .tree__leaves {
//     order: 1;
//     width: 0;
//     height: 0;
//     border-left: 4px solid transparent;
//     border-right: 4px solid transparent;
//     border-bottom: 32px solid var(--c-malabars);
//     position: relative;
//   }

//   .tree__leaves::after {
//     content: "";
//     position: absolute;
//     height: 100%;
//     left: -4px;
//     border-left: 4px solid transparent;
//     border-bottom: 32px solid rgba(0, 0, 0, 0.1);
//   }

//   .tree-1 { left: 66%; }
//   .tree-2 { left: 67%; }
//   .tree-3 { left: 56%; }
//   .tree-4 { left: 57%; }
//   .tree-5 { left: 58%; }
//   .tree-6 { left: 50%; }
//   .tree-7 { left: 51%; }
//   .tree-8 { left: 52%; }

//   .crane__list {
//     position: absolute;
//     width: var(--crane-width);
//     height: var(--crane-height);
//     bottom: 0;
//     z-index: 0;
//     list-style: none;
//     padding: 0;
//     margin: 0;
//     perspective: 600px;
//   }

//   .crane-1 { left: 20%; z-index: 10; }
//   .crane-2 { left: 40%; bottom: -1rem; z-index: -1; transform: scale(0.75) scaleX(-1); }
//   .crane-3 { left: 60%; bottom: -0.5rem; transform: scale(0.8); }

//   .crane__item {
//     position: absolute;
//     border: solid 1px var(--c-malabars);
//     border-radius: 2px;
//   }

//   .crane-cable {
//     border: none;
//     background: var(--c-malabars);
//     z-index: 0;
//   }

//   .crane-cable-1 {
//     width: 60%;
//     height: 1px;
//     top: 0;
//     left: 11%;
//     transform-origin: right 0;
//     animation: cable-1__movement 12s infinite alternate;
//   }

//   .crane-cable-2 {
//     width: 19%;
//     height: 1px;
//     top: 0;
//     right: 8%;
//     transform-origin: top left;
//     animation: cable-2__movement 12s infinite alternate;
//   }

//   .crane-cable-3 {
//     width: 1px;
//     height: 30%;
//     top: 22%;
//     left: 9%;
//     transform-origin: right center;
//     animation: cable-3__movement 12s ease-in-out infinite alternate;
//   }

//   .crane-cable-3::after {
//     content: "";
//     display: block;
//     position: absolute;
//     height: 0.2em;
//     width: 9000%;
//     bottom: 0;
//     left: -4500%;
//     background: rgba(178, 205, 175, 0.6);
//     border: 1px solid var(--c-malabars);
//   }

//   .crane-stand {
//     width: 5%;
//     height: 100%;
//     right: 25%;
//     z-index: 1;
//     background: linear-gradient(to top, var(--c-malabars), rgba(178, 205, 175, 0.7));
//   }

//   .crane-weight {
//     width: 8%;
//     height: 20%;
//     right: 4%;
//     top: 12%;
//     z-index: 2;
//     background: rgba(178, 205, 175, 0.7);
//     transform-origin: 0 center;
//     animation: crane-weight__movement 12s infinite alternate;
//   }

//   .crane-cabin {
//     width: 12%;
//     height: 9%;
//     right: 24%;
//     top: 20%;
//     z-index: 2;
//     background: rgba(178, 205, 175, 0.7);
//     animation: crane__movement 12s infinite alternate;
//   }

//   .crane-cabin::after {
//     content: "";
//     display: block;
//     position: absolute;
//     width: 100%;
//     height: 10%;
//     top: 60%;
//     left: 0;
//     background: var(--c-white);
//   }

//   .crane-arm {
//     width: 100%;
//     height: 7%;
//     top: 15%;
//     border-top-left-radius: 10px;
//     z-index: 3;
//     background: rgba(178, 205, 175, 0.7);
//     transform-origin: 80% center;
//     animation: crane__movement 12s infinite alternate;
//   }

//   @keyframes cable-1__movement {
//     0%, 20% { transform: rotateY(0) rotateZ(-10deg); }
//     70%, 100% { transform: rotateY(45deg) rotateZ(-10deg); }
//   }

//   @keyframes cable-2__movement {
//     0%, 20% { transform: rotateY(0) rotateZ(29deg); }
//     70%, 100% { transform: rotateY(15deg) rotateZ(29deg); }
//   }

//   @keyframes cable-3__movement {
//     0% { transform: translate(0, 0); height: 30%; }
//     20% { transform: translate(2500%, -18%); height: 30%; }
//     60% { transform: translate(11000%, -25%); height: 30%; }
//     70% { transform: translate(9100%, -25%); height: 30%; }
//     90%, 100% { transform: translate(9100%, -15%); height: 80%; }
//   }

//   @keyframes crane__movement {
//     0%, 20% { transform: rotateY(0); }
//     70%, 100% { transform: rotateY(45deg); }
//   }

//   @keyframes crane-weight__movement {
//     0%, 20% { transform: rotateY(0) translateX(0); }
//     70%, 100% { transform: rotateY(45deg) translateX(-50%); }
//   }

//   @media (max-width: 900px) {
//     .skyscrapper-2, .skyscrapper-3 { display: none; }
//     .crane-2 { display: none; }
//   }

//   @media (max-width: 768px) {
//     .tree-1, .tree-2 { display: none; }
//   }

//   @media (max-width: 450px) {
//     .tree-6, .tree-7, .tree-8 { display: none; }
//   }
// `;
// const TOTAL_TIME = 5 * 24 * 60 * 60 * 1000; // 5 days in ms
// const STORAGE_KEY = "ginjo_end_time";
// export default function Home() {
//   const [days, setDays] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     // Helper to set a new end time (persisted)
//     const createEndTime = () => {
//       const end = Date.now() + TOTAL_TIME;
//       localStorage.setItem(STORAGE_KEY, String(end));
//       return end;
//     };

//     // Read or create end time
//     let endTime = Number(localStorage.getItem(STORAGE_KEY));
//     if (!endTime || isNaN(endTime)) {
//       endTime = createEndTime();
//     }

//     // Convert ms to parts
//     const updateFromEndTime = (et) => {
//       const now = Date.now();
//       let distance = et - now;
//       if (distance <= 0) {
//         setDays(0); setHours(0); setMinutes(0); setSeconds(0);
//         return false;
//       }
//       const d = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
//       const m = Math.floor((distance / (1000 * 60)) % 60);
//       const s = Math.floor((distance / 1000) % 60);

//       setDays(d);
//       setHours(h);
//       setMinutes(m);
//       setSeconds(s);
//       return true;
//     };

//     // Initial render
//     updateFromEndTime(endTime);

//     // Timer tick (every 250ms for smoothness)
//     let lastNow = Date.now();
//     const tick = () => {
//       // Defensive: if storage had a different endTime (sync across tabs), use it.
//       const stored = Number(localStorage.getItem(STORAGE_KEY));
//       if (stored && !isNaN(stored) && stored !== endTime) {
//         endTime = stored;
//       }

//       // If system clock jumped drastically, re-sync endTime from stored value.
//       const now = Date.now();
//       const jump = Math.abs(now - lastNow - 250);
//       lastNow = now;
//       if (jump > 5000) {
//         // big jump detected (user changed system clock or resumed from sleep) — re-read stored endTime
//         const fresh = Number(localStorage.getItem(STORAGE_KEY)) || endTime;
//         endTime = fresh;
//       }

//       const stillHasTime = updateFromEndTime(endTime);
//       if (!stillHasTime) {
//         // Time finished — optionally remove storage to allow reset later
//         // localStorage.removeItem(STORAGE_KEY);
//       }
//     };

//     const interval = setInterval(tick, 250);

//     // Sync timer if another tab changes the end time
//     const onStorage = (e) => {
//       if (e.key === STORAGE_KEY) {
//         const newVal = Number(e.newValue);
//         if (!isNaN(newVal)) {
//           endTime = newVal;
//           updateFromEndTime(endTime);
//         }
//       }
//     };
//     window.addEventListener("storage", onStorage);

//     // When tab becomes visible again, update immediately
//     const onVisibility = () => updateFromEndTime(Number(localStorage.getItem(STORAGE_KEY)) || endTime);
//     document.addEventListener("visibilitychange", onVisibility);

//     // On unload (optional) ensure endTime persists (keeps continuity if you decide to create a new endTime logic)
//     const onBeforeUnload = () => {
//       // ensure stored; endTime should already be stored but this is defensive
//       localStorage.setItem(STORAGE_KEY, String(endTime));
//     };
//     window.addEventListener("beforeunload", onBeforeUnload);

//     return () => {
//       clearInterval(interval);
//       window.removeEventListener("storage", onStorage);
//       document.removeEventListener("visibilitychange", onVisibility);
//       window.removeEventListener("beforeunload", onBeforeUnload);
//     };
//   }, []);

//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: constructionStyles }} />

//       <main>
//         <div className="advice mt-10">
//           <div className="max-w-2xl w-full text-center relative z-10 px-6">
//             {/* Logo */}
//             <div className="mb-6">
//               <div className="inline-flex flex-col items-center gap-2">
//                 <div className="w-16 h-16 bg-gradient-to-br  rounded-2xl flex items-center justify-center shadow-lg text-white font-bold text-lg">
//                  <Image src="/LOGO.jpg" alt="Logo" className='rounded-2xl' width={100} height={100} />
//                 </div>
//                 <span className="text-lg font-semibold tracking-wide text-gray-700">GINJO CONSTRUCTION</span>
//               </div>
//             </div>

//             {/* Under Construction Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
//               <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
//               <span className="text-amber-700 text-xs font-medium tracking-wide uppercase">Under Construction</span>
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//               Something Great is Coming Soon
//             </h1>

//             {/* Tagline */}
//             <p className="text-white text-base md:text-lg font-medium mb-8">
//               Your Trusted Partner in Commercial Services and Procurement Excellence
//             </p>

//             {/* Feature Points */}
//             <div className="flex flex-col items-center gap-3 mb-8 text-white text-sm md:text-base">
//               <div className="flex items-center gap-2 justify-center">
//                 <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                 </svg>
//                 <span>Seamless Integration into Your Team - No Hiring Delays</span>
//               </div>
//               <div className="flex items-center gap-2 justify-center">
//                 <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                 </svg>
//                 <span>Optimised Procurement & Contract Management Strategies</span>
//               </div>
//               <div className="flex items-center gap-2 justify-center">
//                 <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                 </svg>
//                 <span>Cost and Risk Management for Maximum Efficiency</span>
//               </div>
//             </div>

//             {/* Countdown Timer */}
//             <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
//               {[
//                 { value: days, label: 'Days' },
//                 { value: hours, label: 'Hours' },
//                 { value: minutes, label: 'Minutes' },
//                 { value: seconds, label: 'Seconds' }
//               ].map((item, i) => (
//                 <div key={i} className="bg-white rounded-xl p-3 md:p-4 w-20 md:w-24 shadow-lg border border-gray-100">
//                   <div className="text-2xl md:text-3xl font-bold text-gray-800">
//                     {String(item.value).padStart(2, '0')}
//                   </div>
//                   <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">{item.label}</div>
//                 </div>
//               ))}
//             </div>

//             {/* Contact */}
//             <div className="bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-xl p-6 mb-8">
//               <div className="flex items-center gap-2 justify-center mb-4">
//                 <svg className="w-4 h-4 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 </svg>
//                 <span className="text-white text-xs md:text-sm">18th Floor, 100 Bishopsgate, London EC2N 4AG</span>
//               </div>

//               <div className="flex flex-wrap justify-center gap-4 md:gap-6">
//                 <a href="tel:+4407730748210" className="hover:text-teal-300 transition-colors flex items-center gap-2 text-white text-xs md:text-sm">
//                   <svg className="w-4 h-4 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                   +44 07730748210
//                 </a>
//                 <a href="mailto:info@ginjo.co.uk" className="hover:text-teal-300 transition-colors flex items-center gap-2 text-white text-xs md:text-sm">
//                   <svg className="w-4 h-4 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                   info@ginjo.co.uk
//                 </a>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="flex justify-center gap-3">
//               {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
//                 <a
//                   key={social}
//                   href="#"
//                   className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-300 hover:shadow-md transition-all"
//                 >
//                   <span className="sr-only">{social}</span>
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     {social === 'facebook' && <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>}
//                     {social === 'twitter' && <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>}
//                     {social === 'instagram' && <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>}
//                     {social === 'linkedin' && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>}
//                   </svg>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* City Animation Section */}
//         <section className="city-stuff">
//           <ul className="skyscrappers__list">
//             <li className="skyscrapper__item skyscrapper-1"></li>
//             <li className="skyscrapper__item skyscrapper-2"></li>
//             <li className="skyscrapper__item skyscrapper-3"></li>
//             <li className="skyscrapper__item skyscrapper-4"></li>
//             <li className="skyscrapper__item skyscrapper-5"></li>
//           </ul>

//           <ul className="tree__container">
//             <li className="tree__list">
//               {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
//                 <ul key={i} className={`tree__item tree-${i}`}>
//                   <li className="tree__trunk"></li>
//                   <li className="tree__leaves"></li>
//                 </ul>
//               ))}
//             </li>
//           </ul>

//           {[1, 2, 3].map(craneNum => (
//             <ul key={craneNum} className={`crane__list crane-${craneNum}`}>
//               <li className="crane__item crane-cable crane-cable-1"></li>
//               <li className="crane__item crane-cable crane-cable-2"></li>
//               <li className="crane__item crane-cable crane-cable-3"></li>
//               <li className="crane__item crane-stand"></li>
//               <li className="crane__item crane-weight"></li>
//               <li className="crane__item crane-cabin"></li>
//               <li className="crane__item crane-arm"></li>
//             </ul>
//           ))}
//         </section>
//       </main>
//     </>
//   );
// }







      'use client';

import Head from 'next/head'

import Hero from '../components/Hero'
import InsightsGrid from '../components/InsightsGrid'
import CareersSection from '../components/CareersSection'
import ProjectsCarousel from '../components/ProjectsCarousel'
import PeopleStoriesCarousel from '../components/PeopleStoriesCarousel'
import HowWeHelp from '../components/HowWeHelp'
import Testimonials from '@/components/Testimonials';
import Client from '@/components/Client';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <Head>
        <title>We transform together — TT clone</title>
        <meta name="description" content="Design-led Next.js + Tailwind clone of a professional consultancy homepage" />
      </Head>

      

      <main>
        <Hero
          title="We transform together."
          subtitle="Delivering complex projects and programmes across sectors with measurable outcomes."
          ctaText="Find out more"
          heroImage="/hero.jpg"
        />

  

   

    
 



<Testimonials />

<Services />



    
<InsightsGrid />
      
        <ProjectsCarousel />

       <HowWeHelp />
       <CareersSection />

       <PeopleStoriesCarousel />
<Client />

      </main>

      
    </>
  )
}