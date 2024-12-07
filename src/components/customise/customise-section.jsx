/* eslint-disable react/prop-types */
import ExpandFormSection from "../expand-form-section";

export default function CustomiseSection({
    isOpen,
    setOpen
}) {
    return (
        <div className="section">
            <ExpandFormSection 
              title="Customise"
              icon="fa-solid fa-pen-ruler"
              isOpen={isOpen}
              setOpen={setOpen}
            />
            <div className={isOpen ? "open-section" : "hide-section"}>
                COLOR, FONT, LAYOUT
            </div>
        </div>
    );
}