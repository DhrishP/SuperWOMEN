"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import z, { boolean } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TextareaAutosize from "react-textarea-autosize";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import ImageUpload from "./image-upload";

export const Navbar: FC = () => {

  return (
    <div className="flex h-[60px] border-b border-gray-300 py-2 px-8 items-center justify-between">
      <div className=" flex items-center">
        <Image src={"/logo.png"} alt="Logo" width={100} height={80} />
        <h3 className=" font-semibold text-xl text-[#a2d2ff] ">SuperWOMEN</h3>
      </div>
      <div className="self-center mr-0 md:mr-16 sm:mr-28">
        <ul className="flex items-center space-x-4 ">
          <Link
            href={"/locations"}
            className="cursor-pointer font-sans self-center hover:text-blue-400 transition-colors "
          >
            Locations
          </Link>
          <Link
            href={"/docs"}
            className="cursor-pointer font-sans self-center hover:text-blue-400 transition-colors "
          >
            Docs
          </Link>
          <Link
            href={"/chatbot"}
            className="cursor-pointer font-sans self-center hover:text-blue-400 transition-colors "
          >
            Chatbot
          </Link>
        </ul>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant={"destructive"} size={"sm"}>
          Report an incident
        </Button>

      
          <UserButton afterSignOutUrl="/" />

      </div>
    </div>
  );
};

/*
    <Form {...form}>
              <form className="space-y-5">
                <FormField
                  control={form.control}
                  name="ImageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-primary">
                        Incident report
                      </FormLabel>
                      <FormControl>
                        <TextareaAutosize
                          minRows={3}
                          maxRows={10}
                          id="incident-description"
                          className="border border-gray-300 rounded-md p-2 w-full "
                          placeholder="Describe the incident in as much detail as possible."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ImageUrl"
                  render={(
                    { field } //field passes imageurl array
                  ) => (
                    <FormItem>
                      <FormLabel className="font-bold text-primary">
                        Add an Background Image
                      </FormLabel>
                      <FormControl>
                        <ImageUpload
                          onChange={(url) => {
                            field.onChange(url);
                            
                            //Updates the array with the current url
                          }}
                          onRemove={() => {
                            field.onChange("");
                          }}
                          values={field.value ? [field.value] : []} //If we want multiple images then we can pass here an array of values
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className={cn("flex ")}>
                  <Button
                    className="hover:bg-white hover:text-black hover:border-black border-2 px-3 "
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Form>

*/
