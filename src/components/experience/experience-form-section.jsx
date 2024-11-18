/* eslint-disable react/prop-types */
import DisplayForm from "../display-form";
import ExperienceForm from "./experience-form";

export default function ExperienceFormSection({ experiences, onChange }) {
    return (
        <div className="experience-form-section">
            <h2>Experience</h2>
            <div className="experience-forms">
                <DisplayForm 
                  forms={experiences}
                  Component={ExperienceForm}
                  onChange={onChange}
                />
            </div>
        </div>
    );
}