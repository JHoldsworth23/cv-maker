/* eslint-disable react/prop-types */
import ExperienceSection from "./experience/experience-section";
import EducationSection from "./education/education-section";
import "../styles/cv-section.css";

export default function CVSection({ title, section }) {
    return (
        <>
            <div className={"section-title-div " + title.toLowerCase()}>
                <h3 className="section-title">{title}</h3>
            </div>
            {title.match("Experience")
                ? section.map(experience => {
                    if (!experience.isHidden) {
                        return (
                            <div key={experience.id} className="experience-section">
                                <ExperienceSection {...experience} />
                            </div>
                        );
                    }
                })
                : section.map(education => {
                    if (!education.isHidden) {
                        return (
                            <div key={education.id} className="education-section">
                                <EducationSection {...education} />
                            </div>
                        );
                    }
                })}
        </>
    );
}