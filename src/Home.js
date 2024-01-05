import React, { useState } from 'react';
import ResponsiveCard from './ResponsiveCard';

export default function Home() {
  const [message, setMessage] = useState("random");
  const [temp, setTemp] = useState("random");

  const handleSelectChange = (event) => {
    setTemp(event.target.value);
  };

  const handleFetchNextQuote = async () => {
    try {
      const newMessage = temp == " " ? "random" : temp;
      setMessage(newMessage);
      setTemp(" ");
    } catch (error) {
      console.error('Error fetching the next quote:', error);
    }
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: 'auto', margin: '1.5rem', marginTop: '3rem' }}>
        <ResponsiveCard message={message} />
        <select id="messageDropdown" onChange={handleSelectChange} value={temp} style={{ margin: '1.5rem', marginTop: '3rem', borderRadius: '3rem', width: '100%', maxWidth: '200px' }}>
          <option value=" "> </option>
          <option value="random">Random</option>
          <option value="love">Love</option>
          <option value="motivational">Motivational</option>
          <option value="wisdom">Wisdom</option>
          <option value="happiness">Happiness</option>
          <option value="humorous">Humorous</option>
          <option value="success">Success</option>
          <option value="sadness">Sadness</option>
          <option value="religion">Religion</option>
        </select>
        <button onClick={handleFetchNextQuote} style={{ margin: '10px', backgroundColor: '#019C50', color: '#FEFFFE', borderRadius: '3rem', width: '100%', maxWidth: '150px' }}>Next Quote</button>
      </div>
    </>
  );
}
