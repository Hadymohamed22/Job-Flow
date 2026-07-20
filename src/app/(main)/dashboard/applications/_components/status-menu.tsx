"use client";

import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function StatusMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"outline"}
          className="py-2 px-4 text-[#DAE2FD] hover:text-gray-200 w-full md:w-fit"
        >
          Status
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-500/10 rounded-lg">
        <DropdownMenuGroup>
          <DropdownMenuItem>Applied</DropdownMenuItem>
          <DropdownMenuItem>Interviewing</DropdownMenuItem>
          <DropdownMenuItem>Considering</DropdownMenuItem>
          <DropdownMenuItem>Rejected</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
