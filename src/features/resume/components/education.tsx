import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { ChevronDown, GraduationCap, Plus, Sparkles, Trash, Trash2 } from "lucide-react";
import { Education as EducationType } from "../types";


const data = [{
    id: 1, exp: "Hello"
}
]
interface EducationProps {
    data: EducationType[],
    onAddEducation: () => void;
    onRemoveEducation: (educationId: string) => void;
    onEducationChange: (educationId: string, field: keyof EducationType, value: string) => void;
}
export default function Education({ data, onAddEducation, onRemoveEducation, onEducationChange }: EducationProps) {
    return (
        <section className="border border-[#dcdee2] rounded-2xl shadow-sm">
            <div className="px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <GraduationCap className="h-4 w-4 text-gray-600" />

                    <div className="flex flex-col">
                        <span className="text-base font-bold">Education</span>
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
                    {data.map((edu, index) => (
                        <div key={edu.id} className="relative mb-4">
                            <div className="rounded-2xl border border-[#dcdee2]  p-6 shadow-sm">
                                {/* header */}
                                <div className="flex flex-col gap-1">
                                    <Label htmlFor="school" className="text-sm font-medium text-gray-900">
                                        School
                                    </Label>
                                    <Input type="text" id="school" name="school" placeholder="Northwind Labs"
                                        className="px-3 py-1 border border-[#dcdee2] shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600/50 rounded-sm" />
                                </div>
                                <div className="grid grid-cols-2 gap-x-6 gap-y-5 mt-4">
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="degree" className="text-sm font-medium text-gray-900">
                                            Degree
                                        </Label>
                                        <Input type="text" id="degree" name="degree" placeholder="B.S."
                                            className="px-3 py-1 border border-[#dcdee2] shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600/50 rounded-sm" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="fieldOfStudy" className="text-sm font-medium text-gray-900">
                                            Field of Study
                                        </Label>
                                        <Input type="text" id="fieldOfStudy" name="fieldOfStudy" placeholder="Frontend Developer"
                                            className="px-3 py-1 border border-[#dcdee2] shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600/50 rounded-sm" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="start" className="text-sm font-medium text-gray-900">
                                            Start
                                        </Label>
                                        <Input type="text" id="start" name="start" placeholder="2022"
                                            className="px-3 py-1 border border-[#dcdee2] shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600/50 rounded-sm" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="end" className="text-sm font-medium text-gray-900">
                                            End
                                        </Label>
                                        <Input type="text" id="end" name="end" placeholder="2024"
                                            className="px-3 py-1 border border-[#dcdee2] shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600/50 rounded-sm" />
                                    </div>



                                </div>
                                <button type="button" onClick={() => onRemoveEducation(edu.id)}className={`flex items-center gap-2.5 text-sm text-gray-500 mt-4 hover:text-red-600 ${data.length === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:text-red-600"}`}>
                                    <Trash2 className="h-4 w-4
                                    "/>Remove</button>


                            </div>
                            <div className="mt-3 ">
                                <button type="button" onClick={onAddEducation} className={`border border-[#dcdee2] text-xs font-medium text-gray-900 inline-flex px-3 py-1.5 rounded-md flex items-center gap-2`}> <Plus className="w-4 h-4 " /> Add Education </button>
                            </div>
                            </div>
                        
                    ))}


                </div>
            </div>


        </section>
    )
}