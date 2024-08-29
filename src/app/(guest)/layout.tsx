import GuestHeader from "@/components/GuestHeader";
import DotPattern from "@/components/ui/magicui/DotPattern";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
};

const GuestLayout = ({ children }: Props) => {
  return (
    <>
      <GuestHeader />
      {/* CONTENT */}
      <main className="flex flex-col min-h-dvh justify-center items-center p-4 lg:p-8 relative gap-8">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(80vw_circle_at_center,white,transparent)]"
          )}
        />
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
        {children}
      </main>
    </>
  );
};

export default GuestLayout;
