import React, { useState } from 'react';

const Input = () => {
  const [nama, setNama] = useState('');

  const ubahNama = (e) => {
    setNama(e.target.value);
  };

  const kirimNama = () => {
    document.getElementById('namaDisplay').innerText = nama;
  };

  return (
    <div className="inputContainer">
      <p id="namaDisplay"></p>
      <input 
        type="text" 
        placeholder="Masukkan nama Anda" 
        value={nama} 
        onChange={ubahNama} 
      />
      <button onClick={kirimNama}>Submit</button>
    </div>
  );
};

export default Input;
