import React, { useState } from 'react';

function Index() {
  const [name, setName] = useState('');
  const [nameList, setNameList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setNameList([...nameList, name]);
    setName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        /><br></br>
        <br></br>
        <button type="submit" style={{
            
      
            fontSize: '14px',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            width: 'auto',       
    display: 'inline-block',
      
          }}>Submit</button>
      </form>

      <p>{nameList.join(', ')}</p>
    </div>
  );
}

export default Index;


