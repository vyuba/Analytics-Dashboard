
import './App.css'
// import Header from "./Header"
import Menu from "./Menu"
import MenuSection from "./MainSection"
import { useState } from 'react';

function App() {
  const [menuIsOpen, setmenuIsOpen] = useState(false);
  const toggleMenu = ()=>{
    console.log('clicked')
    setmenuIsOpen(prev => !prev)
  }
  return (
    <>
    <div className='flex'>
    <Menu 
    menu={menuIsOpen}
    />
    <MenuSection 
    toggle={toggleMenu}
    />
    </div>
    </>
  )
}

export default App
