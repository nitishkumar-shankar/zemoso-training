import React from 'react';
import NameForm from './component/molecules/Nameform/NameForm';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
    <div className="container">
      <h1>GIVE YOUR NAME</h1>
      <NameForm />
    </div>
  </div>
  );
};

export default App;