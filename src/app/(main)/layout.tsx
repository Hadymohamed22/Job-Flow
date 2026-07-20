import AsideLogo from "./dashboard/_components/aside-logo";
import AsideMenu from "./dashboard/_components/aside-menu";
import NewApplicationButton from "./dashboard/_components/new-application-button";
import SearchBar from "./dashboard/_components/search-bar";
import UserWelcome from "./dashboard/_components/user-welcome";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="Public-Layout flex min-h-screen" id="PublicLayout">
      {/* Aside */}
      <aside className="md:min-w-70 border-e border-[#464554] p-4 md:p-6 flex flex-col gap-6 relative">
        {/* Logo */}
        <AsideLogo />

        {/* New Application Button */}
        <NewApplicationButton />

        {/* Aside Menu */}
        <AsideMenu />

        {/* User Welcome */}
        <UserWelcome />
      </aside>

      {/* Header And Main */}
      <div className="header-main grow">
        {/* Header */}
        <header className="py-3 px-6 border-b border-[#464554]">
          {/* Search Bar */}
          <SearchBar />
        </header>

        {/* Main */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
