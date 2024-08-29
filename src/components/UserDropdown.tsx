"use client";

import ThemePickerTabs from "@/components/ThemePickerTabs";
import { Button } from "@/components/ui/shadcn/Button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/shadcn/Popover";
import { ColorSwatch, Logout, LogoutCurve, Profile } from "iconsax-react";
import { useState } from "react";
import { Divider } from "@nextui-org/divider";

interface Props {}

const UserDropdown = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Popover
      open={isMenuOpen}
      onOpenChange={(open: boolean) => setIsMenuOpen(open)}
    >
      <PopoverTrigger asChild>
        <Button
          variant={"secondary"}
          size={"icon"}
          className="rounded-full"
        >
          <Profile
            variant="Bold"
            className="size-6"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        onOpenAutoFocus={(e: any) => e.preventDefault()}
        align="end"
        sideOffset={16}
        className="p-0 !bg-transparent border-0 shadow-none user-menu-popover-content"
      >
        <div className="bg-background dark:bg-default-100 backdrop-blur-md rounded-3xl p-2 w-full max-w-xs shadow-medium overflow-hidden">
          <div className="w-full flex flex-col gap-4">
            {/* THEME */}
            <div className="flex items-center space-x-4 w-full p-2">
              <span className="size-8 bg-default-300 rounded-[.9rem] flex items-center justify-center">
                <ColorSwatch
                  variant="Bulk"
                  className="size-4"
                />
              </span>
              <p className="font-bold">Tema</p>
            </div>
            <div className="px-2">
              <ThemePickerTabs />
            </div>

            <div className="px-2">
              <Divider className="border-solid border-t-[3px] bg-transparent border-default-100 dark:border-default-200 h-0" />
            </div>

            {/* LOGOUT */}
            <div className="cursor-pointer flex items-center space-x-4 w-full hover:bg-default-200 p-2 rounded-2xl">
              <span className="size-8 bg-default-300 rounded-[.9rem] flex items-center justify-center">
                <LogoutCurve
                  variant="Bulk"
                  className="size-4"
                />
              </span>
              <p className="font-bold">Esci</p>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserDropdown;
