import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface AvatarProfileProps {
  src: string;
  fallbackName: string;
}

export function AvatarProfile({ src, fallbackName }: AvatarProfileProps) {
  return (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback>{fallbackName}</AvatarFallback>
    </Avatar>
  );
}
