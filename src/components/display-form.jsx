/* eslint-disable react/prop-types */
import CollapsedForm from "./collapsed-form";

export default function DisplayForm({ forms, Component, onChange, toggleCollapsed }) {
    return (
        <>
            {forms.map(form =>
                form.isCollapsed ?
                <CollapsedForm key={form.id} id={form.id} title={form["companyName"]} sectionName="experience" onClick={toggleCollapsed} /> :
                <Component key={form.id} form={form} onChange={onChange} />
            )}
        </>
        
    );
}