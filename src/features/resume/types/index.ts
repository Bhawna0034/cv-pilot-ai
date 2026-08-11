export interface PersonalInformation {
    firstName: string;
    lastName: string;
    professionalTitle: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github?: string;
    portfolio?: string;
    
}
export interface ResumeData {
    personal: PersonalInformation;
    professionalSummary: string;
}

export const defaultResumeData: ResumeData = {
    personal: {
        firstName: "",
        lastName: "",
        professionalTitle: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        github: "",
        portfolio: "",
       
    },
    professionalSummary: ""
}