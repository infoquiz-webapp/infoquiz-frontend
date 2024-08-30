import TeacherHeader from "@/components/TeacherHeader";

type Props = {
  children: React.ReactNode;
};

const TeacherLayout = ({ children }: Props) => {
  return (
    <>
      <TeacherHeader />
      {/* CONTENT */}
      <main className="flex justify-center items-center !pt-24 gap-4">
        {children}
      </main>
    </>
  );
};

export default TeacherLayout;
