"use client";

import { Button } from "@/shared/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import DeleteApplicationAction from "./delete-application-action";

interface ApplicationRowActionsProps {
  data: ApplicationDataType;
}

export default function ApplicationRowActions({
  data,
}: ApplicationRowActionsProps) {
  // Navigation
  const router = useRouter();

  // Variables
  const queryClient = useQueryClient();

  // Handlers
  const handleEdit = () => {
    queryClient.setQueryData<ApplicationDataType>(
      ["application", data._id],
      data,
    );
    router.push(`/dashboard/applications/edit-application/${data._id}`);
  };
  return (
    <div className="flex items-center justify-end gap-2">
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="h-8 gap-1.5 px-3 text-[#DAE2FD] hover:text-gray-200"
        onClick={(e) => {
          e.stopPropagation();
          handleEdit();
        }}
      >
        <Pencil />
        Edit
      </Button>
      <DeleteApplicationAction
        applicationId={data._id}
        applicationName={data.jobTitle}
        companyName={data.companyName}
      />
    </div>
  );
}
