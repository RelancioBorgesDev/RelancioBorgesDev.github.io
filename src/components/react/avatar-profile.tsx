import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface AvatarProfileProps {
  src: string;
  fallbackName: string;
}

export function AvatarProfile({ src, fallbackName }: AvatarProfileProps) {
  return (
    <Avatar className={`${src.includes("vpTech") ? "bg-white" : ""} w-11 h-11`}>
      <AvatarImage src={src} className=""/>
      <AvatarFallback>{fallbackName}</AvatarFallback>
    </Avatar>
  );
}
