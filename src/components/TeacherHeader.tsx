"use client";

import Logo from "@/components/icons/Logo";
import ThemePickerDropdown from "@/components/ThemePickerDropdown";
import UserDropdown from "@/components/UserDropdown";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { RoughNotation } from "react-rough-notation";

type Props = {};

const menuItems = [
  { label: "Dashboard", href: "/teacher" },
  { label: "Test", href: "/teacher/evaluations" },
  { label: "Studenti", href: "/teacher/students" },
  { label: "Classi", href: "/teacher/classrooms" },
];

const TeacherHeader = ({}: Props) => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-center z-10">
      <div className="container flex justify-between items-center p-4">
        <Link
          href={"/teacher"}
          className="transition-all hover:text-primary w-10"
        >
          <Logo />
        </Link>
        <ul className="flex gap-4">
          {menuItems.map((item) => (
            <li
              key={item.href}
              className={cn(
                pathname !== item.href &&
                  "opacity-60 hover:opacity-90 transition-all"
              )}
            >
              <RoughNotation
                type="underline"
                show={pathname === item.href}
                color="hsl(var(--nextui-primary))"
              >
                <Link
                  href={item.href}
                  className="p-1"
                >
                  {item.label}
                </Link>
              </RoughNotation>
            </li>
          ))}
        </ul>
        <UserDropdown />
      </div>
    </header>
  );
};

export default TeacherHeader;
