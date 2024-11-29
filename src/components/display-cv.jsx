/* eslint-disable react/prop-types */
import PersonalSection from "./personal/personal-section";
import CVSection from "./cv-section";
import "../styles/cv-display.css";

export default function DisplayCV({ personal, sections }) {
    return (
        <div className="cv-display">
            <PersonalSection information={personal} />
            <div className="information-display">
                <CVSection title="Professional Experience" section={sections.experience} />
                <CVSection title="Education" section={sections.education} />
            </div>
        </div>
    );
}