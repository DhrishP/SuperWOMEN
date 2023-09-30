"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./input";
import axios from "axios";
import { Button } from "./button";
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";

const DialogForm = ({ children }: { children: React.ReactNode }) => {
  const [Mounted, SetMounted] = React.useState(false);
  const { isSignedIn } = useUser();
  React.useEffect(() => {
    SetMounted(true);
  }, []);

  if (!Mounted) return null;
  const HandleForm = async (e: any) => {
    const one = e.target.elements.one.value;
    const two = e.target.elements.two.value;
    const third = e.target.elements.three.value;
    const res = await axios.post("/api/form", [one, two, third]);
    if (!res) return toast.error("Something went wrong");
    toast.success("Contacts added successfully");
  };
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-pink-500">
            Add your emergency contacts
          </DialogTitle>
          <DialogDescription>
            Fill the form to directly send updates to your dear ones when in
            need
          </DialogDescription>
        </DialogHeader>
        {isSignedIn ? (
          <>
            {" "}
            <form onSubmit={HandleForm} className="">
              <div className="space-y-5">
                <Input
                  type=""
                  id="one"
                  required
                  placeholder="* First contact.."
                />
                <Input
                  type=""
                  id="two"
                  required
                  placeholder="* Second contact.."
                />
                <Input type="" id="three" placeholder="Third contact.." />
              </div>
              <Button className="mt-6 bg-pink-500 hover:bg-pink-700">
                Submit
              </Button>
            </form>
          </>
        ) : (
          <>
            <div className="w-full h-full flex items-center justify-center text-pink-500">
              Login to continue...{" "}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DialogForm;
