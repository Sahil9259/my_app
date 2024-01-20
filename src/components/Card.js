import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
    const { prop1, prop2, prop3 } = props;
    return (
        <div>
      <CardContainer>
        <Card1>
          <CardContent>
          <div key={prop3}>
            <p>{prop1}</p>
            <h6>- {prop2}</h6>
          </div>
          </CardContent>
        </Card1>
      </CardContainer>
    </div>
  );
};

export default Card;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
`;

const Card1 = styled.div`
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
  h6 {
    text-align: center;
    margin-top: 0.5rem;
  }
`;
