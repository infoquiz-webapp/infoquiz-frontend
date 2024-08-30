"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/shadcn/Drawer";
import { evaluations } from "@/data/evaluations";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useWindowSize } from "usehooks-ts";

const TeacherEvaluationsSidebarContext = createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>({
  open: false,
  setOpen: () => {},
});

export const useTeacherEvaluationsSidebar = () => {
  return useContext(TeacherEvaluationsSidebarContext);
};

export const TeacherEvaluationsSidebarProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <TeacherEvaluationsSidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </TeacherEvaluationsSidebarContext.Provider>
  );
};

const TeacherEvaluationsSidebar = () => {
  const evaluationId = useParams().evaluationId;
  const { width } = useWindowSize();

  const { open, setOpen } = useTeacherEvaluationsSidebar();

  useEffect(() => {
    setOpen(false);
    if (width < 1024 && !evaluationId) {
      setOpen(true);
    }
  }, [width, evaluationId]);

  return (
    <>
      <div className="bg-default-100 p-2 rounded-xl h-fit overflow-auto hidden lg:flex flex-col gap-1">
        {/* <p className="font-bold text-2xl mb-3">Lista Test</p> */}
        {evaluations.map((ev) => (
          <Link
            href={`/teacher/evaluations/${ev.id}`}
            key={ev.id}
            className={cn(
              ev.id === evaluationId
                ? "bg-background dark:bg-default-200 font-bold"
                : "hover:bg-default-200 opacity-60 hover:opacity-100",
              "p-4 transition-all rounded-lg truncate"
            )}
          >
            {ev.name}
          </Link>
        ))}
      </div>

      <Drawer
        open={open}
        onOpenChange={setOpen}
        // dismissible={false}
      >
        {/* <DrawerTrigger>Open</DrawerTrigger> */}
        <DrawerContent className="max-h-[90%]">
          <DrawerHeader>
            <DrawerTitle>Lista Test</DrawerTitle>
          </DrawerHeader>
          <div className="px-2 flex flex-col gap-1 pb-4 overflow-auto h-fit">
            {evaluations.map((ev) => (
              <Link
                href={`/teacher/evaluations/${ev.id}`}
                key={ev.id}
                className={cn(
                  ev.id === evaluationId
                    ? "bg-default-300 font-bold"
                    : "hover:bg-default-200 opacity-60 hover:opacity-100",
                  "p-4 transition-all rounded-lg truncate block flex-none"
                )}
              >
                {ev.name}
              </Link>
            ))}
          </div>
          {/* <DrawerFooter>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Chiudi
            </Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default TeacherEvaluationsSidebar;
