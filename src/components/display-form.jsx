/* eslint-disable react/prop-types */
import CollapsedForm from "./collapsed-form";

export default function DisplayForm({ 
  forms, 
  Component, 
  onChange, 
  toggleCollapsed,
  toggleVisibility,
  remove,
  cancel, 
  titleKey, 
  section 
}) {
    return (
        <>
            {forms.map(form =>
                form.isCollapsed ?
                <CollapsedForm 
                  key={form.id} 
                  form={form} 
                  title={form[titleKey]}
                  sectionName={section} 
                  onClick={toggleCollapsed}
                  changeVisibility={toggleVisibility}
                /> :
                <Component 
                  key={form.id} 
                  form={form} 
                  onChange={onChange} 
                  save={toggleCollapsed} 
                  remove={remove}
                  cancel={cancel}
                />
            )}
        </>
        
    );
}