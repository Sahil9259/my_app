import React, { useState } from 'react';
import ResponsiveCard from './ResponsiveCard'

export default function Home() {
  const [message, setMessage] = useState("random");
  const [temp, setTemp] = useState("random");
  const handleSelectChange = (event) => {
    setTemp(event.target.value);
  };

  const handleFetchNextQuote =()=> {
    try {
      if(temp===" ")setMessage("random");
      else setMessage(temp);
    } catch (error) {
      console.error('Error fetching the next quote:', error);
    }
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%',width:'auto',margin:'1.5rem', marginTop:'3rem'}}>
      <ResponsiveCard message={message} />
      <select id="messageDropdown" onChange={handleSelectChange} value={message}style={{margin:'1.5rem', marginTop:'3rem',borderRadius:'3rem',width: '100%',maxWidth: '200px'}}>
        <option value=" "> </option>
        <option value="love">Love</option>
        <option value="wisdom">Wisdom</option>
        <option value="happiness">Happiness</option>
      </select>
      <button onClick={handleFetchNextQuote} style={{ margin: '10px',backgroundColor:'#019C50',
color:'#FEFFFE', borderRadius:'3rem',width: '100%',maxWidth: '150px'}}>Next Quote</button>
    </div>
    </>
  )
}
