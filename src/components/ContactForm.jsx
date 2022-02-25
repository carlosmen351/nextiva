import React, { useState } from 'react';
import { InputComponentName } from "../components/InputComponent";
import { InputComponentPhone } from "../components/InputComponent";
import { InputComponentExtraPhone } from "../components/ExtraPhone";
import styled from 'styled-components';
import { ButtonCancel } from "../components/ButtonCancel";

const ButtonSave = styled.button`
position: absolute;
height: 40px;
width: 146px;
left: 195px;
top: 475px;
background-color: #005FEC;
color: white;
border-radius: 4px;
padding: 12px, 32px, 12px, 32px;
box-shadow: none;
`;

function ContactForm(props) {

  const {
    modal,
    setModal,
    contacts,
    setContacts
  } = props;

  const [newContactValue, setNewContactValue] = useState('');
  const [extra, setExtra] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault();
    addContact(newContactValue)
    setModal(!modal);
  }

  const onCloseModal = () => {
    setModal(!modal);
  }
  const addContact = (newContactValue) => {
    const newContacts = [...contacts];
    newContacts.push({
      newContactValue
    })
  };

  const onChange = (event) => {
    setNewContactValue(event.target.value)
  }

  return (
    <form
        onSubmit={onSubmit}
        >
        <label>
          Add Contact
        </label>
        <InputComponentName
          onChange={onChange}
          newContactValue={newContactValue}
        />
        <InputComponentPhone
          extra={extra}
          setExtra={setExtra}
        />
        {extra && (
          <InputComponentExtraPhone
          extra={extra}
          setExtra={setExtra}
          />
        )}
      <ButtonSave
      type='submit'
      >
        Save
      </ButtonSave>
      <ButtonCancel onClick={onCloseModal} />
    </form>
  );
}

export { ContactForm };