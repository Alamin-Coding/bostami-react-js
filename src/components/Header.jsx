import { useState } from 'react';

import {BsFillCloudMoonFill, BsFillCloudSunFill} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

const Header = () => {
  const [theme, setTheme] = useState(true)
  const [menu, setMenu] = useState(false)
  const element = document.documentElement

  const handleColorSwitcher = () => {
    if (theme) {
      element.classList.add("dark")
      console.log(theme);
    }else{
      element.classList.remove("dark")
      console.log(theme);
    }
    setTheme(!theme)
    
  }


  const handleMenu = () => {
    setMenu(!menu)
  }






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
       <button
          onClick={handleColorSwitcher}
         className="inline-flex items-center justify-center darkmode w-10 h-10 rounded-full cursor-pointer bg-slate-100 hover:bg-primary hover:text-slate-50 text-2xl"
       >
        {!theme ? <BsFillCloudMoonFill/> : <BsFillCloudSunFill/>}
        
       </button>
       <button
          onClick={handleMenu}
         className="text-2xl lg:hidden w-10 h-10 rounded-full bg-primary text-slate-50 inline-flex items-center justify-center cursor-pointer"
       >
        {!menu? <FaBars/> : <AiOutlineClose/>}    
       </button>
     </div>
   </div>
 </nav>
  )
}

export default Header
