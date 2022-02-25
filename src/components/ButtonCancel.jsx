import React from 'react'
import styled from 'styled-components';

const ButonCancel = styled.button`
  position: absolute;
  height: 40px;
  width: 146px;
  left: 30px;
  top: 475px;
  background-color: white;
  color: #005FEC;
  border-radius: 4px;
  padding: 12px, 32px, 12px, 32px;
  box-shadow: none;
`;

const ButtonCancel = ({onClick}) => {
  return (
    <ButonCancel onClick={onClick}> Cancel</ButonCancel>
  );
}

export { ButtonCancel };