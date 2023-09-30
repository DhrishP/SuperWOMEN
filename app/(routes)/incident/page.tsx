"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import  TextareaAutosize from 'react-textarea-autosize'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ImageUpload from "@/components/image-upload";

const IncidentPage = () => {
  const formSchema = z.object({
    ImageUrl: z.string(),
    label: z.string().min(1),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ImageUrl: "",
      label: "",
    },
  });

  return (
    <div className="pl-6 w-screen h-[70vh] flex items-center justify-center mt-10">
      <Form {...form}>
        <form className="space-y-5">
          <FormField
            control={form.control}
            name="ImageUrl"
            render={(
              { field } //field passes imageurl array
            ) => (
              <FormItem>
                <FormLabel className="font-bold text-lg text-primary">
                  Add an evidence
                </FormLabel>
                <FormControl>
                  <ImageUpload
                    onChange={(url) => {
                      field.onChange(url); //Updates the array with the current url
                    }}
                    onRemove={() => {
                      field.onChange("");
                    }}
                    values={field.value ? [field.value] : []} //If we want multiple images then we can pass here a single value in array is passed
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="label"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="font-bold text-primary text-lg">Incident occured</FormLabel>
                <FormControl>
                  <TextareaAutosize className="p-4 rounded-lg" cols={30} minRows={7} maxRows={15} placeholder="Enter details about the incident..."/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className={cn("flex ")}>
            <Button
              className="hover:bg-white hover:text-black hover:border-black  px-3 "
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default IncidentPage;
