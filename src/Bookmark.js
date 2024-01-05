import React from 'react';
import Card from './Card';

const Bookmark = () => {
  const bookmarkedQuotes = JSON.parse(localStorage.getItem('bookmarkedQuotes')) || [];
  return (
    <div>
      {bookmarkedQuotes.map((quote) => (
        <div style={{margin:'1rem'}}>
        <Card prop1 ={quote.content} prop2={quote.author} prop3={quote._id}/>
        </div>
      ))}
    </div>
  );
};

export default Bookmark;
