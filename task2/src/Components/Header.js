import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){
   const [toggleMenu, setToggleMenu] = useState(false);

    return <header className="flex justify-between px-5 py-2 bg-primary"> 
        <a  className=" font-bold text-black" href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1&nlr=1">SaranKumar</a>
       <nav className="hidden md:block">
        <ul className="flex text-white" >
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#rrsss">Resume</a></li>
            <li><a href="#contact">contact</a></li>
        </ul>
        </nav>
        { toggleMenu  && <nav className="block md:hidden mobile-nav">
        <ul className="flex flex-col text-white" >
            <li><a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1&nlr=1">Home</a></li>
            <li><a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1&nlr=1">About</a></li>
            <li><a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1&nlr=1">Projects</a></li>
            <li><a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1&nlr=1">contact</a></li>
        </ul>
        </nav>}
        <button onClick={()=>setToggleMenu(!toggleMenu)}className='block md:hidden'>< Bars3Icon className='text-white h-6'/></button>
    </header>
}
