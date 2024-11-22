/* eslint-disable react/prop-types */
import PersonalSection from "./personal/personal-section";
import "../styles/cv-display.css";

export default function DisplayCV({ personal, sections }) {
    return (
        <div className="cv-display">
            <PersonalSection information={personal} />
            {/* Experience Section */}
            {/* Education Section */}
        </div>
    );
}