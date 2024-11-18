/* eslint-disable react/prop-types */
export default function DisplayForm({ forms, Component, onChange }) {
    return (
        <>
            {forms.map(form => 
                <Component key={form.id} form={form} onChange={onChange} />
            )}
        </>
        
    );
}