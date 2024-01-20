import React, { useState } from 'react';
import styled from 'styled-components';
import icon from '../image/add.png';
import icon2 from '../image/remove.png';

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

const ResponsiveCard = ({ messageId, content, author }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
    const quote = { _id: messageId, content, author };

    if (!isBookmarked) {
      const bookmarkedQuotes = JSON.parse(localStorage.getItem('bookmarkedQuotes')) || [];
      bookmarkedQuotes.push(quote);
      localStorage.setItem('bookmarkedQuotes', JSON.stringify(bookmarkedQuotes));
    } else {
      const bookmarkedQuotes = JSON.parse(localStorage.getItem('bookmarkedQuotes')) || [];
      const updatedBookmarks = bookmarkedQuotes.filter((q) => q._id !== messageId);
      localStorage.setItem('bookmarkedQuotes', JSON.stringify(updatedBookmarks));
    }
  };

  return (
    <CardContainer>
      <Card>
        <CardContent>
          {messageId ? (
            <div key={messageId}>
              <p>{content}</p>
              <div className='foot'>
                <h6>- {author}</h6>
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
