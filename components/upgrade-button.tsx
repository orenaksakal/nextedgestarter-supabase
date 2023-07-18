"use client";

import { Button } from "@/components/ui/button";

export const UpgradeButton = () => {
  const handleClick = async () => {
    const response = await fetch("/api/payment", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    const url = new URL(result.url);
    window.open(url);
  };

  return <Button onClick={handleClick}>Upgrade</Button>;
};
