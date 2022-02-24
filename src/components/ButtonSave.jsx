import React from 'react'
import styled from 'styled-components'

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

const SaveButton = () => {
  return (
    <ButtonSave>ADD</ButtonSave>
  );
}

export {SaveButton};