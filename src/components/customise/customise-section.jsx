/* eslint-disable react/prop-types */
import ExpandFormSection from "../expand-form-section";
import CustomiseColor from "./customise-color";
import CustomiseLayout from "./customise-layout";
import CustomiseFont from "./customise-font";
import "../../styles/customise-section.css";

export default function CustomiseSection({
    isOpen,
    setOpen,
    changeLayout
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
                <CustomiseColor />
                <CustomiseLayout changeLayout={changeLayout} />
                <CustomiseFont />
            </div>
        </div>
    );
}