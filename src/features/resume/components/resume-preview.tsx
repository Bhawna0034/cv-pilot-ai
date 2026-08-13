import { ResumeData } from "../types";

interface ResumePreviewProps {
  resumeData: ResumeData
}
export function ResumePreview({ resumeData }: ResumePreviewProps) {
  const { personal, professionalSummary, workExperience } = resumeData;
  
  return (
    <aside className="min-h-0">

      <section className="border-t border-[#dcdee2] min-h-0 flex-1 overflow-y-auto">
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
          <div className="mt-3">
            <span className="mb-2 text-[11px] font-semibold tracking-[0.12em] text-[#6B7280] uppercase">SUMMARY</span>
            <p className="text-[12.5px] leading-relaxed text-[#374151]">{professionalSummary}</p>
          </div>
           <div className="mt-4">
  <span className="mb-2 block text-[11px] font-semibold tracking-[0.12em] text-[#6B7280] uppercase">
    EXPERIENCE
  </span>

  <div className="space-y-4">
    {workExperience.map((exp) => (
      <div key={exp.id}>
        {/* Experience header */}
        <div className="flex items-start justify-between">
          <div>
            <h4 className="text-[13px] font-semibold text-[#111827]">
              {exp.role || "Frontend Developer"}
              {exp.company && ` · ${exp.company}`}
            </h4>

            {exp.location && (
              <p className="text-[11px] text-[#6B7280]">
                {exp.location}
                {exp.employmentType && ` · ${exp.employmentType}`}
              </p>
            )}
          </div>

          <p className="text-[11px] text-[#6B7280] whitespace-nowrap">
            {exp.startDate || "Start"} - {exp.endDate || "Present"}
          </p>
        </div>

        {/* Description */}
        {exp.description && (
          <p className="mt-1.5 text-[12px] leading-relaxed text-[#374151]">
            {exp.description}
          </p>
        )}

        {/* Achievements */}
        {exp.achievements.length > 0 && (
          <ul className="mt-1.5 list-disc pl-4 text-[12px] leading-relaxed text-[#374151]">
            {exp.achievements.map((achievement) => (
              achievement.text && (
                <li key={achievement.id}>
                  {achievement.text}
                </li>
              )
            ))}
          </ul>
        )}

        {/* Role */}
        {exp.role && (
          <div className="flex flex-col gap-1 mt-2">
            <h4 className="text-[13px] font-semibold text-[#111827]">Role</h4>
            <p className="mt-1.5 text-[12px] leading-relaxed text-[#374151]">{exp.role}</p>
          </div>
        )}
      </div>
    ))}
  </div>
</div>
          </div>
          
        
      </section>
    </aside>
  );
}
