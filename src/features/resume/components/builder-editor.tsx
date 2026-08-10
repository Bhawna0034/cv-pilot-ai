"use client"
import { useState } from "react";
import BuilderToolbar from "./builder-toolbar";
import PersonalInformationForm from "./personal-information-form";
import { defaultResumeData, ResumeData } from "../types";

interface BuilderEditorProps{
    resumeData: ResumeData;
    onPersonalInfoChange: (field: keyof ResumeData["personal"], value: string) => void;
}
export default function BuilderEditor({resumeData, onPersonalInfoChange}: BuilderEditorProps){
   
    return(
        <section className="bg-white min-h-0">
            <BuilderToolbar />
            <div className="border-t border-[#dcdee2] pt-8 px-8 min-h-0 flex-1 overflow-y-auto">
            <PersonalInformationForm  data={resumeData.personal} onPersonalInfoChange={onPersonalInfoChange} />
            </div>
        </section>
    )
}