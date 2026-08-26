"use client";

import { useDroppable } from "@dnd-kit/react";

type Props = Readonly<{
  id: string;
  header: React.ReactNode;
  content: React.ReactNode;
}>;

export default function ApplicationColumn({ id, header, content }: Props) {
  const { ref, isDropTarget } = useDroppable({ id });

  return (
    <div
      ref={ref}
      className={`application-column min-w-80 bg-[#171F334D] border rounded-lg transition-colors ${
        isDropTarget ? "border-[#8083FF]" : "border-[#4645544D]"
      }`}
    >
      {header}
      {content}
    </div>
  );
}
