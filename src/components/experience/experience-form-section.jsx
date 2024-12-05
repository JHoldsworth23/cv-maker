/* eslint-disable react/prop-types */
import ExpandFormSection from "../expand-form-section";
import DisplayForm from "../display-form";
import ExperienceForm from "./experience-form";
import AddNewForm from "../add-new-form";
import "../../styles/form/form-section.css";

export default function ExperienceFormSection({ 
    experiences, 
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
        <div className="experience-form-section section">
            <ExpandFormSection 
              title="Experience"
              icon="fa-solid fa-briefcase"
              isOpen={isOpen}
              setOpen={setOpen}
            />
            <div className={isOpen ? "open-section" : "hide-section"}>
                <div className="experience-forms">
                    <DisplayForm
                      forms={experiences}
                      Component={ExperienceForm}
                      onChange={onChange}
                      toggleCollapsed={toggleCollapsed}
                      toggleVisibility={toggleVisibility}
                      remove={remove}
                      cancel={cancel}
                      titleKey="companyName"
                      section="experience"
                    />
                </div>
                <AddNewForm section="experience" onClick={newForm}>
                    Add new Experience
                </AddNewForm>
            </div>
        </div>
    );
}