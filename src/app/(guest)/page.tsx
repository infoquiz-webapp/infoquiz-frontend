"use client";

import Logo from "@/components/icons/Logo";
import { StartTestForm } from "@/components/StartTestForm";
import { RoughNotation } from "react-rough-notation";

export default function Home() {
  return (
    <>
      {/* MOBILE LOGO */}
      <RoughNotation
        type="box"
        show={true}
        color="hsl(var(--nextui-primary))"
      >
        <div className="relative z-20 flex items-center text-2xl font-bold">
          <Logo className="mr-2" />
          InfoQuiz
        </div>
      </RoughNotation>

      {/* CARD */}
      <div className="p-4 md:p-8 lg:p-12 bg-background dark:bg-transparent dark:bg-gradient-to-bl dark:from-primary/10 dark:to-primary/0 dark:backdrop-blur-sm overflow-hidden rounded-2xl border-3 border-default-100 relative z-10 grid gap-8">
        {/* HEADER */}
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl lg:text-4xl font-semibold tracking-tight">
            Dimostra le tue conoscenze
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Metti alla prova le tue conoscenze con i nostri quiz.
          </p>
        </div>
        {/* FORM */}
        <StartTestForm />
      </div>
    </>
  );
}
