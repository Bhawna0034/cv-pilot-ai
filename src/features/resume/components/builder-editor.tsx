"use client"
import { useState } from "react";
import BuilderToolbar from "./builder-toolbar";
import PersonalInformationForm from "./personal-information-form";
import { defaultResumeData, ResumeData, WorkExperience as WorkExperienceType } from "../types";
import ProfessionalSummary from "./professional-summary";
import WorkExperience from "./work-experience";

interface BuilderEditorProps {
    resumeData: ResumeData;
    onPersonalInfoChange: (field: keyof ResumeData["personal"], value: string) => void;
    onProfessionalSummary: (value: string) => void;
    onAddExperience: () => void;
    onRemoveExperience: (experienceId: string) => void;
    onWorkExperienceChange: (experienceId: string, field: keyof WorkExperienceType, value: string) => void;
    onAddAchievement: (experienceId: string) => void;
    onRemoveAchievement: (experienceId: string, achievementId: string) => void;
    onAchievementChange: (experienceId: string, achievementId: string, value: string) => void
}
export default function BuilderEditor({ resumeData, onPersonalInfoChange, onProfessionalSummary, onAddExperience, onRemoveExperience, onWorkExperienceChange, onAddAchievement, onRemoveAchievement, onAchievementChange }: BuilderEditorProps) {


    return (
        <section className="bg-white min-h-0 flex flex-col">
            <div className="shrink-0">
                <BuilderToolbar />
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto">
                <div className="border-t border-[#dcdee2] pt-8 px-8">
                    <PersonalInformationForm data={resumeData.personal} onPersonalInfoChange={onPersonalInfoChange} />
                </div>
                <div className="border-t border-[#dcdee2] pt-8 px-8">
                    <ProfessionalSummary value={resumeData.professionalSummary} onProfessionalSummary={onProfessionalSummary} />
                </div>
                <div className="border-t border-[#dcdee2] pt-8 px-8">
                    <WorkExperience data={resumeData.workExperience} onAddExperience={onAddExperience} onRemoveExperience={onRemoveExperience} onWorkExperienceChange={onWorkExperienceChange} onAddAchievement={onAddAchievement} onRemoveAchievement={onRemoveAchievement} onAchievementChange={onAchievementChange} />
                </div>
            </div>
        </section>
    )
}