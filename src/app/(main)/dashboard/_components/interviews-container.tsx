import ErrorMessage from "@/app/(auth)/_components/error-message";
import getUpcomingInterviewsAction from "../_actions/get-upcoming-interviews.action";
import InterviewBox from "./interview-box";

export default async function InterviewsContainer() {
  // Variables
  let interviews;
  try {
    interviews = await getUpcomingInterviewsAction();
  } catch (error) {
    return <ErrorMessage message={(error as Error).message} />;
  }

  return (
    <div className="interviews-container mt-4 flex flex-col gap-2">
      {/* Interview Box's */}
      {interviews.map((interview) => (
        <InterviewBox
          key={interview._id}
          companyName={interview.companyName}
          companyImage={interview.companyImageURL}
          title={interview.jobTitle}
        />
      ))}
    </div>
  );
}
