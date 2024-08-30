"use client";

import { useTeacherEvaluationsSidebar } from "@/components/TeacherEvaluationsSidebar";
import { Button } from "@/components/ui/shadcn/Button";
import { ClipboardText } from "iconsax-react";
import { RoughNotation } from "react-rough-notation";

const TeacherEvaluationsPage = () => {
  const { setOpen } = useTeacherEvaluationsSidebar();
  return (
    <div className="flex flex-col justify-center items-center min-h-[40vh] gap-6">
      <RoughNotation
        type="box"
        show={true}
        color="hsl(var(--nextui-primary))"
      >
        <ClipboardText className="w-20 h-20" />
      </RoughNotation>
      <p className="text-2xl font-bold text-center">
        Seleziona un test dalla lista
      </p>
      <Button
        variant={"primary"}
        type="button"
        onClick={() => setOpen(true)}
        className="lg:hidden"
      >
        Seleziona Test
      </Button>
    </div>
  );
};

export default TeacherEvaluationsPage;
