import React from "react";

interface TagProps {
  tag: string;
}

export default function Tag({ tag }: TagProps) {
  return (
    <div className="bg-zinc-700 p-2 rounded-xl text-sm font-bold text-center">
      {tag}

    </div>
  );
}
