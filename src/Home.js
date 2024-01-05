import React, { useState, useEffect } from 'react';
import ResponsiveCard from './ResponsiveCard';
import axios from 'axios';

export default function Home() {
  const [message, setMessage] = useState(null);
  const [temp, setTemp] = useState("random");
  const [tempDown, setTempDown] = useState(" ");
  const handleSelectChange = (event) => {
    setTempDown(event.target.value);
  };
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        let response;
        if (temp === 'random' || temp === " ") {
          response = await axios.get(`https://api.quotable.io/quotes/random`);
        } else {
          response = await axios.get(`https://api.quotable.io/quotes/random?tags=${temp}`);
        }
        const [singleQuote] = response.data;
        setMessage(singleQuote);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };
    fetchQuote();
  }, [])

  const handleFetchNextQuote = async () => {
    try {
      setTemp(tempDown)
      fetchQuote();
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: 'auto', margin: '1.5rem', marginTop: '3rem' }}>
        {message ? (
          <ResponsiveCard
            messageId={message._id}
            content={message.content}
            author={message.author}
          />
        ) : (
          <p>Loading...</p>
        )}
        <select id="messageDropdown" onChange={handleSelectChange} value={tempDown} style={{ margin: '1.5rem', marginTop: '3rem', borderRadius: '3rem', width: '100%', maxWidth: '200px' }}>
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
