
import {BsFillCloudMoonFill, BsFillCloudSunFill} from 'react-icons/bs'

const Header = () => {
  return (
   <nav className="py-5 lg:py-12 bg-gray-900 dark:bg-black lg:bg-transparent">
   <div
     className="container grid grid-cols-[auto_1fr] justify-between items-center"
   >
     <div>
       <a href="/">
         <img src="/images/logo.png" alt=" website logo" />
       </a>
     </div>
     <div className="text-right flex items-center justify-end gap-3">
       <span
         className="inline-flex items-center justify-center darkmode w-10 h-10 rounded-full cursor-pointer bg-slate-100 hover:bg-primary hover:text-slate-50 text-2xl"
       >
        <BsFillCloudMoonFill/>
        {/* BsFillCloudSunFill */}
        
       </span>
       <span
         className="bars lg:hidden w-10 h-10 rounded-full bg-primary text-slate-50 inline-flex items-center justify-center cursor-pointer"
       >
         
       </span>
     </div>
   </div>
 </nav>
  )
}

export default Header
