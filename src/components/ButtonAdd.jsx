import React from 'react'
import styled from 'styled-components';

const Buton = styled.button`
  background-color: #005FEC;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid black;
  font-size: 1.5rem;
`;

const ButtonAdd = () => {
  return (
    <Buton>+</Buton>
  );
}

export { ButtonAdd };