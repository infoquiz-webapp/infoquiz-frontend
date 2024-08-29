"use client";

import ThemePickerTabs from "@/components/ThemePickerTabs";
import { Button } from "@/components/ui/shadcn/Button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/shadcn/Popover";
import { ColorSwatch, Moon, Sun1 } from "iconsax-react";
import { useTheme } from "next-themes";
import { useState } from "react";

interface Props {
  label: string;
}

const ThemePickerDropdown = (props: Props) => {
  const { label } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { resolvedTheme } = useTheme();

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
          {resolvedTheme === "dark" ? (
            <Moon
              variant="Bold"
              className="size-6"
            />
          ) : (
            <Sun1
              variant="Bold"
              className="size-6"
            />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        onOpenAutoFocus={(e: any) => e.preventDefault()}
        align="end"
        sideOffset={16}
        className="p-0 !bg-transparent border-0 shadow-none user-menu-popover-content"
      >
        <div className="bg-background dark:bg-default-100 backdrop-blur-md rounded-3xl p-4 w-full max-w-xs shadow-medium overflow-hidden">
          <div className="w-full flex flex-col gap-4">
            <div className="flex items-center space-x-4 w-full">
              <span className="size-8 bg-default-300 rounded-[.9rem] flex items-center justify-center">
                <ColorSwatch
                  variant="Bulk"
                  className="size-4"
                />
              </span>
              <p className="font-bold">{label}</p>
            </div>
            <ThemePickerTabs />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ThemePickerDropdown;
