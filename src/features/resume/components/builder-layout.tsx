"use client"
import { useState } from "react";
import BuilderEditor from "./builder-editor";
import BuilderHeader from "./builder-header";
import BuilderSidebar from "./builder-sidebar";
import BuilderToolbar from "./builder-toolbar";
import PreviewToolbar from "./preview-toolbar";
import { ResumePreview } from "./resume-preview";
import { defaultResumeData, ResumeData } from "../types";

export default function BuilderLayout(){
     const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
    const  onPersonalInfoChange = (field : keyof ResumeData["personal"], value: string) => {
        setResumeData((current) => ({
            ...current,
            personal: {
                ...current.personal,
                [field]: value
            }
        }));
        console.log(resumeData)
    }
    return(
        <div className="h-screen flex flex-col">
            <BuilderHeader />

            <main className="grid grid-cols-[280px_1fr_420px] overflow-hidden">
                <BuilderSidebar />
                {/* <BuilderEditor />    */}
                <section> 
                    <BuilderEditor resumeData={resumeData} onPersonalInfoChange={onPersonalInfoChange}/>
                
                </section>
                {/* <ResumePreview/> */}
                <section className="min-h-0 border-l bg-white border-[#dcdee2]">
                    <PreviewToolbar />
                    <ResumePreview resumeData={resumeData}/>
                </section>
            </main>
        </div>
    )
}