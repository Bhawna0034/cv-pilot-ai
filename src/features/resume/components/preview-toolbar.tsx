import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select";
import { Download, Maximize2, Minus, Plus, Printer } from "lucide-react";

const ITEMS = [
    {id: 1, label: "Minimal"},
    {id: 2, label: "Classic"},
    {id: 3, label: "Modern"},
    {id: 4, label: "Technical"}
]
export default function PreviewToolbar(){

    return(
        <div className="px-3 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-2.5 border rounded-md border-gray-300 px-2 py-1">
                <button>
                    <Minus className="h-4 w-4 text-gray-600" />
                </button>
                <span>50%</span>
                <button>
                    <Plus className="h-4 w-4 text-gray-600" />
                </button>

            </div>
            <Select defaultValue="Minimal"  >
                <SelectTrigger className="w-[150px]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent className="w-[150px]" align="start">
                    
{ITEMS.map((item) => (
                    <SelectItem key={item.id} value={item.label.toString()} className="flex flex-col gap-2.5">
                        {item.label}
                    </SelectItem>
                ))}
                </SelectContent>
                
            </Select>
            </div>
            <div className="flex items-center gap-2.5">
                <button className="w-4 h-4 hover:text-black text-gray-600">
                    <Maximize2 className="w-4 h-4"/>
                </button>
                 <button className="w-4 h-4 hover:text-black text-gray-600">
                    <Printer className="w-4 h-4"/>
                </button>
                <button className="px-2.5 py-1 flex items-center gap-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
                    <Download className="w-4 h-4"/>
                    PDF
                </button>
            </div>
        </div>
    )
}