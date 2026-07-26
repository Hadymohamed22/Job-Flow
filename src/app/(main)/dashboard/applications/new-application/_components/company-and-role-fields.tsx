"use client";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import Image from "next/image";
import WorkLocations from "./work-locations";
import {
  ChangeEvent,
  DragEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { AddApplicationFormValues } from "../_schema/add-application.schema";
import ErrorMessage from "@/app/(auth)/_components/error-message";

type Props = {
  register: UseFormRegister<AddApplicationFormValues>;
  errors: FieldErrors<AddApplicationFormValues>;
  setValue: UseFormSetValue<AddApplicationFormValues>;
};

type CompanyImageState = {
  file: File | null;
  preview: string | null;
};

export default function CompanyAndRoleFields({
  register,
  errors,
  setValue,
}: Props) {
  // States
  const [selectedWorkLocation, setSelectedWorkLocation] =
    useState<WorkLocationsValue>("remote");
  const [companyImage, setCompanyImage] = useState<CompanyImageState>({
    file: null,
    preview: null,
  });
  const [dragActive, setDragActive] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // Refs
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handlers
  const handleImageSelection = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    if (files.length > 1) {
      setUploadError("Please upload only one image.");
      return;
    }

    const selectedFile = files[0];

    if (!selectedFile.type.startsWith("image/")) {
      setUploadError("Only image files are allowed.");
      return;
    }

    setUploadError(null);

    setCompanyImage((prev) => {
      if (prev.preview) {
        URL.revokeObjectURL(prev.preview);
      }

      return {
        file: selectedFile,
        preview: URL.createObjectURL(selectedFile),
      };
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleImageSelection(event.target.files);
    if (event.target.files?.[0]) {
      setValue("company-image", event.target.files[0]);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);
    handleImageSelection(event.dataTransfer.files);
    if (event.dataTransfer.files?.[0]) {
      setValue("company-image", event.dataTransfer.files[0]);
    }
  };

  const handleReplaceImage = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    fileInputRef.current?.click();
  };

  const handleRemoveImage = () => {
    setCompanyImage((prev) => {
      if (prev.preview) {
        URL.revokeObjectURL(prev.preview);
      }

      return {
        file: null,
        preview: null,
      };
    });

    setUploadError(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    setValue("company-image", undefined as unknown as File, {
      shouldDirty: true,
    });
  };

  // Effects
  useEffect(() => {
    return () => {
      if (companyImage.preview) {
        URL.revokeObjectURL(companyImage.preview);
      }
    };
  }, [companyImage.preview]);

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
            id="CompanyName"
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4"
            {...register("companyName")}
          />
          {errors.companyName ? (
            <ErrorMessage
              message={errors.companyName.message || "Company name is required"}
            />
          ) : null}
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
            id="JobTitle"
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4"
            {...register("jobTitle")}
          />
          {errors.jobTitle ? (
            <ErrorMessage
              message={errors.jobTitle.message || "Job title is required"}
            />
          ) : null}
        </div>
      </div>

      {/* Company Image */}
      <div className="company-image-upload">
        <Label className="mb-2 block text-[#908FA0]">Company Image</Label>

        <div
          onDragOver={(event) => {
            event.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={(event) => {
            event.preventDefault();
            setDragActive(false);
          }}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border px-4 py-6 text-center transition ${
            dragActive
              ? "border-[#8B5CF6] bg-[#8B5CF6]/10"
              : "border-[#464554] bg-[#060E20]"
          }`}
        >
          <Input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleInputChange}
          />

          {companyImage.preview ? (
            <div className="flex w-full flex-col items-center gap-3">
              <Image
                src={companyImage.preview ?? "/"}
                alt="Company preview"
                width={112}
                height={112}
                unoptimized
                className="h-28 w-28 rounded-xl object-cover"
              />
              <p className="text-sm text-[#D1D5DB]">
                {companyImage.file?.name ?? "Image uploaded"}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  type="button"
                  onClick={handleReplaceImage}
                  className="rounded-lg border border-[#4B5563] px-3 py-2 text-sm text-[#F3F4F6] transition hover:border-[#8B5CF6] hover:text-[#8B5CF6]"
                >
                  Replace
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleRemoveImage();
                  }}
                  className="rounded-lg border border-[#4B5563] px-3 py-2 text-sm text-[#F3F4F6] transition hover:border-red-500 hover:text-red-400"
                >
                  Remove
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-full border border-[#4B5563] px-2 md:px-3 py-1 text-[10px] md:text-xs uppercase tracking-[0.1rem] md:tracking-[0.2em] text-[#908FA0] font-jetbrains">
                Upload Image
              </div>
              <p className="text-xs md:text-sm text-[#F3F4F6]">
                Drag and drop an image here, or click to select one
              </p>
              <p className="text-[10px] md:text-xs text-[#908FA0]">
                JPG, PNG, WEBP • one file only
              </p>
            </div>
          )}
        </div>

        {uploadError ? (
          <p className="mt-2 text-sm text-red-400">{uploadError}</p>
        ) : null}
        {errors["company-image"] ? (
          <ErrorMessage
            message={
              errors["company-image"].message || "Company image is required"
            }
          />
        ) : null}
      </div>

      {/* Work Location */}
      <div className="work-location">
        <Label className="text-[#908FA0]">Work Location</Label>
        <WorkLocations
          selectedWorkLocation={selectedWorkLocation}
          setSelectedWorkLocation={setSelectedWorkLocation}
          setValue={setValue}
        />
      </div>
    </div>
  );
}
