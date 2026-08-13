"use client";

import { useEffect, useState } from "react";
import BuilderEditor from "./builder-editor";
import BuilderHeader from "./builder-header";
import BuilderSidebar from "./builder-sidebar";
import PreviewToolbar from "./preview-toolbar";
import { ResumePreview } from "./resume-preview";
import { defaultResumeData, ResumeData, WorkExperience } from "../types";
import { createExperience } from "../types/work-experience";

const RESUME_STORAGE_KEY = "cvpilot-resume";

export default function BuilderLayout() {
  const [resumeData, setResumeData] =
    useState<ResumeData>(defaultResumeData);

  const [isLoaded, setIsLoaded] = useState(false);

  // 1. Load saved data AFTER hydration
  useEffect(() => {
    const savedResume =
      localStorage.getItem(RESUME_STORAGE_KEY);

    if (savedResume) {
      try {
        const parsedResume: ResumeData =
          JSON.parse(savedResume);

        setResumeData(parsedResume);
      } catch (error) {
        console.error(
          "Failed to load saved resume:",
          error
        );
      }
    }

    setIsLoaded(true);
  }, []);

  // 2. Save only AFTER loading has finished
  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    localStorage.setItem(
      RESUME_STORAGE_KEY,
      JSON.stringify(resumeData)
    );
  }, [resumeData, isLoaded]);

  const onPersonalInfoChange = (
    field: keyof ResumeData["personal"],
    value: string
  ) => {
    setResumeData((current) => ({
      ...current,
      personal: {
        ...current.personal,
        [field]: value,
      },
    }));
  };
  const onProfessionalSummaryChange = (value: string) => {
    setResumeData((current) => ({
      ...current,
      professionalSummary: value,
    }));
  };

  const onAddExperience = () => {
    setResumeData((current) => ({
      ...current,
      workExperience: [
        ...current.workExperience,
        createExperience()
      ]

    }));



  }
  const onRemoveExperience = (experienceId: string) => {
    setResumeData((current) => ({
      ...current,
      workExperience:
        current.workExperience.filter((exp) => exp.id !== experienceId)

    }))

  }
  const onWorkExperienceChange = (experienceId: string, field: keyof WorkExperience, value: string) => {
   setResumeData((current) => ({
    ...current,
     workExperience: current.workExperience.map((exp) => exp.id === experienceId ? {
      ...exp,
      [field]: value
     }: exp)
   }))
  }

  const onAddAchievement = (experienceId: string) => {
    setResumeData((current) => ({
      ...current,
      workExperience: current.workExperience.map((exp) => exp.id === experienceId ? {
        ...exp,
        achievements: [
          ...exp.achievements,
          {
            id: crypto.randomUUID(),
            text: ""
          }
        ]
      }: exp)
    }));
    

  }

const onRemoveAchievement = (
  experienceId: string,
  achievementId: string
) => {
  setResumeData((current) => ({
    ...current,
    workExperience: current.workExperience.map((experience) =>
      experience.id === experienceId
        ? {
            ...experience,
            achievements: experience.achievements.filter(
              (achievement) => achievement.id !== achievementId
            ),
          }
        : experience
    ),
  }));
};
const onAchievementChange = (
  experienceId: string,
  achievementId: string,
  value: string
) => {
  setResumeData((current) => ({
    ...current,
    workExperience: current.workExperience.map((experience) =>
      experience.id === experienceId
        ? {
            ...experience,
            achievements: experience.achievements.map((achievement) =>
              achievement.id === achievementId
                ? {
                    ...achievement,
                    text: value,
                  }
                : achievement
            ),
          }
        : experience
    ),
  }));
};

  return (
    <div className="flex h-screen flex-col">
      <BuilderHeader />

      <main className="grid min-h-0 flex-1 grid-cols-[280px_1fr_420px] overflow-hidden">
        <BuilderSidebar />

        <BuilderEditor
          resumeData={resumeData}
          onPersonalInfoChange={onPersonalInfoChange}
          onProfessionalSummary={onProfessionalSummaryChange}
          onAddExperience={onAddExperience}
          onRemoveExperience={onRemoveExperience}
          onWorkExperienceChange={onWorkExperienceChange}
          onAddAchievement={onAddAchievement} 
          onRemoveAchievement={onRemoveAchievement}
          onAchievementChange={onAchievementChange}
        />

        <section className="min-h-0 border-l border-[#dcdee2] bg-white">
          <PreviewToolbar />

          <ResumePreview
            resumeData={resumeData}
          />
        </section>
      </main>
    </div>
  );
}