"use client";

import TeacherEvaluationsQuestions from "@/components/TeacherEvaluationsQuestions";
import TeacherEvaluationsSessions from "@/components/TeacherEvaluationsSessions";
import { evaluations } from "@/data/evaluations";
import { Tab, Tabs } from "@nextui-org/tabs";
import { ArrowCircleLeft } from "iconsax-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Key, useState } from "react";

const TeacherEvaluationPage = () => {
  const evaluationId = useParams().evaluationId;
  const evaluation = evaluations.find((ev) => ev.id === evaluationId);

  const [selectedTab, setSelectedTab] = useState<Key>("sessions");

  return (
    <>
      {/* HEADER */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* TITLE */}
        <div className="flex gap-2 w-full items-center">
          {/* BACK BUTTON */}
          <Link
            href={`/teacher/evaluations`}
            className="lg:hidden"
          >
            <ArrowCircleLeft
              variant="Bold"
              className="size-10"
            />
          </Link>
          {/* TEXT */}
          <p className="text-2xl font-bold truncate w-full">
            {evaluation?.name}
          </p>
        </div>
        {/* TABS */}
        <Tabs
          variant={"bordered"}
          aria-label="Tabs variants"
          classNames={{
            cursor: "dark:!bg-default-200 shadow-none rounded-md",
            tabList:
              "border border-default-300 dark:border-default-200 w-full shadow-none rounded-lg",
            base: "flex-none w-full md:w-auto",
          }}
          selectedKey={selectedTab as string}
          onSelectionChange={(key) => setSelectedTab(key)}
        >
          <Tab
            key="sessions"
            title="Sessioni"
          />
          <Tab
            key="questions"
            title="Domande"
          />
        </Tabs>
      </div>

      {/* CONTENT */}
      <div className="mt-4 flex flex-col gap-8">
        {selectedTab === "sessions" && (
          <TeacherEvaluationsSessions evaluationId={evaluationId as string} />
        )}
        {selectedTab === "questions" && <TeacherEvaluationsQuestions />}
      </div>
    </>
  );
};

export default TeacherEvaluationPage;
