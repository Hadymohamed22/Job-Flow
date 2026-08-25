import InterviewBox from "./interview-box";

export default function InterviewsContainer() {
  const interviews: {
    id: string;
    title: string;
    company: string;
    companyImage: string;
  }[] = [
    {
      id: crypto.randomUUID(),
      company: "Microsoft",
      title: "Flutter Developer",
      companyImage:
        "https://1000logos.net/wp-content/uploads/2021/04/Microsoft-logo.png",
    },
    {
      id: crypto.randomUUID(),
      company: "Google",
      title: "React Developer",
      companyImage:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      id: crypto.randomUUID(),
      company: "Amazon",
      title: "Backend Engineer",
      companyImage:
        "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png",
    },
  ];
  return (
    <div className="interviews-container mt-4 flex flex-col gap-2">
      {/* Interview Box's */}
      {interviews.map((interview) => (
        <InterviewBox
          key={interview.id}
          companyName={interview.company}
          companyImage={interview.companyImage}
          title={interview.title}
        />
      ))}
    </div>
  );
}
