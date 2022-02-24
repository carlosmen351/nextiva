import React from 'react';
import styled from 'styled-components';
import Foto from '../assets/img/photo.png';
import IconMenu from '../assets/icons/actions menu.svg';

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ImgContact = styled.img`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-self: center;
`;

const Name = styled.p`
  width: 70%;
`;

const Icon = styled.img`
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ImgContact src={Foto} alt="" />
      <Name>Alex Anderson</Name>
      <Icon src={ IconMenu } />
    </ContactContainer>
  );
}

export { Contact };