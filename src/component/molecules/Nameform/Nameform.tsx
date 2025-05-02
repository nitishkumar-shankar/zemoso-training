import React, { useState } from 'react';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/button/Button';
import './NameForm.css';

const NameForm: React.FC = () => {
  const [name, setName] = useState('');

  const handlePrintName = () => {
    alert(`Your name is: ${name}`);
  };

  return (
    <div className='name-form'>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <Button onClick={handlePrintName} />
    </div>
  );
};

export default NameForm;