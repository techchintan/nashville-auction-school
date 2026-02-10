"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

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
  phoneNumber: z
    .string()
    .min(10, {
      message: "Phone number must be 10 digit long.",
    })
    .max(10, { message: "Phone number must be 10 digit long." })
    .regex(/^\d+$/, { message: "Must be digits only." }),
  state: z.string(),
  preferred_method_of_contact: z.string(),
  How_did_you_hear_about_us: z.string(),
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
    console.log(values);
    // await fetch("/api/send-email", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     name: values.fullName,
    //     email: values.email,
    //     phoneNumber: values.phoneNumber,
    //     message: values.message,
    //     what_are_you_interested_in: "",
    //     tnc: values.tnc,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.success) {
    //       reset();
    //       setSuccessMessage(data.message);
    //       setTimeout(() => {
    //         setSuccessMessage("");
    //       }, 2000);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error.message);
    //     setSuccessMessage(error.message);
    //   });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="flex flex-col items-start justify-between gap-8">
        <div className="flex w-full flex-col gap-8 lg:flex-row">
          <Controller
            name="fullName"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="w-full gap-2">
                <FieldLabel className="text-charade ">Full Name</FieldLabel>
                <Input
                  {...field}
                  className="text-black-pearl"
                  placeholder="Full Name"
                  aria-invalid={fieldState.error?.message ? true : false}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="w-full gap-2">
                <FieldLabel className="text-charade ">Email</FieldLabel>
                <Input
                  {...field}
                  className="text-black-pearl"
                  placeholder="Email"
                  aria-invalid={fieldState.error?.message ? true : false}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>
        <div className="flex w-full flex-col gap-8 lg:flex-row">
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="w-full gap-2">
                <FieldLabel className="text-charade ">Phone Number</FieldLabel>
                <Input
                  className="text-black-pearl"
                  {...field}
                  placeholder="Phone Number"
                  aria-invalid={fieldState.error?.message ? true : false}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="state"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="w-full gap-2">
                <FieldLabel className="text-charade ">State</FieldLabel>
                <Input
                  {...field}
                  className="text-black-pearl"
                  placeholder="State"
                  aria-invalid={fieldState.error?.message ? true : false}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>
        <div className="flex w-full flex-col gap-8 lg:flex-row">
          <Controller
            name="preferred_method_of_contact"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="w-full gap-2">
                <FieldLabel className="text-charade ">
                  Preferred method of contact
                </FieldLabel>
                <Input
                  {...field}
                  className="text-black-pearl"
                  placeholder="Preferred method of contact"
                  aria-invalid={fieldState.error?.message ? true : false}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="How_did_you_hear_about_us"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="w-full gap-2">
                <FieldLabel className="text-charade ">
                  How did you hear about us
                </FieldLabel>

                <Input
                  {...field}
                  className="text-black-pearl"
                  placeholder="How did you hear about us"
                  aria-invalid={fieldState.error?.message ? true : false}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>
        <Controller
          name="what_are_you_interested_in"
          control={control}
          render={({ field, fieldState }) => (
            <Field className="w-full gap-2 col-span-2 text-black-pearl">
              <FieldLabel className="text-charade ">
                What Are you Interested In
              </FieldLabel>

              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  className="w-full"
                  aria-invalid={fieldState.error?.message ? true : false}
                >
                  <SelectValue placeholder="Select your answer" />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem
                      value={option}
                      key={option}
                      className="text-black-pearl font-semibold"
                    >
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="message"
          control={control}
          render={({ field, fieldState }) => (
            <Field className="w-full gap-2">
              <FieldLabel className="text-charade ">Message</FieldLabel>

              <Textarea
                {...field}
                placeholder="Please write your message"
                className="h-32 text-black-pearl"
                aria-invalid={fieldState.error?.message ? true : false}
              />

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="tnc"
          control={control}
          render={({ field, fieldState }) => (
            <Field className="w-full gap-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="tnc"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  aria-invalid={fieldState.error?.message ? true : false}
                />
                <Label htmlFor="tnc">
                  I agree with the{" "}
                  <Link href="/privacy-policy" className="text-primary-red">
                    privacy policy
                  </Link>
                </Label>
              </div>

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
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
  );
}
