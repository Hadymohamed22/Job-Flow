export default function AuthFormsFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="border-t border-gray-400 min-h-11 flex justify-center gap-2 text-center items-end text-sm text-gray-400">
      {children}
    </p>
  );
}
