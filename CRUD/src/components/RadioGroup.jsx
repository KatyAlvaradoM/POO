import React from 'react';

const RadioGroup = ({ name, options, onChange }) => {
return (
    <>
    {options.map(option => (
        <div className="form-check" key={option.value}>
        <input
            className="form-check-input"
            type="radio"
            name={name}
            id={option.id}
            value={option.value}
            onChange={onChange}
        />
        <label className="form-check-label" htmlFor={option.id}>
            {option.label}
        </label>
        </div>
    ))}
    </>
);
};

export default RadioGroup;
