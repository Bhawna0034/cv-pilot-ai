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
                <button type="button">
                    <Minus className="h-4 w-4 text-gray-600" />
                </button>
                <span>50%</span>
                <button type="button">
                    <Plus className="h-4 w-4 text-gray-600" />
                </button>

            </div>
            <div className="px-3 py-2">
             <Select defaultValue="Minimal">
                <SelectTrigger className="px-3 py-2 w-[120px] border border-gray-300 rounded-md">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent className="w-[120px] px-3 py-2" align="start">
                    {ITEMS.map((item) => (
                        <SelectItem key={item.id} value={item.label}>
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectContent>
             </Select>
            </div>
            </div>
            <div className="flex items-center gap-2.5">
                <button type="button" className="w-4 h-4 hover:text-black text-gray-600">
                    <Maximize2 className="w-4 h-4"/>
                </button>
                 <button type="button" className="w-4 h-4 hover:text-black text-gray-600">
                    <Printer className="w-4 h-4"/>
                </button>
                <button type="button" className="px-2.5 py-1 flex items-center gap-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
                    <Download className="w-4 h-4"/>
                    PDF
                </button>
            </div>
        </div>
    )
}