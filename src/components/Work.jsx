import React from 'react'

const Work = () => {
  return (
   <div
   className="tab_item hidden bg-slate-50 dark:bg-[#111111] rounded-xl mb-14"
 >
   <div className="pt-16 px-12 mt-8">
     <div>
       <h2
         className="text-4xl text-slate-900 font-roboto-slab dark:text-slate-50 font-bold relative after:contents[] after:w-36 after:h-[2px] after:bg-primary after:absolute after:top-1/2 -translate-y-1/2 after:right-8 after:left-52"
       >
         Work
       </h2>
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

export default Work
