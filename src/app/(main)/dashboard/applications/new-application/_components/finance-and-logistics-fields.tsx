import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Select } from "@/shared/components/ui/select";

export default function FinanceAndLogisticsFields() {
  // Variables
  return (
    <div className="finance-and-logistics-fields flex flex-col gap-4 md:gap-6">
      {/* Salary And Job URL */}
      <div className="salary-jobURL flex items-center flex-wrap gap-4 md:gap-6">
        {/* Salary Input */}
        <div className="salary-field grow">
          {/* Label */}
          <Label htmlFor="Salary" className="text-[#908FA0]">
            SALARY
          </Label>

          {/* Text Input */}
          <Input
            placeholder="9000"
            id={"Salary"}
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4"
          />
        </div>

        {/* Job URL Input */}
        <div className="job-url-field grow">
          {/* Label */}
          <Label htmlFor="JobURL" className="text-[#908FA0]">
            Job URL
          </Label>

          {/* Text Input */}
          <Input
            placeholder="https://linkedin.com/jobs/..."
            id={"JobURL"}
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4"
          />
        </div>
      </div>

      {/* Source And Contact Link */}
      <div className="source-contactLink flex items-center flex-wrap gap-4 md:gap-6">
        {/* Source Input */}
        <div className="source-field grow">
          {/* Label */}
          <Label htmlFor="Source" className="text-[#908FA0]">
            Source
          </Label>

          {/* Select Input */}
          <Input
            placeholder="Linkedin"
            id={"Source"}
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4"
          />
          <Select></Select>
        </div>

        {/* Contact Link Input */}
        <div className="contact-link-field grow">
          {/* Label */}
          <Label htmlFor="contact-link" className="text-[#908FA0]">
            Contact Link
          </Label>

          {/* Text Input */}
          <Input
            placeholder="Recruiter Contact Link"
            id={"contact-link"}
            className="bg-[#060E20]! placeholder:text-[#6B7280] py-4"
          />
        </div>
      </div>
    </div>
  );
}

// export function SelectDemo() {
//   return (
//     <Select items={items}>
//       <SelectTrigger className="w-full max-w-48">
//         <SelectValue />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           <SelectLabel>Fruits</SelectLabel>
//           {items.map((item) => (
//             <SelectItem key={item.value} value={item.value}>
//               {item.label}
//             </SelectItem>
//           ))}
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//   )
// }
