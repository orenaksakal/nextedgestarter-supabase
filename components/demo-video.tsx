"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export function DemoVideoSection() {
  const { resolvedTheme } = useTheme();

  return (
    <div>
      <div>
        <Image
          src={
            resolvedTheme && resolvedTheme === "light"
              ? "/white.webp"
              : "/dark.webp"
          }
          alt="Next Edge Starter"
          width={1204}
          height={900}
        />
      </div>
    </div>
  );
}
