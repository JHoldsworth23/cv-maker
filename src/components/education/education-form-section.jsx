/* eslint-disable react/prop-types */
import ExpandFormSection from "../expand-form-section";
import DisplayForm from "../display-form";
import EducationForm from "./education-form";
import AddNewForm from "../add-new-form";
import "../../styles/form/form-section.css";

export default function EducationFormSection({ 
    educations, 
    onChange, 
    toggleCollapsed,
    toggleVisibility,
    remove,
    cancel,
    newForm,
    isOpen,
    setOpen
}) {
    return (
        <div className="education-form-section section">
            <ExpandFormSection 
              title="Education"
              icon="fa-solid fa-graduation-cap"
              isOpen={isOpen}
              setOpen={setOpen}
            />
            <div className={isOpen ? "open-section" : "hide-section"}>
                <div className="education-forms">
                    <DisplayForm
                      forms={educations}
                      Component={EducationForm}
                      onChange={onChange}
                      toggleCollapsed={toggleCollapsed}
                      toggleVisibility={toggleVisibility}
                      remove={remove}
                      cancel={cancel}
                      titleKey="school"
                      section="education"
                    />
                </div>
                <AddNewForm section="education" onClick={newForm}>
                    Add new Education
                </AddNewForm>
            </div>
        </div>
    );
}