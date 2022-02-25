import React, { useState } from 'react';
import { InputComponentName } from "../components/InputComponent";
import { InputComponentPhone } from "../components/InputComponent";
import { InputComponentExtraPhone } from "../components/ExtraPhone";
import styled from 'styled-components';
import { ButtonCancel } from "../components/ButtonCancel";


const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

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
    setContacts
  } = props;

  const [newContactValue, setNewContactValue] = useState('');
  const [phone, setPhone] = useState('')
  const [extra, setExtra] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault();
    addContact(newContactValue)
    setModal(!modal);
  }

  const onCloseModal = () => {
    setModal(!modal);
  }
  const addContact = () => {
    const newContact = {
      name: newContactValue,
      phone: phone
    }

    setContacts(prev => ([
      ...prev,
      newContact
    ]))
  };

  const onChange = (event) => {
    console.log(event.target.value)
    setNewContactValue(event.target.value)
  }
  const onChangePhone = (event) => {
    console.log(event.target.value)
    setPhone(event.target.value)
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
          onChangePhone={onChangePhone}
          phone={phone}
        />
        {extra && (
          <InputComponentExtraPhone
          extra={extra}
          setExtra={setExtra}
          />
      )}
      <ContainerButtons>
        <ButtonSave
        type='submit'
        >
          Save
        </ButtonSave>
        <ButtonCancel onClick={onCloseModal} />
      </ContainerButtons>
    </form>
  );
}

export { ContactForm };