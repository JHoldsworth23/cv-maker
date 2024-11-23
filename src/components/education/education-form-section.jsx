/* eslint-disable react/prop-types */
import DisplayForm from "../display-form";
import EducationForm from "./education-form";
import AddNewForm from "../add-new-form";
import "../../styles/form/form-section.css";

export default function EducationFormSection({ 
    educations, 
    onChange, 
    toggleCollapsed,
    remove,
    newForm
}) {
    return (
        <div className="education-form-section section">
            <h2 className="section-heading form-heading">
                <i className="fa-solid fa-graduation-cap"></i>
                Education
            </h2>
            <div className="education-forms">
                <DisplayForm
                  forms={educations}
                  Component={EducationForm}
                  onChange={onChange}
                  toggleCollapsed={toggleCollapsed}
                  remove={remove}
                  titleKey="school"
                  section="education"
                />
            </div>
            <AddNewForm section="education" onClick={newForm}>
                Add new Education
            </AddNewForm>
        </div>
    );
}