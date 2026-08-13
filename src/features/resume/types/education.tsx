import { Education, WorkExperience } from ".";

export const addEducation = (): Education => ({
    id: crypto.randomUUID(),
    school: "",
    degree: "",
    fieldOfStudy: "",
    start: "",
    end: ""
})

