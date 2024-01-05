import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import icon from './image/add.png';
import icon2 from './image/remove.png';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
`;

const Card = styled.div`
  width: 100%;
  max-width: 600px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  overflow: hidden;
  background-color: #D15352;
  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem 1.5rem;

  p {
    font-size: 1.5rem;
    margin-top: 1rem;
    text-align: center;
  }

  .foot{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  h6 {
    text-align: center;
    margin-top: 0.5rem;
  }
`;

const ResponsiveCard = ({ message }) => {
  const [quote, setQuote] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        let response;
        if (message === 'random') {
          response = await axios.get(`https://api.quotable.io/quotes/random`);
        } else {
          response = await axios.get(`https://api.quotable.io/quotes/random?tags=${message}`);
        }

        const [singleQuote] = response.data;
        setQuote(singleQuote);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchQuote();
  }, [message]);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
    if (!isBookmarked) {
        const bookmarkedQuotes = JSON.parse(localStorage.getItem('bookmarkedQuotes')) || [];
        bookmarkedQuotes.push(quote);
        localStorage.setItem('bookmarkedQuotes', JSON.stringify(bookmarkedQuotes));
      } else {
        const bookmarkedQuotes = JSON.parse(localStorage.getItem('bookmarkedQuotes')) || [];
        const updatedBookmarks = bookmarkedQuotes.filter((q) => q._id !== quote._id);
        localStorage.setItem('bookmarkedQuotes', JSON.stringify(updatedBookmarks));
      }
  };

  return (
    <CardContainer>
      <Card>
        <CardContent>
          {quote ? (
            <div key={quote._id}>
              <p>{quote.content}</p>
              <div className='foot'>
              <h6>- {quote.author}</h6>
              <img
                src={!isBookmarked ? icon : icon2}
                alt="Bookmark Icon"
                style={{ width: '24px', height: '24px', cursor: 'pointer' }}
                onClick={handleBookmarkClick}
              />
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </CardContent>
      </Card>
    </CardContainer>
  );
};

export default ResponsiveCard;
