/* eslint-disable react/prop-types */
import PersonalSection from "./personal/personal-section";
import CVSection from "./cv-section";
import "../styles/cv-display.css";

export default function DisplayCV({ personal, sections, layout }) {
    const { experience, education } = sections;

    function showInformation(array) {
        return array
            .map(obj => {return obj.isHidden})
            .some((value) => value === false);
    }

    return (
        <div className={`cv-display ${layout}`}>
            <PersonalSection information={personal} />
            <div className="information-display">
                {experience.length > 0 && showInformation(experience) && <CVSection title="Professional Experience" section={experience} />}
                {education.length > 0 && showInformation(education) && <CVSection title="Education" section={education} />}
            </div>
        </div>
    );
}