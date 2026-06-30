type Props = {
  title: string;
};

export default function BoxTitle({ title }: Props) {
  return (
    <h4 className={"text-[#DAE2FD] text-xl md:text-2xl font-semibold"}>
      {title}
    </h4>
  );
}
