import InputErrors from "@/components/InputErrors";
import { Button } from "@/components/ui/shadcn/Button";
import { Input } from "@/components/ui/shadcn/Input";
import { Label } from "@/components/ui/shadcn/Label";
import { Switch } from "@/components/ui/shadcn/Switch";
import { Textarea } from "@/components/ui/shadcn/Textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { useCallback, useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { RoughNotation } from "react-rough-notation";
import { z } from "zod";

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

const questionsArray: Question[] = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of Italy?",
    options: ["Paris", "Rome", "Berlin"],
    correctAnswer: 1,
  },
  {
    question: "What is the capital of Germany?",
    options: ["Paris", "London", "Berlin"],
    correctAnswer: 2,
  },
];

const formSchema = z.object({
  question: z.string().min(1, "Campo obbligatorio"),
  options: z.array(z.string().min(1, "Campo obbligatorio")),
});

const TeacherEvaluationsQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>(questionsArray);
  const [isOpen, setIsOpen] = useState(false);

  const [correctAnswer, setCorrectAnswer] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    criteriaMode: "all",
    values: {
      options: ["", "", ""],
      question: "",
    },
  });
  const { fields } = useFieldArray({
    control,
    name: "options" as never,
  });

  const addQuestion = (data: z.infer<typeof formSchema>) => {
    setQuestions((prev) => [
      ...prev,
      {
        question: data.question,
        options: data.options,
        correctAnswer: correctAnswer,
      },
    ]);
    setIsOpen(false);
  };

  useEffect(() => {
    reset();
    setCorrectAnswer(0);
  }, [isOpen]);

  return (
    <div className="flex flex-col gap-4">
      {/* HEADER */}
      <div className="p-4 rounded-lg bg-background dark:bg-default-200">
        <div className="flex items-center justify-between gap-4">
          {/* TITLE */}
          <p className="font-bold truncate">
            {isOpen ? "Aggiungi domanda" : "Lista Domande"}
          </p>
          {/* ADD QUESTION BUTTON */}
          <Button
            variant={"outline"}
            className="border-default-200 dark:border-default-300 bg-transparent"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Chiudi" : "Aggiungi domanda"}
          </Button>
        </div>
        {/* NEW QUESTION FORM */}
        {isOpen && (
          <form onSubmit={handleSubmit(addQuestion)}>
            <div className="grid gap-4 mt-6">
              <div className="space-y-2">
                {/* QUESTION INPUT */}
                <Label htmlFor="question">Domanda</Label>
                <Textarea
                  {...register("question")}
                  id="question"
                  placeholder="Enter your question here"
                  className="h-24"
                />
                <InputErrors errors={errors.question} />
              </div>
              {/* QUESTIONS */}
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="space-y-2"
                >
                  <div className="flex justify-between gap-4">
                    {/* QUESTION TITLE */}
                    <Label
                      htmlFor={`option-${index}`}
                      className="truncate"
                    >
                      Risposta N. {index + 1}
                    </Label>
                    {/* QUESTION CORRECT CHECK */}
                    <p
                      className="text-xs flex items-center gap-1 text-default-500 cursor-pointer select-none"
                      onClick={() => setCorrectAnswer(index)}
                    >
                      <span
                        className={cn(
                          "w-8 h-4 rounded-full transition-all relative",
                          correctAnswer === index
                            ? "bg-success justify-start"
                            : "bg-default-100 dark:bg-background justify-end"
                        )}
                      >
                        <span
                          className={cn(
                            "size-3 rounded-full transition-all absolute top-1/2 -translate-y-1/2",
                            correctAnswer === index
                              ? "bg-white left-0.5"
                              : "bg-background dark:bg-default-300 left-full -translate-x-full -ml-0.5"
                          )}
                        ></span>
                      </span>
                      <span
                        className={cn(
                          correctAnswer === index
                            ? "text-foreground"
                            : "text-default-500"
                        )}
                      >
                        Corretta
                      </span>
                    </p>
                  </div>
                  {/* QUESTION FIELD */}
                  <Input
                    id={`option-${index}`}
                    placeholder={`Enter option ${index + 1}`}
                    {...register(`options.${index}`)}
                  />
                  {errors.options?.[index] && (
                    <InputErrors errors={errors.options[index]} />
                  )}
                </div>
              ))}
            </div>
            {/* fOOTER */}
            <div className="flex justify-end gap-2 mt-4">
              <Button
                type="button"
                variant={"secondary"}
                onClick={() => setIsOpen(!isOpen)}
              >
                Anulla
              </Button>
              <Button variant={"primary"}>Salva Domanda</Button>
            </div>
          </form>
        )}
      </div>

      {/* QUESTIONS LIST */}
      <div className="grid gap-4">
        {questions.length === 0 && (
          <p className="text-center p-4 bg-background rounded-lg text-warning-500">
            Nessuna domanda aggiunta ancora!
          </p>
        )}
        {questions.map((q, index) => (
          <Card
            key={index}
            className="bg-background dark:bg-default-200 shadow-none rounded-lg"
          >
            <CardHeader className="font-bold text-xl">
              Domanda N. {index + 1}
            </CardHeader>
            <CardBody className="pt-0">
              <p className="text-lg">{q.question}</p>
              <ul className="list-disc list-inside">
                {q.options.map((opt: any, i: number) => (
                  <li
                    key={i}
                    className={
                      i === q.correctAnswer
                        ? "text-foreground"
                        : "text-default-500"
                    }
                  >
                    <RoughNotation
                      type="underline"
                      show={i === q.correctAnswer}
                      color="hsl(var(--nextui-success))"
                      padding={0}
                    >
                      {opt}
                    </RoughNotation>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeacherEvaluationsQuestions;
