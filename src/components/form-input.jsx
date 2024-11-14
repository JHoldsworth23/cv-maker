/* eslint-disable react/prop-types */
export default function FormInput({
    id, 
    type,
    labelText,
    placeholder,
    value,
    "data-info": info,
    onChange,
}) {
    return (
        <div>
            <label htmlFor={id}>
                {labelText}
            </label>
            <input
              id={id}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              data-info={info}
            />
        </div>
    );
}