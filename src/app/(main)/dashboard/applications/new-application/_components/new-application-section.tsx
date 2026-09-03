"use client";

import { ReactNode } from "react";
import {
  Building2,
  Briefcase,
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  FileText,
  Link2,
  DollarSign,
  ClipboardList,
  StickyNote,
} from "lucide-react";
import { cn } from "@/shared/lib/utils/tailwind-merge";

const icons = {
  company: <Building2 size={24} />,
  role: <Briefcase size={24} />,
  user: <User size={24} />,
  email: <Mail size={24} />,
  phone: <Phone size={24} />,
  calendar: <Calendar size={24} />,
  location: <MapPin size={24} />,
  document: <FileText size={24} />,
  link: <Link2 size={24} />,
  salary: <DollarSign size={24} />,
  application: <ClipboardList size={24} />,
  notes: <StickyNote size={24} />,
} as const;

export type IconName = keyof typeof icons;

interface Props {
  title: string;
  iconName: IconName;
  children: ReactNode;
  className?: string;
}

export default function NewApplicationSection({
  title,
  iconName,
  children,
  className,
}: Props) {
  return (
    <section
      className={cn(
        "rounded-lg border border-[#464554] bg-[#131B2E] shadow-sm",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-[#464554] px-5 py-4 bg-[#171F33] rounded-t-lg">
        <span className="text-custom-primary">{icons[iconName]}</span>
        <h2 className="font-semibold text-[#DAE2FD]">{title}</h2>
      </div>

      {/* Body */}
      <div className="p-5 md:p-6">{children}</div>
    </section>
  );
}
