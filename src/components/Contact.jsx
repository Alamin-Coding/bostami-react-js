import React from 'react'

const Contact = () => {
  return (
   <div
   className="tab_item hidden bg-slate-50 dark:bg-[#111111] rounded-xl mb-14"
 >
   <div className="pt-16 px-12 mt-8">
     <div>
       <h2
         className="text-4xl text-slate-900 font-roboto-slab dark:text-slate-50 font-bold relative after:contents[] after:w-36 after:h-[2px] after:bg-primary after:absolute after:top-1/2 -translate-y-1/2 after:right-8 after:left-52"
       >
         Contact
       </h2>
     </div>
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
       <div className="flex gap-4">
         <div>
           <img src="/images/phone-call 1.png" alt="alter">
         </div>
         <div>
           <h3 className="pb-2 text-xl font-semibold dark:text-white">Phone</h3>
           <p className="inline-flex flex-col gap-1">
             <a className="text-gray-lite text-lg dark:text-[#A6A6A6] " href="tel:+452666386">+452 666 386</a>
             <a className="text-gray-lite text-lg dark:text-[#A6A6A6] " href="tel:+654764878">+654 764 878</a>
           </p>
         </div>
       </div>
       <div className="flex gap-4">
         <div>
           <img src="/images/email 1.png" alt="alter">
         </div>
         <div>
           <h3 className="pb-2 text-xl font-semibold dark:text-white">Email</h3>
           <p className="inline-flex flex-col gap-1">
             <a className="text-gray-lite text-lg dark:text-[#A6A6A6] " href="mailto:ibthemes@gmail.com"
               >ibthemes@gmail.com</a
             >
             <a className="text-gray-lite text-lg dark:text-[#A6A6A6] " href="mailto:mailto:xyz@abc.com"
               >mailto:xyz@abc.com</a
             >
           </p>
         </div>
       </div>
     </div>
     <div className="pt-6 lg:pt-20">
       <p className="text-2xl text-slate-700 dark:text-slate-100">
         I'm always open to discussing product
       </p>
       <p
         className="text-2xl text-slate-900 dark:text-slate-100 font-medium"
       >
         design work or partnerships.
       </p>
       <form id="myForm">
         <div className="relative z-0 w-full mt-[40px] mb-8 group">
           <input
             type="text"
             name="name"
             className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
             placeholder=" "
             required=""
           /><label
             for="name"
             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
             >Name *</label
           >
         </div>
         <div className="relative z-0 w-full mb-8 group">
           <input
             type="email"
             name="user_email"
             className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
             placeholder=" "
             id="user_email"
             required=""
           /><label
             for="user_email"
             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
             >Email *</label
           >
         </div>
         <div className="relative z-0 w-full mb-8 group">
           <input
             type="text"
             name="message"
             className="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
             placeholder=" "
             id="message"
             required=""
           /><label
             for="message"
             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
             >Message *</label
           >
         </div>
         <div
           className="transition-all duration-300 ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg mt-3"
         >
           <input
             type="submit"
             className="transition ease-in duration-200 font-semibold cursor-pointer border-color-910 hover:border-transparent px-6 py-2 rounded-lg border-[2px] hover:text-white dark:text-white"
             value="Submit"
           />
         </div>
       </form>
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

export default Contact
