import { cn } from "@/lib/utils";
import { Magicpen } from "iconsax-react";
import React from "react";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <Magicpen
      variant="Bold"
      className={cn("size-8", className)}
    />
  );
};

export default Logo;
