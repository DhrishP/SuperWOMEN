"use client"
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "@/app/(root)/root.css";
import { Siren, Bot, File, Shield, Lock } from "lucide-react";
import {useUser} from '@clerk/nextjs'
import { useRouter } from "next/navigation";
import DialogForm from "./ui/dialog-form";
const Landing = () => {
  const {isSignedIn} = useUser()
  const router = useRouter()
  const HandleClick = () =>{
    console.log(isSignedIn)
   if(!isSignedIn) {router.push('/sign-in')}
   return
  }
  return (
    <>
      <div className="flex w-full justify-center items-center overflow-y-hidden ">
        <div className="flex md:flex-row flex-col items-start justify-between mb-10 md:p-20 py-12 px-4 overflow-y-hidden">
          <div className="flex flex-1 justify-start flex-col md:mr-10 mt-[-50]">
            <Image
              src="/woman_codeverse-removebg-preview.png"
              alt="kfdkf"
              width={750}
              height={750}
            />
          </div>
          {/* Emergency Button */}

          <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10 ">
            <div className="space-y-10 h-screen flex flex-col justify-center items-center">
              <Button
                size={"lg"}
                onClick={HandleClick}
                className={`w-[30rem]  ${isSignedIn?"hover:bg-red-400 ":"hover:bg-slate-300 bg-gray-500"}`}
                variant={`${isSignedIn? "destructive" : "ghost"}`}
              >
               {isSignedIn?<Siren className="w-4 h-4 mr-2" />:<Lock className="w-4 h-4 mr-2" />} 
                Emergency
              </Button>
              <Button
                size={"lg"}
                className="w-[30rem] bg-transparent hover:bg-slate-200"
                variant={"outline"}
              >
                <Bot className="w-4 h-4 mr-2" />
                AI powered Chatbot
              </Button>
              <Button
                size={"lg"}
                className="w-[30rem] bg-transparent hover:bg-slate-200"
                variant={"outline"}
              >
                <File className="w-4 h-4 mr-2" />
                Documentation for laws for protection of women
              </Button>
              <DialogForm>
              <Button
                size={"lg"}
                className="w-[30rem] bg-transparent hover:bg-slate-200"
                variant={"outline"}
              >
                <Shield className="w-4 h-4 mr-2" />
             
                Emergency form
             
              </Button>
              </DialogForm>
            </div>

            <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism"></div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Landing;
{
  /*  */
}
