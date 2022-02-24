import React from "react";
import styled from 'styled-components';
import { InputComponent } from "../components/input";
import { AddContactButton } from "../components/Button";
import { Contact } from "../components/Contact";
import { useState } from "react";
import { ButtonAdd } from "../components/ButtonAdd";
import { SaveButton } from "../components/ButtonSave";
import { ButtonCancel } from "../components/ButtonCancel";

const Container = styled.div`
  width: 60%;
  height: 80%;
  margin: 4rem auto 0;
`;
const Label = styled.label`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function App() {
  const [state, setState] = useState({
    modal: false,
  });
  const onOpenModal = () => {
    setState({
      ...state,
      modal: true
    });
  }

  if (state.modal === false) {
    return (
      <Container>
        <form>
          Search:
          <Label>
            <InputComponent type="text" name="search" placeholder="Enter field name" />
          </Label>
          <Contact/>
        </form>
        <AddContactButton onClick={onOpenModal}  >Add Contact</AddContactButton>

      </Container>
    );
  } else if (state.modal === true) {
    return (
      <Container>
        <h1>Add Contact</h1>
        Name:
        <Label>
          <InputComponent type="text" name="name" placeholder="Enter field name" />
        </Label>
        Phone:
        <Label>
          <InputComponent type="text" name="phone" placeholder="Enter field name" />
          <ButtonAdd/>
        </Label>
        <SaveButton>ADD</SaveButton>
        <ButtonCancel></ButtonCancel>
      </Container>
    )
  }
}

export { App };
