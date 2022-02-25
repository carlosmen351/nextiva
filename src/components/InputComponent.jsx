import React from "react";
import styled from "styled-components";

const Input = styled.input`
  Width: 80%;
  Height: 3rem;
  border-radius: 4px;
`;

const Buton = styled.button`
  background-color: #005FEC;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid black;
  font-size: 1.5rem;
  margin: 0 0 0 1rem;
`;

const ButtonAdd = ({props}) => {
  const onExtra = () => {
    props.setExtra(!props.extra)
  }
  return (
    <React.Fragment>
      <Buton
        onClick={onExtra}
      >+</Buton>
    </React.Fragment>
  );
}

const InputComponentName = (props) => {
  return (
    <React.Fragment>
      <h3>Name</h3>
      <Input
        value={props.newContactValue}
        onChange={props.onChange}
        type="text"
        name="name"
        placeholder="Enter field info"
        autocomplete="off"
        required
      />
    </React.Fragment>
  )
}
const InputComponentPhone = (props) => {

  return (
    <React.Fragment>
      <h3>Phone</h3>
      <Input
        value={props.phone}
        onChange={props.onChangePhone}
        type="text"
        name="phone"
        placeholder="Enter field info"
        autocomplete="off"
        required
      />
      <ButtonAdd
      props={props}
      />
    </React.Fragment>
  )
}


export {InputComponentName, InputComponentPhone }