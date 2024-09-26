"use client";

import InputErrors from "@/components/InputErrors";
import { Button } from "@/components/ui/shadcn/Button";
import { Input } from "@/components/ui/shadcn/Input";
import { Label } from "@/components/ui/shadcn/Label";
import PasswordInput from "@/components/ui/shadcn/PasswordInput";
import { apiUrls } from "@/data/backend";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "@nextui-org/spinner";
import { LoginCurve } from "iconsax-react";
import { HTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formSchema = z.object({
    email: z.string().email("Email non valida"),
    password: z
      .string()
      .min(8, "La password deve contenere almeno 8 caratteri")
      .nullable(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    criteriaMode: "all",
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    setIsLoading(true);

    axios
      .post(
        apiUrls.auth.signIn,
        {},
        {
          headers: {
            Authorization: `Basic ${data.email}:${data.password}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <div
      className={cn("grid gap-6", className)}
      {...props}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4"
      >
        {/* INPUTS */}
        <div className="grid gap-4">
          {/* EMAIL */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email")}
              id="email"
              placeholder="name@example.com"
              type="text"
              inputMode="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
            <InputErrors errors={errors.email} />
          </div>

          {/* PASSWORD */}
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <PasswordInput
              {...register("password")}
              id="password"
              placeholder="********"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
            <InputErrors errors={errors.password} />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <Button
          disabled={isLoading}
          className="gap-2 !bg-primary !text-primary-foreground"
        >
          Accedi
          {isLoading ? (
            <Spinner
              color="current"
              size="sm"
            />
          ) : (
            <LoginCurve variant="Bold" />
          )}
        </Button>
      </form>

      {/* <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
      >
        {isLoading ? (
          <Spinner
            color="current"
            size="sm"
            className="mr-2"
          />
        ) : (
          <GitHubIcon className="mr-2 size-4" />
        )}{" "}
        GitHub
      </Button> */}
    </div>
  );
}
