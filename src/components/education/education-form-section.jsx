/* eslint-disable react/prop-types */
import DisplayForm from "../display-form";
import EducationForm from "./education-form";
import "../../styles/form-section.css";

export default function EducationFormSection({ educations, onChange, toggleCollapsed }) {
    return (
        <div className="education-form-section section">
            <h2 className="section-heading form-heading">Education</h2>
            <div className="education-forms">
                <DisplayForm
                  forms={educations}
                  Component={EducationForm}
                  onChange={onChange}
                  toggleCollapsed={toggleCollapsed}
                  titleKey="school"
                  section="education"
                />
            </div>
            {/* BUTTONS TO ADD NEW FORM AND DETAIL */}
        </div>
    );
}