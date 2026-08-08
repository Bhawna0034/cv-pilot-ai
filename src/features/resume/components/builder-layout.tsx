import BuilderEditor from "./builder-editor";
import BuilderHeader from "./builder-header";
import BuilderSidebar from "./builder-sidebar";
import { ResumePreview } from "./resume-preview";

export default function BuilderLayout(){
    return(
        <div className="h-screen flex flex-col">
            <BuilderHeader />

            <main className="grid grid-cols-[280px_1fr_420px] overflow-hidden">
                <BuilderSidebar />
                <BuilderEditor />   
                <ResumePreview/>
            </main>
        </div>
    )
}