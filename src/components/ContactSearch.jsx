import React from 'react';
import styled from 'styled-components';

const InputComponent = styled.input`
  Width: 100%;
  Height: 3rem;
  border-radius: 4px;
  padding: 0 0.5rem;
`;

const ContactSearch = ({search, setSearch}) => {

  const onSearchValue = (event) => {
    setSearch(event.target.value)
  }
  return (
    <InputComponent
      type="text"
      name="search"
      placeholder="Enter field name"
      value={search}
      onChange={onSearchValue}
    />
  );
}

export { ContactSearch };