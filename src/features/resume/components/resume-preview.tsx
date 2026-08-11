import { ResumeData } from "../types";

interface ResumePreviewProps {
  resumeData: ResumeData
}
export function ResumePreview({ resumeData }: ResumePreviewProps) {
  const { personal } = resumeData;
  
  return (
    <aside>

      <section className="border-t border-[#dcdee2]">
        <div className="px-16 py-14 min-h-[#1123px] bg-white text-[111827] shadow-[var(--shadow-paper)]">
          <div className="space-y-1">
            <h2 className="text-[30px] leading-tight font-semibold tracking-[-0.02em]">{personal.firstName || "John"} {personal.lastName || "Doe"}</h2>
            <p className="mt-1 text-[15px] text-[#374151]">{personal.professionalTitle}</p>
            <p className="mt-3 text-[12px] leading-relaxed text-[#6B7280]">              {personal.email && `${personal.email}`}
              {personal.phone && ` • ${personal.phone}`}
              {personal.location && ` • ${personal.location}`}
              {personal.linkedin && ` • ${personal.linkedin}`}
              {personal.github && ` • ${personal.github}`}
              {personal.portfolio && `• ${personal.portfolio}`}

            </p>
          </div>
          
        </div>
      </section>
    </aside>
  );
}