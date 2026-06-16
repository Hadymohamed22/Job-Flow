export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="Public-Layout flex min-h-screen" id="PublicLayout">
      {/* Aside */}
      <aside className="md:min-w-70 border-e border-[#464554] p-6">aside</aside>

      {/* Header And Main */}
      <div className="header-main grow">
        {/* Header */}
        <header className="py-3 px-6 border-b border-[#464554]">header</header>
        {/* Main */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
