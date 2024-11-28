/* eslint-disable react/prop-types */
import ExperienceSection from "./experience/experience-section";
import EducationSection from "./education/education-section";

export default function CVSection({ title, section }) {
    return (
        <>
            <div>
                <h3>{title}</h3>
            </div>
            {title === "Experience" 
                ? section.map(experience => 
                    <div key={experience.id}>
                        <ExperienceSection {...experience} />
                    </div>
                )
                : section.map(education => 
                    <div key={education.id}>
                        <EducationSection {...education} />
                    </div>
                )}
        </>
    );
}