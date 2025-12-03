// import { ChevronRight } from 'lucide-react';

// export default function InsightsGrid() {
  

//   return (
//    <div className="grid grid-cols-5 grid-rows-10 gap-4 mt-5">
//     <div className="col-span-4 row-span-5">

//        <div className="bg-gradient-to-b from-blue-900 to-blue-800 rounded-2xl overflow-hidden h-full relative group cursor-pointer">
//               <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1581092918484-8987c1d64718?w=1200&h=500&fit=crop)'}}></div>
//               <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
              
//               <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
//                 <p className="text-sm font-semibold uppercase tracking-wide mb-2 opacity-90">INSIGHTS</p>
//                 <h1 className="text-4xl font-bold mb-6">Data centre construction cost index 2025-2026</h1>
                
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white"></div>
//                     <div>
//                       <p className="font-semibold text-white">Daniel Ginn</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2 text-white/80 text-sm">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
//                       <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
//                     </svg>
//                     <span>1 minute</span>
//                   </div>
//                 </div>
//                 </div>
//                 </div>
//     </div>


//     <div className="col-span-2 row-span-2 col-start-1 row-start-6">
//      <div className="bg-gray-200 rounded-2xl p-8 group cursor-pointer">
//             <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-3">NEWS</p>
//             <h3 className="text-2xl font-bold text-gray-900 mb-auto">Canadian Government selects Turner & Townsend</h3>
//             <div className="flex items-center justify-between mt-6">
//               <div className="flex items-center gap-2 text-gray-600 text-sm">
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
//                   <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
//                 </svg>
//                 <span>2 minutes</span>
//               </div>
//               <div className="opacity-0 group-hover:opacity-100 transition-opacity">
//                 <ChevronRight className="w-5 h-5 text-gray-600" />
//               </div>
//             </div>
//           </div>
//       </div>
//     <div className="col-span-2 row-span-2 col-start-1 row-start-8">
//        <div className="bg-gray-200 rounded-2xl p-8 group cursor-pointer">
//             <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-3">NEWS</p>
//             <h3 className="text-2xl font-bold text-gray-900 mb-auto">Canadian Government selects Turner & Townsend</h3>
//             <div className="flex items-center justify-between mt-6">
//               <div className="flex items-center gap-2 text-gray-600 text-sm">
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
//                   <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
//                 </svg>
//                 <span>2 minutes</span>
//               </div>
//               <div className="opacity-0 group-hover:opacity-100 transition-opacity">
//                 <ChevronRight className="w-5 h-5 text-gray-600" />
//               </div>
//             </div>
//           </div>
//     </div>
//     <div className="row-span-5 col-start-5 row-start-1">  <div>
//             <div className="bg-gray-200 rounded-2xl overflow-hidden h-[32rem] group cursor-pointer">
//               <div className="p-6 flex flex-col h-full">
//                 <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-3">INSIGHTS</p>
//                 <h2 className="text-2xl font-bold text-gray-900 mb-auto">Digital first project management consultancy</h2>
                
//                 <div className="mt-4">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-2">
//                       <div className="w-10 h-10 rounded-full bg-gray-300"></div>
//                       <span className="text-sm font-semibold text-gray-900">Siti Norman</span>
//                     </div>
//                     <div className="opacity-0 group-hover:opacity-100 transition-opacity">
//                       <ChevronRight className="w-5 h-5 text-gray-600" />
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2 text-gray-600 text-sm">
//                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
//                       <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
//                     </svg>
//                     <span>6 minutes</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             </div></div>



            
//     <div className="col-span-2 row-span-5 col-start-3 row-start-6">
//  <div className="bg-gray-200 rounded-2xl overflow-hidden group cursor-pointer">
//             <div className="p-8 h-64 flex flex-col">
//               <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-3">INSIGHTS</p>
//               <h3 className="text-2xl font-bold text-gray-900">Navigating procurement of complex labs</h3>
//               <div className="flex items-center justify-between mt-auto pt-4">
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-full bg-gray-400"></div>
//                   <span className="text-sm font-semibold text-gray-900">Vincent Kane</span>
//                 </div>
//               </div>
//             </div>
//             <div className="h-40 bg-gradient-to-t from-blue-400 to-blue-300"></div>
//             <div className="px-8 py-4 bg-white">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2 text-gray-600 text-sm">
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
//                     <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
//                   </svg>
//                   <span>7 minutes</span>
//                 </div>
//                 <div className="opacity-0 group-hover:opacity-100 transition-opacity">
//                   <ChevronRight className="w-5 h-5 text-gray-600" />
//                 </div>
//               </div>
//             </div>
//           </div>


//     </div>
//     <div className="row-span-6 col-start-5 row-start-6">
//        <div className="bg-gray-200 rounded-2xl overflow-hidden group cursor-pointer">
//             <div className="p-8 h-40 flex flex-col">
//               <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-3">INSIGHTS</p>
//               <h3 className="text-2xl font-bold text-gray-900">How programmes transform defence delivery</h3>
//               <div className="flex items-center gap-3 mt-4">
//                 <div className="w-8 h-8 rounded-full bg-gray-400"></div>
//                 <span className="text-sm font-semibold text-gray-900">Liam Hale</span>
//               </div>
//             </div>
//             <div className="h-32 bg-gray-500"></div>
//             <div className="px-8 py-4 bg-white">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2 text-gray-600 text-sm">
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
//                     <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
//                   </svg>
//                   <span>5 minutes</span>
//                 </div>
//                 <div className="opacity-0 group-hover:opacity-100 transition-opacity">
//                   <ChevronRight className="w-5 h-5 text-gray-600" />
//                 </div>
//               </div>
//             </div>
//           </div>
//     </div>
// </div>
//   )
// }

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { CiCircleChevRight } from "react-icons/ci";

export default function InsightsGrid() {
  return (
    <div className="px-4 md:px-6 mb-10">
      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-5 grid-rows-10 gap-4 mt-5">
        <div className="col-span-4 row-span-5">
          <div className=" rounded-2xl overflow-hidden h-full relative group cursor-pointer">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://www.turnerandtownsend.com/media/3wbd4kl2/untitled-1.webp?width=1000&height=500&v=1dc4e3c50034c70'}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-wide mb-2 opacity-90">INSIGHTS</p>
              <h1 className="text-4xl font-bold mb-6">Why Value Engineering Fails (and What to Do Instead)</h1>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white">
                  <img src="https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Image-5-scaled-e1761411869601.jpg" className="w-full h-full object-cover rounded-full" alt="" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Rishi Rao</p>
                  </div>
                </div>
              <Link href={'/insights/2'}>  <div className="flex items-center gap-2 text-white/80 text-sm">
                  <CiCircleChevRight className='text-5xl' />
                  <span>1 minute</span>
                </div></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-2 col-start-1 row-start-6">
          <div className="bg-[#bac6c7] rounded-2xl p-8 group cursor-pointer h-full border border-custom-grey">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-3">NEWS</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-auto">Why Forecasts Miss the Mark (and How to Improve Them)</h3>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2  text-gray-600 text-sm">
                <span>2 minutes</span>
                
              </div>
             <Link href={'/insights/1'}> <div className="">
                <CiCircleChevRight className='text-5xl' />
              </div> </Link>
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-2 col-start-1 row-start-8">
          <div className="bg-[#bac6c7] rounded-2xl p-8 group cursor-pointer h-full border border-custom-grey">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-3">Project</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-auto">HS2 Phase 1 - London, United Kingdom</h3>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
               
                <span>2 minutes</span>
              </div>
             <Link href={'case-studies/2'}> <div className="">
                 <CiCircleChevRight className='text-5xl' />
              </div></Link>
            </div>
          </div>
        </div>

        <div className="row-span-5 col-start-5 row-start-1">
  <div className="bg-[#bac6c7] rounded-2xl overflow-hidden h-full cursor-pointer flex flex-col">
    
    {/* Top Section */}
    <div className="p-6 flex flex-col">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-700">
        INSIGHTS
      </p>

      <h2 className="text-[28px] leading-tight font-bold text-gray-900 mt-2">
       Why Procurement <br />Delays Derail  <br /> Projects <br /> 
      </h2>

      {/* Author + Time */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
              <img
                src="https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Image-5-scaled-e1761411869601.jpg"
                className="w-full h-full object-cover"
                alt="Author"
              />
            </div>
            <span className="text-sm font-semibold text-gray-900">
              Rishi Rao
            </span>
          </div>

          
        </div>

       <Link href={'/insights/3'}> <div className="flex items-center justify-between gap-2 text-gray-700 text-sm">
          <span>6 minutes</span>
          <CiCircleChevRight className='text-5xl' />
        </div></Link>
      </div>
    </div>

    {/* Bottom Image */}
    <div className="h-48 w-full">
      <img
        src="https://www.turnerandtownsend.com/media/mgadwrke/istock-1337399619.webp?rxy=0.49814177763564743,0.4214542295862441&width=1000&height=500&v=1dc522266c82270"
        className="w-full h-full object-cover"
        alt="Construction"
      />
    </div>
  </div>
</div>


        <div className="col-span-2 row-span-5 col-start-3 row-start-6">
  <div className="bg-[#bac6c7] rounded-2xl overflow-hidden group cursor-pointer h-full flex flex-col">

    {/* Top Card Content */}
    <div className="p-8 pb-10">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-700">
        INSIGHTS
      </p>

      <h3 className="text-[28px] leading-tight font-bold text-gray-900 mt-2">
        Why Final  <br /> Accounts Drag On  <br /> (and Drain Profit)
      </h3>

      {/* Author + Circle Button */}
      <div className="flex items-center justify-between mt-6">
        <span className="text-sm font-semibold text-gray-900">
          Rishi Rao
        </span>

       
      </div>

      {/* Time Row */}
     <Link href={'insights/4'} ><div className="flex items-center justify-between gap-2 text-gray-700 text-sm mt-4">
       
        <span>7 minutes</span>
        <CiCircleChevRight className='text-5xl' />
      </div></Link>
    </div>

    {/* Bottom Image */}
    <div className=" w-full">
      <img
        src="https://www.turnerandtownsend.com/media/13uhcgag/high-containment-lab-hero.webp?rxy=0.47972980751519617,0.18905686666819482&width=1000&height=500&v=1dc48cd5f8e5050"
        className="w-full h-full object-cover"
        alt="Laboratory"
      />
    </div>

  </div>
</div>


        <div className="row-span-6 col-start-5 row-start-6">
          <div className="bg-[#bac6c7] rounded-2xl overflow-hidden h-full cursor-pointer flex flex-col">
    
    {/* Top Section */}
    <div className="p-6 flex flex-col">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-700">
        Project
      </p>

      <h2 className="text-[28px] leading-tight font-bold text-gray-900 mt-2">
        Groundworks - <br />  Midlands  <br /> Mixed-Use  <br /> Scheme
      </h2>

      {/* Author + Time */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300"> */}
              {/* <img
                src="https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Image-5-scaled-e1761411869601.jpg"
                className="w-full h-full object-cover"
                alt="Author"
              /> */}
            {/* </div> */}
            {/* <span className="text-sm font-semibold text-gray-900">
              Siti Norman
            </span> */}
          </div>

        </div>

        <Link href={'/case-studies/9'}><div className="flex items-center justify-between gap-2 text-gray-700 text-sm">
         
          <span>6 minutes</span>
          <CiCircleChevRight className='text-5xl' />
        </div></Link>
      </div>
    </div>

    {/* Bottom Image */}
    <div className="h-full w-full">
      <img
        src="https://www.turnerandtownsend.com/media/mgadwrke/istock-1337399619.webp?rxy=0.49814177763564743,0.4214542295862441&width=1000&height=500&v=1dc522266c82270"
        className="w-full h-full object-cover"
        alt="Construction"
      />
    </div>
  </div>
        </div>
      </div>













      {/* Tablet & Mobile Grid */}
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {/* Featured Article */}
        <div className="md:col-span-2">
          <div className=" rounded-2xl overflow-hidden relative group cursor-pointer h-80">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://www.turnerandtownsend.com/media/3wbd4kl2/untitled-1.webp?width=1000&height=500&v=1dc4e3c50034c70'}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-wide mb-2 opacity-90">INSIGHTS</p>
             <Link href={'insights/2'}> <h1 className="text-2xl md:text-3xl font-bold mb-4">Why Value Engineering Fails (and What to Do Instead)</h1></Link>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white">
                  <img src="https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Image-5-scaled-e1761411869601.jpg" className="w-full h-full object-cover rounded-full" alt="" /></div>
                  <div>
                    <p className="font-semibold text-white text-sm">Rishi Rao</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-xs">
                 
                  <span>1 minute</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 1 */}
        <div className="bg-[#bac6c7] rounded-2xl p-6 group cursor-pointer border border-custom-grey">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-3">NEWS</p>
          <h3 className="text-xl font-bold text-gray-900 mb-auto line-clamp-3">Why Forecasts Miss the Mark (and How to Improve Them)</h3>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
              </svg>
              <span>2 minutes</span>
           </div>
           <Link href={'/insights/1'}> 
              <CiCircleChevRight className='text-5xl' />
          </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-200 hidden rounded-2xl p-6 group cursor-pointer">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-3">NEWS</p>
          <h3 className="text-xl font-bold text-gray-900 mb-auto line-clamp-3">Canadian Government selects Turner & Townsend</h3>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
              </svg>
              <span>2 minutes</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="md:col-span-2 mb-5 lg:mb-0 bg-[#bac6c7] rounded-2xl overflow-hidden group cursor-pointer">
          <div className="p-6 flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-3">INSIGHTS</p>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Why Final
Accounts Drag On
(and Drain Profit)</h2>
            
            <div className="mt-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gray-300">

                <img
                src="https://lavenderblush-dog-942964.hostingersite.com/wp-content/uploads/2025/10/Image-5-scaled-e1761411869601.jpg"
                className="w-full h-full object-cover"
                alt="Author"
              />
                  </div>
                  <span className="text-sm font-semibold text-gray-900">Rishi Rao</span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 text-gray-600 text-sm">
                <span>6 minutes</span>
                <Link href={'/insights/4'}> <CiCircleChevRight className='text-5xl' /></Link>
              </div>
            </div>
          </div>
                <img
                src="https://www.turnerandtownsend.com/media/mgadwrke/istock-1337399619.webp?rxy=0.49814177763564743,0.4214542295862441&width=1000&height=500&v=1dc522266c82270"
                className="w-full h-full object-cover"
                alt="Author"
              />
        </div>

        {/* Card 4 */}
        <div className="bg-gray-200 hidden rounded-2xl overflow-hidden group cursor-pointer">
          <div className="p-6 flex flex-col h-full">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-3">INSIGHTS</p>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Navigating procurement of complex labs</h3>
            <div className="flex items-center gap-2 mt-auto">
              <div className="w-8 h-8 rounded-full bg-gray-400"></div>
              <span className="text-sm font-semibold text-gray-900">Vincent Kane</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm mt-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
              </svg>
              <span>7 minutes</span>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-gray-200 hidden rounded-2xl overflow-hidden group cursor-pointer">
          <div className="p-6 flex flex-col h-full">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-3">INSIGHTS</p>
            <h3 className="text-xl font-bold text-gray-900 mb-4">How programmes transform defence delivery</h3>
            <div className="flex items-center gap-2 mt-auto">
              <div className="w-8 h-8 rounded-full bg-gray-400"></div>
              <span className="text-sm font-semibold text-gray-900">Liam Hale</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm mt-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
              </svg>
              <span>5 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}