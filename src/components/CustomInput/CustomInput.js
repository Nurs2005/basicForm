import React from "react";
import "./CustomInput.css";

export default function CustomInput({ name, value, onChange, placeholder, submitted }) {
  const handleInput = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <>
      <input
        value={value}
        onChange={handleInput}
        className="form-field"
        type="text"
        placeholder={placeholder}
      />
      {submitted && !value ? (
        <span>Please enter a {placeholder}</span>
      ) : null}
    </>
  );
}

