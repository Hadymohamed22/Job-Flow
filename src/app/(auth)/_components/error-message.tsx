type Props = {
  message: string;
};

export default function ErrorMessage({ message }: Props) {
  return (
    <p className="text-[10px] font-jetbrains text-red-600 mt-1 px-1">
      {message}
    </p>
  );
}
