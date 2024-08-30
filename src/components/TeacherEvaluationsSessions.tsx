"use client";

import classRoomsArray from "@/data/classrooms";
import { evaluationsSessions } from "@/data/evaluations";
import { cn } from "@/lib/utils";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Clock, Profile2User, Timer1 } from "iconsax-react";
import { DateTime } from "luxon";

type Props = {
  evaluationId: string;
};

const TeacherEvaluationsSessions = ({ evaluationId }: Props) => {
  const sessions = evaluationsSessions.filter(
    (ev) => ev.evaluationId === evaluationId
  );

  const sessionByClassRoom = sessions.reduce((acc, session) => {
    if (!acc[session.classRoomId]) {
      acc[session.classRoomId] = [];
    }
    acc[session.classRoomId].push(session);
    return acc;
  }, {} as any);

  const getSessionClassRoom = (classRoomId: string) => {
    return classRoomsArray.find((cr) => cr.id === classRoomId);
  };

  return Object.keys(sessionByClassRoom).map((cr, i) => {
    const classRoom = getSessionClassRoom(cr);
    return (
      <div
        key={i}
        className="flex flex-col gap-4"
      >
        {/* HEADER */}
        <div className="flex gap-2 items-center w-full">
          <p className="flex gap-2 items-center flex-none">
            <span
              className="size-6 rounded-md block"
              style={{ backgroundColor: classRoom?.color }}
            ></span>
            {classRoom?.name}
          </p>
          <Divider className="bg-default-200 w-full shrink" />
        </div>
        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-4">
          {sessionByClassRoom[cr].map((session: any) => {
            const startDateTime = DateTime.fromFormat(
              `${session.date} ${session.startTime}`,
              "yyyy-MM-dd HH:mm"
            );
            const endDateTime = DateTime.fromFormat(
              `${session.date} ${session.endTime}`,
              "yyyy-MM-dd HH:mm"
            );
            const diff = endDateTime.diff(startDateTime, ["hours", "minutes"]);
            const duration = `${diff.hours ? diff.hours + "h" : ""} ${
              diff.minutes ? diff.minutes + "m" : ""
            }`;
            return (
              <Card
                key={session.id}
                className="shadow-none bg-background dark:bg-default-200"
              >
                <CardHeader className="flex gap-3 justify-between">
                  <div>
                    <p className="text-md font-bold">{session.date}</p>
                    <p
                      className={cn(
                        "flex gap-1 items-center px-3 py-1 rounded-full text-xs w-fit",
                        endDateTime < DateTime.now()
                          ? "bg-success/10 text-success"
                          : "bg-warning/10 text-warning"
                      )}
                    >
                      {endDateTime < DateTime.now()
                        ? "Completato"
                        : "In Attesa"}
                    </p>
                  </div>
                  {/* MORE BUTTON */}
                  <div className="bg-default-100 size-8 rounded-full flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                    <div className="size-1 rounded-full bg-foreground"></div>
                    <div className="size-1 rounded-full bg-foreground"></div>
                    <div className="size-1 rounded-full bg-foreground"></div>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody className="text-default-500 gap-2">
                  <div className="flex gap-2 flex-wrap items-center text-xs">
                    <p className="flex items-center gap-1">
                      <Clock
                        variant="Bold"
                        className="size-4"
                      />
                      {session.startTime} - {session.endTime}
                    </p>
                    <span>-</span>
                    <p className="flex items-center gap-1">
                      <Timer1
                        variant="Bold"
                        className="size-4"
                      />
                      {duration}
                    </p>
                    <span>-</span>
                    <p className="flex items-center gap-1">
                      <Profile2User
                        variant="Bold"
                        className="size-4"
                      />
                      {session.students}/{20}
                    </p>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    );
  });
};

export default TeacherEvaluationsSessions;
