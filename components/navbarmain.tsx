"use client"
import { FC, useState } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export const Navbarmain: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-[60px] border-b border-gray-300 py-2 px-4 md:px-8 items-center justify-between">
      <div className="flex items-center">
        <Image src={"/logo.png"} alt="Logo" width={130} height={110} />
        <a href="/"> <h3  className="font-semibold text-xl text-white">SuperWOMEN</h3></a>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="h-6 w-6 text-white cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`md:flex flex-col md:flex-row md:items-center md:space-x-4 ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <ul className="flex  flex-col md:flex-row items-center space-y-4 md:space-y-0 space-x-4">
          <Link
            href={"/form"}
            className="cursor-pointer font-sans hover:text-white transition-colors"
          >
            Emergency-Contact
          </Link>
          <Link
            href={"/chatbot"}
            className="cursor-pointer font-sans hover:text-white transition-colors"
          >
            Chatbot
          </Link>
      

        {/* Report an Incident Button */}
        <Link
          href={"/incident"}
          className="py-1.5 rounded- text-white bg-red-600 px-5 rounded-md"
          type="button"
        >
          Report an incident
        </Link>

        {/* User Button */}
        <div>
          <UserButton afterSignOutUrl="/" />
        </div>
        </ul>
      </div>
    </div>
  );
};


/*
import logo from '../../images/logo.png'

const Navbaritems = ({title,classProps}) => {
  return(
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  )
}

function Navbar() {
  const [toggleMenu,setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className='w-32 cursor-pointer' />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market","Exchange","Tutorials","Wallets"].map((item,index)=>(
            <Navbaritems key={item + index} title = {item}/>
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {
          toggleMenu
          ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer " onClick={()=>setToggleMenu(false)}/>
          : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer " onClick={()=>setToggleMenu(true)}/>}
          {toggleMenu && (
            <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={()=>setToggleMenu(false)}/>
                {["Market","Exchange","Tutorials","Wallets"].map((item,index)=>(
            <Navbaritems key={item + index} title = {item} classProps="my-2 text-lg"/>
        ))}
              </li>
            </ul>
          )}
      </div>
    </nav>  
    )
}

export default Navbar



*/