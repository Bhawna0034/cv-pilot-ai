import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";
import { Briefcase, ChevronDown, GripVertical, Plus, Sparkles, Trash2, X } from "lucide-react";
import { ResumeData, WorkExperience as WorkExperienceType } from "../types";

const ACTIONS = [
    { id: 1, label: "Improve" },
    { id: 2, label: "Rewrite" }
]

const EXPERIENCE = [{
    id: 1, text: ""
}, {
    id: 2, text: ""
}]

interface WorkExperienceProps {
    data: WorkExperienceType[],
    onAddExperience: () => void,
    onRemoveExperience: (experienceId: string) => void,
    onWorkExperienceChange: (experienceId: string, field: keyof WorkExperienceType, value: string) => void,
    onAddAchievement: (experienceId: string) => void,
    onRemoveAchievement: (experienceId: string, achievementId: string) => void;
    onAchievementChange: (
        experienceId: string,
        achievementId: string,
        value: string
    ) => void;


}
export default function WorkExperience({ data, onAddExperience, onRemoveExperience, onWorkExperienceChange, onAddAchievement, onRemoveAchievement, onAchievementChange }: WorkExperienceProps) {
    console.log(data, ">>>workExperience"
    )

    return (
        <section className="border border-[#dcdee2] rounded-2xl shadow-sm">
            <div className="px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <Briefcase className="h-4 w-4 text-gray-600" />

                    <div className="flex flex-col">
                        <span className="text-base font-bold">Work Experience</span>
                        <span className="text-sm text-gray-600">Most recent role first</span>
                    </div>
                </div>
                <div className="flex items-end gap-3">

                    <button type="button" className="text-sm text-gray-600 hover:text-blue-700 hover:font-medium transition-colors flex items-center gap-2 cursor-pointer group">
                        <Sparkles className="h-4 w-4 text-gray-600 group-hover:text-blue-700" />
                        AI Assistant
                    </button>
                    <button type="button" className="hover:text-gray-900 transition-colors group">
                        <ChevronDown className="h-4 w-4 text-gray-600 group-hover:text-gray-900" />
                    </button>
                </div>

            </div>
            <div className="border-t border-[#dcdee2] p-5">
                <div className="relative mx-auto max-w-2xl pl-8">
                    <div className="absolute left-0 top-3 bottom-0 w-px bg-slate-300" />
                    {data.map((exp, index) => (
                        <div key={exp.id} className="relative mb-4">
                            <div className="absolute -left-[7px] top-2 h-4 w-4 rounded-full border-2 border-blue-500 bg-white" />
                            <div className="rounded-2xl border border-[#dcdee2]  p-6 shadow-sm">
                                {/* header */}
                                <div className="mb-6 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-slate-500">
                                        <GripVertical size={16} />
                                        <span className="text-xs font-semibold tracking-widest">POSITION {index + 1}</span>
                                    </div>
                                    <button type="button" onClick={() => onRemoveExperience(exp.id)} className="text-slate-400 hover:text-red-500 transition-colors">
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                                <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="company" className="text-sm font-medium text-gray-900">
                                            Company
                                        </Label>
                                        <Input type="text" id="company" name="company" placeholder="Northwind Labs" value={exp.company} onChange={(e) => onWorkExperienceChange(exp.id, "company", e.target.value)}
                                            className="px-3 py-1 border border-[#dcdee2] shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600/50 rounded-sm" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="role" className="text-sm font-medium text-gray-900">
                                            Role
                                        </Label>
                                        <Input type="text" id="role" name="role" placeholder="Frontend Developer" value={exp.role} onChange={(e) => onWorkExperienceChange(exp.id, "role", e.target.value)}
                                            className="px-3 py-1 border border-[#dcdee2] shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600/50 rounded-sm" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="employmentType" className="text-sm font-medium text-gray-900">
                                            Employment Type
                                        </Label>
                                        <Input type="text" id="employementType" name="employementType" placeholder="Full-time" value={exp.employmentType} onChange={(e) => onWorkExperienceChange(exp.id, "employmentType", e.target.value)}
                                            className="px-3 py-1 border border-[#dcdee2] shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600/50 rounded-sm" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="location" className="text-sm font-medium text-gray-900">
                                            Location
                                        </Label>
                                        <Input type="text" id="location" name="location" placeholder="India" value={exp.location} onChange={(e) => onWorkExperienceChange(exp.id, "location", e.target.value)}
                                            className="px-3 py-1 border border-[#dcdee2] shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600/50 rounded-sm" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="startDate" className="text-sm font-medium text-gray-900">
                                            Start Date
                                        </Label>
                                        <Input type="text" id="firstName" name="firstName" placeholder="John" value={exp.startDate} onChange={(e) => onWorkExperienceChange(exp.id, "startDate", e.target.value)}
                                            className="px-3 py-1 border border-[#dcdee2] shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600/50 rounded-sm" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="endDate" className="text-sm font-medium text-gray-900">
                                            End Date
                                        </Label>
                                        <Input type="text" id="endDate" name="endDate" placeholder="Present" value={exp.endDate} onChange={(e) => onWorkExperienceChange(exp.id, "endDate", e.target.value)}
                                            className="px-3 py-1 border border-[#dcdee2] shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600/50 rounded-sm" />
                                    </div>


                                </div>
                                <div className="flex flex-col gap-1 mt-5">
                                    <Label htmlFor="description" className="text-sm font-medium text-gray-900">Description</Label>
                                    <Textarea placeholder={"Design systems and core product surfaces for a B2B analytics platform."} value={exp.description} onChange={(e) => onWorkExperienceChange(exp.id, "description", e.target.value)} className="min-h-[64px] resize-none bg-white" />
                                </div>
                                <div className="flex flex-col gap-1 mt-5">
                                    <Label htmlFor="achievement" className="text-sm font-medium text-gray-900">Achievement</Label>
                                    <div className="space-y-2 mb-2">
                                        {exp.achievements.map((achievement) => (

                                            <AchievementField key={achievement.id} value={achievement.text}
                                                onChange={(value) =>
                                                    onAchievementChange(
                                                        exp.id,
                                                        achievement.id,
                                                        value
                                                    )
                                                } onRemoveAchievement={() => onRemoveAchievement(exp.id, achievement.id)} />

                                        ))}

                                    </div>
                                    <button type="button" onClick={() => onAddAchievement(exp.id)} className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900"><Plus className="h-4 w-4" />Add Bullet</button>
                                </div>





                            </div>
                            <div className="mt-3 ">
                                <button type="button" onClick={onAddExperience} className="border border-[#dcdee2] text-xs font-medium text-gray-900 inline-flex px-3 py-1.5 rounded-md flex items-center gap-2"> <Plus className="w-4 h-4" /> Add Experience</button>
                            </div>
                        </div>
                    ))}


                </div>
            </div>


        </section>
    )
}


interface AchievementFieldProps {
    value: string;
    onChange: (value: string) => void;
    onRemoveAchievement: () => void;
}
function AchievementField({ value, onChange, onRemoveAchievement }: AchievementFieldProps) {
    return (
        <div className="border border-[#dcdee2] p-2 rounded-lg group">
            <div className="flex gap-2">
                <GripVertical size={16} className="shrink-0 text-slate-400 mt-3" />
                <Textarea value={value}
                    onChange={(e) => onChange(e.target.value)} rows={2} placeholder="Led migration of 120+ screens to a tokenized design system, cutting UI defects 34%." className="w-full resize-none bg-transparent text-slate-700 outline-none" />
                <button type="button" onClick={onRemoveAchievement} className="hidden group-hover:flex shrink-0 text-slate-400 hover:text-red-500 transition-colors mt-3"><X size={16} /></button>

            </div>
            <div className="flex items-center gap-2.5 mt-5">
                {ACTIONS.map((action) => (
                    <button type="button" key={action.id} className="border border-[#dcdee2] px-2.5 py-1 rounded-full flex items-center gap-1 inline-flex group hover:text-blue-600 hover:border-blue-600 text-gray-500 text-xs ">
                        <Sparkles className="h-4 w-4 text-gray-500 group-hover:text-blue-600" />{action.label}</button>
                ))}
            </div>
        </div>
    )
}