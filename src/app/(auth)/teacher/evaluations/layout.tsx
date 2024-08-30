import TeacherEvaluationsSidebar, {
  TeacherEvaluationsSidebarProvider,
} from "@/components/TeacherEvaluationsSidebar";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

const TeacherEvaluationsPage = ({ children }: Props) => {
  return (
    <>
      <div className="container grid lg:grid-cols-3 gap-4">
        <TeacherEvaluationsSidebarProvider>
          {/* SIDEBAR */}
          <TeacherEvaluationsSidebar />
          {/* MAIN */}
          <div className="col-span-2 bg-default-100 p-4 rounded-xl h-fit">
            {children}
          </div>
        </TeacherEvaluationsSidebarProvider>
      </div>
    </>
  );
};

export default TeacherEvaluationsPage;
