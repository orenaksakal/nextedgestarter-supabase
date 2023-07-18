"use client";

import { saEvent } from "@/lib/utils";

import { Button } from "./ui/button";

export default function LemonButton({ text }: { text: string }) {
  return (
    <Button
      onClick={() => {
        saEvent("home_page_purchase_click");
        window.open(
          "https://nextedgestarter.lemonsqueezy.com/checkout/buy/d3617ebf-2624-4627-9f90-4ce5e1a6f090",
          "_blank"
        );
      }}
    >
      <span>{text}</span>
    </Button>
  );
}
