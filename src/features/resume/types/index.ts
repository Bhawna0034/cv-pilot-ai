export interface ResumeData {
    personal: {
        firstName: string;
        lastName: string;
        professionalTitle: string;
        email: string;
        phone: string;
        location: string;
        linkedin: string;
        github?: string;
        portfolio?: string;
        profilePhoto?: string;
    };
    professionalSummary: string[];
    workExperience: string[];
    education: string[];
    projects: string[];
    skills: string[];
    certifications: string[];
    languages: string[];
    additionalSections: [];
}