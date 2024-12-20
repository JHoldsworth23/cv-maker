/* eslint-disable react/prop-types */
import "../styles/form/form-input.css"

export default function FormInput({
    id, 
    type="text",
    labelText,
    placeholder,
    value,
    "data-info": info,
    recommended,
    optional,
    onChange,
}) {
    return (
        <div className="input-container">
            <label htmlFor={id}>
                {labelText}
                {recommended && <span className="recommended">recommended</span>}
                {optional && <span className="optional">optional</span>}
            </label>
            {type !== "textarea" ? 
                <input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  value={value}
                  onChange={onChange}
                  data-info={info}
                /> : 
                <textarea 
                  id={id}
                  placeholder={placeholder}
                  value={value}
                  onChange={onChange}
                  data-info={info}
                />
            }
        </div>
    );
}