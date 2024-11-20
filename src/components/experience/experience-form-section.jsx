/* eslint-disable react/prop-types */
import DisplayForm from "../display-form";
import ExperienceForm from "./experience-form";
import "../../styles/form-section.css";

export default function ExperienceFormSection({ experiences, onChange, toggleCollapsed }) {
    return (
        <div className="experience-form-section section">
            <h2 className="section-heading">Experience</h2>
            <div className="experience-forms">
                <DisplayForm 
                  forms={experiences}
                  Component={ExperienceForm}
                  onChange={onChange}
                  toggleCollapsed={toggleCollapsed}
                  titleKey="companyName"
                  section="experience"
                />
            </div>
        </div>
    );
}