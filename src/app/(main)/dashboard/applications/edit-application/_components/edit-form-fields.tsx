"use client";
import NewApplicationSection from "../../new-application/_components/new-application-section";
import CompanyAndWorkInfoFields from "./company-and-workInfo-fields";
import useApplicationData from "../_hooks/use-application-data";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EditApplicationFormFields,
  editApplicationSchema,
} from "../../new-application/_schema/add-application.schema";
import ErrorBox from "@/shared/components/error-box";
import EditFinanceAndLogisticsFields from "./edit-finance-and-logistics-fields";
import EditApplicationStatusSection from "./edit-application-status-section";
import EditDateSection from "./edit-date-section";
import { Button } from "@/shared/components/ui/button";
import { FileEdit, Loader } from "lucide-react";
import Link from "next/link";
import EditFormSkeleton from "../_skeleton/edit-form.skeleton";
import useEditApplication from "../_hooks/use-edit-application";
import { successToast } from "@/shared/lib/utils/toasts.util";
import { useRouter } from "next/navigation";

type Props = {
  applicationId: string;
};

export default function EditFormFields({ applicationId }: Props) {
  // Navigation
  const router = useRouter();

  // Hooks
  const { data, isLoading, error } = useApplicationData(applicationId);
  const { editApplication, isPending } = useEditApplication(applicationId);

  // Variables
  const formattedDate = data?.date
    ? new Date(data.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : undefined;

  // Forms
  const form = useForm<EditApplicationFormFields>({
    resolver: zodResolver(editApplicationSchema),
    defaultValues: {
      companyName: data?.companyName,
      existingImageUrl: !!data?.companyImageURL,
      jobTitle: data?.jobTitle,
      workLocation: data?.workLocation,
      salary: String(data?.salary) ?? "",
      jobURL: data?.jobURL,
      source: data?.source,
      current_status: data?.current_status,
      date: formattedDate,
      contactLink: data?.contactLink ?? "",
      notes: data?.notes,
      "company-image": undefined as unknown as File,
    },
    mode: "onTouched",
  });

  // Variables
  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors, isDirty },
  } = form;

  // Handlers
  const onSubmit: SubmitHandler<EditApplicationFormFields> = async (values) => {
    try {
      await editApplication(values);
      successToast("Application Edited successfully");
      router.push("/dashboard/applications");
    } catch (err) {
      console.error(
        err instanceof Error ? err.message : "Failed to edit application",
      );
    }
  };

  return isLoading ? (
    <EditFormSkeleton />
  ) : (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-6 mt-7 md:mt-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Company & Work Location & Job Title */}
        <NewApplicationSection title="Company & Role" iconName="company">
          <CompanyAndWorkInfoFields
            companyImageUrl={data?.companyImageURL}
            errors={errors}
            register={register}
            setValue={setValue}
          />
        </NewApplicationSection>

        {/* Salary & Job URL & Source & Contact */}
        <NewApplicationSection title="Finance & Logistics" iconName="salary">
          <EditFinanceAndLogisticsFields register={register} errors={errors} />
        </NewApplicationSection>

        {/* Application Status And Date */}
        <div className="application-status-and-date flex items-center flex-wrap gap-6">
          {/* Application Status */}
          <EditApplicationStatusSection />

          {/* Date */}
          <EditDateSection />
        </div>

        {/* Edit Notes */}
        <span className="text-xs md:text-sm text-gray-500">
          To Edit Notes Go To Preview Page :{" "}
          <Link
            href={`/dashboard/applications/${applicationId}`}
            className="duration-300 underline hover:text-white"
          >
            Click Here
          </Link>
        </span>

        {/* Backend Error */}
        {error ? (
          <ErrorBox
            message={error.message}
            className="mx-0 max-w-full text-center justify-center"
          />
        ) : null}

        {/* Submit OR Cancel */}
        <div className="submit-cancel flex flex-col md:flex-row md:items-center md:justify-end gap-4 mt-4 md:mt-10">
          {/* Cancel Button */}
          <Button
            variant={"ghost"}
            className="py-4 order-2 md:order-1"
            asChild
            disabled={isPending}
          >
            <Link href={"/dashboard/applications"}>Cancel</Link>
          </Button>

          {/* Submit Button */}
          <Button
            className="px-7 py-4 order-1 md:order-2"
            disabled={!isDirty || isPending}
            type="submit"
          >
            {isPending ? (
              <>
                <Loader className="me-2 animate-spin" />
                <span>Editing...</span>
              </>
            ) : (
              <>
                <FileEdit size={20} />
                <span className="ms-2">Edit Application</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
