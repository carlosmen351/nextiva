import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
height: 40px;
width: 146px;
background-color: #005FEC;
color: white;
border-radius: 4px;
padding: 12px, 32px, 12px, 32px;
box-shadow: none;
justify-content: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

function AddContactButton({modal, setModal}) {

  const onOpenModal = () => {
    setModal(!modal)
  }

  return (
    <Container>
      <ButtonComponent onClick={onOpenModal}  >
        Add Contact
      </ButtonComponent>
    </Container>
  );
}

export { AddContactButton };