import React from 'react'

const MainMenu = () => {
  return (
   <div className="text-right -mt-10 hidden lg:block">
   <ul
     className="md:inline-flex gap-4 py-6 px-10 rounded-3xl bg-slate-50 dark:bg-black menu"
   >
     <li>
       <a
         href="/"
         className="text-slate-900 w-20 hover:text-slate-50 text-1xl py-4 rounded-xl flex items-center flex-col justify-center hover:hover_active bg-light-gray dark:bg-mid-dark dark:text-slate-100 active"
       >
         <i className="fa-solid fa-house"></i>
         Home
       </a>
     </li>
     <li>
       <a
         href="/"
         className="text-slate-900 w-20 hover:text-slate-50 text-1xl py-4 rounded-xl flex items-center flex-col justify-center bg-light-gray dark:bg-mid-dark dark:text-slate-100 hover:hover_active"
       >
         <i className="fa-regular fa-file-lines"></i>
         Resume
       </a>
     </li>
     <li>
       <a
         href="/"
         className="text-slate-900 w-20 hover:text-slate-50 text-1xl py-4 rounded-xl flex items-center flex-col justify-center bg-light-gray dark:bg-mid-dark dark:text-slate-100 hover:hover_active"
       >
         <i className="fa-brands fa-hive"></i>
         Works
       </a>
     </li>
     <li>
       <a
         href="/"
         className="text-slate-900 w-20 hover:text-slate-50 text-1xl py-4 rounded-xl flex items-center flex-col justify-center bg-light-gray dark:bg-mid-dark dark:text-slate-100 hover:hover_active"
       >
         <i className="fa-brands fa-blogger"></i>
         Blogs
       </a>
     </li>
     <li>
       <a
         href="/"
         className="text-slate-900 w-20 hover:text-slate-50 text-1xl py-4 rounded-xl flex items-center flex-col justify-center bg-light-gray dark:bg-mid-dark dark:text-slate-100 hover:hover_active"
       >
         <i className="fa-regular fa-address-book"></i>
         Contact
       </a>
     </li>
   </ul>
 </div>
  )
}

export default MainMenu
