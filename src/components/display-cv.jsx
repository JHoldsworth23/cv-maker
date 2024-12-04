/* eslint-disable react/prop-types */
import PersonalSection from "./personal/personal-section";
import CVSection from "./cv-section";
import "../styles/cv-display.css";

export default function DisplayCV({ personal, sections }) {
    const { experience, education } = sections;

    return (
        <div className="cv-display">
            <PersonalSection information={personal} />
            <div className="information-display">
                {experience.length > 0 && <CVSection title="Professional Experience" section={experience} />}
                {education.length > 0 && <CVSection title="Education" section={education} />}
            </div>
        </div>
    );
}