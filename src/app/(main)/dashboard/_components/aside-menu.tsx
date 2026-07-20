import { asideNavLinks } from "../_constants/aside-nav-links.constant";
import AsideMenuLink from "./aside-menu-link";

export default function AsideMenu() {
  return (
    <nav className="aside-menu-nav mt-0 md:mt-4 grow">
      <ul className="flex flex-col gap-2">
        {asideNavLinks.map((link) => (
          <AsideMenuLink
            key={link.id}
            href={link.href}
            label={link.label}
            icon={link.icon}
          />
        ))}
      </ul>
    </nav>
  );
}
