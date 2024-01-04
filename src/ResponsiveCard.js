import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
  .p{
    margin-top: 1rem;
    text-align: center;
  }
`;

const ResponsiveCard = ({ message }) => {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                // console.log(message);
                let response;
                if (message === 'random') {
                    response = await axios.get(`https://api.quotable.io/quotes/random`);
                }
                else {
                    response = await axios.get(`https://api.quotable.io/quotes/random?tags=${message}`);
                }
                console.log(response.data);
                const [singleQuote] = response.data;
                setQuote(singleQuote);
            } catch (error) {
                console.error('Error fetching quote:', error);
            }
        };

        fetchQuote();
    }, [message]);

    return (
        <CardContainer>
            <Card>
                <CardContent>
                    {quote ? (
                        <div key={quote._id}>
                            <p style={{fontSize:'1.5rem'}}>{quote.content}</p>
                            <h6>- {quote.author}</h6>
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
