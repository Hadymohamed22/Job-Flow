type Props = {
  children: React.ReactNode;
};

export default function AuthFormIconContainer({ children }: Props) {
  return (
    <div className="auth-form-icon-container size-14 md:size-16 rounded-2xl border border-[#464554] flex items-center justify-center text-xl text-custom-primary">
      {children}
    </div>
  );
}
