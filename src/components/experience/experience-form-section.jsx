/* eslint-disable react/prop-types */
import DisplayForm from "../display-form";
import ExperienceForm from "./experience-form";
import AddNewForm from "../add-new-form";
import "../../styles/form/form-section.css";

export default function ExperienceFormSection({ 
    experiences, 
    onChange, 
    toggleCollapsed,
    remove,
    newForm
}) {
    return (
        <div className="experience-form-section section">
            <h2 className="section-heading form-heading">
                <i className="fa-solid fa-briefcase"></i>
                Experience
            </h2>
            <div className="experience-forms">
                <DisplayForm 
                  forms={experiences}
                  Component={ExperienceForm}
                  onChange={onChange}
                  toggleCollapsed={toggleCollapsed}
                  remove={remove}
                  titleKey="companyName"
                  section="experience"
                />
            </div>
            <AddNewForm section="experience" onClick={newForm}>
                Add new Experience
            </AddNewForm>
        </div>
    );
}