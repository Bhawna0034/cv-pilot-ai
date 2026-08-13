"use client"
import { ScrollArea } from "@/src/components/ui/scroll-area";
import { Progress } from "@/src/components/ui/progress";
import { Briefcase, Check, CheckIcon, Database, FilePlusCorner, FileText, Globe, GraduationCap, HelpCircle, Languages, MessageSquareHeart, Rocket, Settings, Trophy, User, Wrench } from "lucide-react";
import { useState } from "react";


const sections = [
    {
        id: 1, name: "Personal Information", icon: User, completed: true
    }, {
        id: 2, name: "Professional Summary", icon: FileText, completed: true
    }, {
        id: 3, name: "Work Experience", icon: Briefcase, completed: true
    }, {
        id: 4, name: "Education", icon: GraduationCap, completed: false
    },
    { id: 5, name: "Projects", icon: Rocket, completed: true }, {
        id: 6, name: "Skills", icon: Wrench, completed: true
    },

    { id: 7, name: "Certifications", icon: Trophy, completed: false },
    { id: 8, name: "Languages", icon: Globe, completed: true },
    { id: 9, name: "Additional Sections", icon: FilePlusCorner, completed: false }
]
export default function BuilderSidebar() {
    const [activeSection, setActiveSection] = useState(sections[0].id);
    return (
        <aside className="flex h-full min-h-0 flex-col border-r border-[#dcdee2]">
            <div className="flex items-center gap-4 p-5">
                <div className="w-8 h-8 rounded-lg bg-[#2563eb] text-white font-bold text-sm flex items-center justify-center">CV</div>
                <div className="flex flex-col gap-0.5">
                    <h2 className="text-sm font-bold">CVPilot AI</h2>
                    <span className="text-xs text-[#787f8a]">Resume workspace</span>
                </div>

            </div>
            <div className="px-5">
                <div className="flex items-center justify-between">
                    <span className="text-xs text-[#787f8a]">Resume Health</span>
                    <span className="text-sm font-medium">78%</span>
                </div>
                <Progress value={78} className="w-full h-1.5 " />
            </div>
            <div className="flex min-h-0 flex-1 flex-col pt-5">
                <h3 className="text-sm text-gray-600 font-medium px-5">RESUME SECTIONS</h3>
                <div className="px-4 py-2.5 min-h-0 flex-1">
                    <ScrollArea className="h-full">
                        <nav className="px-0">
                            <ul className="space-y-1">
                                {sections.map((section, index) => {
                                    const Icon = section.icon;
                                    const isActive = activeSection === section.id;

                                    return (
                                        <li key={section.id} >
                                            <button
                                                type="button"
                                                className={`flex w-full items-center cursor-pointer justify-between  rounded-xl px-3 py-2.5 text-left transition-colors  ${isActive
                                                        ? "bg-[#e8f1ff] text-blue-600"
                                                        : "text-slate-700 hover:bg-slate-50 "
                                                    }`}
                                                    onClick={() => setActiveSection(section.id)}
                                            >
                                                <span className={`flex min-w-0 items-center gap-3 border-l pl-2 ${isActive ? "border-blue-600" : "border-transparent"}`}>
                                                    <Icon
                                                        className={`h-4 w-4 shrink-0 ${isActive
                                                                ? "text-blue-600"
                                                                : "text-slate-500"
                                                            }`}
                                                    />

                                                    <span className="truncate text-sm font-medium">
                                                        {section.name}
                                                    </span>
                                                </span>

                                                {section.completed && (
                                                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                                                        <Check className="h-3 w-3 text-emerald-600" />
                                                    </span>
                                                )}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </ScrollArea>
                </div>

            </div>

            <div className="p-3 border-t border-[#dcdee2] shrink-0">
                <div className="px-3 py-2.5 rounded-xl bg-white border border-[#dcdee2] flex items-center gap-2.5">
                    <Database className="h-4 w-4" />
                    <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-medium">Guest Mode</span>
                        <span className="text-xs text-[#787f8a]">Stored locally - never uploaded</span>
                    </div>


                </div>
                <div className="flex flex-col gap-4 px-4 py-3">
                    <div className="flex items-center gap-2.5 text-sm text-gray-600">
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                    </div>
                     <div className="flex items-center gap-2.5 text-sm text-gray-600">
                        <HelpCircle className="h-4 w-4" />
                        <span>Help</span>
                    </div>
                     <div className="flex items-center gap-2.5 text-sm text-gray-600">
                        <MessageSquareHeart className="h-4 w-4" />
                        <span>Feedback</span>
                    </div>
                </div>
            </div>

        </aside>
    )
}