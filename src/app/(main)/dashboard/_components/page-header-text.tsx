type Props = {
  title: string;
  subTitle: string;
};

export default function PageHeaderText({ title, subTitle }: Props) {
  return (
    <div className="page-header-text">
      <h1 className="text-3xl md:text-4xl font-semibold text-[#DAE2FD]">
        {title}
      </h1>
      <p className="text-xs md:text-sm text-[#C7C4D7]">{subTitle}</p>
    </div>
  );
}
