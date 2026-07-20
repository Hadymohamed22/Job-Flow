import InterviewBox, { interviewDataType } from "./interview-box";

export default function InterviewsContainer() {
  const interviews: {
    id: string;
    title: string;
    company: string;
    date: string;
    type: interviewDataType;
  }[] = [
    {
      id: crypto.randomUUID(),
      company: "Microsoft",
      title: "Flutter Developer",
      date: "Today, 2:00 PM",
      type: "online",
    },
    {
      id: crypto.randomUUID(),
      company: "Microsoft",
      title: "Flutter Developer",
      date: "Today, 2:00 PM",
      type: "on-site",
    },
    {
      id: crypto.randomUUID(),
      company: "Microsoft",
      title: "Flutter Developer",
      date: "Today, 2:00 PM",
      type: "phone",
    },
  ];
  return (
    <div className="interviews-container mt-4 flex flex-col gap-2">
      {/* Interview Box's */}
      {interviews.map((interview) => (
        <InterviewBox
          key={interview.id}
          companyName={interview.company}
          date={interview.date}
          interviewType={interview.type}
          title={interview.title}
        />
      ))}
    </div>
  );
}
