"use client";

import CompanyAndRoleSection from "./company-and-role-section";
import FinanceAndLogisticsSection from "./finance-and-logistics-section";
import ApplicationStatusSection from "./application-status-section";
import DateSection from "./date-section";
import NotesSection from "./notes-section";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";
import { FilePlus2, Loader } from "lucide-react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  addApplicationSchema,
  AddApplicationFormValues,
} from "../_schema/add-application.schema";
import useCreateApplication from "../_hooks/use-create-application";
import ErrorBox from "@/shared/components/error-box";
import { useRouter } from "next/navigation";
import { successToast } from "@/shared/lib/utils/toasts.util";

export default function AddApplicationFields() {
  // Navigation
  const router = useRouter();

  // Hooks
  const { createApplication, isPending, error } = useCreateApplication();

  // Form
  const form = useForm<AddApplicationFormValues>({
    resolver: zodResolver(addApplicationSchema),
    defaultValues: {
      companyName: "",
      jobTitle: "",
      workLocation: "remote",
      salary: "",
      jobURL: "",
      source: "",
      current_status: "Applied",
      date: "",
      "company-image": undefined as unknown as File,
      notes: "",
      contactLink: "",
    },
    mode: "onTouched",
  });

  // Variables
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = form;

  // Handlers
  const onSubmit: SubmitHandler<AddApplicationFormValues> = async (values) => {
    try {
      await createApplication(values);
      successToast("Application created successfully");
      router.push("/dashboard/applications");
    } catch (err) {
      console.error(
        err instanceof Error ? err.message : "Failed to create application",
      );
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className="content flex flex-col gap-6 mt-7 md:mt-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Company And Role */}
        <CompanyAndRoleSection
          register={register}
          errors={errors}
          setValue={setValue}
        />

        {/* Finance And Logistics */}
        <FinanceAndLogisticsSection register={register} errors={errors} />

        {/* Application Status And Date */}
        <div className="application-status-and-date flex items-center flex-wrap gap-6">
          {/* Application Status */}
          <ApplicationStatusSection />

          {/* Date */}
          <DateSection />
        </div>

        {/* Notes */}
        <NotesSection register={register} errors={errors} />

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
            disabled={isPending}
            type="submit"
          >
            {isPending ? (
              <>
                <Loader className="me-2 animate-spin" />
                <span>Creating...</span>
              </>
            ) : (
              <>
                <FilePlus2 size={20} />
                <span className="ms-2">Add Application</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
