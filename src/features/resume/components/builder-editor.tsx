import BuilderToolbar from "./builder-toolbar";
import PersonalInformationForm from "./personal-information-form";

export default function BuilderEditor(){
    return(
        <section className="bg-white">
            
            <BuilderToolbar />
            <div className="border-t border-[#dcdee2] pt-8 px-8 ">
            <PersonalInformationForm />
            </div>
        </section>
    )
}