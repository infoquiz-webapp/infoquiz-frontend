import Logo from "@/components/icons/Logo";
import ThemePickerDropdown from "@/components/ThemePickerDropdown";
import Link from "next/link";
import React from "react";

const GuestHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex justify-center z-10">
      <div className="container flex justify-between items-center p-4">
        <Link
          href={"/"}
          className="transition-all hover:text-primary w-10"
        >
          <Logo />
        </Link>
        <ThemePickerDropdown label="Tema" />
      </div>
    </header>
  );
};

export default GuestHeader;
