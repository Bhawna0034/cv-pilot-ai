import { FieldDescription } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { ChevronDown, ImageUp, Pencil, Sparkles, User } from "lucide-react";
import { PersonalInformation } from "../types";

interface PersonalInformationProps {
    data: PersonalInformation;
    onPersonalInfoChange: (field: keyof PersonalInformation, value: string) => void;
}
export default function PersonalInformationForm({data, onPersonalInfoChange}: PersonalInformationProps) {
    return(
        <section className="border border-[#dcdee2] rounded-2xl shadow-sm">
            <div className="px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <User className="h-4 w-4 text-gray-600" />
                    <div className="flex flex-col">
                        <span className="text-base font-bold">Personal Information</span>
                        <span className="text-sm text-gray-600">How recruiters reach you</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button type="button" className="text-gray-600 hover:text-gray-900 hover:font-medium transition-colors flex items-center gap-2 cursor-pointer group">
                        <Pencil className="h-4 w-4 text-gray-600 group-hover:text-gray-900" />
                        Edit
                    </button>
                    <button type="button" className="text-gray-600 hover:text-blue-700 hover:font-medium transition-colors flex items-center gap-2 cursor-pointer group">
                        <Sparkles className="h-4 w-4 text-gray-600 group-hover:text-blue-700" />
                        AI Assistant
                    </button>
                    <button type="button" className="hover:text-gray-900 transition-colors group">
                        <ChevronDown className="h-4 w-4 text-gray-600 group-hover:text-gray-900" />
                    </button>
                </div>

            </div>
            <div className="border-t border-[#dcdee2] p-5">
                <form className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <Label htmlFor="firstName" className="text-sm font-medium text-gray-900">
                                First Name
                            </Label>
                            <Input type="text" id="firstName" name="firstName" placeholder="John" 
                            value={data.firstName} onChange={(e) => onPersonalInfoChange("firstName", e.target.value)} className="px-3 py-1 border border-[#dcdee2] shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600/50 rounded-sm" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <Label htmlFor="lastName" className="text-sm font-medium text-gray-900">
                                Last Name
                            </Label>
                            <Input type="text" id="lastName" name="lastName" placeholder="Doe"
                            value={data.lastName} onChange={(e) => onPersonalInfoChange("lastName", e.target.value)} className="px-3 py-1 border border-[#dcdee2] shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600/50 rounded-sm" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                            <Label htmlFor="professionalTitle" className="text-sm font-medium text-gray-900">
                                Professional Title
                            </Label>
                            <Input type="text" id="professionalTitle" name="professionalTitle" placeholder="Software Engineer" 
                            value={data.professionalTitle} onChange={(e) => onPersonalInfoChange("professionalTitle", e.target.value)} className="px-3 py-1 border border-[#dcdee2] shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600/50 rounded-sm" />
                            <FieldDescription className="text-xs text-gray-600">Mirror the job title you're targeting - ATS parsers weight this.</FieldDescription>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <Label htmlFor="email" className="text-sm font-medium text-gray-900">
                                Email
                            </Label>
                            <Input type="email" id="email" name="email" placeholder="john.doe@example.com" 
                            value={data.email} onChange={(e) => onPersonalInfoChange("email", e.target.value)} className="px-3 py-1 border border-[#dcdee2] shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600/50 rounded-sm" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <Label htmlFor="phone" className="text-sm font-medium text-gray-900">
                                Phone
                            </Label>
                            <Input type="tel" id="phone" name="phone" placeholder="(123) 456-7890" 
                            value={data.phone} onChange={(e) => onPersonalInfoChange("phone", e.target.value)} className="px-3 py-1 border border-[#dcdee2] shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600/50 rounded-sm" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <Label htmlFor="location" className="text-sm font-medium text-gray-900">
                                Location
                            </Label>
                            <Input type="text" id="location" name="location" placeholder="New York, NY"
                            value={data.location} onChange={(e) => onPersonalInfoChange("location", e.target.value)} className="px-3 py-1 border border-[#dcdee2] shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600/50 rounded-sm" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <Label htmlFor="linkedin" className="text-sm font-medium text-gray-900">
                                LinkedIn
                            </Label>
                            <Input type="text" id="linkedin" name="linkedin" placeholder="https://linkedin.com/in/yourname" value={data.linkedin} onChange={(e) => onPersonalInfoChange("linkedin", e.target.value)} className="px-3 py-1 border border-[#dcdee2] shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600/50 rounded-sm" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <Label htmlFor="github" className="flex items-center gap-2 text-sm font-medium text-gray-900">
                                GitHub 
                                <span className="text-xs text-gray-500">Optional</span>
                            </Label>
                            <Input type="text" id="github" name="github" placeholder="https://github.com/yourname" value={data.github ?? ""} onChange={(e) => onPersonalInfoChange("github", e.target.value)} className="px-3 py-1 border border-[#dcdee2] shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600/50 rounded-sm" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <Label htmlFor="portfolio" className="text-sm font-medium text-gray-900 flex items-center gap-2">
                                Portfolio 
                                <span className="text-xs text-gray-500">Optional</span>
                            </Label>
                            <Input type="text" id="portfolio" name="portfolio" placeholder="https://yourportfolio.com" value={data.portfolio ?? "" }
                            onChange={(e) => onPersonalInfoChange("portfolio", e.target.value)} className="px-3 py-1 border border-[#dcdee2] shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600/50 rounded-sm" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                       <Label htmlFor="profilePhoto" className="flex items-center gap-2 text-sm font-medium text-gray-900">
                            Profile Photo 
                            <span className="text-xs text-gray-500">Optional</span>
                       </Label>
                       <div className="flex items-center gap-2.5">
                        <ImageUp className="h-4 w-4 text-gray-600" />
                        <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col gap-0.5">
                            <span className="text-sm text-gray-900 font-medium">Upload a professional headshot</span>
                            <span className="text-xs text-gray-500">Most US and UK recruiters prefer no photo.</span>
                        </div>
                        
                        <div>
                            <Input type="file" id="profilePhoto"
                            accept="image/*"
                            className="hidden" />
                        <Label htmlFor="profilePhoto" className="px-3  py-1 border border-[#dcdee2] cursor-pointer rounded-lg text-sm text-gray-900 hover:bg-gray-100 hover:border-blue-600" >Choose a file </Label>
                        </div>
                        </div>
                       </div>
                    </div>
                </form>
            </div>

        </section>
    )
}