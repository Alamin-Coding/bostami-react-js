import React from 'react'
import About from './About'
import MainMenu from './MainMenu'

const MainContent = () => {
  return (
    <div className='col-span-12 lg:col-span-8 rounded-2xl'>
      <MainMenu></MainMenu>
      <About></About>
    </div>
  )
}

export default MainContent
