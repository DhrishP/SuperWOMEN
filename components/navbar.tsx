import { FC } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export const Navbar: FC = () => {
  return (
    <div className="flex h-[60px] border-b border-gray-300 py-2 px-8 items-center justify-between">
      <div className=" flex items-center">
        <Image src={"/logo.png"} alt="Logo" width={100} height={100} />
        <h2 className=" font-serif font-extrabold text-15xl text-[#ffffff] ">
          SuperWOMEN
        </h2>
      </div>
      <div className="self-center mr-0 md:mr-16 sm:mr-28">
        <ul className="flex items-center space-x-4 ">
          <Link
            href={"/locations"}
            className="cursor-pointer font-sans self-center hover:text-white transition-colors ">
            Locations
          </Link>
          <Link
            href={"/docs"}
            className="cursor-pointer font-sans self-center hover:text-white transition-colors ">
            Docs
          </Link>
          <Link
            href={"/chatbot"}
            className="cursor-pointer font-sans self-center text-5xl hover:text-white transition-colors ">
            Chatbot
          </Link>
        </ul>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant={"destructive"} size={"sm"} type="button">
          Report an incident
        </Button>
        <div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};
