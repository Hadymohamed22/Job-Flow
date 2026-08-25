type Props = Readonly<{ header: React.ReactNode; content: React.ReactNode }>;

export default function ApplicationColumn({ header, content }: Props) {
  return (
    <div className="application-column min-w-80 bg-[#171F334D] border border-[#4645544D] rounded-lg">
      {header}
      {content}
    </div>
  );
}
