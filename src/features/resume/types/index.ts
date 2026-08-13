import WorkExperience from "../components/work-experience";

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
    workExperience: WorkExperience[];
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
    professionalSummary: "",
    workExperience: [
        {
            id: "experience-1",
            company: "",
            role: "",
            employmentType: "",
            location: "",
            startDate: "",
            endDate: "",
            description: "",
            achievements: [
                {
                    id: "achievement-1",
                    text: "",
                },
            ],
        }
    ]

}
export interface Achievement {
    id: string;
    text: string;
}

export interface WorkExperience {
    id: string;
    company: string;
    role: string;
    employmentType: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    achievements: Achievement[]
}