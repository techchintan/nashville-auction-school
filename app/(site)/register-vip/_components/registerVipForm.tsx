"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RegisterVipPageQueryResult } from "@/sanity.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  fullName: z.string().min(2, "Must be at least 2 characters long."),
  activeLicenses: z.string(),
  email: z.email("Please enter vlaid email."),
  phoneNumber: z
    .string()
    .min(10, "Must be 10 digit long.")
    .max(10, "Must be 10 digit long.")
    .regex(/^\d+$/, "Must be digits."),
});

const RegisterVipForm = ({
  registerVip,
}: {
  registerVip: NonNullable<RegisterVipPageQueryResult>;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      fullName: "",
      activeLicenses: "",
      phoneNumber: "",
      email: "",
    },
    resolver: zodResolver(formSchema),
  });
  const { handleSubmit, reset, control } = form;
  return (
    <div className="max-width-container padding-container">
      <div className="flex flex-col gap-13">
        <h2 className="text-black-pearl text-3xl sm:text-[40px] font-semibold leading-[100%] text-center">
          {registerVip.formTitle}
        </h2>
        <form
          onSubmit={handleSubmit((values) => console.log(values))}
          className="flex flex-col gap-6"
        >
          <Controller
            name="fullName"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="gap-2">
                <FieldLabel className="text-sm -tracking-[0.1px] leading-5 text-charade font-medium">
                  Full Name
                </FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder="Full Name"
                  className="text-black-pearl"
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="activeLicenses"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="gap-2">
                <FieldLabel className="text-sm -tracking-[0.1px] leading-5 text-charade font-medium">
                  Current Active Licenses
                </FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder="Current Active Licenses"
                  className="text-black-pearl"
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="gap-2">
                <FieldLabel className="text-sm -tracking-[0.1px] leading-5 text-charade font-medium">
                  Phone Number
                </FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder="Phone Number"
                  className="text-black-pearl"
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="gap-2">
                <FieldLabel className="text-sm -tracking-[0.1px] leading-5 text-charade font-medium">
                  Email address
                </FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder="Email address"
                  className="text-black-pearl"
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Button variant="primary" type="submit" className="w-fit">
            {registerVip.formButton.label}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterVipForm;
