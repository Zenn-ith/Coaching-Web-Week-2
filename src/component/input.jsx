import React, { useState } from 'react';

const Input = () => {
  const [nama, setNama] = useState('');

  const handleInputChange = (e) => {
    setNama(e.target.value);
  };

  const handleSubmit = () => {
    document.getElementById('nama').innerText = nama;
  };

  return (
    <div className="inputContainer">
      <p id="nama"></p>
      <input 
        type="text" 
        placeholder="Masukkan nama Anda" 
        value={nama} 
        onChange={handleInputChange} 
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Input;
