import React from 'react'

const Resume = () => {
  return (
   <div
   className="tab_item hidden bg-slate-50 dark:bg-[#111111] rounded-xl mb-14"
 >
   <div className="pt-16 px-12 mt-8">
     <div>
       <h2
         className="text-4xl text-slate-900 font-roboto-slab dark:text-slate-50 font-bold relative after:contents[] after:w-36 after:h-[2px] after:bg-primary after:absolute after:top-1/2 -translate-y-1/2 after:right-8 after:left-52"
       >
         Resume
       </h2>
     </div>

     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
       <div>
         <h3 className="text-3xl dark:text-white font-medium pb-6">
           Education
         </h3>
         <div className="grid grid-cols-1 gap-6">
           <div
             className="bg-yellow-50 dark:bg-mid-dark py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2"
           >
             <span className="text-sm text-slate-400">2021-2023</span>
             <h4
               className="text-xl font-medium text-slate-800 dark:text-slate-100"
             >
               Ph.D in Horriblensess
             </h4>
             <p
               className="text-base font-normal text-slate-700 dark:text-slate-200"
             >
               ABC University, Los Angeles, CA
             </p>
           </div>
           <div
             className="bg-rose-50 dark:bg-mid-dark py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2"
           >
             <span className="text-sm text-slate-400"
               >2019 - Present</span
             >
             <h4
               className="text-xl font-medium text-slate-800 dark:text-slate-100"
             >
               Sr. Software Tester
             </h4>
             <p
               className="text-base font-normal text-slate-700 dark:text-slate-200"
             >
               Google Inc.
             </p>
           </div>
           <div
             className="bg-indigo-50 dark:bg-mid-dark py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2"
           >
             <span className="text-sm text-slate-400">2021</span>
             <h4
               className="text-xl font-medium text-slate-800 dark:text-slate-100"
             >
               Best Developer
             </h4>
             <p
               className="text-base font-normal text-slate-700 dark:text-slate-200"
             >
               University Of Melbourne, NA
             </p>
           </div>
         </div>
       </div>
       <div>
         <h3 className="text-3xl dark:text-white font-medium pb-6">
           Experience
         </h3>
         <div className="grid grid-cols-1 gap-6">
           <div
             className="bg-cyan-50 dark:bg-mid-dark py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2"
           >
             <span className="text-sm text-slate-400">2017-2021</span>
             <h4
               className="text-xl font-medium text-slate-800 dark:text-slate-100"
             >
               Computer Science
             </h4>
             <p
               className="text-base font-normal text-slate-700 dark:text-slate-200"
             >
               Imperialize Technical Institute
             </p>
           </div>
           <div
             className="bg-pink-50 dark:bg-mid-dark py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2"
           >
             <span className="text-sm text-slate-400">2015-2017</span>
             <h4
               className="text-xl font-medium text-slate-800 dark:text-slate-100"
             >
               Cr. Web Developer
             </h4>
             <p
               className="text-base font-normal text-slate-700 dark:text-slate-200"
             >
               ib-themes ltd.
             </p>
           </div>
           <div
             className="bg-green-50 dark:bg-mid-dark py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2"
           >
             <span className="text-sm text-slate-400">2008</span>
             <h4
               className="text-xl font-medium text-slate-800 dark:text-slate-100"
             >
               Best Writter
             </h4>
             <p
               className="text-base font-normal text-slate-700 dark:text-slate-200"
             >
               Online Typodev Soluation Ltd.
             </p>
           </div>
         </div>
       </div>
     </div>
     <div
       className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 lg:pt-12"
     >
       <div>
         <h3 className="text-3xl dark:text-white font-medium pb-8">
           Working Skills
         </h3>
         <div className="pb-8">
           <p
             className="text-slate-500 pb-1 flex justify-between items-center text-base dark:texl-slate-100"
           >
             <span>Web Design</span>
             <span>80%</span>
           </p>
           <div
             className="w-full h-[3px] bg-slate-300 rounded relative after:contents-[] after:w-[80%] after:h-full after:bg-red-400 after:absolute after:top-0 after:left-0 after:rounded"
           ></div>
         </div>
         <div className="pb-8">
           <p
             className="text-slate-500 pb-1 flex justify-between items-center text-base dark:texl-slate-100"
           >
             <span>Mobile App</span>
             <span>95%</span>
           </p>
           <div
             className="w-full h-[3px] bg-slate-300 rounded relative after:contents-[] after:w-[95%] after:h-full after:bg-yellow-400 after:absolute after:top-0 after:left-0 after:rounded"
           ></div>
         </div>
         <div className="pb-8">
           <p
             className="text-slate-500 pb-1 flex justify-between items-center text-base dark:texl-slate-100"
           >
             <span>Illustrator</span>
             <span>66%</span>
           </p>
           <div
             className="w-full h-[3px] bg-slate-300 rounded relative after:contents-[] after:w-[66%] after:h-full after:bg-cyan-500 after:absolute after:top-0 after:left-0 after:rounded"
           ></div>
         </div>
         <div className="pb-8">
           <p
             className="text-slate-500 pb-1 flex justify-between items-center text-base dark:texl-slate-100"
           >
             <span>Photoshop</span>
             <span>75%</span>
           </p>
           <div
             className="w-full h-[3px] bg-slate-300 rounded relative after:contents-[] after:w-[75%] after:h-full after:bg-purple-400 after:absolute after:top-0 after:left-0 after:rounded"
           ></div>
         </div>
       </div>
       <div>
         <h3 className="text-3xl dark:text-white font-medium pb-8">
           knowledge's
         </h3>
         <div className="flex flex-wrap gap-4">
           <button
             className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300"
           >
             Digital Design
           </button>
           <button
             className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300"
           >
             Marketing
           </button>
           <button
             className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300"
           >
             Social Media
           </button>
           <button
             className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300"
           >
             Print
           </button>
           <button
             className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300"
           >
             Time Management
           </button>
           <button
             className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300"
           >
             Flexibility
           </button>
           <button
             className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300"
           >
             Print
           </button>
           <button
             className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300"
           >
             Time Management
           </button>
           <button
             className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300"
           >
             Flexibility
           </button>
           <button
             className="text-base rounded-md py-1 px-3 bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300"
           >
             Print
           </button>
         </div>
       </div>
     </div>
   </div>
   <div
     className="dark:bg-black p-6 text-center mt-8 rounded-br-xl rounded-bl-xl"
   >
     <p className="text-slate-800 dark:text-slate-50">
       &#169; <span id="year"></span> All Rights Reserved by
       ib-themes.
     </p>
   </div>
 </div>
  )
}

export default Resume
