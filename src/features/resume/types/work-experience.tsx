import { WorkExperience } from ".";

export const createExperience = (): WorkExperience => ({
    id: crypto.randomUUID(),
    company: "",
    role: "",
    employmentType: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
    achievements: [
        {
            id: crypto.randomUUID(),
            text: ""
        }
    ]
})

