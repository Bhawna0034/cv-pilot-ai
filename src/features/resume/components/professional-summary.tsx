import { Textarea } from "@/src/components/ui/textarea";
import { ChevronDown, FileText, Sparkles } from "lucide-react";

interface ProfessionalSummaryProps {
    value: string;
 onProfessionalSummary: (value: string) => void;

}
const ACTIONS = [
    {id: 1, label: "Improve"},
    {id: 2, label: "Rewrite"},
    {id: 3, label: "ATS Optimize"},
    {id: 4, label: "Shorten"},
    {id: 5, label: "Expand"}
]
const CHARACTERS = 239;
export default function ProfessionalSummary({value, onProfessionalSummary}: ProfessionalSummaryProps){
    return(
        <section className="border border-[#dcdee2] rounded-2xl shadow-sm">
            <div className="px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <FileText className="h-4 w-4 text-gray-600" />
                    <div className="flex flex-col">
                        <span className="text-base font-bold">Professional Summary</span>
                        <span className="text-sm text-gray-600">Three to four lines, results first</span>
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
                <form className="flex flex-col gap-4">
                  <Textarea placeholder={"Frontend engineer with 7 years building design systems and data-dense product surfaces. Shipped a component library used by 40+ engineers, cut median page load by 48%, and led the migration of a legacy dashboard to React 19 and TypeScript."}  value={value} onChange={(e) => onProfessionalSummary(e.target.value)} className="min-h-[140px] resize-none bg-white"/>
                    
                </form>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2.5">
                    {ACTIONS.map((action) => (
                        <button type="button" key={action.id} className="border border-[#dcdee2] px-2.5 py-1 rounded-full flex items-center gap-1 inline-flex group hover:text-blue-600 hover:border-blue-600 text-gray-500 text-xs ">
                            <Sparkles className="h-4 w-4 text-gray-500 group-hover:text-blue-600"/>{action.label}</button>
                    ))}
                    </div>
                    <span className="text-xs text-gray-500">{CHARACTERS} characters</span>
                </div>
            </div>

        </section>
    )
}