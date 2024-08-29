"use client";

import AreaPopulator from "@/components/AreaPopulator";
import FloatingElement from "@/components/FloatingElement";

const GuestBgEffect = () => {
  return (
    <AreaPopulator
      minDistance={200}
      className="absolute top-0 left-0 w-full h-full overflow-hidden"
    >
      {(i) => (
        <FloatingElement
          className="text-size-h1 md:text-size-h3 font-brand font-bold text-sky-50"
          initialRotation={Math.random() * 360 * i}
          rotation
        >
          {"?"}
        </FloatingElement>
      )}
      {(i) => (
        <FloatingElement
          className="text-size-h1 md:text-size-h3 font-brand font-bold text-orange-50"
          initialRotation={Math.random() * 360 * i}
          rotation
        >
          {"!"}
        </FloatingElement>
      )}
    </AreaPopulator>
  );
};

export default GuestBgEffect;
