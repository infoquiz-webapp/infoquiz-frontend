import Logo from "@/components/icons/Logo";
import { UserAuthForm } from "@/components/UserAuthForm";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

const quizJokes = [
  "Fare un quiz è come la matematica: o sai la risposta, o speri in un buon numero casuale!",
  "I quiz sono come i meme: alcuni li capisci, altri... beh, lasciamo perdere!",
  "Quando fai un quiz e hai una sola opzione rimasta: 'Risposta definitiva, ho cliccato per sbaglio!'",
  "I quiz sono fantastici! Puoi dimostrare quanto poco sai in meno di un minuto!",
];

function getRandomQuizJoke() {
  const randomIndex = Math.floor(Math.random() * quizJokes.length);
  return quizJokes[randomIndex];
}

export default function AuthenticationPage() {
  return (
    <>
      {/* MOBILE LOGO */}
      <div className="lg:hidden">
        <RoughNotation
          type="box"
          show={true}
          color="hsl(var(--nextui-primary))"
        >
          <Link
            href={"/"}
            className="relative z-20 flex items-center text-2xl font-bold"
          >
            <Logo className="mr-2" />
            InfoQuiz
          </Link>
        </RoughNotation>
      </div>

      {/* CONTAINER */}
      <div className="container p-0 overflow-hidden rounded-[0.5rem] border border-default-100 shadow relative z-10 max-w-[400px] lg:max-w-none">
        <div className="relative lg:min-h-[800px] flex-col items-center justify-center md:grid lg:grid-cols-2 lg:p-0">
          {/* LEFT SIDE */}
          <div className="relative hidden h-full flex-col bg-muted p-10 lg:flex bg-transparent bg-gradient-to-bl from-default-900 to-default-700 dark:from-primary/10 dark:to-primary/0 dark:backdrop-blur-sm text-background dark:text-foreground">
            <div className="w-fit">
              <RoughNotation
                type="box"
                show={true}
                color="hsl(var(--nextui-primary))"
              >
                <Link
                  href={"/"}
                  className="relative z-20 flex items-center text-2xl font-bold"
                >
                  <Logo className="mr-2" />
                  InfoQuiz
                </Link>
              </RoughNotation>
            </div>
            <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                <p className="text-lg">&ldquo;{getRandomQuizJoke()}&rdquo;</p>
              </blockquote>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-4 lg:p-8 bg-background h-full flex items-center justify-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-[350px]">
              {/* HEADER */}
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-3xl font-bold tracking-tight">
                  Accedi al tuo account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Inserisci le tue credenziali per accedere al tuo account.
                </p>
              </div>
              {/* FORM */}
              <UserAuthForm />
              {/* FOOTER */}
              {/* <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
