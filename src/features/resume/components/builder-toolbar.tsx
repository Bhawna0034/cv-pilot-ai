import { Input } from "@/src/components/ui/input";
import { Check, FileText, Moon, Redo2, Undo2 } from "lucide-react";


export default function BuilderToolbar() {
    return(
        <div className="px-8 py-3 flex items-center w-full">
            <div className="flex items-center  gap-2.5 shrink-0">
                <FileText className="h-4 w-4 text-gray-600" />
                <span className="text-base font-semibold text-slate-900">
          Software Engineer Resume
        </span>
            </div>
            <div className="flex items-center gap-2.5 ml-auto">
            <div className="flex items-center gap-2.5 shrink-0">
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-600 whitespace-nowrap">Saved locally · just now </span>
            </div>
            <div className="flex shrink-0 items-center gap-2.5">
                <button  className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900">
                    <Undo2 className="h-4 w-4 text-gray-600" />
                </button>
                <button  className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900">
                    <Redo2 className="h-4 w-4 text-gray-600" />
                </button>
                <button  className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900">
                    <Moon className="h-4 w-4 text-gray-600" />
                </button>
            </div>
            </div>
        </div>
    )
}