type Props = {
  message: string;
};

export default function ErrorBox({ message }: Props) {
  return (
    <div className="w-full max-w-md mx-auto py-3 px-4 bg-red-400/10 border border-red-500 font-jetbrains text-red-500 rounded-lg shadow-md flex items-center gap-2 text-xs">
      <span className="wrap-break-word">{message}</span>
    </div>
  );
}
