import React from "react";
import "./Input.css";

function Input({ value, setValue, label,placeholder, type="text" }) {
  return (
    <div class="input-container">
      <label htmlFor={label} className="input-label">{label}</label>
      <input
        type={type}
        id={label}
        className="input-element"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Input;