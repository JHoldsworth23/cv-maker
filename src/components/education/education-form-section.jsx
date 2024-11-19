/* eslint-disable react/prop-types */
import DisplayForm from "../display-form";
import EducationForm from "./education-form";
import "../../styles/form-section.css";

export default function EducationFormSection({ educations, onChange }) {
    return (
        <div className="education-form-section section">
            <h2 className="section-heading">Education</h2>
            <div className="education-forms">
                <DisplayForm
                  forms={educations}
                  Component={EducationForm}
                  onChange={onChange}
                />
            </div>
        </div>
    );
}