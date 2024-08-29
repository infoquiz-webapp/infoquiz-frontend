"use client";

import { useTransform, motion, MotionValue, motionValue } from "framer-motion";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  initialRotation?: number;
  spring?: MotionValue<any>;
  rotation?:
    | boolean
    | {
        modifier?: number;
      };
  className?: string;
}>;

const FloatingElement = (props: Props) => {
  const { spring, children, className, rotation, initialRotation = 0 } = props;

  const sp = spring || motionValue(initialRotation);

  const r = useTransform(
    sp,
    (value) =>
      value * 360 * ((typeof rotation === "object" && rotation?.modifier) || 1)
  );

  return (
    <motion.div
      style={{ rotate: rotation ? r : 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
