import React from 'react';
import './Button.css';
interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="button">
      PRINT
    </button>
  );
};

export default Button;