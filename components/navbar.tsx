
import { FC } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export const Navbar: FC = () => {
  return (
    <div className="flex h-[60px] border-b border-gray-300 py-2 px-8 items-center justify-between">
      <div className=" flex items-center">
      <Image src={"/logo.png"} alt="Logo" width={100} height={80}/>
      <h3 className=" font-semibold text-xl text-[#a2d2ff] ">SuperWOMEN</h3>
      </div>
      <div className="self-center mr-0 md:mr-16 sm:mr-28">
        <ul className="flex items-center space-x-4 ">
            <Link href={'/locations'} className="cursor-pointer font-sans self-center hover:text-blue-400 transition-colors ">Locations</Link>
            <Link href={'/docs'} className="cursor-pointer font-sans self-center hover:text-blue-400 transition-colors ">Docs</Link>
            <Link href={'/chatbot'} className="cursor-pointer font-sans self-center hover:text-blue-400 transition-colors ">Chatbot</Link>
        </ul>
</div>
      <div className="flex items-center space-x-2">
        <Button variant={"destructive"} size={"sm"} type="button" >Report an incident</Button>
        <div>
            <UserButton afterSignOutUrl="/"/></div>
        
      </div>
      
    </div>
  );
};