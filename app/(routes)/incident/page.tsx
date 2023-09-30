"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
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
    <div className="pl-6 w-1/3 flex items-start mt-10">
      <Form {...form}>
        <form className="space-y-5">
          <FormField
            control={form.control}
            name="ImageUrl"
            render={(
              { field } //field passes imageurl array
            ) => (
              <FormItem>
                <FormLabel className="font-bold text-primary">
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
              <FormItem>
                <FormLabel className="font-bold text-primary">Incident occured</FormLabel>
                <FormControl>
                  <Input placeholder="Description about the incident...." {...field} />
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
    </div>
  );
};

export default IncidentPage;
