"use client";

import { Button } from "@/components/ui/shadcn/Button";
import { Input } from "@/components/ui/shadcn/Input";
import { Label } from "@/components/ui/shadcn/Label";
import { cn } from "@/lib/utils";
import { Spinner } from "@nextui-org/spinner";
import { ArrowRight } from "iconsax-react";
import { HTMLAttributes, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputErrors from "@/components/InputErrors";

const formSchema = z.object({
  userCode: z.string(),
  testCode: z.string(),
});

interface StartTestFormProps extends HTMLAttributes<HTMLDivElement> {}

export function StartTestForm({ className, ...props }: StartTestFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
          {/* USER CODE */}
          <div className="grid gap-2">
            <Label htmlFor="studentCode">Codice Utente</Label>
            <Input
              {...register("userCode")}
              id="userCode"
              placeholder="ST1234"
              type="text"
              autoCapitalize="none"
              autoComplete="userCode"
              autoCorrect="off"
              disabled={isLoading}
              className="uppercase"
            />
            <InputErrors errors={errors.userCode} />
          </div>

          {/* TEST CODE */}
          <div className="grid gap-2">
            <Label htmlFor="testCode">Codice Test</Label>
            <Input
              {...register("testCode")}
              id="testCode"
              placeholder="QZ1234"
              type="text"
              autoCapitalize="none"
              autoComplete="testCode"
              autoCorrect="off"
              disabled={isLoading}
              className="uppercase"
            />
            <InputErrors errors={errors.testCode} />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <Button
          disabled={isLoading}
          className="gap-2 !bg-primary !text-primary-foreground"
        >
          Inizia il test
          {isLoading ? (
            <Spinner
              color="current"
              size="sm"
            />
          ) : (
            <ArrowRight variant="Linear" />
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
