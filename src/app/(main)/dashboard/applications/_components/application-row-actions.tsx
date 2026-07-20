"use client";

import { Button } from "@/shared/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

interface ApplicationRowActionsProps {
  applicationId: string;
}

export default function ApplicationRowActions({
  applicationId,
}: ApplicationRowActionsProps) {
  return (
    <div className="flex items-center justify-end gap-2">
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="h-8 gap-1.5 px-3 text-[#DAE2FD] hover:text-gray-200"
        onClick={() => console.log("edit", applicationId)}
      >
        <Pencil />
        Edit
      </Button>
      <Button
        type="button"
        variant="destructive"
        size="sm"
        className="h-8 gap-1.5 px-3 duration-200 hover:text-red-500"
        onClick={() => console.log("delete", applicationId)}
      >
        <Trash2 />
        Delete
      </Button>
    </div>
  );
}
