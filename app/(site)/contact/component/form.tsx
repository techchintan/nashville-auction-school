"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const options = [
  "Bid-calling",
  "Preclicensing education",
  "Corporate solutions",
  "VIP",
  "Other",
];

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.email({
    message: "Invalid email address.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  state: z.string().nonempty("Required"),
  preferred_method_of_contact: z.string().nonempty("Required"),
  How_did_you_hear_about_us: z.string().nonempty("Required"),
  what_are_you_interested_in: z.string().nonempty("Required"),
  message: z.string().optional(),
  tnc: z.boolean().refine((data) => data === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

export default function ContactForm() {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      state: "",
      preferred_method_of_contact: "",
      How_did_you_hear_about_us: "",
      what_are_you_interested_in: "",
      message: "",
      tnc: false,
    },
  });

  const { handleSubmit, control, reset } = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({
        name: values.fullName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        message: values.message,
        tnc: values.tnc,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          reset();
          setSuccessMessage(data.message);
          setTimeout(() => {
            setSuccessMessage("");
          }, 2000);
        }
      })
      .catch((error) => {
        console.error(error.message);
        setSuccessMessage(error.message);
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col items-start justify-between gap-8">
          <div className="flex w-full flex-col gap-8 lg:flex-row">
            <FormField
              name="fullName"
              control={control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Full Name"
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Email Address" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full flex-col gap-8 lg:flex-row">
            <FormField
              name="phoneNumber"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Phone Number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="state"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="State" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full flex-col gap-8 lg:flex-row">
            <FormField
              name="preferred_method_of_contact"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Preferred method of contact</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Preferred method of contact"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="How_did_you_hear_about_us"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>How did you hear about us</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="How did you hear about us" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            name="message"
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Please write your message"
                    className="h-32"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="tnc"
            control={control}
            rules={{ required: true }}
            render={() => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Controller
                      name="tnc"
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          id="tnc"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <Label htmlFor="tnc">
                      I agree with the{" "}
                      <Link href="/privacy-policy" className="text-primary-red">
                        privacy policy
                      </Link>
                    </Label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-10 flex flex-col items-start justify-center gap-2">
          <Button variant={"primary"} type="submit">
            Submit
          </Button>
          {successMessage && (
            <p className="text-secondary-blue text-sm font-medium">
              {successMessage}
            </p>
          )}
        </div>
      </form>
    </Form>
  );
}
