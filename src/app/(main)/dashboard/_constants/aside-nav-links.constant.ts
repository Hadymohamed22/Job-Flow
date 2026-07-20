import { iconType } from "../_components/aside-menu-link";

type AsideNavLink = {
  id: string;
  label: string;
  href: string;
  icon: iconType;
};

export const asideNavLinks: AsideNavLink[] = [
  {
    id: crypto.randomUUID(),
    label: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
  },
  {
    id: crypto.randomUUID(),
    label: "Applications",
    href: "/dashboard/applications",
    icon: "applications",
  },
  {
    id: crypto.randomUUID(),
    label: "Kanban",
    href: "/dashboard/kanban",
    icon: "kanban",
  },
  {
    id: crypto.randomUUID(),
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: "analytics",
  },
];
