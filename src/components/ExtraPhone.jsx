import React from 'react'
import styled from 'styled-components';

const Input = styled.input`
  Width: 80%;
  Height: 3rem;
  border-radius: 4px;
`;

const Buton = styled.button`
  background-color: #ad0d0d;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid black;
  font-size: 1.5rem;
  margin: 0 0 0 1rem;
`;

const ButtonAdd = () => {
  return (
    <React.Fragment>
      <Buton>
        -
      </Buton>
    </React.Fragment>
  );
}

const InputComponentExtraPhone = () => {
  return (
    <React.Fragment>
      <h3>Extra Phone</h3>
      <Input
        type="text"
        name="name"
        placeholder="Enter field info"
        autocomplete="off"
        required
      />
      <ButtonAdd/>
    </React.Fragment>
  )
}

export { InputComponentExtraPhone };