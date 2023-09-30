

import { FC } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";


export const Navbarmain: FC = () => {
  return (
    <div className=" flex h-[60px] border-b border-gray-300 py-2 px-8 items-center justify-between">
      <div className=" flex items-center">
        <Image src={"/logo.png"} alt="Logo" width={130} height={110} />
        <h3 className=" font-semibold text-xl text-white ">SuperWOMEN</h3>
      </div>
      <div className="self-center mr-0 md:mr-16 sm:mr-28">
        <ul className="flex items-center  space-x-4 ">
          <Link
            href={"/locations"}
            className="cursor-pointer  self-center hover:text-white ftransition-colors "
          >
            Locations
          </Link>
          <Link
            href={"/docs"}
            className="cursor-pointer font-sans self-center hover:text-white transition-colors "
          >
            Docs
          </Link>
          <Link
            href={"/chatbot"}
            className="cursor-pointer font-sans self-center hover:text-white transition-colors "
          >
            Chatbot
          </Link>
        </ul>
      </div>
      <div className="flex items-center space-x-2">
        <Link href={'/incident'} className="py-2 rounded-2xl text-white bg-red-600 px-8 " type="button">
          Report an incident
        </Link>
        <div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};
