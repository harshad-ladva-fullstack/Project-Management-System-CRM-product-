"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Logo {
  size: "sm" | "md" | "lg" | "xl" | "xxl";
  logo: string;
  fallBackString?: string;
  className?: string;
}

export default function Logo({ size = "md", logo, fallBackString, className }: Logo) {
  return (
    <>
      <div className={className}>
        <Avatar>
          <AvatarImage src={logo} size={size} />
          <AvatarFallback>{fallBackString}</AvatarFallback>
        </Avatar>
      </div>
    </>
  );
}
