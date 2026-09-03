"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";

import { Calendar } from "@/shared/components/ui/calendar";
import { Field } from "@/shared/components/ui/field";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/shared/components/ui/input-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui/popover";

function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

type Props = {
  value?: string;
  onChange: (value: string) => void;
  error?: string;
};

export default function DateInputAndPicker({ value, onChange, error }: Props) {
  // States
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(
    value ? new Date(value) : new Date(),
  );
  const [month, setMonth] = React.useState<Date | undefined>(date);
  const [inputValue, setInputValue] = React.useState(value || formatDate(date));

  return (
    <Field className="w-full">
      <InputGroup className="w-full bg-[#060E20]!">
        <div className="input-group-container grow">
          <InputGroupInput
            id="date-required"
            value={inputValue}
            placeholder="June 01, 2025"
            className="placeholder:text-[#6B7280] text-[#DAE2FD]"
            onChange={(e) => {
              const nextDate = new Date(e.target.value);
              setInputValue(e.target.value);
              onChange(e.target.value);
              if (isValidDate(nextDate)) {
                setDate(nextDate);
                setMonth(nextDate);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setOpen(true);
              }
            }}
          />
        </div>
        <InputGroupAddon align="inline-end">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <InputGroupButton
                id="date-picker"
                variant="ghost"
                size="icon-xs"
                aria-label="Select date"
              >
                <CalendarIcon />
                <span className="sr-only">Select date</span>
              </InputGroupButton>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="end"
              alignOffset={-8}
              sideOffset={10}
            >
              <div className="zoom-[0.5] sm:zoom-[0.7]">
                <Calendar
                  mode="single"
                  selected={date}
                  month={month}
                  onMonthChange={setMonth}
                  onSelect={(nextDate) => {
                    setDate(nextDate);
                    const formatted = formatDate(nextDate);
                    setInputValue(formatted);
                    onChange(formatted);
                    setOpen(false);
                  }}
                />
              </div>
            </PopoverContent>
          </Popover>
        </InputGroupAddon>
      </InputGroup>
      {error ? (
        <p className="mt-2 text-[10px] font-jetbrains text-red-600">{error}</p>
      ) : null}
    </Field>
  );
}
