import React from 'react';
import './input.css'

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; 
  type?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange,placeholder, type  }) => {
  return (
    <input
      type={text}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input"
    />
  );
};

export default Input;
