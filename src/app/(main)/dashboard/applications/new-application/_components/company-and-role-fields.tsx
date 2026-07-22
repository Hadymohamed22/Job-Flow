"use client";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import WorkLocations from "./work-locations";
import { useState } from "react";

export default function CompanyAndRoleFields() {
  // State
  const [selectedWorkLocation, setSelectedWorkLocation] =
    useState<WorkLocationsValue>("remote");

  return (
    <div className="company-and-role-fields flex flex-col gap-4 md:gap-6">
      {/* Company & Job Title */}
      <div className="company-jobTitle flex items-center flex-wrap gap-4 md:gap-6">
        {/* Company Input */}
        <div className="company-name-field grow">
          {/* Label */}
          <Label htmlFor="CompanyName" className="text-[#908FA0]">
            Company Name
          </Label>

          {/* Text Input */}
          <Input
            placeholder="Microsoft"
            id={"CompanyName"}
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4"
          />
        </div>

        {/* Job Title Input */}
        <div className="job-title-field grow">
          {/* Label */}
          <Label htmlFor="JobTitle" className="text-[#908FA0]">
            Job Title
          </Label>

          {/* Text Input */}
          <Input
            placeholder="Mid React.js Developer"
            id={"JobTitle"}
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4"
          />
        </div>
      </div>

      {/* Work Location */}
      <div className="work-location">
        <Label className="text-[#908FA0]">Work Location</Label>
        <WorkLocations
          selectedWorkLocation={selectedWorkLocation}
          setSelectedWorkLocation={setSelectedWorkLocation}
        />
      </div>
    </div>
  );
}
