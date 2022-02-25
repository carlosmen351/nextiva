import React, { useState } from 'react';
import styled from 'styled-components';
import Foto from '../assets/img/photo.png';
import IconMenu from '../assets/icons/actions menu.svg';

const ContactContainer = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ImgContact = styled.img`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-self: center;
`;

const Name = styled.p`
  width: auto;
  display: flex;
  gap: 1rem;
`;

const Icon = styled.img`
`;

const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0px;
  position: relative;
  z-index: 1;
  width: 5rem;
  height: 7rem;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(34, 38, 72, 0.32);
  border-radius: 4px;
`;



const Contact = (props) => {

  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal)
  }


  return (
    <ContactContainer>
      <Name>
      <ImgContact src={Foto} alt="" />
        {props.name}</Name>
      {modal && (
        <ContainerModal>
          <p
          onClick={props.onEdit}
          >Editar</p>
          <p
          onClick={props.onDeleted}
          >Borrar</p>
        </ContainerModal>
      ) }
      <Icon
        src={IconMenu}
        onClick={modalHandler}
      />
    </ContactContainer>
  );
}

export { Contact };